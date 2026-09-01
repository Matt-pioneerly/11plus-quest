'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import Quiz from '@/components/Quiz'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function QuizPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [supabase.auth])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-float">🦊</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {user ? (
        <Navbar user={user} />
      ) : (
        <nav className="glass-card m-4 px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-display text-xl gradient-text">11+ QUEST</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/resources" className="text-gray-300 hover:text-white transition-colors text-sm">
                📚 Resources
              </Link>
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm">
                Sign in to save progress
              </Link>
            </div>
          </div>
        </nav>
      )}
      <Quiz user={user} />
    </div>
  )
}
