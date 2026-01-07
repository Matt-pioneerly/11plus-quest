 'use client'

import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'
import { questionBank, subjectInfo, levelInfo, encouragements, shuffleArray, Question, Subject, Level } from '@/lib/questions'
import QuickMockModal from './QuickMockModal'

type Props = {
  user: User
}

type View = 'home' | 'levels' | 'quiz' | 'results'
type Particle = { id: number; x: number; y: number; emoji: string; angle: number; velocity: number }
type FloatingEmoji = { id: number; emoji: string; x: number }

export default function Quiz({ user }: Props) {
  const supabase = createClient()
  
  const [currentView, setCurrentView] = useState<View>('home')
  const [currentSubject, setCurrentSubject] = useState<Subject | 'mock' | null>(null)
  const [currentLevel, setCurrentLevel] = useState<Level | 'quick' | 'full' | 'mock' | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [animation, setAnimation] = useState('')
  const [mockExamTime, setMockExamTime] = useState(0)
  const [mockExamActive, setMockExamActive] = useState(false)
  const [mockTimeLimit, setMockTimeLimit] = useState(0)
  
  const [streak, setStreak] = useState(0)
  const [totalXP, setTotalXP] = useState(0)
  const [showXPGain, setShowXPGain] = useState<{ amount: number; streak: boolean } | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [showCelebration, setShowCelebration] = useState(false)
  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([])
  const [mascotMood, setMascotMood] = useState<'happy' | 'excited' | 'sad' | 'focused' | 'encouraging'>('happy')
  const [showStreakPopup, setShowStreakPopup] = useState(false)
  const [showQuickMockSelect, setShowQuickMockSelect] = useState(false)

  const [achievements, setAchievements] = useState({
    verbal: { easy: 0, medium: 0, hard: 0 },
    nonverbal: { easy: 0, medium: 0, hard: 0 },
    english: { easy: 0, medium: 0, hard: 0 },
    maths: { easy: 0, medium: 0, hard: 0 },
    mockExams: 0,
    perfectScores: 0,
    totalCorrect: 0
  })

  useEffect(() => {
    const loadStats = async () => {
      const { data } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .single()
      
      if (data) {
        setTotalXP(data.total_xp || 0)
        setAchievements(prev => ({
          ...prev,
          totalCorrect: data.total_correct || 0,
          mockExams: data.mock_exams_completed || 0,
          perfectScores: data.perfect_scores || 0
        }))
      }
    }
    loadStats()
  }, [user.id, supabase])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (mockExamActive && currentView === 'quiz') {
      interval = setInterval(() => {
        setMockExamTime(prev => {
          if (mockTimeLimit > 0 && prev >= mockTimeLimit) {
            setMockExamActive(false)
            setCurrentView('results')
            return prev
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [mockExamActive, currentView, mockTimeLimit])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const createParticles = (x: number, y: number, type: 'star' | 'confetti' = 'star') => {
    const newParticles: Particle[] = []
    const count = type === 'confetti' ? 50 : 12
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: Date.now() + i,
        x,
        y,
        emoji: type === 'confetti' 
          ? ['🎉', '✨', '⭐', '🌟', '💫', '🎊'][Math.floor(Math.random() * 6)] 
          : ['✨', '⭐', '💫'][Math.floor(Math.random() * 3)],
        angle: (360 / count) * i,
        velocity: type === 'confetti' ? 8 + Math.random() * 8 : 4 + Math.random() * 4
      })
    }
    setParticles(prev => [...prev, ...newParticles])
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)))
    }, 1500)
  }

  const createFloatingEmoji = (emoji: string) => {
    const id = Date.now()
    setFloatingEmojis(prev => [...prev, { id, emoji, x: 20 + Math.random() * 60 }])
    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(e => e.id !== id))
    }, 2000)
  }

  const startSubject = (subject: Subject, level: Level) => {
    setCurrentSubject(subject)
    setCurrentLevel(level)
    setShuffledQuestions(shuffleArray(questionBank[subject][level]))
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore({ correct: 0, total: 0 })
    setStreak(0)
    setMockExamActive(false)
    setMockTimeLimit(0)
    setCurrentView('quiz')
    setAnimation('slideIn')
    setMascotMood('happy')
  }

  const startSubjectMock = (subject: Subject) => {
    const allQs = [...questionBank[subject].easy, ...questionBank[subject].medium, ...questionBank[subject].hard]
    const shuffled = shuffleArray(allQs).slice(0, 15).map(q => ({ ...q, subject, level: 'mixed' as const }))
    
    setShuffledQuestions(shuffled)
    setCurrentSubject(subject)
    setCurrentLevel('mock')
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore({ correct: 0, total: 0 })
    setStreak(0)
    setMockExamTime(0)
    setMockTimeLimit(10 * 60)
    setMockExamActive(true)
    setCurrentView('quiz')
    setAnimation('slideIn')
    setMascotMood('focused')
  }

  const startFullMockExam = () => {
    const allQuestions: Question[] = []
    const subjects: Subject[] = ['verbal', 'nonverbal', 'english', 'maths']
    const levels: Level[] = ['easy', 'medium', 'hard']
    
    subjects.forEach(subject => {
      levels.forEach(level => {
        const qs = questionBank[subject][level].map(q => ({ ...q, subject, level }))
        allQuestions.push(...qs)
      })
    })
    
    const shuffled = shuffleArray(allQuestions).slice(0, 50)
    setShuffledQuestions(shuffled)
    setCurrentSubject('mock')
    setCurrentLevel('full')
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore({ correct: 0, total: 0 })
    setStreak(0)
    setMockExamTime(0)
    setMockTimeLimit(45 * 60)
    setMockExamActive(true)
    setCurrentView('quiz')
    setAnimation('slideIn')
    setMascotMood('focused')
  }

  const startQuickMock = (subject: Subject | 'all') => {
    let questions: Question[] = []
    
    if (subject !== 'all') {
      const allQs = [...questionBank[subject].easy, ...questionBank[subject].medium, ...questionBank[subject].hard]
      questions = shuffleArray(allQs).slice(0, 20).map(q => ({ ...q, subject, level: 'mixed' as const }))
    } else {
      const allQuestions: Question[] = []
      const subjects: Subject[] = ['verbal', 'nonverbal', 'english', 'maths']
      const levels: Level[] = ['easy', 'medium', 'hard']
      
      subjects.forEach(subj => {
        levels.forEach(level => {
          const qs = questionBank[subj][level].map(q => ({ ...q, subject: subj, level }))
          allQuestions.push(...qs)
        })
      })
      questions = shuffleArray(allQuestions).slice(0, 20)
    }
    
    setShuffledQuestions(questions)
    setCurrentSubject(subject !== 'all' ? subject : 'mock')
    setCurrentLevel('quick')
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore({ correct: 0, total: 0 })
    setStreak(0)
    setMockExamTime(0)
    setMockTimeLimit(15 * 60)
    setMockExamActive(true)
    setShowQuickMockSelect(false)
    setCurrentView('quiz')
    setAnimation('slideIn')
    setMascotMood('focused')
  }

  const handleAnswerSelect = (index: number, e?: React.MouseEvent) => {
    if (showResult) return
    setSelectedAnswer(index)
    if (e) {
      createParticles(e.clientX, e.clientY, 'star')
    }
  }

  const checkAnswer = () => {
    if (selectedAnswer === null) return
    
    const isCorrect = selectedAnswer === shuffledQuestions[currentQuestionIndex].answer
    setShowResult(true)
    
    if (isCorrect) {
      const newStreak = streak + 1
      setStreak(newStreak)
      setMascotMood('excited')
      
      const baseXP = currentLevel === 'hard' ? 30 : currentLevel === 'medium' ? 20 : 10
      const streakBonus = Math.min(newStreak - 1, 5) * 5
      const xpGained = baseXP + streakBonus
      
      setTotalXP(prev => prev + xpGained)
      setShowXPGain({ amount: xpGained, streak: newStreak > 1 })
      setTimeout(() => setShowXPGain(null), 1500)
      
      if (newStreak >= 2) {
        setShowStreakPopup(true)
        setTimeout(() => setShowStreakPopup(false), 1200)
      }
      
      createFloatingEmoji(['⭐', '✨', '🌟', '💫'][Math.floor(Math.random() * 4)])
      if (newStreak >= 3) createFloatingEmoji('🔥')
      if (newStreak >= 5) createFloatingEmoji('⚡')
      
      setAnimation('correct')
    } else {
      setStreak(0)
      setMascotMood('sad')
      setAnimation('incorrect')
      setTimeout(() => setMascotMood('encouraging'), 1500)
    }
    
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }))
  }

  const saveScore = async () => {
    const percentage = Math.round((score.correct / score.total) * 100)
    const xpEarned = score.correct * (currentLevel === 'hard' ? 30 : currentLevel === 'medium' ? 20 : 15)
    
    await supabase.from('scores').insert({
      user_id: user.id,
      user_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Anonymous',
      user_avatar: user.user_metadata?.avatar_url,
      score: score.correct,
      total: score.total,
      percentage,
      subject: currentSubject,
      level: currentLevel,
      time_taken: mockExamTime,
      xp_earned: xpEarned
    })

    const { data: existingStats } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (existingStats) {
      await supabase.from('user_stats').update({
        total_xp: existingStats.total_xp + xpEarned,
        total_correct: existingStats.total_correct + score.correct,
        total_questions: existingStats.total_questions + score.total,
        mock_exams_completed: currentSubject === 'mock' ? existingStats.mock_exams_completed + 1 : existingStats.mock_exams_completed,
        perfect_scores: percentage === 100 ? existingStats.perfect_scores + 1 : existingStats.perfect_scores,
        updated_at: new Date().toISOString()
      }).eq('user_id', user.id)
    } else {
      await supabase.from('user_stats').insert({
        user_id: user.id,
        total_xp: xpEarned,
        total_correct: score.correct,
        total_questions: score.total,
        mock_exams_completed: currentSubject === 'mock' ? 1 : 0,
        perfect_scores: percentage === 100 ? 1 : 0
      })
    }
  }

  const nextQuestion = async () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setAnimation('slideIn')
      setMascotMood('happy')
    } else {
      const percentage = (score.correct / score.total) * 100
      
      if (percentage >= 80) {
        setShowCelebration(true)
        createParticles(window.innerWidth / 2, window.innerHeight / 2, 'confetti')
        setTimeout(() => createParticles(window.innerWidth / 3, window.innerHeight / 3, 'confetti'), 300)
        setTimeout(() => createParticles(window.innerWidth * 2/3, window.innerHeight / 3, 'confetti'), 600)
      }
      
      await saveScore()
      setMockExamActive(false)
      setCurrentView('results')
    }
  }

  const goHome = () => {
    setCurrentView('home')
    setCurrentSubject(null)
    setCurrentLevel(null)
    setMockExamActive(false)
    setShowCelebration(false)
    setAnimation('')
  }

  const selectSubject = (subject: Subject) => {
    setCurrentSubject(subject)
    setCurrentView('levels')
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]
  const timeRemaining = mockTimeLimit > 0 ? mockTimeLimit - mockExamTime : null
  const timeWarning = timeRemaining !== null && timeRemaining < 120

  const isSubject = (s: string | null): s is Subject => {
    return s === 'verbal' || s === 'nonverbal' || s === 'english' || s === 'maths'
  }

  const isLevel = (l: string | null): l is Level => {
    return l === 'easy' || l === 'medium' || l === 'hard'
  }

  return (
    <div className="p-4 max-w-4xl mx-auto relative">
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed text-xl pointer-events-none z-50"
          style={{
            left: p.x,
            top: p.y,
            ['--tx' as string]: `${Math.cos(p.angle * Math.PI / 180) * p.velocity * 20}px`,
            ['--ty' as string]: `${Math.sin(p.angle * Math.PI / 180) * p.velocity * 20}px`,
            animation: 'particle 1.5s ease-out forwards'
          }}
        >
          {p.emoji}
        </div>
      ))}

      {floatingEmojis.map(e => (
        <div
          key={e.id}
          className="fixed text-4xl pointer-events-none z-50 animate-float-up"
          style={{ left: `${e.x}%`, bottom: '30%' }}
        >
          {e.emoji}
        </div>
      ))}

      {showCelebration && [...Array(30)].map((_, i) => (
        <div
          key={i}
          className="fixed text-3xl pointer-events-none z-50 animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-50px',
            animationDelay: `${Math.random() * 0.5}s`
          }}
        >
          {['🎉', '✨', '⭐', '🌟', '💫', '🎊', '🏆'][Math.floor(Math.random() * 7)]}
        </div>
      ))}

      {showXPGain && (
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 z-50 animate-xp-pop text-center">
          <div className="text-3xl font-bold text-yellow-400" style={{ textShadow: '0 0 20px rgba(251,191,36,0.8)' }}>
            +{showXPGain.amount} XP
          </div>
          {showXPGain.streak && <div className="text-pink-400">Streak Bonus! 🔥</div>}
        </div>
      )}

      {showStreakPopup && streak >= 2 && (
        <div className="fixed top-2/5 left-1/2 -translate-x-1/2 z-50 animate-streak-pop text-2xl font-bold text-pink-400 whitespace-nowrap"
          style={{ textShadow: '0 0 30px rgba(244,114,182,0.8)' }}
        >
          {encouragements.streak[Math.min(streak - 2, 5)]}
        </div>
      )}

      {showQuickMockSelect && (
        <QuickMockModal
          onSelect={startQuickMock}
          onClose={() => setShowQuickMockSelect(false)}
        />
      )}

      {currentView === 'home' && (
        <div className="animate-slide-in">
          <div className="text-center mb-6">
            <div className="flex justify-center gap-4 mb-4">
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <span>⚡</span>
                <span className="text-yellow-400 font-bold">{totalXP} XP</span>
              </div>
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <span>🏆</span>
                <span className="text-emerald-400 font-bold">{achievements.mockExams} Mocks</span>
              </div>
            </div>
          </div>

          <h3 className="text-purple-300 mb-3 text-sm font-semibold">🎯 Mock Exams 모의고사</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={startFullMockExam}
              className="glass-card p-5 text-left border-2 border-red-500/40 hover:border-red-500/60 transition-all animate-pulse-glow"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">📋</span>
                <div>
                  <h4 className="font-display text-lg text-white">FULL MOCK</h4>
                  <p className="text-red-400 text-sm">50 questions • 45 mins • Real exam!</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setShowQuickMockSelect(true)}
              className="glass-card p-5 text-left border-2 border-yellow-500/40 hover:border-yellow-500/60 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">⚡</span>
                <div>
                  <h4 className="font-display text-lg text-white">QUICK MOCK</h4>
                  <p className="text-yellow-400 text-sm">20 questions • 15 mins • Fast practice!</p>
                </div>
              </div>
            </button>
          </div>

          <h3 className="text-purple-300 mb-3 text-sm font-semibold">📚 Practice by Subject</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {(Object.entries(subjectInfo) as [Subject, typeof subjectInfo.verbal][]).map(([key, info]) => (
              <button
                key={key}
                onClick={() => selectSubject(key)}
                className="glass-card p-5 text-center hover:scale-105 transition-transform relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient}`} />
                <div className="text-4xl mb-2 animate-float">{info.mascot}</div>
                <h3 className="font-semibold text-sm" style={{ color: info.color }}>{info.name}</h3>
                <p className="text-gray-500 text-xs">{info.mascotName}</p>
                
                <button
                  onClick={(e) => { e.stopPropagation(); startSubjectMock(key) }}
                  className="mt-3 px-3 py-1 rounded-full text-xs font-semibold transition-colors"
                  style={{ background: `${info.color}30`, color: info.color, border: `1px solid ${info.color}50` }}
                >
                  ⏱️ 10min Mock
                </button>
              </button>
            ))}
          </div>

          <div className="glass-card p-4 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{totalXP}</div>
              <div className="text-xs text-gray-500">Total XP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">{achievements.totalCorrect}</div>
              <div className="text-xs text-gray-500">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">{achievements.perfectScores}</div>
              <div className="text-xs text-gray-500">Perfect</div>
            </div>
          </div>
        </div>
      )}

      {currentView === 'levels' && currentSubject && isSubject(currentSubject) && (
        <div className="animate-slide-in">
          <button onClick={goHome} className="glass-card px-4 py-2 mb-4 text-sm">← Back</button>
          
          <div className="glass-card p-6 text-center mb-6">
            <div className="text-6xl mb-2 animate-float">{subjectInfo[currentSubject].mascot}</div>
            <h2 className="font-display text-2xl" style={{ color: subjectInfo[currentSubject].color }}>
              {subjectInfo[currentSubject].name}
            </h2>
            <p className="text-gray-500 mt-1">Choose your level! 레벨을 선택하세요!</p>
          </div>

          <div className="space-y-3">
            {(Object.entries(levelInfo) as [Level, typeof levelInfo.easy][]).map(([level, info]) => (
              <button
                key={level}
                onClick={() => startSubject(currentSubject, level)}
                className="glass-card w-full p-5 flex items-center justify-between hover:scale-[1.02] transition-transform"
                style={{ borderLeft: `4px solid ${info.color}` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
                    style={{ background: `${info.color}25`, color: info.color }}
                  >
                    {'★'.repeat(info.stars)}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white">{info.name}</h3>
                    <p className="text-gray-500 text-sm">{info.label} • 10 Questions</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {currentView === 'quiz' && currentQuestion && (
        <div className={animation === 'slideIn' ? 'animate-slide-in' : ''}>
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <button onClick={goHome} className="glass-card px-3 py-2 text-sm">✕ Exit</button>
            
            {mockExamActive && (
              <div className={`glass-card px-4 py-2 font-display ${timeWarning ? 'animate-time-warning border-red-500/50' : 'text-pink-400'}`}>
                ⏱️ {timeRemaining !== null ? formatTime(timeRemaining) : formatTime(mockExamTime)}
                {timeRemaining !== null && <span className="text-xs text-gray-500 ml-1">left</span>}
              </div>
            )}

            {streak >= 2 && (
              <div className="glass-card px-3 py-2 flex items-center gap-2 border-yellow-500/30 animate-pulse">
                <span>🔥</span>
                <span className="text-yellow-400 font-bold">{streak}x</span>
              </div>
            )}

            <div className="glass-card px-3 py-2 text-emerald-400 font-bold text-sm">
              ✓ {score.correct}/{score.total}
            </div>
          </div>

          <div className="h-1.5 bg-white/10 rounded-full mb-5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>

          <div className={`glass-card p-6 ${animation === 'correct' ? 'animate-correct' : animation === 'incorrect' ? 'animate-shake' : ''}`}>
            {currentSubject === 'mock' && currentQuestion.subject && isSubject(currentQuestion.subject) && (
              <div className="flex gap-2 mb-3 flex-wrap">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${subjectInfo[currentQuestion.subject].color}20`,
                    color: subjectInfo[currentQuestion.subject].color
                  }}
                >
                  {subjectInfo[currentQuestion.subject].mascot} {subjectInfo[currentQuestion.subject].name}
                </span>
              </div>
            )}

            <span className="inline-block bg-white/10 text-gray-400 px-3 py-1 rounded-full text-xs font-semibold mb-4 capitalize">
              {currentQuestion.type}
            </span>

            <h2 className="text-lg md:text-xl font-semibold text-white mb-5 leading-relaxed">
              {currentQuestion.question}
            </h2>

            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === currentQuestion.answer
                const showCorrect = showResult && isCorrect
                const showWrong = showResult && isSelected && !isCorrect
                
                return (
                  <button
                    key={index}
                    onClick={(e) => handleAnswerSelect(index, e)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-xl border-2 text-left flex items-center gap-3 transition-all ${
                      showCorrect ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400' :
                      showWrong ? 'bg-red-500/15 border-red-500 text-red-400' :
                      isSelected ? 'bg-purple-500/15 border-purple-400 text-purple-300' :
                      'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'
                    } ${showResult ? 'cursor-default' : 'cursor-pointer hover:scale-[1.01]'}`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                      showCorrect ? 'bg-emerald-500 text-white' :
                      showWrong ? 'bg-red-500 text-white' :
                      isSelected ? 'bg-purple-400 text-white' :
                      'bg-white/10 text-gray-500'
                    }`}>
                      {showCorrect ? '✓' : showWrong ? '✗' : String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                )
              })}
            </div>

            {showResult && (
              <div className={`mt-5 p-4 rounded-xl animate-slide-in ${
                selectedAnswer === currentQuestion.answer
                  ? 'bg-emerald-500/10 border border-emerald-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}>
                <p className={`font-bold mb-2 ${
                  selectedAnswer === currentQuestion.answer ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {selectedAnswer === currentQuestion.answer
                    ? encouragements.correct[Math.floor(Math.random() * encouragements.correct.length)]
                    : encouragements.incorrect[Math.floor(Math.random() * encouragements.incorrect.length)]
                  }
                </p>
                <p className="text-gray-400 text-sm">{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="mt-6 text-center">
              {!showResult ? (
                <button
                  onClick={checkAnswer}
                  disabled={selectedAnswer === null}
                  className={`px-10 py-3 rounded-xl font-bold transition-all ${
                    selectedAnswer === null
                      ? 'bg-white/10 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30 hover:scale-105'
                  }`}
                >
                  Check! 확인! ✓
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="px-10 py-3 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30 hover:scale-105 animate-pulse"
                >
                  {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Next! 다음! →' : 'Results! 🎉'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {currentView === 'results' && (
        <div className="animate-slide-in text-center">
          <div className="glass-card p-8">
            <div className={`text-6xl mb-4 ${score.correct / score.total >= 0.8 ? 'animate-mascot-excited' : 'animate-float'}`}>
              {score.correct / score.total >= 0.9 ? '🏆' :
               score.correct / score.total >= 0.7 ? '🌟' :
               score.correct / score.total >= 0.5 ? '💪' : '🌸'}
            </div>

            <h2 className="font-display text-2xl md:text-3xl gradient-text mb-2">
              {score.correct / score.total >= 0.9 ? 'LEGENDARY! 전설! 🔥' :
               score.correct / score.total >= 0.8 ? 'AMAZING! 대단해요!' :
               score.correct / score.total >= 0.6 ? 'GREAT JOB! 잘했어요!' :
               score.correct / score.total >= 0.4 ? 'GOOD TRY! 좋아요!' : 'KEEP GOING! 화이팅!'}
            </h2>

            {currentSubject === 'mock' && (
              <p className="text-purple-400 mb-4">
                {currentLevel === 'full' ? 'Full Mock Complete!' : 'Quick Mock Complete!'} ⏱️ {formatTime(mockExamTime)}
              </p>
            )}

            <div className="bg-white/5 rounded-2xl p-6 my-6">
              <div className={`text-5xl font-bold bg-gradient-to-r ${
                score.correct / score.total >= 0.7 ? 'from-emerald-400 to-cyan-400' : 'from-pink-400 to-purple-400'
              } bg-clip-text text-transparent`}>
                {score.correct} / {score.total}
              </div>
              <div className="text-gray-500 mt-1">{Math.round((score.correct / score.total) * 100)}% Correct!</div>
              
              <div className={`mt-4 text-2xl ${score.correct / score.total >= 0.7 ? 'animate-rainbow' : ''}`}>
                {score.correct / score.total >= 0.9 ? '★★★' :
                 score.correct / score.total >= 0.7 ? '★★☆' :
                 score.correct / score.total >= 0.5 ? '★☆☆' : '☆☆☆'}
              </div>

              <div className="mt-4 inline-block bg-yellow-400/15 px-4 py-2 rounded-full">
                <span className="text-yellow-400 font-bold">
                  +{score.correct * (currentLevel === 'hard' ? 30 : currentLevel === 'medium' ? 20 : 15)} XP earned!
                </span>
              </div>
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              {currentSubject === 'mock' ? (
                <button
                  onClick={currentLevel === 'full' ? startFullMockExam : () => setShowQuickMockSelect(true)}
                  className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                >
                  🎯 New Mock
                </button>
              ) : isSubject(currentSubject) && isLevel(currentLevel) ? (
                <button
                  onClick={() => startSubject(currentSubject, currentLevel)}
                  className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                >
                  🔄 Try Again
                </button>
              ) : null}
              <button
                onClick={goHome}
                className="glass-card px-6 py-3 font-bold"
              >
                🏠 Home
              </button>
            </div>
          </div>

          <div className="glass-card p-4 mt-4 text-gray-400 text-sm">
            {score.correct / score.total >= 0.9
              ? "Perfect! You're ready for the real exam! 시험 준비 완료! 🏆"
              : score.correct / score.total >= 0.7
              ? "Outstanding! Keep up this momentum! 최고예요! ✨"
              : score.correct / score.total >= 0.5
              ? "You're making great progress! 계속 화이팅! 🌟"
              : "Every question makes you stronger! 포기하지 마세요! 💪"
            }
          </div>
        </div>
      )}
    </div>
  )
}