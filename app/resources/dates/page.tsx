import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '11+ Exam Dates 2025/2026 | Registration Deadlines | 11+ Quest',
  description: 'Key 11+ exam dates for 2025/2026 entry. Registration deadlines, exam dates, and results days for grammar schools across England by region.',
  keywords: '11+ exam dates 2025, 11+ registration deadline, grammar school exam dates, 11+ results day',
}

const dates = [
  {
    region: 'Kent',
    examBoard: 'GL',
    registration: 'May 2025',
    registrationDeadline: '1 July 2025',
    examDate: '11 September 2025',
    results: 'October 2025',
  },
  {
    region: 'Buckinghamshire',
    examBoard: 'GL',
    registration: 'May 2025',
    registrationDeadline: 'June 2025',
    examDate: 'September 2025',
    results: 'October 2025',
  },
  {
    region: 'Birmingham (King Edward VI)',
    examBoard: 'GL',
    registration: 'May 2025',
    registrationDeadline: 'July 2025',
    examDate: 'September 2025',
    results: 'October 2025',
  },
  {
    region: 'Essex (CSSE)',
    examBoard: 'CSSE',
    registration: 'May 2025',
    registrationDeadline: 'July 2025',
    examDate: 'September 2025',
    results: 'October 2025',
  },
  {
    region: 'Lincolnshire',
    examBoard: 'GL',
    registration: 'May 2025',
    registrationDeadline: 'July 2025',
    examDate: 'September 2025',
    results: 'October 2025',
  },
  {
    region: 'Trafford',
    examBoard: 'GL',
    registration: 'May 2025',
    registrationDeadline: 'June 2025',
    examDate: 'September 2025',
    results: 'October 2025',
  },
  {
    region: 'Wirral',
    examBoard: 'GL',
    registration: 'May 2025',
    registrationDeadline: 'July 2025',
    examDate: 'September 2025',
    results: 'October 2025',
  },
  {
    region: 'Bexley',
    examBoard: 'CEM',
    registration: 'May 2025',
    registrationDeadline: 'July 2025',
    examDate: 'September 2025',
    results: 'October 2025',
  },
]

const timeline = [
  { month: 'January - April', event: 'Research schools, begin preparation', icon: '📚' },
  { month: 'May', event: 'Registration opens for most regions', icon: '📝' },
  { month: 'June - July', event: 'Registration deadlines', icon: '⏰' },
  { month: 'September', event: '11+ exams take place', icon: '✏️' },
  { month: 'October', event: 'Results released to parents', icon: '📬' },
  { month: 'October 31', event: 'Secondary school application deadline', icon: '📋' },
  { month: 'March 2026', event: 'National Offer Day', icon: '🎉' },
]

export default function DatesPage() {
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
          <span className="text-white">Key Dates 2025</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h1 className="font-display text-4xl gradient-text mb-4">11+ Key Dates 2025/2026</h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          Important registration deadlines, exam dates, and results days for grammar school entrance 
          exams across England. Plan ahead to ensure you don&apos;t miss crucial dates.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">📅 Year at a Glance</h2>
        <div className="glass-card p-6">
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-pink-400 font-semibold">{item.month}</span>
                    <span className="text-gray-400">{item.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Dates Table */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">🗓️ Dates by Region</h2>
        
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left p-4 text-gray-400 font-semibold">Region</th>
                  <th className="text-left p-4 text-gray-400 font-semibold">Board</th>
                  <th className="text-left p-4 text-gray-400 font-semibold">Registration Deadline</th>
                  <th className="text-left p-4 text-gray-400 font-semibold">Exam Date</th>
                  <th className="text-left p-4 text-gray-400 font-semibold">Results</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {dates.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-4 text-white font-medium">{row.region}</td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        row.examBoard === 'GL' ? 'bg-pink-500/20 text-pink-400' :
                        row.examBoard === 'CEM' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {row.examBoard}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400">{row.registrationDeadline}</td>
                    <td className="p-4 text-gray-400">{row.examDate}</td>
                    <td className="p-4 text-gray-400">{row.results}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
          <p className="text-yellow-400 text-sm">
            <strong>⚠️ Important:</strong> Dates shown are indicative for 2025/2026 entry. 
            Always verify exact dates with individual schools or local authorities, as they can vary.
          </p>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">📌 Important Notes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Registration</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Register directly with the school or consortium</li>
              <li>• Some areas require separate school application</li>
              <li>• Late registrations are rarely accepted</li>
              <li>• You may need to pay a registration fee</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">School Applications</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• 11+ registration ≠ school application</li>
              <li>• Apply via your local authority by Oct 31</li>
              <li>• List preferences even before results</li>
              <li>• You can include grammar schools speculatively</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Out of Area</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Many grammars accept out-of-area applicants</li>
              <li>• Check individual school policies</li>
              <li>• Distance criteria may apply for tie-breaks</li>
              <li>• Some schools have catchment priorities</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Results Day</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Results sent by post or email</li>
              <li>• Shows if child reached &quot;grammar standard&quot;</li>
              <li>• Score alone doesn&apos;t guarantee a place</li>
              <li>• Final offers come on National Offer Day</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Start Preparing Now</h3>
          <p className="text-gray-400 mb-6">
            Don&apos;t wait until the last minute. Our gamified practice platform helps children 
            prepare consistently without burning out.
          </p>
          <Link 
            href="/login"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Start Free Practice ✨
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
