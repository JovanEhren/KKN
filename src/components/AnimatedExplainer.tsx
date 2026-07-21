import { useEffect, useRef, useState } from 'react'
import { explainers } from '../data/explainers'
import { MascotCharacter, type MascotTheme } from './MascotCharacter'

interface Props {
  topicIndex: number
}

const MIN_SCENE_MS = 3200
const SPEECH_SAFETY_MS = 9000
const FALLBACK_SCENE_MS = 4500
const CONFETTI_COLORS = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCB77', '#C39BD3', '#FFA07A']
const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

const THEME_ACCENT: Record<MascotTheme, string> = {
  red: 'var(--coral)',
  teal: 'var(--teal)',
  yellow: 'var(--yellow)',
  green: 'var(--mint)',
}

function pickIndonesianVoice(): SpeechSynthesisVoice | null {
  if (!speechSupported) return null
  const voices = window.speechSynthesis.getVoices()
  return voices.find(v => v.lang?.toLowerCase().startsWith('id')) || null
}

// Chrome has a well-known bug where speak() right after cancel() can be silently
// dropped. Only cancel when something is actually queued, and give it a beat to settle.
function speak(text: string, onStart: () => void, onDone: () => void) {
  if (!speechSupported) return
  const synth = window.speechSynthesis
  const fire = () => {
    const utter = new SpeechSynthesisUtterance(text)
    const voice = pickIndonesianVoice()
    try {
      if (voice) utter.voice = voice
    } catch {
      // Ignore a bad/stale voice reference and just fall back to the default voice.
    }
    utter.lang = voice?.lang || 'id-ID'
    utter.rate = 0.95
    utter.pitch = 1.05
    utter.onstart = onStart
    utter.onend = onDone
    utter.onerror = onDone
    try {
      synth.speak(utter)
    } catch {
      onDone()
    }
  }
  if (synth.speaking || synth.pending) {
    synth.cancel()
    setTimeout(fire, 60)
  } else {
    fire()
  }
}

function sceneLabel(i: number, total: number) {
  if (i === 0) return 'PEMBUKAAN'
  if (i === total - 1) return 'PENUTUP'
  return `BAGIAN ${i}`
}

/** Whether the browser actually has a usable TTS voice (many Linux Chrome builds report zero). */
function useTtsAvailable() {
  const [available, setAvailable] = useState<boolean | null>(speechSupported ? null : false)

  useEffect(() => {
    if (!speechSupported) return
    const synth = window.speechSynthesis
    const check = () => {
      if (synth.getVoices().length > 0) {
        setAvailable(true)
        return true
      }
      return false
    }
    if (check()) return
    const handler = () => { if (check()) synth.removeEventListener('voiceschanged', handler) }
    synth.addEventListener('voiceschanged', handler)
    const timeout = setTimeout(() => { if (!check()) setAvailable(false) }, 700)
    return () => {
      synth.removeEventListener('voiceschanged', handler)
      clearTimeout(timeout)
    }
  }, [])

  return available
}

