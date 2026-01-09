import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '11+ Grammar Schools by Region | Find Schools Near You | 11+ Quest',
  description: 'Find grammar schools offering 11+ entrance exams in your region. Comprehensive guides for England\'s selective schools including Kent, Buckinghamshire, Birmingham, and more.',
  keywords: '11+ grammar schools, grammar schools by region, selective schools England, 11+ areas',
}

const regions = [
  { 
    slug: 'warwickshire', 
    name: 'Warwickshire', 
    schools: 5, 
    examBoard: 'GL',
    desc: 'Including King Edward VI schools in Birmingham consortium',
    popular: ['King Edward VI Five Ways', 'King Edward VI Camp Hill Boys', 'King Edward VI Handsworth']
  },
  { 
    slug: 'birmingham', 
    name: 'Birmingham', 
    schools: 8, 
    examBoard: 'GL',
    desc: 'King Edward VI Foundation schools and Sutton Coldfield',
    popular: ['King Edward\'s School', 'Sutton Coldfield Grammar School', 'Bishop Vesey\'s']
  },
  { 
    slug: 'buckinghamshire', 
    name: 'Buckinghamshire', 
    schools: 13, 
    examBoard: 'GL',
    desc: 'One of the largest grammar school areas in England',
    popular: ['Aylesbury Grammar', 'Dr Challoner\'s', 'Royal Grammar School']
  },
  { 
    slug: 'kent', 
    name: 'Kent', 
    schools: 32, 
    examBoard: 'GL',
    desc: 'The county with the most grammar schools in England',
    popular: ['Tonbridge Grammar', 'Dartford Grammar', 'Invicta Grammar']
  },
  { 
    slug: 'essex', 
    name: 'Essex', 
    schools: 4, 
    examBoard: 'CSSE',
    desc: 'Consortium of Selective Schools in Essex',
    popular: ['Colchester Royal Grammar', 'Chelmsford County High', 'Southend High']
  },
  { 
    slug: 'lincolnshire', 
    name: 'Lincolnshire', 
    schools: 14, 
    examBoard: 'GL',
    desc: 'Strong grammar school tradition across the county',
    popular: ['Lincoln Minster', 'Boston Grammar', 'Caistor Grammar']
  },
  { 
    slug: 'greater-london', 
    name: 'Greater London', 
    schools: 10, 
    examBoard: 'Various',
    desc: 'Grammar schools in London boroughs including Sutton and Kingston',
    popular: ['Tiffin School', 'Nonsuch High', 'Wilson\'s School']
  },
  { 
    slug: 'gloucestershire', 
    name: 'Gloucestershire', 
    schools: 7, 
    examBoard: 'GL',
    desc: 'Grammar schools in Cheltenham and Stroud areas',
    popular: ['Pate\'s Grammar', 'Cheltenham Bournside', 'Stroud High']
  },
  { 
    slug: 'trafford', 
    name: 'Trafford', 
    schools: 7, 
    examBoard: 'GL',
    desc: 'Greater Manchester\'s grammar school borough',
    popular: ['Altrincham Grammar', 'Sale Grammar', 'Stretford Grammar']
  },
  { 
    slug: 'wirral', 
    name: 'Wirral', 
    schools: 4, 
    examBoard: 'GL',
    desc: 'Grammar schools in the Wirral peninsula',
    popular: ['Wirral Grammar School', 'Calday Grange', 'West Kirby Grammar']
  },
]

export default function RegionsIndexPage() {
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
          <span className="text-slate-800">Regions</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">Grammar Schools by Region</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          England has around 163 grammar schools spread across various regions. Each area has its own 
          admissions process, exam dates, and specific requirements. Find your region below.
        </p>
      </section>

      {/* Regions Grid */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="space-y-4">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/resources/regions/${region.slug}`}
              className="bg-white rounded-xl p-6 block hover:shadow-lg transition-all border border-slate-200 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
                      {region.name}
                    </h2>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">
                      {region.examBoard}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{region.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.popular.slice(0, 3).map((school, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                        {school}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-pink-500">{region.schools}</div>
                  <div className="text-slate-500 text-sm">grammar schools</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-bold text-slate-800 mb-3">📍 Don&apos;t See Your Region?</h3>
          <p className="text-slate-600 text-sm">
            Some counties like Devon, Cornwall, and most of the North of England don&apos;t have grammar schools. 
            However, there may be selective schools or academies with entrance exams nearby. 
            Many grammar schools also accept out-of-area applicants, though local children often have priority.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Practising?</h3>
          <p className="text-white/90 mb-6">
            Wherever you&apos;re applying, our practice questions cover GL, CEM, and CSSE formats.
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
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">Terms</Link>
          </div>
          <p className="text-slate-500 text-sm">© 2025 11+ Quest</p>
        </div>
      </footer>
    </main>
  )
}
