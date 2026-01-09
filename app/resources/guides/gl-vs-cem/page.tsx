import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GL vs CEM: Understanding the Two Main 11+ Exam Boards | 11+ Quest',
  description: 'A comprehensive comparison of GL Assessment and CEM 11+ exams. Learn the differences in format, content, timing, and how to prepare for each exam board.',
  keywords: 'GL vs CEM, GL Assessment, CEM exam, 11+ exam boards, 11+ differences, which 11+ exam',
}

export default function GLvsCEMPage() {
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
          <Link href="/resources" className="text-white font-semibold text-sm">Resources</Link>
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
          <Link href="/resources#guides" className="hover:text-white transition-colors">Guides</Link>
          <span>→</span>
          <span className="text-white">GL vs CEM</span>
        </div>
      </div>

      {/* Article */}
      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Exam Guide</span>
            <span className="text-gray-500 text-sm">10 min read</span>
          </div>
          <h1 className="font-display text-4xl gradient-text mb-4">GL vs CEM: What&apos;s the Difference?</h1>
          <p className="text-gray-400 text-lg">
            The two main 11+ exam boards have different approaches. Understanding these differences 
            is crucial for effective preparation.
          </p>
        </header>

        {/* Quick Summary */}
        <div className="glass-card p-6 mb-8">
          <h2 className="font-bold text-white mb-4">📋 Quick Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-500/10 rounded-xl p-4 border border-pink-500/20">
              <h3 className="font-bold text-pink-400 mb-2">GL Assessment</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Predictable format</li>
                <li>• Separate subject papers</li>
                <li>• Easier to prepare for specifically</li>
                <li>• Used in Kent, Bucks, Birmingham</li>
              </ul>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
              <h3 className="font-bold text-purple-400 mb-2">CEM (Durham University)</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Unpredictable format</li>
                <li>• Mixed subject papers</li>
                <li>• Harder to prepare for specifically</li>
                <li>• Used in Bexley, Wiltshire, some others</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What is GL Assessment?</h2>
            <div className="text-gray-400 space-y-4">
              <p>
                GL Assessment (formerly Granada Learning) is the most widely used 11+ exam provider in England. 
                Their exams have a standardised, predictable format that doesn&apos;t change significantly from year to year.
              </p>
              <p>
                GL tests are typically divided into separate papers for each subject: Verbal Reasoning, Non-Verbal Reasoning, 
                English, and Maths. Each paper is timed independently, usually around 45-50 minutes each.
              </p>
            </div>
            
            <div className="glass-card p-6 my-6">
              <h3 className="font-bold text-white mb-3">GL Assessment Format</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Verbal Reasoning</span>
                  <span className="text-white">~50 minutes, 80 questions</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Non-Verbal Reasoning</span>
                  <span className="text-white">~50 minutes, 80 questions</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">English</span>
                  <span className="text-white">~50 minutes, 50 questions</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Maths</span>
                  <span className="text-white">~50 minutes, 50 questions</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-4">* Exact format varies by region</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What is CEM?</h2>
            <div className="text-gray-400 space-y-4">
              <p>
                CEM (Centre for Evaluation and Monitoring) is run by Durham University. CEM deliberately makes 
                their exam format unpredictable to discourage excessive tutoring and level the playing field.
              </p>
              <p>
                CEM papers mix different subjects within the same paper, and the question types can vary from year 
                to year. This means children can&apos;t simply practise past papers to prepare.
              </p>
            </div>
            
            <div className="glass-card p-6 my-6">
              <h3 className="font-bold text-white mb-3">CEM Format</h3>
              <div className="space-y-3 text-gray-400">
                <p>• Two papers of approximately 45 minutes each</p>
                <p>• Each paper contains a mix of subjects</p>
                <p>• Question types vary year to year</p>
                <p>• No official past papers available</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Key Differences</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full glass-card">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-gray-400 font-semibold">Aspect</th>
                    <th className="text-left p-4 text-pink-400 font-semibold">GL Assessment</th>
                    <th className="text-left p-4 text-purple-400 font-semibold">CEM</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400 text-sm">
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Format</td>
                    <td className="p-4">Predictable, standardised</td>
                    <td className="p-4">Variable, unpredictable</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Papers</td>
                    <td className="p-4">Separate subject papers</td>
                    <td className="p-4">Mixed subject papers</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Past papers</td>
                    <td className="p-4">Available</td>
                    <td className="p-4">Not officially available</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-medium text-white">Preparation</td>
                    <td className="p-4">Can target specific question types</td>
                    <td className="p-4">Focus on underlying skills</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-white">Tutoring advantage</td>
                    <td className="p-4">Higher</td>
                    <td className="p-4">Lower (by design)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Which Regions Use Which Board?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="font-bold text-pink-400 mb-3">GL Assessment Areas</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Kent (most schools)</li>
                  <li>• Buckinghamshire</li>
                  <li>• Birmingham (King Edward VI schools)</li>
                  <li>• Lincolnshire</li>
                  <li>• Trafford</li>
                  <li>• Wirral</li>
                  <li>• Devon (Torquay)</li>
                  <li>• Most London grammars</li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="font-bold text-purple-400 mb-3">CEM Areas</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Bexley</li>
                  <li>• Wiltshire</li>
                  <li>• Some Gloucestershire schools</li>
                  <li>• Warwickshire (some)</li>
                  <li>• Parts of Yorkshire</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20 mt-6">
              <p className="text-yellow-400 text-sm">
                <strong>⚠️ Always check:</strong> Some schools have changed exam boards in recent years. 
                Verify with your target school which board they currently use.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How to Prepare for Each</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-bold text-pink-400 mb-3">Preparing for GL</h3>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Practice specific question types repeatedly until they&apos;re automatic</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Use past papers and familiarise yourself with the exact format</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Time yourself strictly - GL exams are time-pressured</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Learn test-taking strategies for multiple choice</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-bold text-purple-400 mb-3">Preparing for CEM</h3>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Focus on building underlying skills rather than exam technique</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Read widely to develop vocabulary and comprehension</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Practice mental maths until it&apos;s second nature</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Develop flexibility - be ready for unfamiliar question formats</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Bottom Line</h2>
            <div className="glass-card p-6">
              <p className="text-gray-400 mb-4">
                <strong className="text-white">GL Assessment</strong> rewards targeted preparation. 
                If you know the format, you can practise efficiently and see measurable improvement.
              </p>
              <p className="text-gray-400">
                <strong className="text-white">CEM</strong> rewards natural ability and broad education. 
                Children who read widely and have strong fundamentals do well, regardless of specific 11+ preparation.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Practice for Both Formats</h3>
          <p className="text-gray-400 mb-6">
            Our platform covers all question types found in GL and CEM exams, with gamified 
            practice to keep your child engaged.
          </p>
          <Link 
            href="/login"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Start Free Practice ✨
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h3 className="text-lg font-bold text-white mb-4">Related Guides</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/resources/guides/when-to-start" className="glass-card p-4 hover:bg-white/10 transition-colors">
            <span className="text-2xl">📅</span>
            <h4 className="font-semibold text-white mt-2">When to Start Preparing</h4>
            <p className="text-gray-500 text-sm">The ideal timeline</p>
          </Link>
          <Link href="/resources/guides/verbal-reasoning" className="glass-card p-4 hover:bg-white/10 transition-colors">
            <span className="text-2xl">🔤</span>
            <h4 className="font-semibold text-white mt-2">Verbal Reasoning Guide</h4>
            <p className="text-gray-500 text-sm">Question types explained</p>
          </Link>
          <Link href="/resources/guides/mock-exams" className="glass-card p-4 hover:bg-white/10 transition-colors">
            <span className="text-2xl">📝</span>
            <h4 className="font-semibold text-white mt-2">Mock Exam Importance</h4>
            <p className="text-gray-500 text-sm">Why practice tests matter</p>
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
