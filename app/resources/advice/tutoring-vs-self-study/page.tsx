import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tutoring vs Self-Study for 11+ | Which Approach is Right? | 11+ Quest',
  description: 'Should you hire an 11+ tutor or prepare at home? Pros and cons of each approach, costs, and how to decide what\'s best for your child.',
  keywords: '11+ tutor, 11+ self study, 11+ tutor cost, 11+ preparation at home, do I need 11+ tutor',
}

export default function TutoringVsSelfStudyPage() {
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
          <span className="text-white">Tutoring vs Self-Study</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">Parent Advice</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">Tutoring vs Self-Study</h1>
          <p className="text-gray-400 text-lg">Which approach is right for your child and family?</p>
        </header>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-pink-400 mb-4">👨‍🏫 Professional Tutoring</h2>
              <h3 className="text-white font-semibold mb-2">Pros</h3>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>✓ Expert knowledge of exam format</li>
                <li>✓ Personalised to your child&apos;s needs</li>
                <li>✓ Structured curriculum and pacing</li>
                <li>✓ Accountability and motivation</li>
                <li>✓ Identifies weaknesses quickly</li>
              </ul>
              <h3 className="text-white font-semibold mb-2">Cons</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✗ Expensive (£30-60/hour typical)</li>
                <li>✗ Variable quality - research carefully</li>
                <li>✗ May create dependency</li>
                <li>✗ Adds to scheduling pressure</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">🏠 Self-Study at Home</h2>
              <h3 className="text-white font-semibold mb-2">Pros</h3>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>✓ Much more affordable</li>
                <li>✓ Flexible timing</li>
                <li>✓ Builds independence</li>
                <li>✓ Quality time with your child</li>
                <li>✓ Many great resources available</li>
              </ul>
              <h3 className="text-white font-semibold mb-2">Cons</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✗ Requires parent time and knowledge</li>
                <li>✗ Can strain parent-child relationship</li>
                <li>✗ May miss gaps in understanding</li>
                <li>✗ Less structured</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">💷 Typical Costs</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Private 1:1 tutor</span>
                <span className="text-white font-semibold">£35-60/hour</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Small group tutoring</span>
                <span className="text-white font-semibold">£15-25/hour</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Online courses</span>
                <span className="text-white font-semibold">£10-30/month</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">Practice books</span>
                <span className="text-white font-semibold">£5-15 each</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">🤔 Questions to Ask Yourself</h2>
            <ul className="text-gray-400 space-y-3">
              <li>• Do I have time to oversee consistent practice?</li>
              <li>• Am I confident explaining 11+ concepts?</li>
              <li>• Does my child respond better to external authority?</li>
              <li>• Is our relationship stressed when I help with homework?</li>
              <li>• What&apos;s our budget for the next 12-18 months?</li>
            </ul>
          </div>

          <div className="glass-card p-6 border border-emerald-500/20">
            <h2 className="text-lg font-bold text-emerald-400 mb-3">💡 The Hybrid Approach</h2>
            <p className="text-gray-400 text-sm">
              Many families use a mix: self-study with books and apps for daily practice, 
              plus occasional tutor sessions (e.g. monthly) to identify gaps and get expert guidance on tricky areas. 
              This balances cost with professional input.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Affordable Daily Practice</h3>
          <p className="text-gray-400 mb-6">11+ Quest provides structured, gamified practice your child can do independently - with or without a tutor.</p>
          <Link href="/login" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
            Start Free Practice ✨
          </Link>
        </div>
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
