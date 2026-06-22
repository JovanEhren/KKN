import { useState, useEffect, useRef } from 'react'
import { Background } from './components/Background'
import { VideoModal } from './components/VideoModal'
import { HomeScreen } from './components/screens/HomeScreen'
import { MateriScreen } from './components/screens/MateriScreen'
import { MembacaScreen } from './components/screens/MembacaScreen'
import { ArticleScreen } from './components/screens/ArticleScreen'
import { VideoScreen } from './components/screens/VideoScreen'
import { QuizIntroScreen } from './components/screens/QuizIntroScreen'
import { QuizScreen } from './components/screens/QuizScreen'
import { QuizResultScreen } from './components/screens/QuizResultScreen'

type Screen =
  | 'home'
  | 'materi'
  | 'membaca'
  | 'article'
  | 'video'
  | 'quiz-intro'
  | 'quiz'
  | 'quiz-result'

interface VideoModalState {
  videoId: string
  title: string
}

export interface QuizResult {
  score: number
  total: number
}

const QUIZ_SCREENS: Screen[] = ['quiz-intro', 'quiz', 'quiz-result']

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [articleIndex, setArticleIndex] = useState(0)
  const [videoModal, setVideoModal] = useState<VideoModalState | null>(null)
  const [quizKey, setQuizKey] = useState(0)
  const [quizResult, setQuizResult] = useState<QuizResult>({ score: 0, total: 10 })
  const [muted, setMuted] = useState(false)
  const [splashDone, setSplashDone] = useState(false)

  const lobbyRef = useRef<HTMLAudioElement>(null)
  const quizRef  = useRef<HTMLAudioElement>(null)

  const isQuizScreen = QUIZ_SCREENS.includes(screen)

  const handleSplash = () => {
    const active = isQuizScreen ? quizRef.current : lobbyRef.current
    active?.play().catch(() => {})
    setSplashDone(true)
  }

  // Switch BGM when screen changes (only after splash)
  useEffect(() => {
    if (!splashDone) return
    const lobby = lobbyRef.current
    const quiz  = quizRef.current
    if (!lobby || !quiz) return

    if (isQuizScreen) {
      lobby.pause()
      quiz.play().catch(() => {})
    } else {
      quiz.pause()
      lobby.play().catch(() => {})
    }
  }, [isQuizScreen, splashDone])

  const toggleMute = () => {
    if (!lobbyRef.current || !quizRef.current) return
    const next = !muted
    lobbyRef.current.muted = next
    quizRef.current.muted  = next
    setMuted(next)
  }

  const showArticle = (i: number) => {
    setArticleIndex(i)
    setScreen('article')
  }

  const startQuiz = () => {
    setQuizKey(k => k + 1)
    setScreen('quiz')
  }

  const handleQuizResult = (score: number, total: number) => {
    setQuizResult({ score, total })
    setScreen('quiz-result')
  }

  return (
    <>
      <audio ref={lobbyRef} src="/LobbyStudy_bgm.mp3" loop preload="auto" />
      <audio ref={quizRef}  src="/Quiz_bgm.mp3"       loop preload="auto" />

      {!splashDone && (
        <div className="splash" onClick={handleSplash}>
          <div className="splash-card">
            <div className="splash-emoji">🎵</div>
            <h2 className="splash-title">Belajar Komunikasi</h2>
            <p className="splash-sub">Tap untuk mulai!</p>
          </div>
        </div>
      )}

      <button className="bgm-btn" onClick={toggleMute} title={muted ? 'Nyalakan musik' : 'Matikan musik'}>
        {muted ? '🔇' : '🎵'}
      </button>

      <Background />
      <HomeScreen
        active={screen === 'home'}
        onBelajar={() => setScreen('materi')}
        onLatihan={() => setScreen('quiz-intro')}
      />
      <MateriScreen
        active={screen === 'materi'}
        onBack={() => setScreen('home')}
        onMembaca={() => setScreen('membaca')}
        onVideo={() => setScreen('video')}
      />
      <MembacaScreen
        active={screen === 'membaca'}
        onBack={() => setScreen('materi')}
        onSelectArticle={showArticle}
      />
      <ArticleScreen
        active={screen === 'article'}
        onBack={() => setScreen('membaca')}
        articleIndex={articleIndex}
      />
      <VideoScreen
        active={screen === 'video'}
        onBack={() => setScreen('materi')}
        onOpenVideo={(id, title) => setVideoModal({ videoId: id, title })}
      />
      <QuizIntroScreen
        active={screen === 'quiz-intro'}
        onBack={() => setScreen('home')}
        onStart={startQuiz}
      />
      <QuizScreen
        key={quizKey}
        active={screen === 'quiz'}
        onResult={handleQuizResult}
        onExit={() => setScreen('home')}
      />
      <QuizResultScreen
        active={screen === 'quiz-result'}
        result={quizResult}
        onRetry={startQuiz}
        onHome={() => setScreen('home')}
      />
      {videoModal && (
        <VideoModal
          videoId={videoModal.videoId}
          title={videoModal.title}
          onClose={() => setVideoModal(null)}
        />
      )}
    </>
  )
}
