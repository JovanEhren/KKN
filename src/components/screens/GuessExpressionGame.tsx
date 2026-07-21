import { useState, useEffect } from 'react'
import type { Difficulty } from '../../data/quiz'

interface Question {
  emoji: string
  question: string
  options: string[]
  correct: number
}

const QUESTIONS_BY_DIFFICULTY: Record<Difficulty, Question[]> = {
  mudah: [
    {
      emoji: '😊',
      question: 'Ekspresi ini menunjukkan perasaan...',
      options: ['Sedih', 'Bahagia', 'Marah', 'Takut'],
      correct: 1,
    },
    {
      emoji: '👍',
      question: 'Gerakan jempol ke atas berarti...',
      options: ['Tidak setuju', 'Meminta tolong', 'Bagus / Setuju!', 'Tidak tahu'],
      correct: 2,
    },
    {
      emoji: '😢',
      question: 'Ekspresi ini menunjukkan perasaan...',
      options: ['Senang', 'Bersemangat', 'Sedih', 'Bangga'],
      correct: 2,
    },
    {
      emoji: '👋',
      question: 'Melambaikan tangan biasanya berarti...',
      options: ['Menyapa / Dadah', 'Menantang', 'Meminta maaf', 'Mengusir'],
      correct: 0,
    },
    {
      emoji: '😴',
      question: 'Ekspresi ini menunjukkan...',
      options: ['Marah', 'Mengantuk', 'Terkejut', 'Gembira'],
      correct: 1,
    },
    {
      emoji: '😡',
      question: 'Ekspresi wajah ini menunjukkan perasaan...',
      options: ['Bahagia', 'Bosan', 'Marah', 'Malu'],
      correct: 2,
    },
  ],
  sedang: [
    {
      emoji: '🤝',
      question: 'Jabat tangan biasanya dilakukan untuk...',
      options: ['Berkelahi', 'Salam perkenalan', 'Meminta uang', 'Mengusir orang'],
      correct: 1,
    },
    {
      emoji: '😮',
      question: 'Ekspresi mulut terbuka ini menunjukkan...',
      options: ['Mengantuk', 'Bosan', 'Terkejut / Kagum', 'Marah'],
      correct: 2,
    },
    {
      emoji: '🤷',
      question: 'Mengangkat bahu seperti ini berarti...',
      options: ['Sangat setuju', 'Tidak tahu / Tidak yakin', 'Sangat marah', 'Sangat bahagia'],
      correct: 1,
    },
    {
      emoji: '👏',
      question: 'Tepuk tangan biasanya menunjukkan...',
      options: ['Kemarahan', 'Kebosanan', 'Penghargaan / Dukungan', 'Ketakutan'],
      correct: 2,
    },
    {
      emoji: '🙄',
      question: 'Memutar mata seperti ini biasanya menunjukkan...',
      options: ['Sangat senang', 'Kesal / Tidak sabar', 'Sangat kagum', 'Mengantuk'],
      correct: 1,
    },
    {
      emoji: '🧍',
      question: 'Berdiri tegak dengan kepala terangkat menunjukkan sikap...',
      options: ['Percaya diri', 'Takut', 'Malu', 'Mengantuk'],
      correct: 0,
    },
  ],
  sulit: [
    {
      emoji: '😐',
      question: 'Wajah datar tanpa ekspresi seperti ini biasanya menandakan...',
      options: ['Sangat gembira', 'Bosan atau tidak tertarik', 'Sangat terkejut', 'Sangat marah'],
      correct: 1,
    },
    {
      emoji: '🤔',
      question: 'Tangan menyentuh dagu sambil menatap ke atas menunjukkan seseorang sedang...',
      options: ['Berpikir / mempertimbangkan sesuatu', 'Menyapa teman', 'Meminta maaf', 'Merasa mengantuk'],
      correct: 0,
    },
    {
      emoji: '😬',
      question: 'Ekspresi gigi terlihat dengan mata menyipit seperti ini biasanya menunjukkan rasa...',
      options: ['Sangat bahagia', 'Canggung / tidak enak hati', 'Sangat bangga', 'Sangat mengantuk'],
      correct: 1,
    },
    {
      emoji: '😤',
      question: 'Menghembuskan napas dengan kasar sambil cemberut menunjukkan perasaan...',
      options: ['Jengkel / frustrasi', 'Sangat gembira', 'Bangga', 'Tenang'],
      correct: 0,
    },
    {
      emoji: '🫡',
      question: 'Gerakan hormat seperti ini biasanya menunjukkan sikap...',
      options: ['Mengejek', 'Menghormati / menghargai', 'Menantang', 'Mengabaikan'],
      correct: 1,
    },
    {
      emoji: '🤐',
      question: 'Ekspresi mulut "diritsleting" seperti ini berarti seseorang sedang...',
      options: ['Berteriak', 'Menahan diri untuk tidak bicara / menyimpan rahasia', 'Bernyanyi', 'Menguap'],
      correct: 1,
    },
    {
      emoji: '😳',
      question: 'Wajah tersipu dengan pipi memerah seperti ini menunjukkan perasaan...',
      options: ['Malu / tersipu', 'Sangat marah', 'Sangat mengantuk', 'Kebingungan total'],
      correct: 0,
    },
    {
      emoji: '🙃',
      question: 'Senyum yang dibuat terbalik seperti ini sering dipakai untuk menunjukkan nada...',
      options: ['Serius sepenuhnya', 'Bercanda / sedikit menyindir', 'Sangat sedih', 'Sangat takut'],
      correct: 1,
    },
  ],
}

