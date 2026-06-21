interface Props {
  active: boolean
  onBack: () => void
  onSelectArticle: (index: number) => void
}

const topics = [
  { icon: '🎤', lines: ['PUBLIC SPEAKING:', 'BERANI BERBICARA DI DEPAN UMUM'], colorClass: 'tc-red' },
  { icon: '🤝', lines: ['KOMUNIKASI NONVERBAL:', 'BERBICARA TANPA KATA'], colorClass: 'tc-teal' },
  { icon: '💡', lines: ['THINKING OUT OF THE BOX', 'DASAR'], colorClass: 'tc-yellow' },
  { icon: '🌟', lines: ['THINKING OUT OF THE BOX', 'DALAM KEHIDUPAN SEHARI-HARI'], colorClass: 'tc-green' },
]

export function MembacaScreen({ active, onBack, onSelectArticle }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <h2 className="page-title">📖 MEMBACA MATERI</h2>
        <div className="topics-grid">
          {topics.map((t, i) => (
            <button
              key={i}
              className={`topic-card ${t.colorClass}`}
              onClick={() => onSelectArticle(i)}
            >
              <span className="topic-icon">{t.icon}</span>
              <span className="topic-name">{t.lines[0]}<br />{t.lines[1]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}