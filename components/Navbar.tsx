'use client'

import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

type Props = {
  user: User
}

export default function Navbar({ user }: Props) {
  const [showMenu, setShowMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isPro, setIsPro] = useState(false)
  const [childName, setChildName] = useState<string | null>(null)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const loadData = async () => {
      const { data: stats } = await supabase
        .from('user_stats')
        .select('subscription_status')
        .eq('user_id', user.id)
        .single()
      
      setIsPro(stats?.subscription_status === 'active')

      const { data: profile } = await supabase
        .from('user_profiles')
        .select('child_name')
        .eq('user_id', user.id)
        .single()
      
      if (profile?.child_name) {
        setChildName(profile.child_name)
      }
    }
    loadData()
  }, [user.id, supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const displayName = childName || user.user_metadata?.full_name || user.email?.split('@')[0] || 'Player'
  const avatarUrl = user.user_metadata?.avatar_url

  return (
    <nav className="glass-card m-4 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/quiz" className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="font-display text-xl gradient-text hidden sm:inline">11+ QUEST</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {!isPro && (
            <Link 
              href="/pricing" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              ⭐ Upgrade
            </Link>
          )}

          {isPro && (
            <span className="text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full font-bold">
              PRO
            </span>
          )}

          <Link 
            href="/resources" 
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
          >
            <span>📚</span>
            <span>Resources</span>
          </Link>

          <Link 
            href="/leaderboard" 
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
          >
            <span>🏆</span>
            <span>Leaderboard</span>
          </Link>

          <Link 
            href="/dashboard" 
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
          >
            <span>📊</span>
            <span>Stats</span>
          </Link>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity pl-3 border-l border-white/10"
            >
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={displayName}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {displayName[0].toUpperCase()}
                </div>
              )}
              <span className="text-white text-sm">{displayName}</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${showMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                <div className="absolute right-0 mt-2 w-56 glass-card p-2 z-50 border border-white/10">
                  <div className="px-3 py-2 border-b border-white/10 mb-1">
                    <p className="text-white text-sm font-medium">{displayName}</p>
                    <p className="text-gray-500 text-xs">{user.email}</p>
                  </div>
                  <Link
                    href="/settings"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setShowMenu(false)}
                  >
                    <span className="text-base">⚙️</span>
                    <span>Settings</span>
                  </Link>
                  {isPro && (
                    <Link
                      href="/pricing"
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setShowMenu(false)}
                    >
                      <span className="text-base">💳</span>
                      <span>Manage Subscription</span>
                    </Link>
                  )}
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <span className="text-base">🚪</span>
                    <span>Sign Out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {!isPro && (
            <Link 
              href="/pricing" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-lg"
            >
              ⭐ Pro
            </Link>
          )}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 text-gray-300 hover:text-white"
          >
            {showMobileMenu ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={displayName}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {displayName[0].toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-white font-medium">{displayName}</p>
              <p className="text-gray-500 text-xs">{user.email}</p>
            </div>
            {isPro && (
              <span className="ml-auto text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full font-bold">
                PRO
              </span>
            )}
          </div>
          
          <div className="space-y-1">
            <Link
              href="/quiz"
              className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              <span className="text-xl">🎮</span>
              <span>Practice</span>
            </Link>
            <Link
              href="/resources"
              className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              <span className="text-xl">📚</span>
              <span>11+ Resources for Parents</span>
            </Link>
            <Link
              href="/leaderboard"
              className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              <span className="text-xl">🏆</span>
              <span>Leaderboard</span>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              <span className="text-xl">📊</span>
              <span>Stats</span>
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              <span className="text-xl">⚙️</span>
              <span>Settings</span>
            </Link>
            {isPro && (
              <Link
                href="/pricing"
                className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                <span className="text-xl">💳</span>
                <span>Manage Subscription</span>
              </Link>
            )}
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 w-full px-3 py-3 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors"
            >
              <span className="text-xl">🚪</span>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
