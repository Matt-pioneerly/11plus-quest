import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '11+ Resources for Parents | Guides, Tips & Regional Info | 11+ Quest',
  description: 'Free 11+ exam resources for parents. Regional grammar school guides, exam preparation tips, GL vs CEM comparisons, and expert advice to help your child succeed.',
  keywords: '11+ exam, eleven plus, grammar school, 11+ preparation, GL Assessment, CEM, 11+ tips, grammar school entrance',
}

const regions = [
  { slug: 'warwickshire', name: 'Warwickshire', schools: 5, color: '#ec4899' },
  { slug: 'birmingham', name: 'Birmingham', schools: 8, color: '#a855f7' },
  { slug: 'buckinghamshire', name: 'Buckinghamshire', schools: 13, color: '#10b981' },
  { slug: 'kent', name: 'Kent', schools: 32, color: '#f43f5e' },
  { slug: 'essex', name: 'Essex', schools: 4, color: '#f59e0b' },
  { slug: 'lincolnshire', name: 'Lincolnshire', schools: 14, color: '#3b82f6' },
  { slug: 'yorkshire', name: 'Yorkshire', schools: 3, color: '#ec4899' },
  { slug: 'greater-london', name: 'Greater London', schools: 10, color: '#a855f7' },
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
            <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Start Free
            </Link>
          </div>
          <Link href="/login" className="md:hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">Resources for Parents</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Everything you need to know about the 11+ exam. Regional guides, preparation tips, 
          and expert advice to help your child succeed.
        </p>
      </section>

      {/* Quick Links */}
      <section className="px-4 max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#regions" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-slate-200">
            <span className="text-2xl">🗺️</span>
            <p className="text-slate-800 font-semibold mt-2">By Region</p>
            <p className="text-slate-500 text-xs">Find local grammar schools</p>
          </a>
          <a href="#guides" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-slate-200">
            <span className="text-2xl">📖</span>
            <p className="text-slate-800 font-semibold mt-2">Exam Guides</p>
            <p className="text-slate-500 text-xs">Understand the 11+</p>
          </a>
          <a href="#advice" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-slate-200">
            <span className="text-2xl">💡</span>
            <p className="text-slate-800 font-semibold mt-2">Parent Advice</p>
            <p className="text-slate-500 text-xs">Tips and strategies</p>
          </a>
          <Link href="/resources/dates" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-slate-200">
            <span className="text-2xl">📅</span>
            <p className="text-slate-800 font-semibold mt-2">Key Dates 2025</p>
            <p className="text-slate-500 text-xs">Registration & exam dates</p>
          </Link>
        </div>
      </section>

      {/* Regional Guides */}
      <section id="regions" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">🗺️ Grammar Schools by Region</h2>
            <p className="text-slate-600">Find 11+ information specific to your area</p>
          </div>
          <Link href="/resources/regions" className="text-pink-600 hover:text-pink-700 text-sm font-semibold hidden md:block">
            View all regions →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/resources/regions/${region.slug}`}
              className="bg-white rounded-xl p-5 hover:shadow-lg transition-all border border-slate-200"
            >
              <h3 className="font-bold text-slate-800 mb-1">{region.name}</h3>
              <p className="text-slate-500 text-sm">{region.schools} grammar schools</p>
              <div className="mt-3 h-1 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${Math.min(region.schools * 3, 100)}%`, background: region.color }} />
              </div>
            </Link>
          ))}
        </div>
        
        <Link href="/resources/regions" className="block text-center text-pink-600 hover:text-pink-700 text-sm font-semibold mt-6 md:hidden">
          View all regions →
        </Link>
      </section>

      {/* Exam Guides */}
      <section id="guides" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">📖 11+ Exam Guides</h2>
          <p className="text-slate-600">Understanding the exam format and content</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/resources/guides/${guide.slug}`}
              className="bg-white rounded-xl p-5 hover:shadow-lg transition-all border border-slate-200 group"
            >
              <span className="text-3xl">{guide.icon}</span>
              <h3 className="font-bold text-slate-800 mt-3 mb-1 group-hover:text-pink-600 transition-colors">{guide.title}</h3>
              <p className="text-slate-500 text-sm">{guide.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Parent Advice */}
      <section id="advice" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">💡 Advice for Parents</h2>
          <p className="text-slate-600">Practical tips from experienced 11+ parents</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advice.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/advice/${article.slug}`}
              className="bg-white rounded-xl p-5 hover:shadow-lg transition-all border border-slate-200 group"
            >
              <span className="text-3xl">{article.icon}</span>
              <h3 className="font-bold text-slate-800 mt-3 mb-1 group-hover:text-pink-600 transition-colors">{article.title}</h3>
              <p className="text-slate-500 text-sm">{article.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Practising?</h3>
          <p className="text-white/90 mb-6">
            Put this knowledge into action with our gamified 11+ practice platform.
          </p>
          <Link 
            href="/login"
            className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors"
          >
            Try Free Today ✨
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-4 mt-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-display bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">11+ QUEST</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link href="/about" className="hover:text-slate-800 transition-colors">About</Link>
            <Link href="/resources" className="hover:text-slate-800 transition-colors">Resources</Link>
            <Link href="/pricing" className="hover:text-slate-800 transition-colors">Pricing</Link>
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">Terms</Link>
          </div>
          <p className="text-slate-500 text-sm">© 2025 11+ Quest</p>
        </div>
      </footer>
    </main>
  )
}
