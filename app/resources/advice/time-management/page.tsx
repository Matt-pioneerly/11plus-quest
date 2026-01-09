import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time Management in the 11+ | Teaching Your Child to Pace | 11+ Quest',
  description: 'Help your child manage time effectively in the 11+ exam. Strategies for pacing, when to skip questions, and how to practice under timed conditions.',
  keywords: '11+ time management, 11+ exam timing, 11+ pacing, how long per question 11+',
}

export default function TimeManagementPage() {
  return (
    <main>
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-display text-xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">11+ QUEST</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">About</Link>
            <Link href="/resources" className="text-pink-600 font-semibold text-sm">11+ Resources for Parents</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Pricing</Link>
            <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">Start Free</Link>
          </div>
        </div>
      </nav>

      <div className="px-4 max-w-4xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/resources" className="hover:text-pink-600">Resources</Link>
          <span>→</span>
          <span className="text-slate-800">Time Management</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600">Parent Advice</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">Time Management in the 11+</h1>
          <p className="text-slate-600 text-lg">Teaching your child to pace themselves under pressure.</p>
        </header>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">The Numbers</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-500">45-50</div>
                <div className="text-slate-500 text-sm">seconds per question</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-500">30</div>
                <div className="text-slate-500 text-sm">seconds max on hard questions</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm mt-4">
              With approximately 80 questions in 50 minutes, there is no time to get stuck. Speed AND accuracy are essential.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Key Strategies</h2>
            <ul className="text-slate-600 space-y-3">
              <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span> <strong className="text-slate-800">Skip and return:</strong> If stuck for more than 30 seconds, mark it and move on</li>
              <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> <strong className="text-slate-800">Answer everything:</strong> No negative marking - always guess if unsure</li>
              <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> <strong className="text-slate-800">Easy ones first:</strong> Quick wins build confidence and guarantee marks</li>
              <li className="flex gap-2"><span className="text-emerald-500 font-bold">4.</span> <strong className="text-slate-800">Watch the clock:</strong> Check time at halfway and with 10 mins left</li>
              <li className="flex gap-2"><span className="text-emerald-500 font-bold">5.</span> <strong className="text-slate-800">Fill in remaining:</strong> With 2 minutes left, answer any blanks quickly</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">How to Practice</h2>
            <ul className="text-slate-600 space-y-2">
              <li>• Start untimed to build accuracy, then add time pressure gradually</li>
              <li>• Use a visible timer so they learn to pace themselves</li>
              <li>• Practice the "skip and return" technique regularly</li>
              <li>• Do weekly timed sections (not full papers every time)</li>
              <li>• Review skipped questions - were they actually hard or just unfamiliar?</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h2 className="text-lg font-bold text-amber-700 mb-3">Common Mistakes</h2>
            <ul className="text-slate-600 text-sm space-y-2">
              <li>• Spending 3+ minutes on one question while running out of time</li>
              <li>• Not answering questions because they "did not get to them"</li>
              <li>• Rushing through easy questions and making careless errors</li>
              <li>• Panicking when they see they are behind - stay calm and strategic</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Practice with Timer</h3>
          <Link href="/login" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
            Start Free Practice
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 px-4 mt-8 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-display bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">11+ QUEST</span>
          </Link>
          <p className="text-slate-500 text-sm">© 2025 11+ Quest</p>
        </div>
      </footer>
    </main>
  )
}
