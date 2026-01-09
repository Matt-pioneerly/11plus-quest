import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '11+ Resources for Parents | Guides, Tips & Regional Info | 11+ Quest',
  description: 'Free 11+ exam resources for parents. Regional grammar school guides, exam preparation tips, GL vs CEM comparisons, and expert advice to help your child succeed.',
  keywords: '11+ exam, eleven plus, grammar school, 11+ preparation, GL Assessment, CEM, 11+ tips, grammar school entrance',
}

const regions = [
  { slug: 'warwickshire', name: 'Warwickshire', schools: 5, color: '#f472b6' },
  { slug: 'birmingham', name: 'Birmingham', schools: 8, color: '#a78bfa' },
  { slug: 'buckinghamshire', name: 'Buckinghamshire', schools: 13, color: '#34d399' },
  { slug: 'kent', name: 'Kent', schools: 32, color: '#fb7185' },
  { slug: 'essex', name: 'Essex', schools: 4, color: '#fbbf24' },
  { slug: 'lincolnshire', name: 'Lincolnshire', schools: 14, color: '#60a5fa' },
  { slug: 'yorkshire', name: 'Yorkshire', schools: 3, color: '#f472b6' },
  { slug: 'greater-london', name: 'Greater London', schools: 10, color: '#a78bfa' },
]

const guides = [
  { slug: 'gl-vs-cem', title: 'GL vs CEM: What\'s the Difference?', desc: 'Understanding the two main 11+ exam boards', icon: '📋' },
  { slug: 'when-to-start', title: 'When to Start 11+ Preparation', desc: 'The ideal timeline for exam prep', icon: '📅' },
  { slug: 'exam-day', title: 'What to Expect on Exam Day', desc: 'A complete guide to the big day', icon: '🎯' },
  { slug: 'mock-exams', title: 'The Importance of Mock Exams', desc: 'Why practice tests are essential', icon: '📝' },
  { slug: 'verbal-reasoning', title: 'Verbal Reasoning Explained', desc: 'Question types and how to tackle them', icon: '🔤' },
  { slug: 'non-verbal-reasoning', title: 'Non-Verbal Reasoning Guide', desc: 'Patterns, sequences and spatial skills', icon: '🔷' },
]

const advice = [
  { slug: 'managing-exam-anxiety', title: 'Managing 11+ Exam Anxiety', desc: 'Help your child stay calm and confident', icon: '🧘' },
  { slug: 'building-vocabulary', title: 'Building Vocabulary for Verbal Reasoning', desc: '10 effective strategies', icon: '📚' },
  { slug: 'time-management', title: 'Time Management in the 11+', desc: 'Teaching your child to pace themselves', icon: '⏱️' },
  { slug: 'supporting-without-pressure', title: 'Supporting Without Adding Pressure', desc: 'Finding the right balance', icon: '💜' },
  { slug: 'what-if-they-dont-pass', title: 'What If They Don\'t Pass?', desc: 'Alternative paths and keeping perspective', icon: '🌟' },
  { slug: 'tutoring-vs-self-study', title: 'Tutoring vs Self-Study', desc: 'Which approach is right for your child?', icon: '🤔' },
]

export default function ResourcesPage() {
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
          <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Start Free
          </Link>
        </div>
        <Link href="/login" className="md:hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          Start Free
        </Link>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl gradient-text mb-4">Resources for Parents</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Everything you need to know about the 11+ exam. Regional guides, preparation tips, 
          and expert advice to help your child succeed.
        </p>
      </section>

      {/* Quick Links */}
      <section className="px-4 max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#regions" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">
            <span className="text-2xl">🗺️</span>
            <p className="text-white font-semibold mt-2">By Region</p>
            <p className="text-gray-500 text-xs">Find local grammar schools</p>
          </a>
          <a href="#guides" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">
            <span className="text-2xl">📖</span>
            <p className="text-white font-semibold mt-2">Exam Guides</p>
            <p className="text-gray-500 text-xs">Understand the 11+</p>
          </a>
          <a href="#advice" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">
            <span className="text-2xl">💡</span>
            <p className="text-white font-semibold mt-2">Parent Advice</p>
            <p className="text-gray-500 text-xs">Tips and strategies</p>
          </a>
          <Link href="/resources/dates" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">
            <span className="text-2xl">📅</span>
            <p className="text-white font-semibold mt-2">Key Dates 2025</p>
            <p className="text-gray-500 text-xs">Registration & exam dates</p>
          </Link>
        </div>
      </section>

      {/* Regional Guides */}
      <section id="regions" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">🗺️ Grammar Schools by Region</h2>
            <p className="text-gray-400">Find 11+ information specific to your area</p>
          </div>
          <Link href="/resources/regions" className="text-pink-400 hover:text-pink-300 text-sm font-semibold hidden md:block">
            View all regions →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/resources/regions/${region.slug}`}
              className="glass-card p-5 hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              <h3 className="font-bold text-white mb-1">{region.name}</h3>
              <p className="text-gray-500 text-sm">{region.schools} grammar schools</p>
              <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${Math.min(region.schools * 3, 100)}%`, background: region.color }} />
              </div>
            </Link>
          ))}
        </div>
        
        <Link href="/resources/regions" className="block text-center text-pink-400 hover:text-pink-300 text-sm font-semibold mt-6 md:hidden">
          View all regions →
        </Link>
      </section>

      {/* Exam Guides */}
      <section id="guides" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">📖 11+ Exam Guides</h2>
          <p className="text-gray-400">Understanding the exam format and content</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/resources/guides/${guide.slug}`}
              className="glass-card p-5 hover:bg-white/10 transition-all hover:scale-[1.02] group"
            >
              <span className="text-3xl">{guide.icon}</span>
              <h3 className="font-bold text-white mt-3 mb-1 group-hover:text-pink-400 transition-colors">{guide.title}</h3>
              <p className="text-gray-500 text-sm">{guide.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Parent Advice */}
      <section id="advice" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">💡 Advice for Parents</h2>
          <p className="text-gray-400">Practical tips from experienced 11+ parents</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advice.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/advice/${article.slug}`}
              className="glass-card p-5 hover:bg-white/10 transition-all hover:scale-[1.02] group"
            >
              <span className="text-3xl">{article.icon}</span>
              <h3 className="font-bold text-white mt-3 mb-1 group-hover:text-pink-400 transition-colors">{article.title}</h3>
              <p className="text-gray-500 text-sm">{article.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Practising?</h3>
          <p className="text-gray-400 mb-6">
            Put this knowledge into action with our gamified 11+ practice platform.
          </p>
          <Link 
            href="/login"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Try Free Today ✨
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
