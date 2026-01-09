import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Importance of 11+ Mock Exams | Practice Tests Guide | 11+ Quest',
  description: 'Why mock exams are essential for 11+ preparation. How to use practice tests effectively, when to start, and how to review results.',
  keywords: '11+ mock exams, 11+ practice tests, 11+ mock papers, grammar school practice exams',
}

export default function MockExamsPage() {
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
          <span className="text-white">Mock Exams</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Exam Guide</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">The Importance of Mock Exams</h1>
          <p className="text-gray-400 text-lg">Why practice tests are essential and how to use them effectively.</p>
        </header>

        <div className="space-y-8">
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">🎯 Why Mock Exams Matter</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-pink-400 mb-2">Build Stamina</h3>
                <p className="text-gray-400 text-sm">Real exams are 2-3 hours. Children need to practice maintaining focus for extended periods.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-purple-400 mb-2">Time Management</h3>
                <p className="text-gray-400 text-sm">Learn to pace themselves and know when to move on from difficult questions.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-emerald-400 mb-2">Reduce Anxiety</h3>
                <p className="text-gray-400 text-sm">Familiarity with the format makes the real exam feel less daunting.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-yellow-400 mb-2">Identify Gaps</h3>
                <p className="text-gray-400 text-sm">Pinpoint specific areas needing more practice before exam day.</p>
              </div>
            </div>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">📅 When to Do Mocks</h2>
            <ul className="text-gray-400 space-y-3">
              <li><strong className="text-white">First mock:</strong> 6 months before exam - establishes a baseline</li>
              <li><strong className="text-white">Regular mocks:</strong> Monthly from 4 months out</li>
              <li><strong className="text-white">Final push:</strong> Weekly in the last month (but stop 1 week before)</li>
              <li><strong className="text-white">Total:</strong> Aim for 6-10 full mock exams in preparation</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">✅ How to Run an Effective Mock</h2>
            <ul className="text-gray-400 space-y-2">
              <li className="flex gap-2"><span className="text-emerald-400">1.</span> Create exam conditions - quiet room, desk, timer visible</li>
              <li className="flex gap-2"><span className="text-emerald-400">2.</span> Use the same pencils and equipment they&apos;ll have on the day</li>
              <li className="flex gap-2"><span className="text-emerald-400">3.</span> Time strictly - no extensions</li>
              <li className="flex gap-2"><span className="text-emerald-400">4.</span> No help or hints during the test</li>
              <li className="flex gap-2"><span className="text-emerald-400">5.</span> Mark and review together afterwards</li>
            </ul>
          </section>

          <section className="glass-card p-6 border border-yellow-500/20">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">⚠️ Don&apos;t Overdo It</h2>
            <p className="text-gray-400">
              Too many mocks can lead to burnout and anxiety. Balance full mock exams with shorter, focused practice sessions. 
              Quality of review matters more than quantity of tests.
            </p>
          </section>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Full & Quick Mock Exams</h3>
          <p className="text-gray-400 mb-6">Pro subscribers get access to timed mock exams that simulate real test conditions.</p>
          <Link href="/login" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
            Start Free Practice ✨
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
