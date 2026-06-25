import { useState, useEffect } from 'react'

const QUESTIONS = [
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
]

interface Props {
  active: boolean
  onBack: () => void
}

export function GuessExpressionGame({ active, onBack }: Props) {
  const [qIdx, setQIdx]       = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore]     = useState(0)
  const [done, setDone]       = useState(false)

  useEffect(() => {
    if (!active) return
    setQIdx(0); setSelected(null); setScore(0); setDone(false)
  }, [active])

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
            <div className="mg-result-emoji">{score >= 5 ? '🏆' : score >= 4 ? '🥇' : score >= 3 ? '🥈' : '📚'}</div>
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
