import { useState, useEffect } from 'react'

function isMobileLandscape() {
  return window.innerWidth > window.innerHeight && window.innerHeight < 500
}

export function LandscapeWarning() {
  const [show, setShow] = useState(isMobileLandscape)

  useEffect(() => {
    const handler = () => setShow(isMobileLandscape())
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  if (!show) return null

  return (
    <div className="landscape-warning">
      <div className="landscape-card">
        <div className="landscape-icon">📱</div>
        <p className="landscape-title">Putar HP-mu!</p>
        <p className="landscape-sub">Aplikasi ini lebih nyaman digunakan dalam mode <strong>portrait</strong>.</p>
      </div>
    </div>
  )
}
