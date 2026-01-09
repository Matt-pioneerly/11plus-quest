'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        router.push('/quiz')
      } else {
        setLoading(false)
      }
    }
    checkUser()
  }, [router, supabase.auth])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-float">🦊</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with Lighter Gradient */}
      <div className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-[#0f0a1f]" />
        
        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-4 md:p-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-display text-xl gradient-text">11+ QUEST</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</Link>
            <Link href="/resources" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Resources</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
            <Link 
              href="/login" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all"
            >
              Log In
            </Link>
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden items-center gap-3">
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Start Free
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="relative z-10 text-center py-16 md:py-24 px-4 max-w-4xl mx-auto">
          <div className="animate-slide-in">
            {/* Mascots */}
            <div className="flex justify-center gap-4 mb-8">
              {['🦊', '🐱', '🐰', '🐻'].map((mascot, i) => (
                <span
                  key={i}
                  className="text-4xl md:text-5xl animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {mascot}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              11+ Exam Practice
            </h1>
            <h2 className="font-display text-2xl md:text-3xl gradient-text mb-4">
              That Kids Actually Enjoy! 🎮
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Gamified learning with XP, streaks, and leaderboards. 
              Covering Verbal, Non-Verbal, English & Maths - all matched to GL Assessment format.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/login"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/30"
              >
                Start Free - No Card Needed ✨
              </Link>
              <Link 
                href="/about"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>

            <p className="text-gray-400 text-sm">
              ✓ 5 free questions daily &nbsp;•&nbsp; ✓ No credit card required &nbsp;•&nbsp; ✓ Cancel anytime
            </p>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-white mb-12">
          Why Parents & Kids Love 11+ Quest
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-lg font-bold text-white mb-2">Real Exam Format</h4>
            <p className="text-gray-400 text-sm">
              Questions match GL Assessment style. Full 45-minute mock exams with realistic timing pressure.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="text-4xl mb-4">🔥</div>
            <h4 className="text-lg font-bold text-white mb-2">Streaks & XP</h4>
            <p className="text-gray-400 text-sm">
              Earn points, build streaks, climb the leaderboard. Learning feels like a game - because it is!
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-lg font-bold text-white mb-2">Parent Reports</h4>
            <p className="text-gray-400 text-sm">
              Get daily or weekly email reports showing progress, strengths, and areas to focus on.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-white mb-4">
          4 Subjects, 3 Difficulty Levels
        </h3>
        <p className="text-center text-gray-400 mb-12">
          Comprehensive coverage for GL Assessment 11+ exams
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { mascot: '🦊', name: 'Verbal Reasoning', color: '#f472b6', topics: 'Synonyms, Antonyms, Analogies, Codes' },
            { mascot: '🐱', name: 'Non-Verbal', color: '#a78bfa', topics: 'Sequences, Patterns, Spatial, Matrices' },
            { mascot: '🐰', name: 'English', color: '#fb7185', topics: 'Grammar, Spelling, Comprehension' },
            { mascot: '🐻', name: 'Maths', color: '#34d399', topics: 'Arithmetic, Fractions, Algebra, Geometry' },
          ].map((subject, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="text-5xl mb-3 animate-float" style={{ animationDelay: `${i * 0.15}s` }}>
                {subject.mascot}
              </div>
              <h4 className="font-bold mb-2" style={{ color: subject.color }}>{subject.name}</h4>
              <p className="text-gray-500 text-xs">{subject.topics}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">What Parents Say</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <p className="text-gray-300 italic mb-3">
                "My daughter actually asks to practice now. The XP system and streaks keep her motivated!"
              </p>
              <p className="text-pink-400 text-sm font-semibold">— Sarah, Mum of Year 5</p>
            </div>
            <div className="text-left">
              <p className="text-gray-300 italic mb-3">
                "The weekly reports are brilliant - I can see exactly where she needs more practice."
              </p>
              <p className="text-purple-400 text-sm font-semibold">— James, Dad of twins</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Level Up? 🚀
        </h3>
        <p className="text-gray-400 mb-8">
          Join thousands of students preparing for their 11+ exams the fun way.
        </p>
        <Link 
          href="/login"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/30"
        >
          Start Free Today ✨
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-display gradient-text">11+ QUEST</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <p className="text-gray-500 text-sm">© 2025 11+ Quest</p>
        </div>
      </footer>
    </main>
  )
}
