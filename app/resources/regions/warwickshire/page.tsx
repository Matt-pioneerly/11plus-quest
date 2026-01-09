import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '11+ in Warwickshire | Grammar Schools, Exam Dates & Registration | 11+ Quest',
  description: 'Complete guide to the 11+ exam in Warwickshire. Information on King Edward VI Stratford, Alcester Grammar, Lawrence Sheriff Rugby, exam dates, and how to prepare.',
  keywords: '11+ Warwickshire, King Edward VI Stratford, Alcester Grammar, Lawrence Sheriff, Warwickshire grammar schools',
}

const schools = [
  {
    name: 'King Edward VI School, Stratford-upon-Avon',
    type: 'Mixed',
    location: 'Stratford-upon-Avon',
    places: 120,
    ofsted: 'Outstanding',
    notes: 'Historic school founded in 1553, famously attended by William Shakespeare. Strong academic results and excellent extracurricular activities.',
  },
  {
    name: 'Alcester Grammar School',
    type: 'Mixed',
    location: 'Alcester',
    places: 120,
    ofsted: 'Good',
    notes: 'Founded in 1550, serves south Warwickshire. Known for strong community links and broad curriculum.',
  },
  {
    name: 'Shottery Girls\' Grammar School',
    type: 'Girls',
    location: 'Stratford-upon-Avon',
    places: 96,
    ofsted: 'Good',
    notes: 'Small, nurturing environment with excellent pastoral care. Strong STEM and arts programmes.',
  },
  {
    name: 'Lawrence Sheriff School',
    type: 'Boys',
    location: 'Rugby',
    places: 120,
    ofsted: 'Outstanding',
    notes: 'Founded in 1567, one of the oldest grammar schools in England. Strong academic tradition and sports.',
  },
  {
    name: 'Rugby High School for Girls',
    type: 'Girls',
    location: 'Rugby',
    places: 112,
    ofsted: 'Outstanding',
    notes: 'Excellent academic results with strong focus on STEM subjects. Wide range of extracurricular activities.',
  },
]

const keyDates = [
  { date: 'May 2025', event: 'Registration opens for September 2026 entry' },
  { date: 'July 2025', event: 'Registration deadline (varies by school)' },
  { date: 'September 2025', event: '11+ exam date' },
  { date: 'October 2025', event: 'Results released to parents' },
  { date: 'October 2025', event: 'Secondary school application deadline (via local authority)' },
  { date: 'March 2026', event: 'National Offer Day' },
]

