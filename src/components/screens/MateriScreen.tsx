interface Props {
  active: boolean
  onBack: () => void
  onMembaca: () => void
  onVideo: () => void
}

export function MateriScreen({ active, onBack, onMembaca, onVideo }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <h2 className="page-title">📚 MATERI</h2>
        <p className="page-subtitle">PILIH CARA BELAJAR MU</p>
        <div className="two-cards">
          <button className="big-option" onClick={onMembaca}>
            <span className="big-option-icon">📖</span>
            <span className="big-option-label">MEMBACA</span>
          </button>
          <button className="big-option" onClick={onVideo}>
            <span className="big-option-icon">🎬</span>
            <span className="big-option-label">LIHAT VIDEO</span>
          </button>
        </div>
      </div>
    </div>
  )
}