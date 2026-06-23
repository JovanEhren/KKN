interface Props {
  active: boolean
  onBack: () => void
}

export function TentangScreen({ active, onBack }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <div className="tentang-hero">🎓</div>
        <h2 className="page-title">TENTANG APLIKASI</h2>

        <div className="tentang-card">
          <p className="tentang-desc">
            <strong>Belajar Komunikasi</strong> adalah Website edukatif interaktif untuk anak-anak
            yang membantu mereka memahami dunia komunikasi — mulai dari public speaking,
            bahasa tubuh, hingga cara berpikir kreatif.
          </p>

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

        <p className="tentang-footer-text">Dibuat dengan ❤️ untuk anak-anak Guyangan Kidul</p>
      </div>
    </div>
  )
}
