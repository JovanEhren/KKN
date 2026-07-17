import { useState, useEffect, useRef } from 'react'
import { Background } from './components/Background'
import { VideoModal } from './components/VideoModal'
import { HomeScreen } from './components/screens/HomeScreen'
import { MateriScreen } from './components/screens/MateriScreen'
import { MembacaScreen } from './components/screens/MembacaScreen'
import { ArticleScreen } from './components/screens/ArticleScreen'
import { VideoScreen } from './components/screens/VideoScreen'
import { QuizIntroScreen } from './components/screens/QuizIntroScreen'
import { QuizDifficultyScreen } from './components/screens/QuizDifficultyScreen'
import { QuizScreen } from './components/screens/QuizScreen'
import { QuizResultScreen } from './components/screens/QuizResultScreen'
import { TentangScreen } from './components/screens/TentangScreen'
import { MiniGameSelectScreen } from './components/screens/MiniGameSelectScreen'
import { WordScrambleGame } from './components/screens/WordScrambleGame'
import { MemoryMatchGame } from './components/screens/MemoryMatchGame'
import { GuessExpressionGame } from './components/screens/GuessExpressionGame'
import { LandscapeWarning } from './components/LandscapeWarning'
import { topicQuizzes, type Difficulty } from './data/quiz'

type Screen =
  | 'home'
  | 'materi'
  | 'membaca'
  | 'article'
  | 'video'
  | 'quiz-intro'
  | 'quiz-difficulty'
  | 'quiz'
  | 'quiz-result'
  | 'tentang'
  | 'minigame-select'
  | 'game-scramble'
  | 'game-memory'
  | 'game-expr'

interface VideoModalState {
  videoId: string
  title: string
}

export interface QuizResult {
  score: number
  total: number
}

const QUIZ_SCREENS: Screen[] = ['quiz-intro', 'quiz-difficulty', 'quiz', 'quiz-result']

const VIDEO_UNLOCK_AT = new Date('2026-07-20T13:00:00+07:00').getTime()

function formatUnlockLabel(timestamp: number) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
    timeZone: 'Asia/Jakarta',
  }).format(timestamp) + ' WIB'
}

function scoreKey(topicIdx: number, difficulty: Difficulty) {
  return `${topicIdx}:${difficulty}`
}

