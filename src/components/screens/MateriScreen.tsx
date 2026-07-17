import { useState } from 'react'

interface Props {
  active: boolean
  onBack: () => void
  onMembaca: () => void
  onVideo: () => void
  videoLocked: boolean
  videoUnlockLabel: string
}

export function MateriScreen({ active, onBack, onMembaca, onVideo, videoLocked, videoUnlockLabel }: Props) {
  const [showLockedHint, setShowLockedHint] = useState(false)

  const handleVideoClick = () => {
    if (videoLocked) {
      setShowLockedHint(true)
      return
    }
    onVideo()
  }

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
          <button
            className={`big-option${videoLocked ? ' big-option-locked' : ''}`}
            onClick={handleVideoClick}
            aria-disabled={videoLocked}
          >
            <span className="big-option-icon">{videoLocked ? '🔒' : '🎬'}</span>
            <span className="big-option-label">{videoLocked ? 'TERKUNCI' : 'LIHAT VIDEO'}</span>
            {videoLocked && <span className="big-option-sublabel">Buka {videoUnlockLabel}</span>}
          </button>
        </div>
        {showLockedHint && videoLocked && (
          <p className="locked-hint">🔒 Video baru bisa dibuka pada {videoUnlockLabel}. Sabar ya!</p>
        )}
      </div>
    </div>
  )
}
