import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What If They Do Not Pass the 11+? | Alternative Paths | 11+ Quest',
  description: 'Preparing for all outcomes of the 11+ exam. Alternative paths to success, keeping perspective, and supporting your child whatever the result.',
  keywords: '11+ fail, did not pass 11+, 11+ alternative, grammar school rejection, 11+ results',
}

export default function WhatIfPage() {
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
          <span className="text-slate-800">What If They Do Not Pass?</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600">Parent Advice</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">What If They Do Not Pass?</h1>
          <p className="text-slate-600 text-lg">Keeping perspective and exploring alternative paths.</p>
        </header>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">First, Some Perspective</h2>
            <ul className="text-slate-600 space-y-3">
              <li>• Only around 5% of UK children attend grammar schools</li>
              <li>• The vast majority of successful adults did not go to grammar schools</li>
              <li>• A supportive home environment matters more than school type</li>
              <li>• Many "outstanding" comprehensives outperform grammar schools</li>
              <li>• The 11+ tests a narrow range of skills on one day</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Alternative Paths</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-pink-600 mb-2">Strong Comprehensives</h3>
                <p className="text-slate-600 text-sm">Many comprehensives have excellent results and pastoral care. Research the options in your area.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-purple-600 mb-2">13+ Entry</h3>
                <p className="text-slate-600 text-sm">Some grammar and independent schools have entry points at Year 9. A second chance after more maturity.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-emerald-600 mb-2">Sixth Form Transfer</h3>
                <p className="text-slate-600 text-sm">Grammar school sixth forms often accept external students with good GCSEs.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-amber-600 mb-2">Waiting Lists</h3>
                <p className="text-slate-600 text-sm">Places sometimes become available. Some children join grammar schools later in Year 7 or beyond.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">What to Say</h2>
            <div className="space-y-3">
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-slate-700 italic">"I am proud of you for trying. That took courage."</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-slate-700 italic">"This does not change how clever you are or how much we love you."</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-slate-700 italic">"Let us look at the other schools - there are some great options."</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">What NOT to Say</h2>
            <ul className="text-slate-600 space-y-2">
              <li className="flex gap-2"><span className="text-red-500">✗</span> "You should have worked harder"</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> "Your cousin or friend passed"</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> "We spent all that money on tutoring"</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> "I am so disappointed"</li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h2 className="text-lg font-bold text-slate-800 mb-3">The Bigger Picture</h2>
            <p className="text-slate-600 text-sm">
              Your child will take their cue from you. If you treat this as a tragedy, they will too. 
              If you treat it as a minor setback with plenty of good alternatives, they will move on quickly. 
              The resilience they learn from handling disappointment will serve them well throughout life.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <Link href="/resources" className="inline-block border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
          Back to Resources
        </Link>
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
