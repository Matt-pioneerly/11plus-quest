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
          <span className="text-white">Regions</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h1 className="font-display text-4xl gradient-text mb-4">Grammar Schools by Region</h1>
        <p className="text-gray-400 text-lg max-w-3xl">
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
              className="glass-card p-6 block hover:bg-white/10 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      {region.name}
                    </h2>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">
                      {region.examBoard}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{region.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.popular.slice(0, 3).map((school, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">
                        {school}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-pink-400">{region.schools}</div>
                  <div className="text-gray-500 text-sm">grammar schools</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="glass-card p-6 border border-purple-500/20">
          <h3 className="text-lg font-bold text-white mb-3">📍 Don&apos;t See Your Region?</h3>
          <p className="text-gray-400 text-sm">
            Some counties like Devon, Cornwall, and most of the North of England don&apos;t have grammar schools. 
            However, there may be selective schools or academies with entrance exams nearby. 
            Many grammar schools also accept out-of-area applicants, though local children often have priority.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Practising?</h3>
        <p className="text-gray-400 mb-6">
          Wherever you&apos;re applying, our practice questions cover GL, CEM, and CSSE formats.
        </p>
        <Link 
          href="/login"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
        >
          Try Free Today ✨
        </Link>
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
