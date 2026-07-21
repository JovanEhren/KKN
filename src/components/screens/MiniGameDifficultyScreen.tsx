import type { Difficulty } from '../../data/quiz'

interface Props {
  active: boolean
  icon: string
  title: string
  unitLabel: string
  counts: Record<Difficulty, number>
  onBack: () => void
  onSelect: (difficulty: Difficulty) => void
}

const DIFFICULTIES: Difficulty[] = ['mudah', 'sedang', 'sulit']

const META: Record<Difficulty, { emoji: string; label: string }> = {
  mudah:  { emoji: '🟢', label: 'Mudah' },
  sedang: { emoji: '🟡', label: 'Sedang' },
  sulit:  { emoji: '🔴', label: 'Sulit' },
}

export function MiniGameDifficultyScreen({ active, icon, title, unitLabel, counts, onBack, onSelect }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <h2 className="page-title">{icon} {title}</h2>
        <p className="page-subtitle">Pilih tingkat kesulitan!</p>
        <div className="two-cards">
          {DIFFICULTIES.map(diff => (
            <button key={diff} className={`big-option diff-${diff}`} onClick={() => onSelect(diff)}>
              <span className="big-option-icon">{META[diff].emoji}</span>
              <span className="big-option-label">{META[diff].label.toUpperCase()}</span>
              <span className="topic-chip">🎮 {counts[diff]} {unitLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
