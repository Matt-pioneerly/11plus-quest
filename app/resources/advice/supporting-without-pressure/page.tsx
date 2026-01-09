import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supporting Your Child Without Adding Pressure | 11+ Advice | 11+ Quest',
  description: 'How to support your child through 11+ preparation without creating excessive stress. Finding the balance between encouragement and pressure.',
  keywords: '11+ stress parents, supporting child 11+, 11+ pressure, 11+ encouragement',
}

export default function SupportingWithoutPressurePage() {
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
          <span className="text-white">Supporting Without Pressure</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">Parent Advice</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">Supporting Without Adding Pressure</h1>
          <p className="text-gray-400 text-lg">Finding the right balance during 11+ preparation.</p>
        </header>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <p className="text-gray-400">
              Your child is already aware that the 11+ matters. They don&apos;t need more pressure - they need support, 
              structure, and the confidence that comes from knowing you love them regardless of any exam result.
            </p>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">✅ Helpful Behaviours</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Create a consistent, calm practice routine</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Praise effort and improvement, not just scores</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Take genuine interest without hovering</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Maintain normal family life - hobbies, play, downtime</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Talk about secondary school positively (all options)</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Model calmness - they pick up on your anxiety</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">❌ Behaviours to Avoid</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="flex gap-2"><span className="text-red-400">✗</span> Comparing to siblings, friends, or cousins</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Making it about your expectations or dreams</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Talking about it constantly or in front of others</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Punishment for poor practice scores</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Cancelling all fun activities for more revision</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Expressing disappointment with sighs or looks</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">💬 Phrases That Help</h2>
            <div className="space-y-4">
              <div className="bg-emerald-500/10 rounded-xl p-4">
                <p className="text-gray-300 italic">&quot;I&apos;m proud of how hard you&apos;re working.&quot;</p>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-4">
                <p className="text-gray-300 italic">&quot;Whatever happens, we&apos;ll figure out the best school for you.&quot;</p>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-4">
                <p className="text-gray-300 italic">&quot;Your best is good enough.&quot;</p>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-4">
                <p className="text-gray-300 italic">&quot;This exam doesn&apos;t define how clever you are.&quot;</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 border border-purple-500/20">
            <h2 className="text-lg font-bold text-purple-400 mb-3">💜 Remember</h2>
            <p className="text-gray-400 text-sm">
              Your relationship with your child will last a lifetime. The 11+ is one day. 
              Years from now, they won&apos;t remember their score - but they&apos;ll remember how you made them feel.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <Link href="/login" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          Gamified, Low-Pressure Practice ✨
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
