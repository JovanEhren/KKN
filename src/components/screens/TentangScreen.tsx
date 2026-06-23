interface Props {
  active: boolean
  onBack: () => void
}

const TEAM = [
  'Nama Anggota 1',
  'Nama Anggota 2',
  'Nama Anggota 3',
  'Nama Anggota 4',
  'Nama Anggota 5',
  'Nama Anggota 6',
]

export function TentangScreen({ active, onBack }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <div className="tentang-hero">🎓</div>
        <h2 className="page-title">TENTANG APLIKASI</h2>

        <div className="tentang-card">
          <p className="tentang-desc">
            <strong>Belajar Komunikasi</strong> adalah aplikasi edukatif interaktif untuk anak-anak
            yang membantu mereka memahami dunia komunikasi — mulai dari public speaking,
            bahasa tubuh, hingga cara berpikir kreatif.
          </p>

          <div className="tentang-divider" />

          <div className="tentang-section">
            <p className="tentang-section-title">🏫 Dibuat oleh Tim KKN</p>
            <div className="tentang-members">
              {TEAM.map((name, i) => (
                <div key={i} className="tentang-member">
                  <span className="tentang-member-dot">●</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tentang-divider" />

          <div className="tentang-section">
            <p className="tentang-section-title">📚 Materi yang Dipelajari</p>
            <div className="tentang-topics">
              <span className="tentang-topic-chip">🎤 Public Speaking</span>
              <span className="tentang-topic-chip">🤝 Komunikasi Nonverbal</span>
              <span className="tentang-topic-chip">💡 Thinking Out of the Box</span>
            </div>
          </div>
        </div>

        <p className="tentang-footer-text">Dibuat dengan ❤️ untuk anak-anak Indonesia</p>
      </div>
    </div>
  )
}
