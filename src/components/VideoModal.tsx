import { explainers } from '../data/explainers'
import { AnimatedExplainer } from './AnimatedExplainer'

interface Props {
  topicIndex: number
  onClose: () => void
}

export function VideoModal({ topicIndex, onClose }: Props) {
  const topic = explainers[topicIndex]

  return (
    <div className="modal open" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        <div className="modal-video-title">{topic.icon} {topic.label}</div>
        <AnimatedExplainer topicIndex={topicIndex} />
      </div>
    </div>
  )
}