export function AnimatedExplainer({ topicIndex }: Props) {
  const topic = explainers[topicIndex]
  const totalScenes = topic.scenes.length
  const accent = THEME_ACCENT[topic.theme]
  const ttsAvailable = useTtsAvailable()

  const [sceneIndex, setSceneIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [finished, setFinished] = useState(false)
  const [narrationOn, setNarrationOn] = useState(true)
  const [speaking, setSpeaking] = useState(false)

  const confettiRef = useRef<HTMLDivElement>(null)
  const congratsSfx = useRef(new Audio('/SoundEffect/congrats.mp3'))

  const narrationActive = narrationOn && ttsAvailable === true

  useEffect(() => {
    setSceneIndex(0)
    setStarted(false)
    setPlaying(false)
    setFinished(false)
    return () => { if (speechSupported) window.speechSynthesis.cancel() }
  }, [topicIndex])

  // Narration + auto-advance driver for the current scene.
  // A scene never advances before MIN_SCENE_MS, and — when narrating — not before
  // the voice line actually finishes (or the safety timeout kicks in).
  useEffect(() => {
    if (!playing || finished) return
    let settled = false
    let speechDone = false
    let minTimeDone = false
    let safetyTimer: ReturnType<typeof setTimeout> | null = null

    const tryAdvance = () => {
      if (settled || !minTimeDone || !speechDone) return
      settled = true
      setSpeaking(false)
      setSceneIndex(i => {
        if (i >= totalScenes - 1) {
          setPlaying(false)
          setFinished(true)
          return i
        }
        return i + 1
      })
    }

    const minTimer = setTimeout(() => { minTimeDone = true; tryAdvance() }, MIN_SCENE_MS)

    if (narrationActive) {
      speak(
        topic.scenes[sceneIndex].text,
        () => setSpeaking(true),
        () => { speechDone = true; tryAdvance() },
      )
      safetyTimer = setTimeout(() => { speechDone = true; tryAdvance() }, SPEECH_SAFETY_MS)
    } else {
      // No narration available/enabled — just hold the scene for a comfortable read.
      safetyTimer = setTimeout(() => { speechDone = true; minTimeDone = true; tryAdvance() }, FALLBACK_SCENE_MS)
    }

    return () => {
      settled = true
      clearTimeout(minTimer)
      if (safetyTimer) clearTimeout(safetyTimer)
      if (speechSupported) window.speechSynthesis.cancel()
      setSpeaking(false)
    }
  }, [playing, sceneIndex, finished, narrationActive, topic, totalScenes])

  // Celebration on finish
  useEffect(() => {
    if (!finished) return
    const sfx = congratsSfx.current
    sfx.currentTime = 0
    sfx.play().catch(() => {})

    if (narrationActive) {
      speak('Kamu sudah nonton semuanya! Keren!', () => setSpeaking(true), () => setSpeaking(false))
    }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished])

  const handleMainBtn = () => {
    if (finished) {
      setSceneIndex(0)
      setFinished(false)
      setPlaying(true)
      return
    }
    setStarted(true)
    setPlaying(p => !p)
  }

  const goPrev = () => setSceneIndex(i => Math.max(0, i - 1))

  const goNext = () => {
    if (sceneIndex >= totalScenes - 1) {
      setPlaying(false)
      setFinished(true)
      return
    }
    setSceneIndex(i => i + 1)
  }

  const jumpTo = (i: number) => {
    setFinished(false)
    setSceneIndex(i)
  }

  const mainLabel = finished ? '🔄 Ulangi' : !started ? '▶ Mulai' : playing ? '⏸ Jeda' : '▶ Lanjut'
  const scene = finished ? null : topic.scenes[sceneIndex]

  const hint = !ttsAvailable && ttsAvailable !== null
    ? 'Klik "Mulai" untuk mulai menonton (suara narasi tidak tersedia di perangkat ini)'
    : narrationOn
      ? 'Klik "Mulai" untuk memutar narasi suara'
      : 'Klik "Mulai" untuk mulai menonton'

  return (
    <div className="explainer-wrap">
    <div className="explainer">
      <div className="explainer-content" key={sceneIndex}>
        <div className="explainer-text">
          <div className="explainer-eyebrow" style={{ color: accent }}>
            {finished ? 'SELESAI' : sceneLabel(sceneIndex, totalScenes)}
          </div>
          <h3 className="explainer-title">
            {finished ? 'Kamu sudah nonton semuanya! Keren! 🌟' : scene!.text}
          </h3>
        </div>
        <div className="explainer-character">
          <MascotCharacter theme={topic.theme} talking={speaking} />
        </div>
        {speechSupported && ttsAvailable !== false && (
          <button
            className="explainer-narration-btn"
            onClick={() => setNarrationOn(n => !n)}
            title={narrationOn ? 'Matikan suara' : 'Nyalakan suara'}
          >
            {narrationOn ? '🔊' : '🔇'}
          </button>
        )}
      </div>

      <div className="explainer-bar">
        <div className="explainer-bar-left">
          <button className="explainer-main-btn" style={{ background: accent }} onClick={handleMainBtn}>
            {mainLabel}
          </button>
          <button className="explainer-arrow-btn" onClick={goPrev} disabled={sceneIndex === 0 || finished} title="Sebelumnya">←</button>
        </div>
        <div className="explainer-dots">
          {topic.scenes.map((_, i) => (
            <button
              key={i}
              className={`explainer-dot${!finished && i === sceneIndex ? ' active' : ''}`}
              style={!finished && i === sceneIndex ? { background: accent } : undefined}
              onClick={() => jumpTo(i)}
              title={`Bagian ${i + 1}`}
            />
          ))}
        </div>
        <button className="explainer-arrow-btn explainer-arrow-next" onClick={goNext} disabled={finished} title="Selanjutnya">→</button>
      </div>

      <div ref={confettiRef} className="confetti-wrap" />
    </div>

      {!started && !finished && (
        <p className="explainer-hint">{hint}</p>
      )}
    </div>
  )
}
