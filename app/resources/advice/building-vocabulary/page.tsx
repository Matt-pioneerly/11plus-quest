import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building Vocabulary for 11+ Verbal Reasoning | 10 Strategies | 11+ Quest',
  description: '10 effective strategies to build your child\'s vocabulary for 11+ verbal reasoning. Practical tips for parents to help expand word knowledge naturally.',
  keywords: '11+ vocabulary, verbal reasoning vocabulary, build vocabulary children, 11+ word list',
}

export default function BuildingVocabularyPage() {
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
          <span className="text-white">Building Vocabulary</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">Parent Advice</span>
          <h1 className="font-display text-4xl gradient-text mt-4 mb-4">Building Vocabulary for Verbal Reasoning</h1>
          <p className="text-gray-400 text-lg">10 effective strategies to expand your child&apos;s word knowledge.</p>
        </header>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <p className="text-gray-400">
              Vocabulary is the foundation of verbal reasoning. Children with a rich vocabulary find synonyms, antonyms, 
              and analogies much easier. The good news? Building vocabulary can be enjoyable and doesn&apos;t need to feel like studying.
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
              { num: 7, title: 'Talk Richly', desc: 'Use varied vocabulary in everyday conversation. Don\'t dumb down your language.' },
              { num: 8, title: 'Audio Books', desc: 'Great for car journeys. Hearing words pronounced correctly helps retention.' },
              { num: 9, title: 'Etymology Stories', desc: 'Word origins are fascinating. "Salary" comes from "salt" (soldiers\' pay).' },
              { num: 10, title: 'Context Clues', desc: 'Teach them to guess meanings from surrounding words before checking the dictionary.' },
            ].map((tip) => (
              <div key={tip.num} className="glass-card p-4 flex gap-4">
                <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold shrink-0">{tip.num}</span>
                <div>
                  <h3 className="font-semibold text-white">{tip.title}</h3>
                  <p className="text-gray-400 text-sm">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 border border-emerald-500/20">
            <h2 className="text-lg font-bold text-emerald-400 mb-3">💡 Remember</h2>
            <p className="text-gray-400 text-sm">
              Building vocabulary is a marathon, not a sprint. Start 12-18 months before the exam and make it a daily habit. 
              Even 10 minutes of reading before bed makes a difference over time.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <Link href="/login" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          Start Free Practice ✨
        </Link>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
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
