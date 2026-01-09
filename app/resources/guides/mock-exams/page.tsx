import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Importance of 11+ Mock Exams | Practice Tests Guide | 11+ Quest',
  description: 'Why mock exams are essential for 11+ preparation. How to use practice tests effectively, when to start, and how to review results.',
  keywords: '11+ mock exams, 11+ practice tests, 11+ mock papers, grammar school practice exams',
}

export default function MockExamsPage() {
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
          <span className="text-slate-800">Mock Exams</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">Exam Guide</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">The Importance of Mock Exams</h1>
          <p className="text-slate-600 text-lg">Why practice tests are essential and how to use them effectively.</p>
        </header>

        <div className="space-y-6">
          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Why Mock Exams Matter</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-pink-600 mb-2">Build Stamina</h3>
                <p className="text-slate-600 text-sm">Real exams are 2-3 hours. Children need to practice maintaining focus for extended periods.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-purple-600 mb-2">Time Management</h3>
                <p className="text-slate-600 text-sm">Learn to pace themselves and know when to move on from difficult questions.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-emerald-600 mb-2">Reduce Anxiety</h3>
                <p className="text-slate-600 text-sm">Familiarity with the format makes the real exam feel less daunting.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-amber-600 mb-2">Identify Gaps</h3>
                <p className="text-slate-600 text-sm">Pinpoint specific areas needing more practice before exam day.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">When to Do Mocks</h2>
            <ul className="text-slate-600 space-y-3">
              <li><strong className="text-slate-800">First mock:</strong> 6 months before exam - establishes a baseline</li>
              <li><strong className="text-slate-800">Regular mocks:</strong> Monthly from 4 months out</li>
              <li><strong className="text-slate-800">Final push:</strong> Weekly in the last month (but stop 1 week before)</li>
              <li><strong className="text-slate-800">Total:</strong> Aim for 6-10 full mock exams in preparation</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">How to Run an Effective Mock</h2>
            <ul className="text-slate-600 space-y-2">
              <li className="flex gap-2"><span className="text-emerald-500">1.</span> Create exam conditions - quiet room, desk, timer visible</li>
              <li className="flex gap-2"><span className="text-emerald-500">2.</span> Use the same pencils and equipment they will have on the day</li>
              <li className="flex gap-2"><span className="text-emerald-500">3.</span> Time strictly - no extensions</li>
              <li className="flex gap-2"><span className="text-emerald-500">4.</span> No help or hints during the test</li>
              <li className="flex gap-2"><span className="text-emerald-500">5.</span> Mark and review together afterwards</li>
            </ul>
          </section>

          <section className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h2 className="text-xl font-bold text-amber-700 mb-4">Do Not Overdo It</h2>
            <p className="text-slate-600">
              Too many mocks can lead to burnout and anxiety. Balance full mock exams with shorter, focused practice sessions. 
              Quality of review matters more than quantity of tests.
            </p>
          </section>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Full and Quick Mock Exams</h3>
          <p className="text-white/90 mb-6">Pro subscribers get access to timed mock exams that simulate real test conditions.</p>
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
