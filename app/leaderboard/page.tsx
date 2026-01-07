'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

type LeaderboardEntry = {
  id: string
  user_id: string
  user_name: string
  user_avatar?: string
  score: number
  total: number
  percentage: number
  subject: string
  level: string
  time_taken: number
  created_at: string
}

type UserStat = {
  user_id: string
  user_name: string
  user_avatar?: string
  total_xp: number
  total_correct: number
  mock_exams_completed: number
}

export default function LeaderboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'recent' | 'alltime'>('recent')
  const [recentScores, setRecentScores] = useState<LeaderboardEntry[]>([])
  const [topUsers, setTopUsers] = useState<UserStat[]>([])
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
    const loadLeaderboard = async () => {
      // Recent high scores
      const { data: recent } = await supabase
        .from('scores')
        .select('*')
        .gte('percentage', 70)
        .order('created_at', { ascending: false })
        .limit(20)
      
      if (recent) setRecentScores(recent)

      // All-time top users by XP
      const { data: top } = await supabase
        .from('user_stats')
        .select('*')
        .order('total_xp', { ascending: false })
        .limit(20)
      
      if (top) setTopUsers(top)
    }
    
    loadLeaderboard()
  }, [supabase])

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-float">🏆</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar user={user} />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="font-display text-3xl gradient-text mb-2">🏆 Leaderboard</h1>
          <p className="text-purple-400">Top performers! 최고의 성적!</p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setView('recent')}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              view === 'recent' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                : 'glass-card text-gray-400'
            }`}
          >
            Recent Scores
          </button>
          <button
            onClick={() => setView('alltime')}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              view === 'alltime' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                : 'glass-card text-gray-400'
            }`}
          >
            All-Time XP
          </button>
        </div>

        {/* Recent Scores */}
        {view === 'recent' && (
          <div className="space-y-3">
            {recentScores.length === 0 ? (
              <div className="glass-card p-8 text-center text-gray-400">
                No scores yet! Be the first! 🚀
              </div>
            ) : (
              recentScores.map((entry, index) => (
                <div
                  key={entry.id}
                  className={`glass-card p-4 flex items-center gap-4 ${
                    entry.user_id === user.id ? 'border-2 border-pink-500/50' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500 text-black' :
                    index === 1 ? 'bg-gray-300 text-black' :
                    index === 2 ? 'bg-amber-600 text-white' :
                    'bg-white/10 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>

                  {entry.user_avatar ? (
                    <Image
                      src={entry.user_avatar}
                      alt={entry.user_name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                      {entry.user_name[0].toUpperCase()}
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="font-semibold text-white">{entry.user_name}</div>
                    <div className="text-xs text-gray-500">
                      {entry.subject === 'mock' ? '🎯 Mock Exam' : entry.subject} • {entry.score}/{entry.total}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`font-bold ${
                      entry.percentage >= 90 ? 'text-yellow-400' :
                      entry.percentage >= 80 ? 'text-emerald-400' :
                      'text-purple-400'
                    }`}>
                      {entry.percentage}%
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(entry.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* All-Time XP */}
        {view === 'alltime' && (
          <div className="space-y-3">
            {topUsers.length === 0 ? (
              <div className="glass-card p-8 text-center text-gray-400">
                No players yet! Start practicing! 🚀
              </div>
            ) : (
              topUsers.map((entry, index) => (
                <div
                  key={entry.user_id}
                  className={`glass-card p-4 flex items-center gap-4 ${
                    entry.user_id === user.id ? 'border-2 border-pink-500/50' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    index === 0 ? 'bg-yellow-500 text-black text-xl' :
                    index === 1 ? 'bg-gray-300 text-black' :
                    index === 2 ? 'bg-amber-600 text-white' :
                    'bg-white/10 text-gray-400'
                  }`}>
                    {index === 0 ? '👑' : index + 1}
                  </div>

                  {entry.user_avatar ? (
                    <Image
                      src={entry.user_avatar}
                      alt={entry.user_name || 'User'}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                      {(entry.user_name || 'U')[0].toUpperCase()}
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="font-semibold text-white">{entry.user_name || 'Anonymous'}</div>
                    <div className="text-xs text-gray-500">
                      {entry.total_correct} correct • {entry.mock_exams_completed} mocks
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-yellow-400 flex items-center gap-1">
                      ⚡ {entry.total_xp.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">XP</div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
