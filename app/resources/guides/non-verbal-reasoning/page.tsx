import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Non-Verbal Reasoning Guide | 11+ Patterns & Sequences | 11+ Quest',
  description: 'Complete guide to 11+ non-verbal reasoning. Learn about sequences, matrices, odd one out, and spatial reasoning with strategies for each question type.',
  keywords: '11+ non-verbal reasoning, NVR 11+, 11+ patterns, 11+ sequences, spatial reasoning',
}

export default function NonVerbalReasoningPage() {
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
          <span className="text-white">Non-Verbal Reasoning</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Exam Guide</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">Non-Verbal Reasoning Guide</h1>
          <p className="text-gray-400 text-lg">Patterns, sequences, and spatial skills without words.</p>
        </header>

        <div className="space-y-6">
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">🔷 What is Non-Verbal Reasoning?</h2>
            <p className="text-gray-400">
              Non-verbal reasoning tests your child&apos;s ability to understand and analyse visual information, 
              recognise patterns, and solve problems using pictures and diagrams rather than words. 
              It&apos;s designed to assess logical thinking independently of language ability.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">🧩 Common Question Types</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-pink-400 mb-2">Sequences</h3>
                <p className="text-gray-400 text-sm">Find the next shape in a series based on how it changes.</p>
                <p className="text-gray-500 text-xs">Look for: rotation, reflection, addition/removal of elements, colour changes</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-purple-400 mb-2">Matrices</h3>
                <p className="text-gray-400 text-sm">Complete a grid where patterns work across rows AND down columns.</p>
                <p className="text-gray-500 text-xs">Check both directions - the answer must satisfy both</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-emerald-400 mb-2">Odd One Out</h3>
                <p className="text-gray-400 text-sm">Find the shape that doesn&apos;t belong with the others.</p>
                <p className="text-gray-500 text-xs">Look at: number of sides, shading, size, orientation, symmetry</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-yellow-400 mb-2">Codes</h3>
                <p className="text-gray-400 text-sm">Work out which codes represent which features of shapes.</p>
                <p className="text-gray-500 text-xs">Compare shapes systematically to isolate what each code means</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-blue-400 mb-2">Paper Folding & Reflection</h3>
                <p className="text-gray-400 text-sm">Visualise what a folded and punched paper looks like unfolded.</p>
                <p className="text-gray-500 text-xs">Practice with real paper if struggling to visualise</p>
              </div>
            </div>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">💡 Top Tips</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Look for multiple changes at once - often 2-3 things change together</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Use your pencil to track rotation (mark a point on the shape)</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Count everything - sides, shapes, dots, lines</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Check for clockwise vs anticlockwise rotation</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> In odd-one-out, find what 4 shapes share that 1 doesn&apos;t</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Practice with tangrams, puzzles, and building blocks</li>
            </ul>
          </section>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <Link href="/login" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          Practice Non-Verbal Reasoning ✨
        </Link>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
