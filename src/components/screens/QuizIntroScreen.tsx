interface Props {
  active: boolean
  onBack: () => void
  onStart: () => void
}

export function QuizIntroScreen({ active, onBack, onStart }: Props) {
  return (
    <div className={`screen${active ? ' active' : ''}`}>
      <button className="btn-back" onClick={onBack}>← KEMBALI</button>
      <div className="screen-body centered">
        <div className="quiz-intro-trophy">🏆</div>
        <h2 className="page-title">LATIHAN SOAL</h2>
        <p className="page-subtitle">Uji kemampuanmu dengan 10 pertanyaan!</p>
        <div className="info-chips">
          <div className="chip">📝 10 Soal</div>
          <div className="chip">❤️ 3 Nyawa</div>
          <div className="chip">⭐ Raih Bintang</div>
        </div>
        <button className="btn btn-mulai" onClick={onStart}>MULAI! 🚀</button>
      </div>
    </div>
  )
}