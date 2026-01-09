import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GL vs CEM: Understanding the Two Main 11+ Exam Boards | 11+ Quest',
  description: 'A comprehensive comparison of GL Assessment and CEM 11+ exams. Learn the differences in format, content, timing, and how to prepare for each exam board.',
  keywords: 'GL vs CEM, GL Assessment, CEM exam, 11+ exam boards, 11+ differences, which 11+ exam',
}

export default function GLvsCEMPage() {
  return (
    <main>
      {/* Navigation */}
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

      {/* Breadcrumb */}
      <div className="px-4 max-w-4xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/resources" className="hover:text-pink-600">Resources</Link>
          <span>→</span>
          <span className="text-slate-800">GL vs CEM</span>
        </div>
      </div>

      {/* Article */}
      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">Exam Guide</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">GL vs CEM: What&apos;s the Difference?</h1>
          <p className="text-slate-600 text-lg">
            The two main 11+ exam boards have different approaches. Understanding these differences is crucial for effective preparation.
          </p>
        </header>

        {/* Quick Summary */}
        <div className="bg-white rounded-xl p-6 mb-8 border border-slate-200">
          <h2 className="font-bold text-slate-800 mb-4">📋 Quick Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
              <h3 className="font-bold text-pink-600 mb-2">GL Assessment</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Predictable format</li>
                <li>• Separate subject papers</li>
                <li>• Easier to prepare for specifically</li>
                <li>• Used in Kent, Bucks, Birmingham</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h3 className="font-bold text-purple-600 mb-2">CEM (Durham University)</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Unpredictable format</li>
                <li>• Mixed subject papers</li>
                <li>• Harder to prepare for specifically</li>
                <li>• Used in Bexley, Wiltshire, some others</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What is GL Assessment?</h2>
            <p className="text-slate-600 mb-4">
              GL Assessment (formerly Granada Learning) is the most widely used 11+ exam provider in England. 
              Their exams have a standardised, predictable format that doesn&apos;t change significantly from year to year.
            </p>
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-bold text-slate-800 mb-3">GL Assessment Format</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-600">Verbal Reasoning</span>
                  <span className="text-slate-800">~50 minutes, 80 questions</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-600">Non-Verbal Reasoning</span>
                  <span className="text-slate-800">~50 minutes, 80 questions</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-600">English</span>
                  <span className="text-slate-800">~50 minutes, 50 questions</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-600">Maths</span>
                  <span className="text-slate-800">~50 minutes, 50 questions</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What is CEM?</h2>
            <p className="text-slate-600 mb-4">
              CEM (Centre for Evaluation and Monitoring) is run by Durham University. CEM deliberately makes 
              their exam format unpredictable to discourage excessive tutoring and level the playing field.
            </p>
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-bold text-slate-800 mb-3">CEM Format</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• Two papers of approximately 45 minutes each</li>
                <li>• Each paper contains a mix of subjects</li>
                <li>• Question types vary year to year</li>
                <li>• No official past papers available</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Key Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left p-3 text-slate-600 font-semibold">Aspect</th>
                    <th className="text-left p-3 text-pink-600 font-semibold">GL Assessment</th>
                    <th className="text-left p-3 text-purple-600 font-semibold">CEM</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 text-sm">
                  <tr className="border-b border-slate-100">
                    <td className="p-3 font-medium text-slate-800">Format</td>
                    <td className="p-3">Predictable, standardised</td>
                    <td className="p-3">Variable, unpredictable</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-3 font-medium text-slate-800">Past papers</td>
                    <td className="p-3">Available</td>
                    <td className="p-3">Not officially available</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-3 font-medium text-slate-800">Preparation</td>
                    <td className="p-3">Can target specific question types</td>
                    <td className="p-3">Focus on underlying skills</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Practice for Both Formats</h3>
          <Link href="/login" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
            Start Free Practice ✨
          </Link>
        </div>
      </section>

      {/* Footer */}
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
