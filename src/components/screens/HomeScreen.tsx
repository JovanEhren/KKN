interface Props {
  active: boolean
  onBelajar: () => void
  onLatihan: () => void
}

export function HomeScreen({ active, onBelajar, onLatihan }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <div className="hearts-row">
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
      </div>
      <div className="home-body">
        <div className="home-mascot float-anim">🐱</div>
        <div className="home-center">
          <h1 className="main-title">BELAJAR<br />KOMUNIKASI</h1>
          <div className="home-buttons">
            <button className="btn btn-belajar" onClick={onBelajar}>📚 BELAJAR</button>
            <button className="btn btn-latihan" onClick={onLatihan}>✏️ LATIHAN</button>
          </div>
        </div>
        <div className="home-mascot float-anim delay-anim">😺</div>
      </div>
    </div>
  )
}