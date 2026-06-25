import { useState, useEffect } from 'react'

const EMOJIS = ['🎤', '😊', '👁️', '💡', '🤝', '💪', '🗣️', '📝']

interface Card {
  uid: number
  emoji: string
  flipped: boolean
  matched: boolean
}

function createCards(): Card[] {
  const cards: Card[] = [...EMOJIS, ...EMOJIS].map((emoji, i) => ({
    uid: i, emoji, flipped: false, matched: false,
  }))
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]]
  }
  return cards
}

interface Props {
  active: boolean
  onBack: () => void
}

export function MemoryMatchGame({ active, onBack }: Props) {
  const [cards, setCards]       = useState<Card[]>(createCards)
  const [firstPick, setFirstPick] = useState<number | null>(null)
  const [locked, setLocked]     = useState(false)
  const [moves, setMoves]       = useState(0)

  useEffect(() => {
    if (!active) return
    setCards(createCards()); setFirstPick(null); setLocked(false); setMoves(0)
  }, [active])

  const matched = cards.filter(c => c.matched).length / 2
  const done = matched === EMOJIS.length

  const handleCardClick = (idx: number) => {
    if (locked || cards[idx].flipped || cards[idx].matched) return
    if (firstPick !== null && firstPick === idx) return

    const next = cards.map((c, i) => i === idx ? { ...c, flipped: true } : c)
    setCards(next)

    if (firstPick === null) {
      setFirstPick(idx)
    } else {
      setMoves(m => m + 1)
      setLocked(true)
      if (next[firstPick].emoji === next[idx].emoji) {
        setTimeout(() => {
          setCards(c => c.map((card, i) =>
            i === firstPick || i === idx ? { ...card, matched: true } : card
          ))
          setFirstPick(null)
          setLocked(false)
        }, 500)
      } else {
        setTimeout(() => {
          setCards(c => c.map((card, i) =>
            i === firstPick || i === idx ? { ...card, flipped: false } : card
          ))
          setFirstPick(null)
          setLocked(false)
        }, 900)
      }
    }
  }

  const reset = () => {
    setCards(createCards()); setFirstPick(null); setLocked(false); setMoves(0)
  }

  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <div className="screen-body centered">
        {done ? (
          <>
            <div className="mg-result-emoji">🎉</div>
            <h2 className="page-title">Semua Cocok!</h2>
            <div className="result-score-box">Selesai dalam {moves} langkah</div>
            <div className="result-buttons">
              <button className="btn btn-retry" onClick={reset}>🔄 Main Lagi</button>
              <button className="btn btn-home" onClick={onBack}>◀ Pilih Game</button>
            </div>
          </>
        ) : (
          <>
            <div className="mg-progress">🃏 {matched}/{EMOJIS.length} cocok &nbsp;·&nbsp; 👣 {moves} langkah</div>
            <div className="mg-memory-grid">
              {cards.map((card, i) => (
                <button
                  key={i}
                  className={`mg-card${card.flipped || card.matched ? ' flipped' : ''}${card.matched ? ' matched' : ''}`}
                  onClick={() => handleCardClick(i)}
                >
                  <span className="mg-card-front">{card.emoji}</span>
                  <span className="mg-card-back">?</span>
                </button>
              ))}
            </div>
            <button className="btn-back" onClick={onBack}>◀ Pilih Game</button>
          </>
        )}
      </div>
    </div>
  )
}