interface Props {
  active: boolean
  difficulty: Difficulty
  onBack: () => void
}

export function GuessExpressionGame({ active, difficulty, onBack }: Props) {
  const QUESTIONS = QUESTIONS_BY_DIFFICULTY[difficulty]
  const [qIdx, setQIdx]       = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore]     = useState(0)
  const [done, setDone]       = useState(false)

  useEffect(() => {
    if (!active) return
    setQIdx(0); setSelected(null); setScore(0); setDone(false)
  }, [active, difficulty])

  const q = QUESTIONS[qIdx]

  const handleSelect = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (i === q.correct) setScore(s => s + 1)
    setTimeout(() => {
      const next = qIdx + 1
      if (next >= QUESTIONS.length) {
        setDone(true)
      } else {
        setQIdx(next)
        setSelected(null)
      }
    }, 1200)
  }

  const reset = () => {
    setQIdx(0); setSelected(null); setScore(0); setDone(false)
  }

  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <div className="screen-body centered">
        {done ? (
          <>
            <div className="mg-result-emoji">{score >= QUESTIONS.length - 1 ? '🏆' : score >= Math.ceil(QUESTIONS.length * 0.7) ? '🥇' : score >= Math.ceil(QUESTIONS.length / 2) ? '🥈' : '📚'}</div>
            <h2 className="page-title">Selesai!</h2>
            <div className="result-score-box">Skor: {score} / {QUESTIONS.length}</div>
            <div className="result-buttons">
              <button className="btn btn-retry" onClick={reset}>🔄 Main Lagi</button>
              <button className="btn btn-home" onClick={onBack}>◀ Pilih Game</button>
            </div>
          </>
        ) : (
          <>
            <div className="mg-progress">Soal {qIdx + 1} / {QUESTIONS.length} &nbsp;·&nbsp; ⭐ {score}</div>
            <div className="mg-expr-emoji">{q.emoji}</div>
            <div className="mg-expr-question">{q.question}</div>
            <div className="mg-expr-options">
              {q.options.map((opt, i) => {
                let cls = 'mg-expr-opt'
                if (selected !== null) {
                  if (i === q.correct)       cls += ' correct'
                  else if (i === selected)   cls += ' wrong'
                  else                       cls += ' disabled'
                }
                return (
                  <button key={i} className={cls} onClick={() => handleSelect(i)}>
                    {opt}
                  </button>
                )
              })}
            </div>
            <button className="btn-back" onClick={onBack}>◀ Pilih Game</button>
          </>
        )}
      </div>
    </div>
  )
}
