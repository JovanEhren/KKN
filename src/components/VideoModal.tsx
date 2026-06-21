interface Props {
  videoId: string
  title: string
  onClose: () => void
}

export function VideoModal({ videoId, title, onClose }: Props) {
  return (
    <div className="modal open" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        <div className="modal-video-title">{title}</div>
        <div className="video-embed-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allowFullScreen
            allow="autoplay; encrypted-media"
            title={title}
          />
        </div>
      </div>
    </div>
  )
}