import { writeFileSync, mkdirSync } from 'fs'
import { topicQuizzes, DIFFICULTY_META, type Difficulty } from '../src/data/quiz'

const LABELS = ['A', 'B', 'C', 'D']
const DIFFS: Difficulty[] = ['mudah', 'sedang', 'sulit']
const OUT_DIR = 'kunci-jawaban'

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

let md = '# 🔑 Kunci Jawaban — Latihan Belajar Komunikasi\n\n'
md += '> File ini dibuat otomatis dari `src/data/quiz.ts` lewat `scripts/generate-kunci-jawaban.ts`.\n'
md += '> Folder `kunci-jawaban/` ada di `.gitignore` — file ini tidak akan ter-push ke GitHub.\n\n'
md += '---\n'

let html = ''

let totalSoal = 0

topicQuizzes.forEach((topic, topicIdx) => {
  md += `\n## ${topic.icon} ${topicIdx + 1}. ${topic.label}\n`
  html += `<h2>${topic.icon} ${topicIdx + 1}. ${escapeHtml(topic.label)}</h2>`

  DIFFS.forEach(diff => {
    const meta = DIFFICULTY_META[diff]
    const questions = topic.questions[diff]
    totalSoal += questions.length

    md += `\n### ${meta.emoji} ${meta.label} (${meta.count} soal)\n\n`
    html += `<h3 class="diff diff-${diff}">${meta.emoji} ${meta.label} <span class="count">(${meta.count} soal)</span></h3>`

    questions.forEach((q, i) => {
      md += `**${i + 1}. ${q.question}**\n\n`
      html += `<div class="question"><p class="q-text"><strong>${i + 1}. ${escapeHtml(q.question)}</strong></p><ul class="options">`

      q.options.forEach((opt, j) => {
        const isCorrect = j === q.correct
        const mark = isCorrect ? ' ✅' : ''
        md += `- ${LABELS[j]}. ${opt}${mark}\n`
        html += `<li class="${isCorrect ? 'correct' : ''}">${LABELS[j]}. ${escapeHtml(opt)}${isCorrect ? ' ✅' : ''}</li>`
      })

      md += `\n> Jawaban: **${LABELS[q.correct]}** — ${q.explanation}\n\n`
      html += `</ul><p class="explanation">Jawaban: <strong>${LABELS[q.correct]}</strong> — ${escapeHtml(q.explanation)}</p></div>`
    })
  })
})

md += `\n---\n\nTotal soal: **${totalSoal}**\n`

const fullHtml = `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<title>Kunci Jawaban — Latihan Belajar Komunikasi</title>
<style>
  @page { margin: 20mm 16mm; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #1f2430; font-size: 12px; line-height: 1.5; }
  h1 { font-size: 22px; margin-bottom: 4px; }
  .subtitle { color: #666; font-size: 11px; margin-bottom: 18px; }
  h2 { font-size: 17px; margin-top: 28px; padding-bottom: 6px; border-bottom: 2px solid #333; page-break-before: always; }
  h2:first-of-type { page-break-before: auto; }
  h3.diff { font-size: 14px; margin-top: 18px; padding: 4px 10px; border-radius: 6px; display: inline-block; }
  .diff-mudah  { background: #dff5e1; color: #1e7d32; }
  .diff-sedang { background: #fff4d6; color: #8a6d00; }
  .diff-sulit  { background: #fde0e0; color: #b3261e; }
  .count { font-weight: normal; font-size: 11px; }
  .question { margin: 10px 0 14px; page-break-inside: avoid; }
  .q-text { margin: 0 0 4px; }
  .options { list-style: none; margin: 0 0 4px; padding: 0; }
  .options li { padding: 1px 0 1px 4px; }
  .options li.correct { color: #1e7d32; font-weight: 600; }
  .explanation { margin: 2px 0 0; color: #444; font-style: italic; }
  hr { border: none; border-top: 1px solid #ccc; margin: 24px 0; }
  .total { text-align: right; font-weight: bold; margin-top: 20px; }
</style>
</head>
<body>
  <h1>🔑 Kunci Jawaban — Latihan Belajar Komunikasi</h1>
  <p class="subtitle">Dibuat otomatis dari data soal aplikasi. Dokumen internal — jangan disebarluaskan ke siswa.</p>
  ${html}
  <p class="total">Total soal: ${totalSoal}</p>
</body>
</html>`

mkdirSync(OUT_DIR, { recursive: true })
writeFileSync(`${OUT_DIR}/KUNCI_JAWABAN.md`, md)
writeFileSync(`${OUT_DIR}/KUNCI_JAWABAN.html`, fullHtml)
console.log(`Berhasil dibuat (${totalSoal} soal):`)
console.log(`  - ${OUT_DIR}/KUNCI_JAWABAN.md`)
console.log(`  - ${OUT_DIR}/KUNCI_JAWABAN.html`)
