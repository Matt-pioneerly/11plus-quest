import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verbal Reasoning Explained | 11+ Question Types Guide | 11+ Quest',
  description: 'Complete guide to 11+ verbal reasoning. Learn about synonyms, antonyms, analogies, codes, and comprehension with strategies for each question type.',
  keywords: '11+ verbal reasoning, verbal reasoning question types, 11+ synonyms, 11+ analogies, verbal reasoning tips',
}

export default function VerbalReasoningPage() {
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
          <span className="text-white">Verbal Reasoning</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Exam Guide</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">Verbal Reasoning Explained</h1>
          <p className="text-gray-400 text-lg">Understanding the question types and how to tackle them.</p>
        </header>

        <div className="space-y-6">
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">📖 What is Verbal Reasoning?</h2>
            <p className="text-gray-400">
              Verbal reasoning tests your child&apos;s ability to understand and reason using words and language. 
              It assesses vocabulary, comprehension, and logical thinking skills. Strong verbal reasoning 
              requires both a good vocabulary and the ability to spot patterns and relationships between words.
            </p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">🔤 Common Question Types</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-pink-400 mb-2">Synonyms & Antonyms</h3>
                <p className="text-gray-400 text-sm mb-2">Find words with similar or opposite meanings.</p>
                <p className="text-gray-500 text-xs">Example: Select the word most similar to RAPID: slow, quick, heavy, light</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-purple-400 mb-2">Analogies</h3>
                <p className="text-gray-400 text-sm mb-2">Identify relationships between word pairs.</p>
                <p className="text-gray-500 text-xs">Example: Hot is to cold as big is to ___</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-emerald-400 mb-2">Letter Codes</h3>
                <p className="text-gray-400 text-sm mb-2">Decode words using letter-number patterns.</p>
                <p className="text-gray-500 text-xs">Example: If CAT = DBU, what is DOG?</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-yellow-400 mb-2">Hidden Words</h3>
                <p className="text-gray-400 text-sm mb-2">Find words hidden within sentences.</p>
                <p className="text-gray-500 text-xs">Example: Find a colour in: &quot;I saw him agree nervously&quot; (Answer: green)</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="font-semibold text-blue-400 mb-2">Comprehension</h3>
                <p className="text-gray-400 text-sm mb-2">Read passages and answer questions about meaning, inference, and vocabulary.</p>
              </div>
            </div>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">💡 Top Tips</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Read widely - fiction and non-fiction build vocabulary naturally</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Keep a vocabulary journal - write new words and their meanings</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> Learn common prefixes and suffixes (un-, dis-, -tion, -ment)</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> For analogies, identify the relationship first, then find the match</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> For codes, write out the alphabet with numbers (A=1, B=2)</li>
              <li className="flex gap-2"><span className="text-emerald-400">✓</span> In comprehension, the answer is always in the text</li>
            </ul>
          </section>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <Link href="/login" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          Practice Verbal Reasoning ✨
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
