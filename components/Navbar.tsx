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
  const [isPro, setIsPro] = useState(false)
  const [childName, setChildName] = useState<string | null>(null)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const loadData = async () => {
      // Check subscription
      const { data: stats } = await supabase
        .from('user_stats')
        .select('subscription_status')
        .eq('user_id', user.id)
        .single()
      
      setIsPro(stats?.subscription_status === 'active')

      // Get child name for display
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
    <nav className="glass-card m-4 px-4 py-3 flex items-center justify-between">
      <Link href="/quiz" className="flex items-center gap-2">
        <span className="text-2xl">⭐</span>
        <span className="font-display text-xl gradient-text hidden sm:inline">11+ QUEST</span>
      </Link>

      <div className="flex items-center gap-4">
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
          href="/leaderboard" 
          className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
        >
          <span>🏆</span>
          <span className="hidden sm:inline">Leaderboard</span>
        </Link>

        <Link 
          href="/dashboard" 
          className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
        >
          <span>📊</span>
          <span className="hidden sm:inline">Stats</span>
        </Link>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
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
            <span className="text-white text-sm hidden sm:inline">{displayName}</span>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 glass-card p-2 z-50">
              <div className="px-3 py-2 text-sm text-gray-400 border-b border-white/10">
                {user.email}
              </div>
              <Link
                href="/settings"
                className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setShowMenu(false)}
              >
                ⚙️ Settings
              </Link>
              {isPro && (
                <Link
                  href="/pricing"
                  className="block px-3 py-2 text-sm text-purple-400 hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  💳 Manage Subscription
                </Link>
              )}
              <button
                onClick={handleSignOut}
                className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                🚪 Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
