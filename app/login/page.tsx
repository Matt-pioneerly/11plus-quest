'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import Link from 'next/link'

export default function LoginPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState<'login' | 'signup' | 'magic'>('login')
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

  const handleEmailPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    
    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
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
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) {
        setError(error.message)
        setSending(false)
      } else {
        router.push('/quiz')
      }
    }
  }

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
        {/* Back to home */}
        <Link href="/" className="inline-block mb-8 text-gray-400 hover:text-white transition-colors">
          ← Back to home
        </Link>

        {/* Logo */}
        <div className="animate-float mb-8">
          <h1 className="font-display text-4xl md:text-6xl gradient-text animate-shimmer mb-2">
            ★ 11+ QUEST ★
          </h1>
          <p className="text-purple-400 text-lg tracking-widest">
            LEVEL UP YOUR BRAIN! 🚀
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
                {mode === 'signup' ? 'Create Account' : mode === 'magic' ? 'Magic Link Login' : 'Welcome Back!'}
              </h2>
              <p className="text-gray-400 mb-6">
                {mode === 'signup' ? 'Sign up to start your 11+ journey' : mode === 'magic' ? 'Enter your email to get a magic login link' : 'Sign in to continue your progress'}
              </p>

              <form onSubmit={mode === 'magic' ? handleMagicLink : handleEmailPassword}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-pink-500"
                />
                
                {mode !== 'magic' && (
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password (min 6 characters)"
                    required
                    minLength={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-pink-500"
                  />
                )}
                
                {error && (
                  <p className="text-red-400 text-sm mb-4">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {sending ? 'Please wait...' : mode === 'signup' ? '✨ Create Account' : mode === 'magic' ? '✨ Send Magic Link' : '✨ Sign In'}
                </button>
              </form>

              <div className="mt-6 space-y-2">
                {mode === 'login' && (
                  <>
                    <p className="text-gray-500 text-sm">
                      Don't have an account?{' '}
                      <button onClick={() => { setMode('signup'); setError(''); }} className="text-pink-400 hover:text-pink-300">
                        Sign up
                      </button>
                    </p>
                    <p className="text-gray-500 text-sm">
                      Prefer passwordless?{' '}
                      <button onClick={() => { setMode('magic'); setError(''); }} className="text-purple-400 hover:text-purple-300">
                        Use magic link
                      </button>
                    </p>
                  </>
                )}
                {mode === 'signup' && (
                  <p className="text-gray-500 text-sm">
                    Already have an account?{' '}
                    <button onClick={() => { setMode('login'); setError(''); }} className="text-pink-400 hover:text-pink-300">
                      Sign in
                    </button>
                  </p>
                )}
                {mode === 'magic' && (
                  <p className="text-gray-500 text-sm">
                    Prefer password?{' '}
                    <button onClick={() => { setMode('login'); setError(''); }} className="text-pink-400 hover:text-pink-300">
                      Sign in with password
                    </button>
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h2 className="text-2xl font-bold text-white mb-2">Check your email!</h2>
              <p className="text-gray-400 mb-4">
                We sent a {mode === 'signup' ? 'confirmation' : 'magic'} link to <span className="text-pink-400">{email}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Click the link in the email to {mode === 'signup' ? 'verify your account' : 'sign in'}.
              </p>
              <button
                onClick={() => { setSent(false); setError(''); }}
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
