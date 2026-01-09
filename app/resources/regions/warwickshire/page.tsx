import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '11+ in Warwickshire | Grammar Schools, Exam Dates & Registration | 11+ Quest',
  description: 'Complete guide to the 11+ exam in Warwickshire. Information on King Edward VI schools, exam dates, registration deadlines, and how to prepare for the Birmingham grammar school consortium.',
  keywords: '11+ Warwickshire, King Edward VI grammar schools, Birmingham 11+, Warwickshire grammar schools, KSBS exam',
}

const schools = [
  {
    name: 'King Edward VI Five Ways',
    type: 'Mixed',
    location: 'Bartley Green, Birmingham',
    places: 150,
    ofsted: 'Outstanding',
    notes: 'One of the most oversubscribed grammar schools in the country',
  },
  {
    name: 'King Edward VI Camp Hill Boys',
    type: 'Boys',
    location: 'Kings Heath, Birmingham',
    places: 120,
    ofsted: 'Outstanding',
    notes: 'Strong STEM focus with excellent results',
  },
  {
    name: 'King Edward VI Camp Hill Girls',
    type: 'Girls',
    location: 'Kings Heath, Birmingham',
    places: 120,
    ofsted: 'Outstanding',
    notes: 'Consistently top A-Level results',
  },
  {
    name: 'King Edward VI Handsworth',
    type: 'Girls',
    location: 'Handsworth, Birmingham',
    places: 120,
    ofsted: 'Outstanding',
    notes: 'Excellent pastoral care and extracurricular activities',
  },
  {
    name: 'King Edward VI Aston',
    type: 'Boys',
    location: 'Aston, Birmingham',
    places: 120,
    ofsted: 'Good',
    notes: 'Strong community links and diverse intake',
  },
]

const keyDates = [
  { date: 'May 2025', event: 'Registration opens for September 2026 entry' },
  { date: 'July 2025', event: 'Registration deadline' },
  { date: 'September 2025', event: '11+ exam date' },
  { date: 'October 2025', event: 'Results released to parents' },
  { date: 'October 2025', event: 'Secondary school application deadline (via local authority)' },
  { date: 'March 2026', event: 'National Offer Day' },
]

export default function WarwickshirePage() {
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
      <div className="px-4 max-w-6xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          <span>→</span>
          <Link href="/resources/regions" className="hover:text-white transition-colors">Regions</Link>
          <span>→</span>
          <span className="text-white">Warwickshire</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="font-display text-4xl gradient-text">11+ in Warwickshire</h1>
          <span className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">GL Assessment</span>
        </div>
        <p className="text-gray-400 text-lg max-w-3xl">
          Warwickshire is home to the prestigious King Edward VI Foundation schools, part of the Birmingham 
          grammar school consortium. These highly selective schools use the GL Assessment 11+ exam.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="px-4 max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-pink-400">5</div>
            <div className="text-gray-500 text-sm">Grammar Schools</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">GL</div>
            <div className="text-gray-500 text-sm">Exam Board</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-emerald-400">~630</div>
            <div className="text-gray-500 text-sm">Total Places</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400">Sept</div>
            <div className="text-gray-500 text-sm">Exam Month</div>
          </div>
        </div>
      </section>

      {/* Exam Format */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">📋 Exam Format</h2>
        <div className="glass-card p-6">
          <p className="text-gray-400 mb-6">
            The King Edward VI schools use the GL Assessment 11+ exam, testing children in four areas:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔤</span>
                <h3 className="font-bold text-white">Verbal Reasoning</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Vocabulary, analogies, codes, and comprehension. Tests language skills and logical thinking.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔷</span>
                <h3 className="font-bold text-white">Non-Verbal Reasoning</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Patterns, sequences, matrices, and spatial reasoning. Tests problem-solving without words.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📚</span>
                <h3 className="font-bold text-white">English</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Grammar, punctuation, spelling, and comprehension. Based on Key Stage 2 curriculum.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔢</span>
                <h3 className="font-bold text-white">Maths</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Arithmetic, fractions, geometry, and problem-solving. Key Stage 2 level with some extension.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
            <p className="text-yellow-400 text-sm">
              <strong>💡 Tip:</strong> The King Edward schools are extremely competitive. It&apos;s common for children 
              to score well above average and still not receive an offer. Focus on all four subjects equally.
            </p>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">📅 Key Dates 2025/26</h2>
        <div className="glass-card p-6">
          <div className="space-y-4">
            {keyDates.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-28 shrink-0">
                  <span className="text-pink-400 font-semibold">{item.date}</span>
                </div>
                <div className="flex-1 text-gray-400">{item.event}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            * Dates are indicative and should be confirmed on individual school websites.
          </p>
        </div>
      </section>

      {/* Schools */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">🏫 Grammar Schools</h2>
        <div className="space-y-4">
          {schools.map((school, i) => (
            <div key={i} className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{school.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      school.type === 'Mixed' ? 'bg-purple-500/20 text-purple-400' :
                      school.type === 'Boys' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-pink-500/20 text-pink-400'
                    }`}>
                      {school.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      school.ofsted === 'Outstanding' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      Ofsted: {school.ofsted}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">📍 {school.location}</p>
                  <p className="text-gray-400 text-sm">{school.notes}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-emerald-400">~{school.places}</div>
                  <div className="text-gray-500 text-sm">places/year</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">💡 Tips for Warwickshire 11+</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Start Early</h3>
            <p className="text-gray-400 text-sm">
              Competition is fierce. Most successful candidates begin preparation in Year 4 or early Year 5. 
              Build a consistent routine of 20-30 minutes practice daily.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Focus on Timing</h3>
            <p className="text-gray-400 text-sm">
              GL exams are time-pressured. Practice under timed conditions regularly. Being fast AND accurate 
              is essential for the top scores.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Build Vocabulary</h3>
            <p className="text-gray-400 text-sm">
              Verbal reasoning heavily tests vocabulary. Read widely, keep a word journal, and learn 
              common word roots (prefixes and suffixes).
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Consider Multiple Schools</h3>
            <p className="text-gray-400 text-sm">
              With only ~630 places across 5 schools, have backup options. Sutton Coldfield and other 
              Birmingham schools use the same exam format.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Prepare for Warwickshire 11+</h3>
          <p className="text-gray-400 mb-6">
            Our practice platform covers all GL Assessment question types with gamified learning 
            to keep your child motivated.
          </p>
          <Link 
            href="/login"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Start Free Practice ✨
          </Link>
        </div>
      </section>

      {/* Related Regions */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h3 className="text-lg font-bold text-white mb-4">Nearby Regions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/resources/regions/birmingham" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">
            <span className="text-white font-semibold">Birmingham</span>
            <p className="text-gray-500 text-xs">8 schools</p>
          </Link>
          <Link href="/resources/regions/gloucestershire" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">
            <span className="text-white font-semibold">Gloucestershire</span>
            <p className="text-gray-500 text-xs">7 schools</p>
          </Link>
          <Link href="/resources/regions/lincolnshire" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">
            <span className="text-white font-semibold">Lincolnshire</span>
            <p className="text-gray-500 text-xs">14 schools</p>
          </Link>
          <Link href="/resources/regions" className="glass-card p-4 text-center hover:bg-white/10 transition-colors border border-dashed border-white/20">
            <span className="text-gray-400">View All</span>
            <p className="text-gray-500 text-xs">10+ regions</p>
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
