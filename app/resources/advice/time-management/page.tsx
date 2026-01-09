import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time Management in the 11+ | Teaching Your Child to Pace | 11+ Quest',
  description: 'Help your child manage time effectively in the 11+ exam. Strategies for pacing, when to skip questions, and how to practice under timed conditions.',
  keywords: '11+ time management, 11+ exam timing, 11+ pacing, how long per question 11+',
}

export default function TimeManagementPage() {
  return (
    <main className="min-h-screen">
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="font-display text-xl gradient-text">11+ QUEST</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/resources" className="text-white font-semibold text-sm">11+ Resources for Parents</Link>
          <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">Start Free</Link>
        </div>
      </nav>

      <div className="px-4 max-w-4xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          <span>→</span>
          <span className="text-white">Time Management</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">Parent Advice</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">Time Management in the 11+</h1>
          <p className="text-gray-400 text-lg">Teaching your child to pace themselves under pressure.</p>
        </header>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">⏱️ The Numbers</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-400">45-50</div>
                <div className="text-gray-500 text-sm">seconds per question</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400">30</div>
                <div className="text-gray-500 text-sm">seconds max on hard questions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              With ~80 questions in 50 minutes, there&apos;s no time to get stuck. Speed AND accuracy are essential.
            </p>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">🎯 Key Strategies</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">1.</span> <strong className="text-white">Skip and return:</strong> If stuck for more than 30 seconds, mark it and move on</li>
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">2.</span> <strong className="text-white">Answer everything:</strong> No negative marking - always guess if unsure</li>
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">3.</span> <strong className="text-white">Easy ones first:</strong> Quick wins build confidence and guarantee marks</li>
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">4.</span> <strong className="text-white">Watch the clock:</strong> Check time at halfway and with 10 mins left</li>
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">5. </span> <strong className="text-white">Fill in remaining:</strong> With 2 minutes left, answer any blanks quickly</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">🏋️ How to Practice</h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Start untimed to build accuracy, then add time pressure gradually</li>
              <li>• Use a visible timer so they learn to pace themselves</li>
              <li>• Practice the &quot;skip and return&quot; technique regularly</li>
              <li>• Do weekly timed sections (not full papers every time)</li>
              <li>• Review skipped questions - were they actually hard or just unfamiliar?</li>
            </ul>
          </div>

          <div className="glass-card p-6 border border-yellow-500/20">
            <h2 className="text-lg font-bold text-yellow-400 mb-3">⚠️ Common Mistakes</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>❌ Spending 3+ minutes on one question while running out of time</li>
              <li>❌ Not answering questions because they &quot;didn&apos;t get to them&quot;</li>
              <li>❌ Rushing through easy questions and making careless errors</li>
              <li>❌ Panicking when they see they&apos;re behind - stay calm and strategic</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <Link href="/login" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          Practice with Timer ✨
        </Link>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-display gradient-text">11+ QUEST</span>
          </Link>
          <p className="text-gray-500 text-sm">© 2025 11+ Quest</p>
        </div>
      </footer>
    </main>
  )
}
