interface Props {
  active: boolean
  onBack: () => void
  onOpenVideo: (videoId: string, title: string) => void
}

const videos = [
  { id: 'VIDEO_ID_1', label: '🎤 Public Speaking', thumbClass: 'vt-red' },
  { id: 'VIDEO_ID_2', label: '🤝 Komunikasi Nonverbal', thumbClass: 'vt-teal' },
  { id: 'VIDEO_ID_3', label: '💡 Thinking Out of the Box', thumbClass: 'vt-yellow' },
  { id: 'VIDEO_ID_4', label: '🌟 Kreativitas Sehari-hari', thumbClass: 'vt-green' },
]

export function VideoScreen({ active, onBack, onOpenVideo }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <h2 className="page-title">🎬 LIHAT VIDEO</h2>
        <div className="topics-grid">
          {videos.map(v => (
            <div key={v.id} className="video-card" onClick={() => onOpenVideo(v.id, v.label)}>
              <div className={`video-thumb ${v.thumbClass}`}>
                <div className="play-btn">▶</div>
              </div>
              <div className="video-label">{v.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}