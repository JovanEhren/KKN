import { useState, useRef } from 'react'
import type { QuizQuestion } from '../../data/quiz'

interface Props {
  active: boolean
  questions: QuizQuestion[]
  onResult: (score: number, total: number) => void
  onExit: () => void
}

const LABELS = ['A', 'B', 'C', 'D']
const MAX_LIVES = 5

export function QuizScreen({ active, questions, onResult, onExit }: Props) {
  const [qIndex, setQIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(MAX_LIVES)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [explanation, setExplanation] = useState<{ text: string; correct: boolean } | null>(null)
  const [showExitConfirm, setShowExitConfirm] = useState(false)

  const correctSfx = useRef(new Audio('/SoundEffect/correctPop.mp3'))
  const wrongSfx   = useRef(new Audio('/SoundEffect/wrongPop.mp3'))

  const handleAnswer = (selected: number) => {
    if (answered) return
    setAnswered(true)
    setSelectedAnswer(selected)

    const q = questions[qIndex]
    const isCorrect = selected === q.correct

    const sfx = isCorrect ? correctSfx.current : wrongSfx.current
    sfx.currentTime = 0
    sfx.play().catch(() => {})

    const newScore = isCorrect ? score + 1 : score
    const newLives = isCorrect ? lives : lives - 1

    if (isCorrect) setScore(newScore)
    else setLives(newLives)

    setExplanation({
      text: `${isCorrect ? '✅ Benar! ' : '❌ Salah. '}${q.explanation}`,
      correct: isCorrect,
    })

    setTimeout(() => {
      const nextIndex = qIndex + 1
      if (newLives <= 0 || nextIndex >= questions.length) {
        onResult(newScore, questions.length)
      } else {
        setQIndex(nextIndex)
        setAnswered(false)
        setSelectedAnswer(null)
        setExplanation(null)
      }
    }, 2200)
  }

  const q = questions[qIndex]
  const progressPct = (qIndex / questions.length) * 100

  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <div className="quiz-topbar">
        <button className="quiz-exit-btn" onClick={() => setShowExitConfirm(true)} title="Keluar">✕</button>
        <div className="quiz-lives-display">
          {Array.from({ length: MAX_LIVES }, (_, i) => (i < lives ? '❤️' : '🖤')).join(' ')}
        </div>
        <div className="quiz-progress-wrap">
          <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="quiz-score-display">⭐ {score}</div>
      </div>
      <div className="quiz-body">
        <div className="quiz-qnum">Soal {qIndex + 1} dari {questions.length}</div>
        <div className="quiz-question">{q.question}</div>
        <div className="quiz-options">
          {q.options.map((opt, i) => {
            let cls = 'q-opt'
            if (answered) {
              cls += ' disabled'
              if (i === q.correct) cls += ' correct'
              else if (i === selectedAnswer) cls += ' wrong'
            }
            return (
              <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                {LABELS[i]}. {opt}
              </button>
            )
          })}
          {explanation && (
            <div
              className="quiz-explanation"
              style={{ background: explanation.correct ? '#6BCB77' : '#FF6B6B' }}
            >
              {explanation.text}
            </div>
          )}
        </div>
      </div>
      {showExitConfirm && (
        <div className="exit-confirm-overlay">
          <div className="exit-confirm-card">
            <div className="exit-confirm-icon">🚪</div>
            <p className="exit-confirm-title">Yakin mau keluar?</p>
            <p className="exit-confirm-sub">Progres kuis ini tidak akan tersimpan.</p>
            <div className="exit-confirm-buttons">
              <button className="btn btn-home" onClick={onExit}>Keluar</button>
              <button className="btn btn-latihan" onClick={() => setShowExitConfirm(false)}>Tetap Main</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
