import { DIFFICULTY_META, topicQuizzes, type Difficulty } from '../../data/quiz'

interface Props {
  active: boolean
  topicIndex: number
  onBack: () => void
  onSelect: (difficulty: Difficulty) => void
  highScores: Record<string, number | null>
}

const DIFFICULTIES: Difficulty[] = ['mudah', 'sedang', 'sulit']

export function QuizDifficultyScreen({ active, topicIndex, onBack, onSelect, highScores }: Props) {
  const topic = topicQuizzes[topicIndex]

  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <h2 className="page-title">{topic.icon} {topic.label}</h2>
        <p className="page-subtitle">Pilih tingkat kesulitan!</p>
        <div className="two-cards">
          {DIFFICULTIES.map(diff => {
            const meta = DIFFICULTY_META[diff]
            const best = highScores[`${topicIndex}:${diff}`]
            return (
              <button
                key={diff}
                className={`big-option diff-${diff}`}
                onClick={() => onSelect(diff)}
              >
                <span className="big-option-icon">{meta.emoji}</span>
                <span className="big-option-label">{meta.label.toUpperCase()}</span>
                <span className="topic-chip">📝 {meta.count} Soal</span>
                {best !== null && best !== undefined && (
                  <span className="topic-highscore">⭐ Terbaik: {best}/{meta.count}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
