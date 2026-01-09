import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When to Start 11+ Preparation | The Ideal Timeline | 11+ Quest',
  description: 'When should your child start preparing for the 11+ exam? A month-by-month guide to 11+ preparation from Year 4 through to exam day.',
  keywords: 'when to start 11+ prep, 11+ preparation timeline, 11+ year 4, 11+ year 5, how long to prepare for 11+',
}

export default function WhenToStartPage() {
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
          <span className="text-slate-800">When to Start</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">Exam Guide</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">When to Start 11+ Preparation</h1>
          <p className="text-slate-600 text-lg">The ideal timeline for 11+ preparation, from gentle introduction to exam-ready confidence.</p>
        </header>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-pink-200">
            <h2 className="text-xl font-bold text-pink-600 mb-3">Quick Answer</h2>
            <p className="text-slate-600">
              Most children benefit from starting <strong className="text-slate-800">12-18 months before the exam</strong>, 
              typically in Year 4 or early Year 5. However, earlier gentle exposure to reasoning concepts can help, 
              and some children do well with shorter, more intensive preparation.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Recommended Timeline</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">Y4</span>
                  <h3 className="text-lg font-bold text-slate-800">Year 4 (18+ months before)</h3>
                </div>
                <p className="text-slate-600 mb-3">Foundation building - keep it light and fun</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Encourage reading for pleasure (builds vocabulary naturally)</li>
                  <li>• Introduce puzzle books and brain teasers</li>
                  <li>• Ensure strong grasp of times tables</li>
                  <li>• 10-15 mins practice a few times per week maximum</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">Y5</span>
                  <h3 className="text-lg font-bold text-slate-800">Year 5 Autumn (12 months before)</h3>
                </div>
                <p className="text-slate-600 mb-3">Structured introduction to 11+ content</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Introduce formal 11+ question types</li>
                  <li>• Build familiarity with verbal and non-verbal reasoning</li>
                  <li>• 20-30 mins practice, 4-5 times per week</li>
                  <li>• Focus on understanding, not speed</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">Y5</span>
                  <h3 className="text-lg font-bold text-slate-800">Year 5 Spring (9 months before)</h3>
                </div>
                <p className="text-slate-600 mb-3">Consolidation and weak area focus</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Identify weak areas and target them</li>
                  <li>• Start timed practice sections</li>
                  <li>• Build stamina for longer sessions</li>
                  <li>• Consider first mock exam to benchmark</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">Y5</span>
                  <h3 className="text-lg font-bold text-slate-800">Year 5 Summer (6 months before)</h3>
                </div>
                <p className="text-slate-600 mb-3">Exam technique and practice papers</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Regular timed practice papers</li>
                  <li>• Focus on time management strategies</li>
                  <li>• Monthly mock exams under test conditions</li>
                  <li>• Maintain 30 mins daily but take holiday breaks</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">Y6</span>
                  <h3 className="text-lg font-bold text-slate-800">Year 6 Summer Holidays (1-2 months before)</h3>
                </div>
                <p className="text-slate-600 mb-3">Final preparation phase</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Focus on maintaining skills, not cramming new content</li>
                  <li>• 2-3 full mock exams in exam-like conditions</li>
                  <li>• Review common mistakes and weak areas</li>
                  <li>• Wind down practice in final week before exam</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What If We Are Starting Late?</h2>
            <p className="text-slate-600 mb-4">
              Do not panic! Many children prepare successfully in 6 months or less. If you are starting late:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li className="flex gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Focus on high-impact areas first (usually verbal reasoning and maths)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Prioritise understanding question types over volume of practice</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Consider a tutor for efficient, targeted preparation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Use the summer holidays intensively but avoid burnout</span>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Can You Start Too Early?</h2>
            <p className="text-slate-600 mb-4">
              Yes! Starting formal 11+ preparation before Year 4 can lead to:
            </p>
            <ul className="text-slate-600 space-y-2 mb-4">
              <li>• Burnout and loss of motivation before the exam</li>
              <li>• Negative associations with learning</li>
              <li>• Plateauing - skills developed early may stagnate</li>
              <li>• Missing out on play and childhood activities</li>
            </ul>
            <p className="text-slate-600">
              Before Year 4, focus on building a love of reading, curiosity, and solid primary school 
              fundamentals rather than formal 11+ content.
            </p>
          </section>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
          <p className="text-white/90 mb-6">Start with our free tier - 5 questions per day is perfect for building a consistent habit.</p>
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
