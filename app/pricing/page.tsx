'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import { User } from '@supabase/supabase-js'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

function PricingContent() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const { data } = await supabase
          .from('user_stats')
          .select('subscription_status')
          .eq('user_id', user.id)
          .single()
        
        if (data?.subscription_status) {
          setSubscriptionStatus(data.subscription_status)
        }
      }
      
      setLoading(false)
    }
    getUser()
  }, [supabase])

  const handleCheckout = async () => {
    if (!user) {
      router.push('/login')
      return
    }
    
    setCheckoutLoading(true)
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
      })
      const data = await response.json()
      
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
    }
    setCheckoutLoading(false)
  }

  const handleManageSubscription = async () => {
    try {
      const response = await fetch('/api/stripe/portal', {
        method: 'POST',
      })
      const data = await response.json()
      
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Portal error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-float">💎</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {user ? (
        <Navbar user={user} />
      ) : (
        <nav className="flex items-center justify-between p-4 md:p-6 max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-display text-xl gradient-text">11+ QUEST</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About</Link>
            <Link href="/resources" className="text-gray-300 hover:text-white transition-colors text-sm">11+ Resources for Parents</Link>
            <Link href="/pricing" className="text-pink-400 font-semibold text-sm">Pricing</Link>
            <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Start Free
            </Link>
          </div>
        </nav>
      )}
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl gradient-text mb-2">Upgrade to Pro ⭐</h1>
          <p className="text-purple-400">Unlock unlimited practice and mock exams!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Free Tier */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-2">Free</h2>
            <div className="text-3xl font-bold text-gray-400 mb-4">£0</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-emerald-400">✓</span> 5 questions per day
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-red-400">✗</span> Mock exams
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-red-400">✗</span> Leaderboard access
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-red-400">✗</span> Progress tracking
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="text-red-400">✗</span> All difficulty levels
              </li>
            </ul>
            {user ? (
              <button 
                onClick={() => router.push('/quiz')}
                className="w-full py-3 rounded-xl border border-white/20 text-gray-400 hover:bg-white/5 transition-colors"
              >
                Current Plan
              </button>
            ) : (
              <Link 
                href="/login"
                className="block w-full py-3 rounded-xl border border-white/20 text-gray-400 hover:bg-white/5 transition-colors text-center"
              >
                Get Started Free
              </Link>
            )}
          </div>

          {/* Pro Tier */}
          <div className="glass-card p-6 border-2 border-pink-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              BEST VALUE
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Pro ⭐</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">£19.99</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-white">
                <span className="text-emerald-400">✓</span> Unlimited questions
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="text-emerald-400">✓</span> Full & Quick mock exams
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="text-emerald-400">✓</span> Global leaderboard
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="text-emerald-400">✓</span> Detailed progress tracking
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="text-emerald-400">✓</span> All difficulty levels
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="text-emerald-400">✓</span> XP & streak bonuses
              </li>
            </ul>
            
            {subscriptionStatus === 'active' ? (
              <button 
                onClick={handleManageSubscription}
                className="w-full py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors"
              >
                Manage Subscription
              </button>
            ) : (
              <button 
                onClick={handleCheckout}
                disabled={checkoutLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {checkoutLoading ? 'Loading...' : user ? 'Upgrade Now 🚀' : 'Start Free Trial 🚀'}
              </button>
            )}
          </div>
        </div>

        {/* Fair Access */}
        <div className="glass-card p-6 mb-8 border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💜</div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2">Fair Access for All Families</h3>
              <p className="text-gray-300 mb-3">
                We believe every child deserves the chance to succeed, regardless of their family's financial situation. 
                Education should never be limited by what you can afford.
              </p>
              <p className="text-gray-400 text-sm">
                If the subscription cost is a barrier for your family, please{' '}
                <a href="mailto:hello@11plusquest.com" className="text-pink-400 hover:text-pink-300 underline">
                  get in touch
                </a>{' '}
                and we will arrange free Pro access. No questions asked, no proof required.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="glass-card p-6">
          <h3 className="font-bold text-white mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-white font-semibold">Can I cancel anytime?</p>
              <p className="text-gray-400">Yes! Cancel anytime from your account settings. No questions asked.</p>
            </div>
            <div>
              <p className="text-white font-semibold">Is my payment secure?</p>
              <p className="text-gray-400">100%. We use Stripe, the same payment system used by Amazon and Google.</p>
            </div>
            <div>
              <p className="text-white font-semibold">What age is this for?</p>
              <p className="text-gray-400">Perfect for Year 5 and Year 6 students preparing for 11+ exams.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-4xl animate-float">💎</div></div>}>
      <PricingContent />
    </Suspense>
  )
}
