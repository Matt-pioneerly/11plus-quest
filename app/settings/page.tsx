'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar'

type Profile = {
  child_name: string
  child_age: string
  school: string
  target_school: string
  exam_date: string
  parent_email: string
  report_frequency: 'none' | 'daily' | 'weekly'
}

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [profile, setProfile] = useState<Profile>({
    child_name: '',
    child_age: '',
    school: '',
    target_school: '',
    exam_date: '',
    parent_email: '',
    report_frequency: 'weekly',
  })
  
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/')
        return
      }
      setUser(user)

      const { data } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()
      
      if (data) {
        setProfile({
          child_name: data.child_name || '',
          child_age: data.child_age || '',
          school: data.school || '',
          target_school: data.target_school || '',
          exam_date: data.exam_date || '',
          parent_email: data.parent_email || user.email || '',
          report_frequency: data.report_frequency || 'weekly',
        })
      } else {
        setProfile(prev => ({ ...prev, parent_email: user.email || '' }))
      }
      
      setLoading(false)
    }
    loadProfile()
  }, [router, supabase])

  const handleSave = async () => {
    if (!user) return
    
    setSaving(true)
    
    const { error } = await supabase
      .from('user_profiles')
      .upsert({
        user_id: user.id,
        ...profile,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' })
    
    if (!error) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
    
    setSaving(false)
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-float">⚙️</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar user={user} />
      
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="font-display text-3xl gradient-text mb-2">Settings</h1>
        <p className="text-gray-400 mb-8">Manage your profile and preferences</p>

        {saved && (
          <div className="glass-card p-4 mb-6 border border-emerald-500/30 text-emerald-400 text-center">
            ✓ Settings saved successfully!
          </div>
        )}

        {/* Child Profile */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>👤</span> Child&apos;s Profile
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">Child&apos;s Name</label>
              <input
                type="text"
                value={profile.child_name}
                onChange={(e) => setProfile({ ...profile, child_name: e.target.value })}
                placeholder="Enter name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Year Group</label>
                <select
                  value={profile.child_age}
                  onChange={(e) => setProfile({ ...profile, child_age: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-pink-500"
                >
                  <option value="">Select...</option>
                  <option value="year4">Year 4 (Age 8-9)</option>
                  <option value="year5">Year 5 (Age 9-10)</option>
                  <option value="year6">Year 6 (Age 10-11)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-1">Exam Date</label>
                <input
                  type="month"
                  value={profile.exam_date}
                  onChange={(e) => setProfile({ ...profile, exam_date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-pink-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-1">Current School</label>
              <input
                type="text"
                value={profile.school}
                onChange={(e) => setProfile({ ...profile, school: e.target.value })}
                placeholder="Enter current school"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-1">Target Grammar School</label>
              <input
                type="text"
                value={profile.target_school}
                onChange={(e) => setProfile({ ...profile, target_school: e.target.value })}
                placeholder="Enter target school"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>
        </div>

        {/* Parent Reports */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📧</span> Parent Reports
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Receive progress reports showing time spent, scores, strengths, and areas to focus on.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">Parent&apos;s Email</label>
              <input
                type="email"
                value={profile.parent_email}
                onChange={(e) => setProfile({ ...profile, parent_email: e.target.value })}
                placeholder="parent@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-2">Report Frequency</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'none', label: 'None', desc: 'No emails' },
                  { value: 'daily', label: 'Daily', desc: 'Every evening' },
                  { value: 'weekly', label: 'Weekly', desc: 'Every Sunday' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setProfile({ ...profile, report_frequency: option.value as Profile['report_frequency'] })}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      profile.report_frequency === option.value
                        ? 'border-pink-500 bg-pink-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className={`font-bold ${profile.report_frequency === option.value ? 'text-pink-400' : 'text-white'}`}>
                      {option.label}
                    </div>
                    <div className="text-gray-500 text-xs">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🔐</span> Account
          </h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Login Email</span>
              <span className="text-white">{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Account Created</span>
              <span className="text-white">{new Date(user.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  )
}
