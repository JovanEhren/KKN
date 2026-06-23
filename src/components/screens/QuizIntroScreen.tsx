import { topicQuizzes } from '../../data/quiz'

interface Props {
  active: boolean
  onBack: () => void
  onStart: (topicIndex: number) => void
  highScores: (number | null)[]
}

export function QuizIntroScreen({ active, onBack, onStart, highScores }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <h2 className="page-title">✏️ PILIH LATIHAN</h2>
        <p className="page-subtitle">Pilih topik yang ingin kamu latih!</p>
        <div className="topics-grid">
          {topicQuizzes.map((t, i) => (
            <button
              key={i}
              className={`topic-card ${t.colorClass}`}
              onClick={() => onStart(i)}
            >
              <span className="topic-icon">{t.icon}</span>
              <span className="topic-name">{t.label}</span>
              <span className="topic-chip">📝 {t.questions.length} Soal</span>
              {highScores[i] !== null && (
                <span className="topic-highscore">
                  ⭐ Terbaik: {highScores[i]}/{t.questions.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
