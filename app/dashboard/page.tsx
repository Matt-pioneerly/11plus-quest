'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar'
import { subjectInfo } from '@/lib/questions'
import Image from 'next/image'

type UserStats = {
  total_xp: number
  total_correct: number
  total_questions: number
  mock_exams_completed: number
  perfect_scores: number
  best_streak: number
}

type RecentScore = {
  id: string
  score: number
  total: number
  percentage: number
  subject: string
  level: string
  time_taken: number
  created_at: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<UserStats | null>(null)
  const [recentScores, setRecentScores] = useState<RecentScore[]>([])
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/')
        return
      }
      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [router, supabase.auth])

  useEffect(() => {
    const loadData = async () => {
      if (!user) return

      // Load user stats
      const { data: statsData } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .single()
      
      if (statsData) setStats(statsData)

      // Load recent scores
      const { data: scores } = await supabase
        .from('scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10)
      
      if (scores) setRecentScores(scores)
    }
    
    loadData()
  }, [user, supabase])

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-float">📊</div>
      </div>
    )
  }

  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Player'
  const avatarUrl = user.user_metadata?.avatar_url
  const accuracy = stats ? Math.round((stats.total_correct / stats.total_questions) * 100) || 0 : 0

  return (
    <div className="min-h-screen">
      <Navbar user={user} />
      
      <div className="p-4 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="glass-card p-6 mb-6 text-center">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={displayName}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
              {displayName[0].toUpperCase()}
            </div>
          )}
          <h1 className="text-2xl font-bold text-white mb-1">{displayName}</h1>
          <p className="text-purple-400">{user.email}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="glass-card p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-yellow-400">{stats?.total_xp?.toLocaleString() || 0}</div>
            <div className="text-xs text-gray-500">Total XP</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl mb-2">✓</div>
            <div className="text-2xl font-bold text-emerald-400">{stats?.total_correct || 0}</div>
            <div className="text-xs text-gray-500">Correct</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-pink-400">{stats?.mock_exams_completed || 0}</div>
            <div className="text-xs text-gray-500">Mocks</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl mb-2">💯</div>
            <div className="text-2xl font-bold text-purple-400">{stats?.perfect_scores || 0}</div>
            <div className="text-xs text-gray-500">Perfect</div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="glass-card p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Overall Accuracy</span>
            <span className="font-bold text-white">{accuracy}%</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                accuracy >= 80 ? 'bg-emerald-500' :
                accuracy >= 60 ? 'bg-yellow-500' :
                'bg-pink-500'
              }`}
              style={{ width: `${accuracy}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {stats?.total_correct || 0} / {stats?.total_questions || 0} questions
          </div>
        </div>

        {/* Recent Activity */}
        <h2 className="text-lg font-semibold text-white mb-3">Recent Activity</h2>
        <div className="space-y-3">
          {recentScores.length === 0 ? (
            <div className="glass-card p-8 text-center text-gray-400">
              No activity yet! Start practicing! 🚀
            </div>
          ) : (
            recentScores.map((score) => (
              <div key={score.id} className="glass-card p-4 flex items-center gap-4">
                <div className="text-2xl">
                  {score.subject === 'mock' ? '🎯' : 
                   score.subject in subjectInfo ? subjectInfo[score.subject as keyof typeof subjectInfo].mascot : '📝'}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">
                    {score.subject === 'mock' ? 'Mock Exam' : 
                     score.subject in subjectInfo ? subjectInfo[score.subject as keyof typeof subjectInfo].name : score.subject}
                  </div>
                  <div className="text-xs text-gray-500">
                    {score.score}/{score.total} • {Math.floor(score.time_taken / 60)}:{(score.time_taken % 60).toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${
                    score.percentage >= 90 ? 'text-yellow-400' :
                    score.percentage >= 70 ? 'text-emerald-400' :
                    'text-pink-400'
                  }`}>
                    {score.percentage}%
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(score.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
