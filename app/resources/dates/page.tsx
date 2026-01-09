import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '11+ Exam Dates 2025/2026 | Registration Deadlines | 11+ Quest',
  description: 'Key 11+ exam dates for 2025/2026 entry. Registration deadlines, exam dates, and results days for grammar schools across England by region.',
  keywords: '11+ exam dates 2025, 11+ registration deadline, grammar school exam dates, 11+ results day',
}

const dates = [
  { region: 'Kent', examBoard: 'GL', registrationDeadline: '1 July 2025', examDate: '11 September 2025', results: 'October 2025' },
  { region: 'Buckinghamshire', examBoard: 'GL', registrationDeadline: 'June 2025', examDate: 'September 2025', results: 'October 2025' },
  { region: 'Birmingham (King Edward VI)', examBoard: 'GL', registrationDeadline: 'July 2025', examDate: 'September 2025', results: 'October 2025' },
  { region: 'Essex (CSSE)', examBoard: 'CSSE', registrationDeadline: 'July 2025', examDate: 'September 2025', results: 'October 2025' },
  { region: 'Lincolnshire', examBoard: 'GL', registrationDeadline: 'July 2025', examDate: 'September 2025', results: 'October 2025' },
  { region: 'Trafford', examBoard: 'GL', registrationDeadline: 'June 2025', examDate: 'September 2025', results: 'October 2025' },
  { region: 'Wirral', examBoard: 'GL', registrationDeadline: 'July 2025', examDate: 'September 2025', results: 'October 2025' },
  { region: 'Bexley', examBoard: 'CEM', registrationDeadline: 'July 2025', examDate: 'September 2025', results: 'October 2025' },
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
            <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">Start Free</Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="px-4 max-w-6xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/resources" className="hover:text-pink-600">Resources</Link>
          <span>→</span>
          <span className="text-slate-800">Key Dates 2025</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">11+ Key Dates 2025/2026</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          Important registration deadlines, exam dates, and results days for grammar school entrance exams across England.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">📅 Year at a Glance</h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-pink-600 font-semibold">{item.month}</span>
                    <span className="text-slate-600">{item.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Dates Table */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">🗓️ Dates by Region</h2>
        <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left p-4 text-slate-600 font-semibold">Region</th>
                  <th className="text-left p-4 text-slate-600 font-semibold">Board</th>
                  <th className="text-left p-4 text-slate-600 font-semibold">Registration Deadline</th>
                  <th className="text-left p-4 text-slate-600 font-semibold">Exam Date</th>
                  <th className="text-left p-4 text-slate-600 font-semibold">Results</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {dates.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4 text-slate-800 font-medium">{row.region}</td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        row.examBoard === 'GL' ? 'bg-pink-100 text-pink-600' :
                        row.examBoard === 'CEM' ? 'bg-purple-100 text-purple-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>{row.examBoard}</span>
                    </td>
                    <td className="p-4 text-slate-600">{row.registrationDeadline}</td>
                    <td className="p-4 text-slate-600">{row.examDate}</td>
                    <td className="p-4 text-slate-600">{row.results}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <p className="text-amber-700 text-sm">
            <strong>⚠️ Important:</strong> Dates shown are indicative. Always verify with individual schools.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Start Preparing Now</h3>
          <Link href="/login" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
            Start Free Practice ✨
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-4 mt-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
