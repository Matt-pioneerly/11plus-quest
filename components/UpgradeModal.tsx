'use client'

import { useRouter } from 'next/navigation'

type Props = {
  onClose: () => void
  message?: string
}

export default function UpgradeModal({ onClose, message }: Props) {
  const router = useRouter()

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card p-6 max-w-md w-full animate-slide-in text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h3 className="font-display text-xl text-white mb-2">
          Upgrade to Pro!
        </h3>
        <p className="text-gray-400 mb-6">
          {message || "You've reached today's free limit. Upgrade for unlimited access!"}
        </p>

        <div className="space-y-3">
          <button
            onClick={() => router.push('/pricing')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity"
          >
            ⭐ Upgrade Now - £19.99/mo
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            Maybe Later
          </button>
        </div>

        <p className="text-gray-500 text-xs mt-4">
          Unlimited questions • Mock exams • Leaderboard • Cancel anytime
        </p>
      </div>
    </div>
  )
}
