import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="font-display text-xl gradient-text">11+ QUEST</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
          <Link href="/resources" className="text-white font-semibold text-sm">Resources</Link>
          <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
          <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl gradient-text mb-4">Free 11+ Resources</h1>
        <p className="text-gray-400 text-lg">
          Tips, guides, and strategies to help your child succeed.
        </p>
      </section>

      {/* Quick Tips */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">📚 Essential 11+ Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-pink-400 mb-3">🕐 Timing is Everything</h3>
            <p className="text-gray-400 text-sm mb-3">
              In the real exam, you'll have less than a minute per question. Practice with our timed mock exams to build speed without sacrificing accuracy.
            </p>
            <p className="text-gray-500 text-xs">
              <strong>Pro tip:</strong> If stuck for more than 30 seconds, make your best guess and move on.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-purple-400 mb-3">📖 Read the Question Twice</h3>
            <p className="text-gray-400 text-sm mb-3">
              Many mistakes come from misreading. Train your child to read each question carefully before looking at the answers.
            </p>
            <p className="text-gray-500 text-xs">
              <strong>Pro tip:</strong> Underline key words in the question to stay focused.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-emerald-400 mb-3">🎯 Process of Elimination</h3>
            <p className="text-gray-400 text-sm mb-3">
              Can't find the right answer? Cross out the obviously wrong ones first. This increases your odds significantly.
            </p>
            <p className="text-gray-500 text-xs">
              <strong>Pro tip:</strong> Usually 2 answers are clearly wrong, leaving a 50/50 choice.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-yellow-400 mb-3">😴 Rest Before the Exam</h3>
            <p className="text-gray-400 text-sm mb-3">
              A well-rested brain performs better. No cramming the night before - early bed and a good breakfast instead.
            </p>
            <p className="text-gray-500 text-xs">
              <strong>Pro tip:</strong> Light practice (not heavy studying) in the final week is ideal.
            </p>
          </div>
        </div>
      </section>

      {/* Subject Guides */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">📝 Subject Guides</h2>
        
        <div className="space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🦊</span>
              <h3 className="text-xl font-bold text-pink-400">Verbal Reasoning</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Verbal reasoning tests vocabulary, logic, and language skills. Key areas include:
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• <strong className="text-white">Synonyms & Antonyms</strong> - Build vocabulary by reading widely. Keep a word journal.</li>
              <li>• <strong className="text-white">Analogies</strong> - Look for the relationship pattern first, then find the matching pair.</li>
              <li>• <strong className="text-white">Codes</strong> - Practice letter-number conversions (A=1, B=2) until they're automatic.</li>
              <li>• <strong className="text-white">Comprehension</strong> - Read the passage carefully; answers are always in the text.</li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🐱</span>
              <h3 className="text-xl font-bold text-purple-400">Non-Verbal Reasoning</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Non-verbal reasoning tests pattern recognition and spatial awareness:
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• <strong className="text-white">Sequences</strong> - Look for rotation, reflection, addition, or subtraction of elements.</li>
              <li>• <strong className="text-white">Odd One Out</strong> - Identify what 4 shapes share that 1 doesn't.</li>
              <li>• <strong className="text-white">Matrices</strong> - Check rows AND columns for the pattern.</li>
              <li>• <strong className="text-white">Paper Folding</strong> - Visualize step by step, or practice with real paper.</li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🐰</span>
              <h3 className="text-xl font-bold text-rose-400">English</h3>
            </div>
            <p className="text-gray-400 mb-4">
              English tests grammar, spelling, punctuation, and comprehension:
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• <strong className="text-white">Grammar</strong> - Learn common rules: subject-verb agreement, tenses, pronouns.</li>
              <li>• <strong className="text-white">Spelling</strong> - Focus on commonly misspelled words and tricky patterns (ie/ei, double letters).</li>
              <li>• <strong className="text-white">Punctuation</strong> - Master apostrophes, semicolons, and comma rules.</li>
              <li>• <strong className="text-white">Comprehension</strong> - Practice inference questions - "What does this suggest?"</li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🐻</span>
              <h3 className="text-xl font-bold text-emerald-400">Maths</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Maths covers arithmetic, problem-solving, and mathematical reasoning:
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• <strong className="text-white">Mental Maths</strong> - Practice times tables until instant. Know squares up to 15².</li>
              <li>• <strong className="text-white">Fractions</strong> - Convert between fractions, decimals, and percentages fluently.</li>
              <li>• <strong className="text-white">Word Problems</strong> - Identify what operation is needed before calculating.</li>
              <li>• <strong className="text-white">Geometry</strong> - Know area/perimeter formulas and angle rules.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exam Day Checklist */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">✅ Exam Day Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-pink-400 mb-3">Night Before</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>☐ Pack pencils, eraser, water bottle</li>
                <li>☐ Lay out comfortable clothes</li>
                <li>☐ Check exam time and location</li>
                <li>☐ Early bedtime (no screens!)</li>
                <li>☐ No last-minute cramming</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-3">Morning Of</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>☐ Good breakfast (protein + carbs)</li>
                <li>☐ Use the bathroom before</li>
                <li>☐ Arrive 15 mins early</li>
                <li>☐ Stay calm - you've prepared!</li>
                <li>☐ Deep breaths before starting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Practice?</h3>
        <p className="text-gray-400 mb-8">
          Put these tips into action with our gamified practice platform.
        </p>
        <Link 
          href="/login"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
        >
          Start Free Today ✨
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-display gradient-text">11+ QUEST</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <p className="text-gray-500 text-sm">© 2025 11+ Quest</p>
        </div>
      </footer>
    </main>
  )
}
