import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building Vocabulary for 11+ Verbal Reasoning | 10 Strategies | 11+ Quest',
  description: '10 effective strategies to build your child\'s vocabulary for 11+ verbal reasoning. Practical tips for parents to help expand word knowledge naturally.',
  keywords: '11+ vocabulary, verbal reasoning vocabulary, build vocabulary children, 11+ word list',
}

export default function BuildingVocabularyPage() {
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
          <span className="text-slate-800">Building Vocabulary</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600">Parent Advice</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">Building Vocabulary for Verbal Reasoning</h1>
          <p className="text-slate-600 text-lg">10 effective strategies to expand your child's word knowledge.</p>
        </header>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-slate-600">
              Vocabulary is the foundation of verbal reasoning. Children with a rich vocabulary find synonyms, antonyms, 
              and analogies much easier. The good news? Building vocabulary can be enjoyable and does not need to feel like studying.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { num: 1, title: 'Read Widely', desc: 'Mix fiction and non-fiction. Try historical fiction, science books, quality newspapers, and classics.' },
              { num: 2, title: 'Word of the Day', desc: 'Introduce one new word each day at breakfast. Use it in sentences throughout the day.' },
              { num: 3, title: 'Vocabulary Journal', desc: 'Keep a notebook of new words with definitions and example sentences.' },
              { num: 4, title: 'Learn Word Roots', desc: 'Teach prefixes (un-, dis-, pre-) and suffixes (-tion, -ment, -ous) to decode unfamiliar words.' },
              { num: 5, title: 'Play Word Games', desc: 'Scrabble, Boggle, crosswords, and Wordle make vocabulary fun.' },
              { num: 6, title: 'Use a Thesaurus', desc: 'When writing, look up synonyms. This builds connections between words.' },
              { num: 7, title: 'Talk Richly', desc: 'Use varied vocabulary in everyday conversation. Do not dumb down your language.' },
              { num: 8, title: 'Audio Books', desc: 'Great for car journeys. Hearing words pronounced correctly helps retention.' },
              { num: 9, title: 'Etymology Stories', desc: 'Word origins are fascinating. "Salary" comes from "salt" (soldiers\' pay).' },
              { num: 10, title: 'Context Clues', desc: 'Teach them to guess meanings from surrounding words before checking the dictionary.' },
            ].map((tip) => (
              <div key={tip.num} className="bg-white rounded-xl p-4 flex gap-4 border border-slate-200">
                <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold shrink-0">{tip.num}</span>
                <div>
                  <h3 className="font-semibold text-slate-800">{tip.title}</h3>
                  <p className="text-slate-600 text-sm">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Remember</h2>
            <p className="text-slate-600 text-sm">
              Building vocabulary is a marathon, not a sprint. Start 12-18 months before the exam and make it a daily habit. 
              Even 10 minutes of reading before bed makes a difference over time.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Start Free Practice</h3>
          <Link href="/login" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
            Get Started
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
