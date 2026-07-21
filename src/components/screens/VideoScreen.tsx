import { explainers } from '../../data/explainers'

interface Props {
  active: boolean
  onBack: () => void
  onOpenVideo: (topicIndex: number) => void
}

export function VideoScreen({ active, onBack, onOpenVideo }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <h2 className="page-title">🎬 LIHAT VIDEO</h2>
        <div className="topics-grid">
          {explainers.map((v, i) => (
            <div key={i} className="video-card" onClick={() => onOpenVideo(i)}>
              <div className={`video-thumb vt-${v.theme}`}>
                <div className="play-btn">▶</div>
              </div>
              <div className="video-label">{v.icon} {v.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
