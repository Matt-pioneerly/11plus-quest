import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tutoring vs Self-Study for 11+ | Which Approach is Right? | 11+ Quest',
  description: 'Should you hire an 11+ tutor or prepare at home? Pros and cons of each approach, costs, and how to decide what is best for your child.',
  keywords: '11+ tutor, 11+ self study, 11+ tutor cost, 11+ preparation at home, do I need 11+ tutor',
}

export default function TutoringVsSelfStudyPage() {
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
          <span className="text-slate-800">Tutoring vs Self-Study</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600">Parent Advice</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">Tutoring vs Self-Study</h1>
          <p className="text-slate-600 text-lg">Which approach is right for your child and family?</p>
        </header>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-pink-600 mb-4">Professional Tutoring</h2>
              <h3 className="text-slate-800 font-semibold mb-2">Pros</h3>
              <ul className="text-slate-600 text-sm space-y-1 mb-4">
                <li>✓ Expert knowledge of exam format</li>
                <li>✓ Personalised to your child's needs</li>
                <li>✓ Structured curriculum and pacing</li>
                <li>✓ Accountability and motivation</li>
                <li>✓ Identifies weaknesses quickly</li>
              </ul>
              <h3 className="text-slate-800 font-semibold mb-2">Cons</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>✗ Expensive (30-60 pounds per hour typical)</li>
                <li>✗ Variable quality - research carefully</li>
                <li>✗ May create dependency</li>
                <li>✗ Adds to scheduling pressure</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-purple-600 mb-4">Self-Study at Home</h2>
              <h3 className="text-slate-800 font-semibold mb-2">Pros</h3>
              <ul className="text-slate-600 text-sm space-y-1 mb-4">
                <li>✓ Much more affordable</li>
                <li>✓ Flexible timing</li>
                <li>✓ Builds independence</li>
                <li>✓ Quality time with your child</li>
                <li>✓ Many great resources available</li>
              </ul>
              <h3 className="text-slate-800 font-semibold mb-2">Cons</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>✗ Requires parent time and knowledge</li>
                <li>✗ Can strain parent-child relationship</li>
                <li>✗ May miss gaps in understanding</li>
                <li>✗ Less structured</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Typical Costs</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Private 1:1 tutor</span>
                <span className="text-slate-800 font-semibold">35-60 pounds per hour</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Small group tutoring</span>
                <span className="text-slate-800 font-semibold">15-25 pounds per hour</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Online courses</span>
                <span className="text-slate-800 font-semibold">10-30 pounds per month</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Practice books</span>
                <span className="text-slate-800 font-semibold">5-15 pounds each</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Questions to Ask Yourself</h2>
            <ul className="text-slate-600 space-y-3">
              <li>• Do I have time to oversee consistent practice?</li>
              <li>• Am I confident explaining 11+ concepts?</li>
              <li>• Does my child respond better to external authority?</li>
              <li>• Is our relationship stressed when I help with homework?</li>
              <li>• What is our budget for the next 12-18 months?</li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h2 className="text-lg font-bold text-slate-800 mb-3">The Hybrid Approach</h2>
            <p className="text-slate-600 text-sm">
              Many families use a mix: self-study with books and apps for daily practice, 
              plus occasional tutor sessions (for example monthly) to identify gaps and get expert guidance on tricky areas. 
              This balances cost with professional input.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Affordable Daily Practice</h3>
          <p className="text-white/90 mb-6">11+ Quest provides structured, gamified practice your child can do independently - with or without a tutor.</p>
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
