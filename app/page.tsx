'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
      
      if (user) {
        router.push('/quiz')
      }
    }
    getUser()
  }, [router, supabase.auth])

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    
    if (error) {
      setError(error.message)
      setSending(false)
    } else {
      setSent(true)
      setSending(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-float">🦊</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center animate-slide-in">
        {/* Logo */}
        <div className="animate-float mb-8">
          <h1 className="font-display text-4xl md:text-6xl gradient-text animate-shimmer mb-2">
            ★ 11+ QUEST ★
          </h1>
          <p className="text-purple-400 text-lg tracking-widest">
            레벨업! LEVEL UP YOUR BRAIN! 🚀
          </p>
        </div>

        {/* Mascots */}
        <div className="flex justify-center gap-4 mb-12">
          {['🦊', '🐱', '🐰', '🐻'].map((mascot, i) => (
            <span
              key={i}
              className="text-5xl animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {mascot}
            </span>
          ))}
        </div>

        {/* Login Card */}
        <div className="glass-card p-8 max-w-md mx-auto animate-pulse-glow">
          {!sent ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Begin? 준비됐어요?
              </h2>
              <p className="text-gray-400 mb-6">
                Enter your email to get a magic login link!
              </p>

              <form onSubmit={handleMagicLink}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-pink-500"
                />
                
                {error && (
                  <p className="text-red-400 text-sm mb-4">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {sending ? 'Sending...' : '✨ Send Magic Link'}
                </button>
              </form>

              <p className="text-gray-500 text-sm mt-4">
                No password needed - check your email!
              </p>
            </>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h2 className="text-2xl font-bold text-white mb-2">Check your email!</h2>
              <p className="text-gray-400 mb-4">
                We sent a magic link to <span className="text-pink-400">{email}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Click the link in the email to sign in. 화이팅!
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-purple-400 hover:text-purple-300"
              >
                Use a different email
              </button>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          {[
            { icon: '🎯', text: 'Mock Exams' },
            { icon: '🏆', text: 'Leaderboard' },
            { icon: '⚡', text: 'XP System' },
            { icon: '🔥', text: 'Streaks' },
          ].map((feature, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <span className="text-2xl">{feature.icon}</span>
              <p className="text-gray-300 text-sm mt-1">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}