import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verbal Reasoning Explained | 11+ Question Types Guide | 11+ Quest',
  description: 'Complete guide to 11+ verbal reasoning. Learn about synonyms, antonyms, analogies, codes, and comprehension with strategies for each question type.',
  keywords: '11+ verbal reasoning, verbal reasoning question types, 11+ synonyms, 11+ analogies, verbal reasoning tips',
}

export default function VerbalReasoningPage() {
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
          <span className="text-slate-800">Verbal Reasoning</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">Exam Guide</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">Verbal Reasoning Explained</h1>
          <p className="text-slate-600 text-lg">Understanding the question types and how to tackle them.</p>
        </header>

        <div className="space-y-6">
          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">What is Verbal Reasoning?</h2>
            <p className="text-slate-600">
              Verbal reasoning tests your child's ability to understand and reason using words and language. 
              It assesses vocabulary, comprehension, and logical thinking skills. Strong verbal reasoning 
              requires both a good vocabulary and the ability to spot patterns and relationships between words.
            </p>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Common Question Types</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-pink-600 mb-2">Synonyms and Antonyms</h3>
                <p className="text-slate-600 text-sm mb-2">Find words with similar or opposite meanings.</p>
                <p className="text-slate-500 text-xs">Example: Select the word most similar to RAPID: slow, quick, heavy, light</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-purple-600 mb-2">Analogies</h3>
                <p className="text-slate-600 text-sm mb-2">Identify relationships between word pairs.</p>
                <p className="text-slate-500 text-xs">Example: Hot is to cold as big is to ___</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-emerald-600 mb-2">Letter Codes</h3>
                <p className="text-slate-600 text-sm mb-2">Decode words using letter-number patterns.</p>
                <p className="text-slate-500 text-xs">Example: If CAT = DBU, what is DOG?</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-amber-600 mb-2">Hidden Words</h3>
                <p className="text-slate-600 text-sm mb-2">Find words hidden within sentences.</p>
                <p className="text-slate-500 text-xs">Example: Find a colour in: "I saw him agree nervously" (Answer: green)</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-blue-600 mb-2">Comprehension</h3>
                <p className="text-slate-600 text-sm mb-2">Read passages and answer questions about meaning, inference, and vocabulary.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Top Tips</h2>
            <ul className="text-slate-600 space-y-3">
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Read widely - fiction and non-fiction build vocabulary naturally</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Keep a vocabulary journal - write new words and their meanings</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Learn common prefixes and suffixes (un-, dis-, -tion, -ment)</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> For analogies, identify the relationship first, then find the match</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> For codes, write out the alphabet with numbers (A=1, B=2)</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> In comprehension, the answer is always in the text</li>
            </ul>
          </section>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Practice Verbal Reasoning</h3>
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
