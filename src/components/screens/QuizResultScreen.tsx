import { useEffect, useRef } from 'react'
import type { QuizResult } from '../../App'

interface Props {
  active: boolean
  result: QuizResult
  bestScore: number | null
  isNewRecord: boolean
  onRetry: () => void
  onPickTopic: () => void
  onHome: () => void
}

const CONFETTI_COLORS = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCB77', '#C39BD3', '#FFA07A']

function getResultContent(pct: number) {
  if (pct >= 90) return { emoji: '🏆', title: 'LUAR BIASA!', stars: '⭐⭐⭐', msg: 'Nilai sempurna! Kamu adalah juara sejati! 🎉' }
  if (pct >= 70) return { emoji: '🥇', title: 'BAGUS SEKALI!', stars: '⭐⭐⭐', msg: 'Nilaimu sangat bagus! Terus pertahankan! 💪' }
  if (pct >= 50) return { emoji: '🥈', title: 'CUKUP BAIK!', stars: '⭐⭐', msg: 'Sudah berusaha! Coba lagi untuk nilai lebih tinggi! 📚' }
  return { emoji: '📚', title: 'SEMANGAT!', stars: '⭐', msg: 'Baca materinya lagi ya, kamu pasti bisa! 💪' }
}

export function QuizResultScreen({ active, result, bestScore, isNewRecord, onRetry, onPickTopic, onHome }: Props) {
  const confettiRef = useRef<HTMLDivElement>(null)
  const congratsSfx = useRef(new Audio('/SoundEffect/congrats.mp3'))
  const { score, total } = result
  const pct = total > 0 ? (score / total) * 100 : 0
  const { emoji, title, stars, msg } = getResultContent(pct)

  useEffect(() => {
    if (!active) return
    const sfx = congratsSfx.current
    sfx.currentTime = 0
    sfx.play().catch(() => {})
  }, [active])

  useEffect(() => {
    const wrap = confettiRef.current
    if (!wrap) return
    wrap.innerHTML = ''
    if (!active || pct < 70) return

    for (let i = 0; i < 90; i++) {
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

    const timer = setTimeout(() => { wrap.innerHTML = '' }, 4500)
    return () => {
      clearTimeout(timer)
      wrap.innerHTML = ''
    }
  }, [active, score, total, pct])

  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <div className="screen-body centered">
        <div className="result-emoji">{emoji}</div>
        <h2 className="result-title">{title}</h2>
        <div className="result-stars">{stars}</div>
        <div className="result-score-box">Skor: {score} / {total}</div>
        {isNewRecord && <div className="result-new-record">🏆 Rekor Baru!</div>}
        {!isNewRecord && bestScore !== null && (
          <div className="result-best">⭐ Terbaik: {bestScore} / {total}</div>
        )}
        <div className="result-msg">{msg}</div>
        <div className="result-buttons">
          <button className="btn btn-retry" onClick={onRetry}>🔄 Coba Lagi</button>
          <button className="btn btn-latihan" onClick={onPickTopic}>📋 Pilih Topik</button>
          <button className="btn btn-home" onClick={onHome}>🏠 Menu Utama</button>
        </div>
      </div>
      <div ref={confettiRef} className="confetti-wrap" />
    </div>
  )
}