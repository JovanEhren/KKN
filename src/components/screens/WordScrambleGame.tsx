import { useState, useEffect } from 'react'
import type { Difficulty } from '../../data/quiz'

const WORDS_BY_DIFFICULTY: Record<Difficulty, { word: string; hint: string }[]> = {
  mudah: [
    { word: 'SUARA',  hint: 'Bunyi yang keluar saat kita berbicara 🗣️' },
    { word: 'SOPAN',  hint: 'Sikap yang menghargai orang lain 🙏' },
    { word: 'RAMAH',  hint: 'Sikap baik dan bersahabat 😊' },
    { word: 'TEGAS',  hint: 'Berbicara dengan jelas dan penuh keyakinan 💪' },
    { word: 'SENYUM', hint: 'Ekspresi wajah yang ramah dan hangat 😊' },
    { word: 'BAHASA', hint: 'Alat yang kita pakai untuk berkomunikasi 💬' },
  ],
  sedang: [
    { word: 'BERANI',  hint: 'Tidak takut berbicara di depan umum 🎤' },
    { word: 'DENGAR',  hint: 'Menyimak apa yang dikatakan orang lain 👂' },
    { word: 'GESTUR',  hint: 'Gerakan tubuh yang digunakan saat berkomunikasi 🤝' },
    { word: 'SANTUN',  hint: 'Berperilaku sopan dan menghormati orang lain 🙇' },
    { word: 'PERCAYA', hint: 'Yakin pada kemampuan diri sendiri 💪' },
    { word: 'MENATAP', hint: 'Melihat lawan bicara dengan sopan 👀' },
    { word: 'KREATIF', hint: 'Mampu berpikir dengan cara yang unik dan berbeda 💡' },
  ],
  sulit: [
    { word: 'EKSPRESI',   hint: 'Cara wajah menunjukkan perasaan 😄' },
    { word: 'PANGGUNG',   hint: 'Tempat kita tampil berbicara di depan orang banyak 🎭' },
    { word: 'INTONASI',   hint: 'Naik turunnya nada suara saat berbicara 🎵' },
    { word: 'INSPIRASI',  hint: 'Ide yang muncul dan mendorong kita berkarya ✨' },
    { word: 'APRESIASI',  hint: 'Penghargaan atas usaha atau karya seseorang 👏' },
    { word: 'TOLERANSI',  hint: 'Sikap menghargai perbedaan pendapat orang lain 🤲' },
    { word: 'MENDENGAR',  hint: 'Memperhatikan dengan saksama apa yang disampaikan orang lain 👂' },
    { word: 'KOMUNIKASI', hint: 'Proses menyampaikan pesan antara satu orang dengan lainnya 💬' },
  ],
}

function shuffleWord(word: string): string[] {
  const arr = word.split('')
  let tries = 0
  do {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    tries++
  } while (arr.join('') === word && tries < 20)
  return arr
}

interface Props {
  active: boolean
  difficulty: Difficulty
  onBack: () => void
}

export function WordScrambleGame({ active, difficulty, onBack }: Props) {
  const WORDS = WORDS_BY_DIFFICULTY[difficulty]
  const [wIdx, setWIdx]       = useState(0)
  const [shuffled, setShuffled] = useState(() => shuffleWord(WORDS[0].word))
  const [chosen, setChosen]   = useState<number[]>([])
  const [status, setStatus]   = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [score, setScore]     = useState(0)
  const [done, setDone]       = useState(false)

  useEffect(() => {
    if (!active) return
    setWIdx(0); setShuffled(shuffleWord(WORDS_BY_DIFFICULTY[difficulty][0].word))
    setChosen([]); setStatus('idle'); setScore(0); setDone(false)
  }, [active, difficulty])

  const word = WORDS[wIdx]

  const selectLetter = (i: number) => {
    if (status !== 'idle' || chosen.includes(i)) return
    const newChosen = [...chosen, i]
    setChosen(newChosen)

    if (newChosen.length === word.word.length) {
      const answer = newChosen.map(idx => shuffled[idx]).join('')
      if (answer === word.word) {
        setStatus('correct')
        setScore(s => s + 1)
        setTimeout(() => {
          const next = wIdx + 1
          if (next >= WORDS.length) {
            setDone(true)
          } else {
            setWIdx(next)
            setShuffled(shuffleWord(WORDS[next].word))
            setChosen([])
            setStatus('idle')
          }
        }, 1200)
      } else {
        setStatus('wrong')
        setTimeout(() => { setChosen([]); setStatus('idle') }, 900)
      }
    }
  }

  const deselectLetter = (pos: number) => {
    if (status !== 'idle') return
    setChosen(c => c.filter((_, i) => i !== pos))
  }

  const reset = () => {
    setWIdx(0); setShuffled(shuffleWord(WORDS[0].word))
    setChosen([]); setStatus('idle'); setScore(0); setDone(false)
  }

  const remaining = word.word.length - chosen.length

  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <div className="screen-body centered" style={{ gap: 16 }}>
        {done ? (
          <>
            <div className="mg-result-emoji">{score >= WORDS.length - 1 ? '🏆' : score >= Math.ceil(WORDS.length / 2) ? '🥇' : '📚'}</div>
            <h2 className="page-title">Selesai!</h2>
            <div className="result-score-box">Skor: {score} / {WORDS.length}</div>
            <div className="result-buttons">
              <button className="btn btn-retry" onClick={reset}>🔄 Main Lagi</button>
              <button className="btn btn-home" onClick={onBack}>◀ Pilih Game</button>
            </div>
          </>
        ) : (
          <>
            <div className="mg-progress">Kata {wIdx + 1} / {WORDS.length} &nbsp;·&nbsp; ⭐ {score}</div>
            <div className="mg-hint">{word.hint}</div>

            <div className="mg-answer">
              {chosen.map((i, pos) => (
                <button key={pos} className="mg-letter mg-letter-chosen" onClick={() => deselectLetter(pos)}>
                  {shuffled[i]}
                </button>
              ))}
              {Array.from({ length: remaining }).map((_, i) => (
                <div key={`e${i}`} className="mg-letter-empty" />
              ))}
            </div>

            {status === 'correct' && <div className="mg-feedback correct">✅ Benar!</div>}
            {status === 'wrong'   && <div className="mg-feedback wrong">❌ Coba lagi!</div>}

            <div className="mg-scramble">
              {shuffled.map((l, i) => (
                <button
                  key={i}
                  className={`mg-letter mg-letter-avail${chosen.includes(i) ? ' used' : ''}`}
                  onClick={() => selectLetter(i)}
                  disabled={chosen.includes(i) || status !== 'idle'}
                >
                  {l}
                </button>
              ))}
            </div>

            <button className="btn-back" onClick={onBack} style={{ marginTop: 4 }}>◀ Pilih Game</button>
          </>
        )}
      </div>
    </div>
  )
}