export default function WarwickshirePage() {
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
            <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="px-4 max-w-6xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/resources" className="hover:text-pink-600 transition-colors">Resources</Link>
          <span>→</span>
          <Link href="/resources/regions" className="hover:text-pink-600 transition-colors">Regions</Link>
          <span>→</span>
          <span className="text-slate-800">Warwickshire</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">11+ in Warwickshire</h1>
          <span className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-600">GL Assessment</span>
        </div>
        <p className="text-slate-600 text-lg max-w-3xl">
          Warwickshire has five grammar schools spread across Stratford-upon-Avon and Rugby. 
          These schools use the GL Assessment 11+ exam and are known for their strong academic traditions.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="px-4 max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
            <div className="text-3xl font-bold text-pink-500">5</div>
            <div className="text-slate-500 text-sm">Grammar Schools</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
            <div className="text-3xl font-bold text-purple-500">GL</div>
            <div className="text-slate-500 text-sm">Exam Board</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
            <div className="text-3xl font-bold text-emerald-500">~568</div>
            <div className="text-slate-500 text-sm">Total Places</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-slate-200">
            <div className="text-3xl font-bold text-amber-500">Sept</div>
            <div className="text-slate-500 text-sm">Exam Month</div>
          </div>
        </div>
      </section>

      {/* Exam Format */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">📋 Exam Format</h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-slate-600 mb-6">
            Warwickshire grammar schools use the GL Assessment 11+ exam, testing children in four areas:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔤</span>
                <h3 className="font-bold text-slate-800">Verbal Reasoning</h3>
              </div>
              <p className="text-slate-500 text-sm">
                Vocabulary, analogies, codes, and comprehension. Tests language skills and logical thinking.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔷</span>
                <h3 className="font-bold text-slate-800">Non-Verbal Reasoning</h3>
              </div>
              <p className="text-slate-500 text-sm">
                Patterns, sequences, matrices, and spatial reasoning. Tests problem-solving without words.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📚</span>
                <h3 className="font-bold text-slate-800">English</h3>
              </div>
              <p className="text-slate-500 text-sm">
                Grammar, punctuation, spelling, and comprehension. Based on Key Stage 2 curriculum.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔢</span>
                <h3 className="font-bold text-slate-800">Maths</h3>
              </div>
              <p className="text-slate-500 text-sm">
                Arithmetic, fractions, geometry, and problem-solving. Key Stage 2 level with some extension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">📅 Key Dates 2025/26</h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="space-y-4">
            {keyDates.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-28 shrink-0">
                  <span className="text-pink-600 font-semibold">{item.date}</span>
                </div>
                <div className="flex-1 text-slate-600">{item.event}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-6">
            * Dates are indicative and should be confirmed on individual school websites.
          </p>
        </div>
      </section>

      {/* Schools */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">🏫 Grammar Schools</h2>
        <div className="space-y-4">
          {schools.map((school, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-bold text-slate-800">{school.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      school.type === 'Mixed' ? 'bg-purple-100 text-purple-600' :
                      school.type === 'Boys' ? 'bg-blue-100 text-blue-600' :
                      'bg-pink-100 text-pink-600'
                    }`}>
                      {school.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      school.ofsted === 'Outstanding' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      Ofsted: {school.ofsted}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-2">📍 {school.location}</p>
                  <p className="text-slate-600 text-sm">{school.notes}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-emerald-500">~{school.places}</div>
                  <div className="text-slate-500 text-sm">places/year</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">💡 Tips for Warwickshire 11+</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3">Check Each School&apos;s Process</h3>
            <p className="text-slate-600 text-sm">
              Each Warwickshire grammar school manages its own admissions. Registration dates and processes may vary, so check each school&apos;s website directly.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3">Consider Location</h3>
            <p className="text-slate-600 text-sm">
              Schools are split between Stratford-upon-Avon and Rugby areas. Consider travel distance when choosing which schools to apply for.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3">Single-Sex vs Mixed</h3>
            <p className="text-slate-600 text-sm">
              Warwickshire offers both mixed schools (KES Stratford, Alcester) and single-sex options. Consider which environment suits your child best.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3">Out of County Applicants</h3>
            <p className="text-slate-600 text-sm">
              Warwickshire schools accept out-of-county applicants, but priority may be given to local children. Check individual school policies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Prepare for Warwickshire 11+</h3>
          <p className="text-white/90 mb-6">
            Our practice platform covers all GL Assessment question types with gamified learning to keep your child motivated.
          </p>
          <Link 
            href="/login"
            className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors"
          >
            Start Free Practice ✨
          </Link>
        </div>
      </section>

      {/* Related Regions */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Nearby Regions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/resources/regions/birmingham" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-slate-200">
            <span className="text-slate-800 font-semibold">Birmingham</span>
            <p className="text-slate-500 text-xs">8 schools</p>
          </Link>
          <Link href="/resources/regions/gloucestershire" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-slate-200">
            <span className="text-slate-800 font-semibold">Gloucestershire</span>
            <p className="text-slate-500 text-xs">7 schools</p>
          </Link>
          <Link href="/resources/regions/lincolnshire" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-slate-200">
            <span className="text-slate-800 font-semibold">Lincolnshire</span>
            <p className="text-slate-500 text-xs">14 schools</p>
          </Link>
          <Link href="/resources/regions" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-dashed border-slate-300">
            <span className="text-slate-500">View All</span>
            <p className="text-slate-400 text-xs">10+ regions</p>
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
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">Terms</Link>
          </div>
          <p className="text-slate-500 text-sm">© 2025 11+ Quest</p>
        </div>
      </footer>
    </main>
  )
}
