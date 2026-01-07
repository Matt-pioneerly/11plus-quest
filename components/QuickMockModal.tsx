'use client'

import { subjectInfo, Subject } from '@/lib/questions'

type Props = {
  onSelect: (subject: Subject | 'all') => void
  onClose: () => void
}

export default function QuickMockModal({ onSelect, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card p-6 max-w-md w-full animate-slide-in">
        <h3 className="font-display text-xl text-white text-center mb-2">⚡ Quick Mock</h3>
        <p className="text-gray-400 text-center mb-5 text-sm">Choose a subject or mix all!</p>

        <div className="space-y-2">
          <button
            onClick={() => onSelect('all')}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-2 border-pink-500/40 flex items-center gap-3 hover:border-pink-500/60 transition-colors"
          >
            <span className="text-2xl">🎯</span>
            <span className="font-semibold text-white">All Subjects Mixed</span>
          </button>

          {(Object.entries(subjectInfo) as [Subject, typeof subjectInfo.verbal][]).map(([key, info]) => (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className="w-full p-4 rounded-xl flex items-center gap-3 transition-colors"
              style={{
                background: `${info.color}15`,
                border: `2px solid ${info.color}40`
              }}
            >
              <span className="text-2xl">{info.mascot}</span>
              <span className="font-semibold text-white">{info.name}</span>
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 p-3 rounded-xl bg-white/10 border border-white/20 text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
