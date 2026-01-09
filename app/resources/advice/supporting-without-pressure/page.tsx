import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supporting Your Child Without Adding Pressure | 11+ Advice | 11+ Quest',
  description: 'How to support your child through 11+ preparation without creating excessive stress. Finding the balance between encouragement and pressure.',
  keywords: '11+ stress parents, supporting child 11+, 11+ pressure, 11+ encouragement',
}

export default function SupportingWithoutPressurePage() {
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
          <span className="text-slate-800">Supporting Without Pressure</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600">Parent Advice</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">Supporting Without Adding Pressure</h1>
          <p className="text-slate-600 text-lg">Finding the right balance during 11+ preparation.</p>
        </header>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-slate-600">
              Your child is already aware that the 11+ matters. They do not need more pressure - they need support, 
              structure, and the confidence that comes from knowing you love them regardless of any exam result.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Helpful Behaviours</h2>
            <ul className="text-slate-600 space-y-3">
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Create a consistent, calm practice routine</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Praise effort and improvement, not just scores</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Take genuine interest without hovering</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Maintain normal family life - hobbies, play, downtime</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Talk about secondary school positively (all options)</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Model calmness - they pick up on your anxiety</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Behaviours to Avoid</h2>
            <ul className="text-slate-600 space-y-3">
              <li className="flex gap-2"><span className="text-red-500">✗</span> Comparing to siblings, friends, or cousins</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> Making it about your expectations or dreams</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> Talking about it constantly or in front of others</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> Punishment for poor practice scores</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> Cancelling all fun activities for more revision</li>
              <li className="flex gap-2"><span className="text-red-500">✗</span> Expressing disappointment with sighs or looks</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Phrases That Help</h2>
            <div className="space-y-3">
              <div className="bg-emerald-50 rounded-xl p-4">
                <p className="text-slate-700 italic">"I am proud of how hard you are working."</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4">
                <p className="text-slate-700 italic">"Whatever happens, we will figure out the best school for you."</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4">
                <p className="text-slate-700 italic">"Your best is good enough."</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4">
                <p className="text-slate-700 italic">"This exam does not define how clever you are."</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Remember</h2>
            <p className="text-slate-600 text-sm">
              Your relationship with your child will last a lifetime. The 11+ is one day. 
              Years from now, they will not remember their score - but they will remember how you made them feel.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Gamified, Low-Pressure Practice</h3>
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
