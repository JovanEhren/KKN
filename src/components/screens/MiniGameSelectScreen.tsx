interface Props {
  active: boolean
  onBack: () => void
  onSelectGame: (game: 'scramble' | 'memory' | 'expr') => void
}

const GAMES = [
  {
    id: 'scramble' as const,
    icon: '🔤',
    title: 'Susun Kata',
    desc: 'Urutkan huruf acak menjadi kata yang benar!',
    colorClass: 'tc-red',
  },
  {
    id: 'memory' as const,
    icon: '🃏',
    title: 'Cocokkan Kartu',
    desc: 'Temukan semua pasangan kartu yang cocok!',
    colorClass: 'tc-teal',
  },
  {
    id: 'expr' as const,
    icon: '😊',
    title: 'Tebak Ekspresi',
    desc: 'Tebak arti dari ekspresi dan bahasa tubuh!',
    colorClass: 'tc-yellow',
  },
]

export function MiniGameSelectScreen({ active, onBack, onSelectGame }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <h2 className="page-title">🎮 MINI GAME</h2>
        <p className="page-subtitle">Pilih permainan yang ingin kamu mainkan!</p>
        <div className="mg-select-grid">
          {GAMES.map(g => (
            <button key={g.id} className={`mg-select-card ${g.colorClass}`} onClick={() => onSelectGame(g.id)}>
              <span className="mg-select-icon">{g.icon}</span>
              <div className="mg-select-info">
                <span className="mg-select-title">{g.title}</span>
                <span className="mg-select-desc">{g.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
