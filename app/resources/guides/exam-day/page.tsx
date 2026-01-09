import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect on 11+ Exam Day | Complete Guide | 11+ Quest',
  description: 'Everything you need to know about 11+ exam day. What to bring, what happens, and how to help your child perform their best on the big day.',
  keywords: '11+ exam day, what to expect 11+, 11+ exam preparation, grammar school exam day',
}

export default function ExamDayPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="font-display text-xl gradient-text">11+ QUEST</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/resources" className="text-white font-semibold text-sm">11+ Resources for Parents</Link>
          <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="px-4 max-w-4xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          <span>→</span>
          <span className="text-white">Exam Day Guide</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Exam Guide</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">What to Expect on Exam Day</h1>
          <p className="text-gray-400 text-lg">
            A complete guide to help you and your child navigate the 11+ exam day with confidence.
          </p>
        </header>

        <div className="space-y-8">
          {/* What to Bring */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">🎒 What to Bring</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-emerald-400 mb-2">Essential</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• 2-3 HB pencils (sharpened)</li>
                  <li>• Good quality eraser</li>
                  <li>• Pencil sharpener</li>
                  <li>• Clear water bottle</li>
                  <li>• Exam admission letter/confirmation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-400 mb-2">Not Allowed</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Mobile phones</li>
                  <li>• Calculators</li>
                  <li>• Smart watches</li>
                  <li>• Rulers or geometry sets (usually)</li>
                  <li>• Scrap paper</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Day Structure */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">📋 Typical Exam Structure</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <span className="w-16 text-pink-400 font-semibold">8:30am</span>
                <span className="text-gray-400">Arrive, registration, find seat</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-16 text-pink-400 font-semibold">9:00am</span>
                <span className="text-gray-400">Instructions and first paper begins</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-16 text-pink-400 font-semibold">10:00am</span>
                <span className="text-gray-400">Short break (toilet, water)</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-16 text-pink-400 font-semibold">10:15am</span>
                <span className="text-gray-400">Second paper begins</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-16 text-pink-400 font-semibold">11:15am</span>
                <span className="text-gray-400">Exam ends, collection</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">* Times vary by region and school</p>
          </section>

          {/* Tips for Parents */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">👨‍👩‍👧 Tips for Parents</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Arrive 15 minutes early - not too early (more waiting = more nerves)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Keep the goodbye brief and positive: &quot;You&apos;ve got this! See you soon.&quot;</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Don&apos;t ask &quot;How did it go?&quot; immediately - let them decompress first</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Plan something fun for afterwards - the exam is done!</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Don&apos;t do last-minute revision in the car - it increases anxiety</span>
              </li>
            </ul>
          </section>

          {/* Tips for Children */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">👧 Tips During the Exam</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="flex gap-2">
                <span className="text-pink-400">1.</span>
                <span>Read every question carefully - twice if needed</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400">2.</span>
                <span>If stuck, skip and come back - don&apos;t waste time</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400">3.</span>
                <span>Answer every question - there&apos;s no penalty for guessing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400">4.</span>
                <span>Check your answers if you finish early</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-400">5.</span>
                <span>Take deep breaths if you feel nervous</span>
              </li>
            </ul>
          </section>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <Link 
          href="/login"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
        >
          Practice for Exam Day ✨
        </Link>
      </section>

      {/* Footer */}
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
