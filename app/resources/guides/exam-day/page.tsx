import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect on 11+ Exam Day | Complete Guide | 11+ Quest',
  description: 'Everything you need to know about 11+ exam day. What to bring, what happens, and how to help your child perform their best on the big day.',
  keywords: '11+ exam day, what to expect 11+, 11+ exam preparation, grammar school exam day',
}

export default function ExamDayPage() {
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
          <span className="text-slate-800">Exam Day Guide</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">Exam Guide</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">What to Expect on Exam Day</h1>
          <p className="text-slate-600 text-lg">A complete guide to help you and your child navigate the 11+ exam day with confidence.</p>
        </header>

        <div className="space-y-6">
          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">What to Bring</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-emerald-600 mb-2">Essential</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 2-3 HB pencils (sharpened)</li>
                  <li>• Good quality eraser</li>
                  <li>• Pencil sharpener</li>
                  <li>• Clear water bottle</li>
                  <li>• Exam admission letter or confirmation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-2">Not Allowed</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Mobile phones</li>
                  <li>• Calculators</li>
                  <li>• Smart watches</li>
                  <li>• Rulers or geometry sets (usually)</li>
                  <li>• Scrap paper</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Typical Exam Structure</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <span className="w-20 text-pink-600 font-semibold">8:30am</span>
                <span className="text-slate-600">Arrive, registration, find seat</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-20 text-pink-600 font-semibold">9:00am</span>
                <span className="text-slate-600">Instructions and first paper begins</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-20 text-pink-600 font-semibold">10:00am</span>
                <span className="text-slate-600">Short break (toilet, water)</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-20 text-pink-600 font-semibold">10:15am</span>
                <span className="text-slate-600">Second paper begins</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-20 text-pink-600 font-semibold">11:15am</span>
                <span className="text-slate-600">Exam ends, collection</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">Times vary by region and school</p>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Tips for Parents</h2>
            <ul className="text-slate-600 space-y-3">
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Arrive 15 minutes early - not too early (more waiting means more nerves)</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Keep the goodbye brief and positive: "You have got this! See you soon."</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Do not ask "How did it go?" immediately - let them decompress first</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Plan something fun for afterwards - the exam is done!</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> Do not do last-minute revision in the car - it increases anxiety</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Tips During the Exam</h2>
            <ul className="text-slate-600 space-y-3">
              <li className="flex gap-2"><span className="text-pink-600 font-bold">1.</span> Read every question carefully - twice if needed</li>
              <li className="flex gap-2"><span className="text-pink-600 font-bold">2.</span> If stuck, skip and come back - do not waste time</li>
              <li className="flex gap-2"><span className="text-pink-600 font-bold">3.</span> Answer every question - there is no penalty for guessing</li>
              <li className="flex gap-2"><span className="text-pink-600 font-bold">4.</span> Check your answers if you finish early</li>
              <li className="flex gap-2"><span className="text-pink-600 font-bold">5.</span> Take deep breaths if you feel nervous</li>
            </ul>
          </section>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Practice for Exam Day</h3>
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