function loadHighScores(): Record<string, number | null> {
  try {
    const stored = localStorage.getItem('kkn_highscores_v2')
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [articleIndex, setArticleIndex] = useState(0)
  const [videoModal, setVideoModal] = useState<VideoModalState | null>(null)
  const [quizKey, setQuizKey] = useState(0)
  const [quizTopic, setQuizTopic] = useState(0)
  const [quizDifficulty, setQuizDifficulty] = useState<Difficulty>('mudah')
  const [quizResult, setQuizResult] = useState<QuizResult>({ score: 0, total: 5 })
  const [isNewRecord, setIsNewRecord] = useState(false)
  const [highScores, setHighScores] = useState<Record<string, number | null>>(loadHighScores)
  const [muted, setMuted] = useState(false)
  const [splashDone, setSplashDone] = useState(false)
  const [nightMode, setNightMode] = useState(false)
  const [now, setNow] = useState(() => Date.now())
  const lobbyRef = useRef<HTMLAudioElement>(null)
  const quizRef  = useRef<HTMLAudioElement>(null)
  const popRef   = useRef(new Audio('/SoundEffect/pop.mp3'))
  const isQuizScreen = QUIZ_SCREENS.includes(screen)

  useEffect(() => {
    const pop = popRef.current
    pop.volume = 0.5
    const handler = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.closest('button, a') && !el.closest('[data-no-pop]') && !el.closest('.btn-back')) {
        pop.currentTime = 0
        pop.play().catch(() => {})
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
  const showFloatingButtons = screen === 'home'

  const handleSplash = () => {
    const active = isQuizScreen ? quizRef.current : lobbyRef.current
    active?.play().catch(() => {})
    setSplashDone(true)
  }

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

  useEffect(() => {
    const handleVisibility = () => {
      const active = isQuizScreen ? quizRef.current : lobbyRef.current
      if (!active) return
      if (document.hidden) {
        active.pause()
      } else if (splashDone) {
        active.play().catch(() => {})
      }
    }
    const handlePageHide = () => {
      lobbyRef.current?.pause()
      quizRef.current?.pause()
    }
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('pagehide', handlePageHide)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('pagehide', handlePageHide)
    }
  }, [isQuizScreen, splashDone])

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000)
    return () => clearInterval(id)
  }, [])

  const videoLocked = now < VIDEO_UNLOCK_AT
  const videoUnlockLabel = formatUnlockLabel(VIDEO_UNLOCK_AT)

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

  const pickTopic = (topicIdx: number) => {
    setQuizTopic(topicIdx)
    setScreen('quiz-difficulty')
  }

  const startQuiz = (topicIdx: number, difficulty: Difficulty) => {
    setQuizTopic(topicIdx)
    setQuizDifficulty(difficulty)
    setQuizKey(k => k + 1)
    setScreen('quiz')
  }

  const handleQuizResult = (score: number, total: number) => {
    const key = scoreKey(quizTopic, quizDifficulty)
    const prevBest = highScores[key] ?? null
    const newRecord = prevBest === null || score > prevBest
    if (newRecord) {
      const next = { ...highScores, [key]: score }
      setHighScores(next)
      localStorage.setItem('kkn_highscores_v2', JSON.stringify(next))
    }
    setIsNewRecord(newRecord)
    setQuizResult({ score, total })
    setScreen('quiz-result')
  }

  return (
    <div className={nightMode ? 'night' : ''}>
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

      {showFloatingButtons && (
        <>
          <button data-no-pop className="night-btn" onClick={() => setNightMode(n => !n)} title={nightMode ? 'Mode Siang' : 'Mode Malam'}>
            {nightMode ? '☀️' : '🌙'}
          </button>
          <button data-no-pop className="bgm-btn" onClick={toggleMute} title={muted ? 'Nyalakan musik' : 'Matikan musik'}>
            {muted ? '🔇' : '🎵'}
          </button>
        </>
      )}

      <LandscapeWarning />
      <Background />
      <HomeScreen
        active={screen === 'home'}
        onBelajar={() => setScreen('materi')}
        onLatihan={() => setScreen('quiz-intro')}
        onMinigame={() => setScreen('minigame-select')}
        onTentang={() => setScreen('tentang')}
      />
      <MateriScreen
        active={screen === 'materi'}
        onBack={() => setScreen('home')}
        onMembaca={() => setScreen('membaca')}
        onVideo={() => { if (!videoLocked) setScreen('video') }}
        videoLocked={videoLocked}
        videoUnlockLabel={videoUnlockLabel}
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
        onNavigate={setArticleIndex}
      />
      <VideoScreen
        active={screen === 'video'}
        onBack={() => setScreen('materi')}
        onOpenVideo={(id, title) => setVideoModal({ videoId: id, title })}
      />
      <QuizIntroScreen
        active={screen === 'quiz-intro'}
        onBack={() => setScreen('home')}
        onStart={pickTopic}
      />
      <QuizDifficultyScreen
        active={screen === 'quiz-difficulty'}
        topicIndex={quizTopic}
        onBack={() => setScreen('quiz-intro')}
        onSelect={difficulty => startQuiz(quizTopic, difficulty)}
        highScores={highScores}
      />
      <QuizScreen
        key={quizKey}
        active={screen === 'quiz'}
        questions={topicQuizzes[quizTopic].questions[quizDifficulty]}
        onResult={handleQuizResult}
        onExit={() => setScreen('quiz-intro')}
      />
      <QuizResultScreen
        active={screen === 'quiz-result'}
        result={quizResult}
        bestScore={highScores[scoreKey(quizTopic, quizDifficulty)] ?? null}
        isNewRecord={isNewRecord}
        onRetry={() => startQuiz(quizTopic, quizDifficulty)}
        onPickTopic={() => setScreen('quiz-intro')}
        onHome={() => setScreen('home')}
      />
      <TentangScreen
        active={screen === 'tentang'}
        onBack={() => setScreen('home')}
      />
      <MiniGameSelectScreen
        active={screen === 'minigame-select'}
        onBack={() => setScreen('home')}
        onSelectGame={g => setScreen(`game-${g}` as Screen)}
      />
      <WordScrambleGame
        active={screen === 'game-scramble'}
        onBack={() => setScreen('minigame-select')}
      />
      <MemoryMatchGame
        active={screen === 'game-memory'}
        onBack={() => setScreen('minigame-select')}
      />
      <GuessExpressionGame
        active={screen === 'game-expr'}
        onBack={() => setScreen('minigame-select')}
      />
      {videoModal && (
        <VideoModal
          videoId={videoModal.videoId}
          title={videoModal.title}
          onClose={() => setVideoModal(null)}
        />
      )}
    </div>
  )
}
