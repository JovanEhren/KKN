import { useEffect, useRef, useState } from 'react'
import { explainers } from '../data/explainers'

interface Props {
  topicIndex: number
}

const SCENE_MS = 4200
const CONFETTI_COLORS = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCB77', '#C39BD3', '#FFA07A']

export function AnimatedExplainer({ topicIndex }: Props) {
  const topic = explainers[topicIndex]
  const totalScenes = topic.scenes.length

  const [sceneIndex, setSceneIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [finished, setFinished] = useState(false)

  const confettiRef = useRef<HTMLDivElement>(null)
  const congratsSfx = useRef(new Audio('/SoundEffect/congrats.mp3'))

  useEffect(() => {
    setSceneIndex(0)
    setPlaying(true)
    setFinished(false)
  }, [topicIndex])

  useEffect(() => {
    if (!playing || finished) return
    const timer = setTimeout(() => {
      if (sceneIndex >= totalScenes - 1) {
        setPlaying(false)
        setFinished(true)
      } else {
        setSceneIndex(i => i + 1)
      }
    }, SCENE_MS)
    return () => clearTimeout(timer)
  }, [playing, sceneIndex, finished, totalScenes])

  useEffect(() => {
    if (!finished) return
    const sfx = congratsSfx.current
    sfx.currentTime = 0
    sfx.play().catch(() => {})

    const wrap = confettiRef.current
    if (!wrap) return
    wrap.innerHTML = ''
    for (let i = 0; i < 80; i++) {
      const p = document.createElement('div')
      p.className = 'confetti-piece'
      const size = 8 + Math.random() * 10
      p.style.cssText = [
        `left:${Math.random() * 100}%`,
        `top:-20px`,
        `width:${size}px`,
        `height:${size}px`,
        `background:${CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]}`,
        `border-radius:${Math.random() > 0.5 ? '50%' : '2px'}`,
        `animation-duration:${1.4 + Math.random() * 2}s`,
        `animation-delay:${Math.random() * 0.8}s`,
      ].join(';')
      wrap.appendChild(p)
    }
    const t = setTimeout(() => { wrap.innerHTML = '' }, 4500)
    return () => { clearTimeout(t); wrap.innerHTML = '' }
  }, [finished])

  const goPrev = () => {
    setFinished(false)
    setPlaying(true)
    setSceneIndex(i => Math.max(0, i - 1))
  }

  const goNext = () => {
    if (sceneIndex >= totalScenes - 1) {
      setPlaying(false)
      setFinished(true)
      return
    }
    setSceneIndex(i => i + 1)
  }

  const replay = () => {
    setSceneIndex(0)
    setPlaying(true)
    setFinished(false)
  }

  const scene = topic.scenes[sceneIndex]

  return (
    <div className={`explainer vt-${topic.theme}`}>
      <div className="explainer-progress-row">
        {topic.scenes.map((_, i) => (
          <div key={i} className="explainer-progress-track">
            <div
              className={`explainer-progress-fill${i < sceneIndex || finished ? ' full' : i === sceneIndex ? ' current' : ''}`}
            />
          </div>
        ))}
      </div>

      {!finished ? (
        <div className="explainer-stage" key={sceneIndex}>
          <div className="explainer-mascot float-anim">{scene.emoji}</div>
          <div className="explainer-caption">{scene.text}</div>
        </div>
      ) : (
        <div className="explainer-stage explainer-finished">
          <div className="explainer-mascot float-anim">🎉</div>
          <div className="explainer-caption">Kamu sudah nonton semuanya! Keren! 🌟</div>
        </div>
      )}

      <div className="explainer-controls">
        <button className="explainer-ctrl-btn" onClick={goPrev} disabled={sceneIndex === 0 && !finished} title="Sebelumnya">⏮</button>
        {!finished ? (
          <button className="explainer-ctrl-btn explainer-ctrl-main" onClick={() => setPlaying(p => !p)} title={playing ? 'Jeda' : 'Lanjut'}>
            {playing ? '⏸' : '▶️'}
          </button>
        ) : (
          <button className="explainer-ctrl-btn explainer-ctrl-main" onClick={replay} title="Tonton lagi">🔄</button>
        )}
        <button className="explainer-ctrl-btn" onClick={goNext} disabled={finished} title="Selanjutnya">⏭</button>
      </div>

      <div ref={confettiRef} className="confetti-wrap" />
    </div>
  )
}
