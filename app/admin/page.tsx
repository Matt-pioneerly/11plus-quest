'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface User {
  user_id: string
  child_name: string | null
  parent_email: string | null
  created_at: string
  subscription_status: string | null
  subscription_tier: string | null
  email: string
}

interface Stats {
  totalUsers: number
  proUsers: number
  freeUsers: number
  totalQuestions: number
  todayQuestions: number
  totalSessions: number
}

export default function AdminPage() {
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    checkAdminAndLoadData()
  }, [])

  const checkAdminAndLoadData = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    // Check if user is admin
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('is_admin')
      .eq('user_id', user.id)
      .single()

    if (!profile?.is_admin) {
      router.push('/quiz')
      return
    }

    setIsAdmin(true)
    await loadUsers()
    await loadStats()
    setLoading(false)
  }

  const loadUsers = async () => {
    // Get all user profiles with their auth email
    const { data: profiles } = await supabase
      .from('user_profiles')
      .select('*')
      .order('created_at', { ascending: false })

    // Get subscription info
    const { data: subscriptions } = await supabase
      .from('subscriptions')
      .select('user_id, status, stripe_price_id')

    // Merge data
    const usersWithSubs = profiles?.map(profile => {
      const sub = subscriptions?.find(s => s.user_id === profile.user_id)
      return {
        ...profile,
        subscription_status: sub?.status || 'free',
        subscription_tier: sub?.stripe_price_id ? 'pro' : 'free',
        email: profile.parent_email || 'No email'
      }
    }) || []

    setUsers(usersWithSubs)
  }

  const loadStats = async () => {
    // Total users
    const { count: totalUsers } = await supabase
      .from('user_profiles')
      .select('*', { count: 'exact', head: true })

    // Pro users (active subscriptions)
    const { count: proUsers } = await supabase
      .from('subscriptions')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active')

    // Total questions answered
    const { count: totalQuestions } = await supabase
      .from('scores')
      .select('*', { count: 'exact', head: true })

    // Today's questions
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const { count: todayQuestions } = await supabase
      .from('scores')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today.toISOString())

    // Total sessions
    const { count: totalSessions } = await supabase
      .from('scores')
      .select('user_id, created_at', { count: 'exact', head: true })

    setStats({
      totalUsers: totalUsers || 0,
      proUsers: proUsers || 0,
      freeUsers: (totalUsers || 0) - (proUsers || 0),
      totalQuestions: totalQuestions || 0,
      todayQuestions: todayQuestions || 0,
      totalSessions: totalSessions || 0
    })
  }

  const grantProAccess = async (userId: string) => {
    setActionLoading(userId)
    
    // Create or update subscription
    const { error } = await supabase
      .from('subscriptions')
      .upsert({
        user_id: userId,
        status: 'active',
        stripe_customer_id: 'admin_granted',
        stripe_subscription_id: 'admin_granted_' + Date.now(),
        stripe_price_id: 'admin_granted',
        current_period_end: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // 1 year
      }, {
        onConflict: 'user_id'
      })

    if (error) {
      console.error('Error granting Pro:', error)
      alert('Error granting Pro access')
    } else {
      await loadUsers()
      await loadStats()
    }
    
    setActionLoading(null)
  }

  const revokeProAccess = async (userId: string) => {
    setActionLoading(userId)
    
    const { error } = await supabase
      .from('subscriptions')
      .update({ status: 'canceled' })
      .eq('user_id', userId)

    if (error) {
      console.error('Error revoking Pro:', error)
      alert('Error revoking Pro access')
    } else {
      await loadUsers()
      await loadStats()
    }
    
    setActionLoading(null)
  }

  const filteredUsers = users.filter(user => 
    user.child_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.user_id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-pulse">Loading...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-display text-xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">11+ QUEST</span>
            </Link>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">ADMIN</span>
          </div>
          <Link href="/quiz" className="text-slate-600 hover:text-slate-900 text-sm">
            Back to App
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="text-3xl font-bold text-slate-800">{stats.totalUsers}</div>
              <div className="text-slate-500 text-sm">Total Users</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="text-3xl font-bold text-emerald-500">{stats.proUsers}</div>
              <div className="text-slate-500 text-sm">Pro Users</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="text-3xl font-bold text-slate-600">{stats.freeUsers}</div>
              <div className="text-slate-500 text-sm">Free Users</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="text-3xl font-bold text-purple-500">{stats.totalQuestions.toLocaleString()}</div>
              <div className="text-slate-500 text-sm">Questions Answered</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="text-3xl font-bold text-pink-500">{stats.todayQuestions}</div>
              <div className="text-slate-500 text-sm">Today</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="text-3xl font-bold text-amber-500">{stats.totalSessions.toLocaleString()}</div>
              <div className="text-slate-500 text-sm">Total Sessions</div>
            </div>
          </div>
        )}

        {/* Users Section */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-800">Users ({filteredUsers.length})</h2>
            <input
              type="text"
              placeholder="Search by name, email, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 text-slate-600 font-semibold text-sm">Child Name</th>
                  <th className="text-left p-4 text-slate-600 font-semibold text-sm">Parent Email</th>
                  <th className="text-left p-4 text-slate-600 font-semibold text-sm">Status</th>
                  <th className="text-left p-4 text-slate-600 font-semibold text-sm">Joined</th>
                  <th className="text-left p-4 text-slate-600 font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.user_id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="font-medium text-slate-800">{user.child_name || 'Not set'}</div>
                      <div className="text-xs text-slate-400 font-mono">{user.user_id.slice(0, 8)}...</div>
                    </td>
                    <td className="p-4 text-slate-600 text-sm">{user.email}</td>
                    <td className="p-4">
                      {user.subscription_status === 'active' ? (
                        <span className="bg-emerald-100 text-emerald-600 text-xs font-bold px-2 py-1 rounded">PRO</span>
                      ) : (
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">FREE</span>
                      )}
                    </td>
                    <td className="p-4 text-slate-500 text-sm">
                      {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
                    </td>
                    <td className="p-4">
                      {user.subscription_status === 'active' ? (
                        <button
                          onClick={() => revokeProAccess(user.user_id)}
                          disabled={actionLoading === user.user_id}
                          className="text-red-600 hover:text-red-700 text-sm font-medium disabled:opacity-50"
                        >
                          {actionLoading === user.user_id ? 'Working...' : 'Revoke Pro'}
                        </button>
                      ) : (
                        <button
                          onClick={() => grantProAccess(user.user_id)}
                          disabled={actionLoading === user.user_id}
                          className="text-emerald-600 hover:text-emerald-700 text-sm font-medium disabled:opacity-50"
                        >
                          {actionLoading === user.user_id ? 'Working...' : 'Grant Pro'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
