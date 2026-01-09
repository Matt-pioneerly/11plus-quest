import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When to Start 11+ Preparation | The Ideal Timeline | 11+ Quest',
  description: 'When should your child start preparing for the 11+ exam? A month-by-month guide to 11+ preparation from Year 4 through to exam day.',
  keywords: 'when to start 11+ prep, 11+ preparation timeline, 11+ year 4, 11+ year 5, how long to prepare for 11+',
}

export default function WhenToStartPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="font-display text-xl gradient-text">11+ QUEST</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
          <Link href="/resources" className="text-white font-semibold text-sm">11+ Resources for Parents</Link>
          <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
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
          <span className="text-white">When to Start</span>
        </div>
      </div>

      {/* Article */}
      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Exam Guide</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">When to Start 11+ Preparation</h1>
          <p className="text-gray-400 text-lg">
            The ideal timeline for 11+ preparation, from gentle introduction to exam-ready confidence.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* Quick Answer */}
          <div className="glass-card p-6 mb-8 border border-pink-500/20">
            <h2 className="text-xl font-bold text-pink-400 mb-3">📌 Quick Answer</h2>
            <p className="text-gray-400">
              Most children benefit from starting <strong className="text-white">12-18 months before the exam</strong>, 
              typically in Year 4 or early Year 5. However, earlier gentle exposure to reasoning concepts can help, 
              and some children do well with shorter, more intensive preparation.
            </p>
          </div>

          {/* Timeline */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">📅 Recommended Timeline</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">Y4</span>
                  <h3 className="text-lg font-bold text-white">Year 4 (18+ months before)</h3>
                </div>
                <p className="text-gray-400 mb-3">Foundation building - keep it light and fun</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Encourage reading for pleasure (builds vocabulary naturally)</li>
                  <li>• Introduce puzzle books and brain teasers</li>
                  <li>• Ensure strong grasp of times tables</li>
                  <li>• 10-15 mins practice a few times per week maximum</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">Y5</span>
                  <h3 className="text-lg font-bold text-white">Year 5 Autumn (12 months before)</h3>
                </div>
                <p className="text-gray-400 mb-3">Structured introduction to 11+ content</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Introduce formal 11+ question types</li>
                  <li>• Build familiarity with verbal and non-verbal reasoning</li>
                  <li>• 20-30 mins practice, 4-5 times per week</li>
                  <li>• Focus on understanding, not speed</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">Y5</span>
                  <h3 className="text-lg font-bold text-white">Year 5 Spring (9 months before)</h3>
                </div>
                <p className="text-gray-400 mb-3">Consolidation and weak area focus</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Identify weak areas and target them</li>
                  <li>• Start timed practice sections</li>
                  <li>• Build stamina for longer sessions</li>
                  <li>• Consider first mock exam to benchmark</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">Y5</span>
                  <h3 className="text-lg font-bold text-white">Year 5 Summer (6 months before)</h3>
                </div>
                <p className="text-gray-400 mb-3">Exam technique and practice papers</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Regular timed practice papers</li>
                  <li>• Focus on time management strategies</li>
                  <li>• Monthly mock exams under test conditions</li>
                  <li>• Maintain 30 mins daily but take holiday breaks</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">Y6</span>
                  <h3 className="text-lg font-bold text-white">Year 6 Summer Holidays (1-2 months before)</h3>
                </div>
                <p className="text-gray-400 mb-3">Final preparation phase</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Focus on maintaining skills, not cramming new content</li>
                  <li>• 2-3 full mock exams in exam-like conditions</li>
                  <li>• Review common mistakes and weak areas</li>
                  <li>• Wind down practice in final week before exam</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Starting Late */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">⏰ What If We&apos;re Starting Late?</h2>
            <div className="glass-card p-6">
              <p className="text-gray-400 mb-4">
                Don&apos;t panic! Many children prepare successfully in 6 months or less. If you&apos;re starting late:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Focus on high-impact areas first (usually verbal reasoning and maths)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Prioritise understanding question types over volume of practice</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Consider a tutor for efficient, targeted preparation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Use the summer holidays intensively but avoid burnout</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Don&apos;t try to cover everything - focus on what matters most</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Starting Too Early */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">⚠️ Can You Start Too Early?</h2>
            <div className="glass-card p-6">
              <p className="text-gray-400 mb-4">
                Yes! Starting formal 11+ preparation before Year 4 can lead to:
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li>• Burnout and loss of motivation before the exam</li>
                <li>• Negative associations with learning</li>
                <li>• Plateauing - skills developed early may stagnate</li>
                <li>• Missing out on play and childhood activities</li>
              </ul>
              <p className="text-gray-400">
                Before Year 4, focus on building a love of reading, curiosity, and solid primary school 
                fundamentals rather than formal 11+ content.
              </p>
            </div>
          </section>

          {/* Signs of Readiness */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">✅ Signs Your Child is Ready</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <h3 className="font-bold text-emerald-400 mb-2">Ready to Start</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Shows curiosity about puzzles</li>
                  <li>• Can concentrate for 20+ minutes</li>
                  <li>• Comfortable with Year 4 maths</li>
                  <li>• Reads independently</li>
                </ul>
              </div>
              <div className="glass-card p-4">
                <h3 className="font-bold text-yellow-400 mb-2">May Need More Time</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Struggles with current schoolwork</li>
                  <li>• Very resistant to practice</li>
                  <li>• Short attention span</li>
                  <li>• High anxiety about tests</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Begin?</h3>
          <p className="text-gray-400 mb-6">
            Start with our free tier - 5 questions per day is perfect for building a consistent habit.
          </p>
          <Link 
            href="/login"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Start Free Practice ✨
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-display gradient-text">11+ QUEST</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <p className="text-gray-500 text-sm">© 2025 11+ Quest</p>
        </div>
      </footer>
    </main>
  )
}
