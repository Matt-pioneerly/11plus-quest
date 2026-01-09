import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="font-display text-xl gradient-text">11+ QUEST</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-white font-semibold text-sm">About</Link>
          <Link href="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">Resources</Link>
          <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
          <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl gradient-text mb-4">About 11+ Quest</h1>
        <p className="text-gray-400 text-lg">
          Making 11+ exam preparation fun, effective, and accessible.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <div className="text-gray-400 space-y-4">
            <p>
              11+ Quest was born from a simple frustration: watching a bright child dread exam practice. 
              The workbooks were boring. The online tools were outdated. And the spark of learning was fading fast.
            </p>
            <p>
              We asked ourselves: what if 11+ practice could feel like a game? What if earning XP and 
              climbing leaderboards could make kids actually <em className="text-pink-400">want</em> to practice?
            </p>
            <p>
              So we built it. Drawing on the best elements of games kids already love - progression systems, 
              streaks, achievements - we created a platform where learning happens almost by accident, 
              wrapped in the thrill of leveling up.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">What Makes Us Different</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="text-lg font-bold text-white mb-2">Gamification That Works</h3>
            <p className="text-gray-400 text-sm">
              XP points, combo streaks, and global leaderboards transform mundane practice into an engaging challenge. 
              Kids compete with themselves and others, driven to improve.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-white mb-2">Exam-Accurate Questions</h3>
            <p className="text-gray-400 text-sm">
              Our questions match the GL Assessment format used by most grammar schools. 
              Real timing, real difficulty, real preparation.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-bold text-white mb-2">Practice Anywhere</h3>
            <p className="text-gray-400 text-sm">
              Works beautifully on phones, tablets, and computers. 
              Squeeze in practice during car journeys, waiting rooms, or before bed.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <div className="text-3xl mb-3">💜</div>
            <h3 className="text-lg font-bold text-white mb-2">Built by Parents</h3>
            <p className="text-gray-400 text-sm">
              We've been through the 11+ journey ourselves. We understand the stress, 
              the time pressure, and the desire to give your child every advantage.
            </p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every child deserves access to quality 11+ preparation, regardless of whether 
            their parents can afford expensive tutors. We're working to level the playing field, 
            one XP point at a time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
        <Link 
          href="/login"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
        >
          Try Free Today ✨
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="font-display gradient-text">11+ QUEST</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
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
