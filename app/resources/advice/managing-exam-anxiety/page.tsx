import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing 11+ Exam Anxiety in Children | Tips for Parents | 11+ Quest',
  description: 'Practical strategies to help your child manage 11+ exam anxiety. Learn how to reduce stress, build confidence, and support your child through the grammar school entrance process.',
  keywords: '11+ anxiety, exam stress children, 11+ exam nerves, calm child exam, grammar school stress',
}

export default function ExamAnxietyPage() {
  return (
    <main>
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

      <div className="px-4 max-w-4xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/resources" className="hover:text-pink-600">Resources</Link>
          <span>→</span>
          <span className="text-slate-800">Managing Exam Anxiety</span>
        </div>
      </div>

      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600">Parent Advice</span>
          <h1 className="font-display text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-4 mb-4">Managing 11+ Exam Anxiety</h1>
          <p className="text-slate-600 text-lg">Practical strategies to help your child stay calm, confident, and perform their best.</p>
        </header>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-slate-600">
              It is completely normal for children to feel anxious about the 11+ exam. The pressure of 
              a timed test, the importance placed on the outcome, and the unfamiliar environment can 
              all contribute to stress. As a parent, there is a lot you can do to help.
            </p>
          </div>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Recognising Anxiety</h2>
            <p className="text-slate-600 mb-4">Children show stress in different ways. Watch for these signs:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Physical Signs</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Stomach aches or headaches</li>
                  <li>• Trouble sleeping</li>
                  <li>• Loss of appetite</li>
                  <li>• Fidgeting or restlessness</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Emotional Signs</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Irritability or mood swings</li>
                  <li>• Tearfulness</li>
                  <li>• Avoidance of practice</li>
                  <li>• Negative self-talk</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Strategies That Help</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-pink-600 mb-2">1. Keep Things in Perspective</h3>
                <p className="text-slate-600 text-sm">
                  Your child picks up on your anxiety. Try to project calm confidence, and remind them that the 11+ is one test on one day - it does not define their intelligence or future.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-purple-600 mb-2">2. Normalise the Feelings</h3>
                <p className="text-slate-600 text-sm">
                  Do not dismiss their worries. Say: "It is completely normal to feel nervous before something important. Those butterflies show you care about doing well."
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-emerald-600 mb-2">3. Teach Breathing Techniques</h3>
                <p className="text-slate-600 text-sm">
                  Practice 4-7-8 breathing: breathe in for 4 seconds, hold for 7, exhale for 8. Repeat 3-4 times. This calms the nervous system quickly.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-amber-600 mb-2">4. Build Confidence Through Preparation</h3>
                <p className="text-slate-600 text-sm">
                  The best antidote to anxiety is feeling prepared. Regular, short practice sessions (20-30 mins) are better than long cramming.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Watch Your Language</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <p className="text-red-600 text-sm font-semibold mb-2">Avoid</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>"If you fail..."</li>
                  <li>"You have to pass this"</li>
                  <li>"This is really important"</li>
                  <li>"Do not be nervous"</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                <p className="text-emerald-600 text-sm font-semibold mb-2">Try Instead</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>"Whatever happens..."</li>
                  <li>"Just do your best"</li>
                  <li>"It is okay to feel nervous"</li>
                  <li>"I am proud of how hard you have worked"</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Remember</h2>
            <p className="text-slate-600 text-sm">
              Your child will remember how you handled this period long after they have forgotten 
              their test score. Make it a positive experience of working together and knowing that your love is not conditional on exam results.
            </p>
          </section>
        </div>
      </article>

      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Practice Without the Pressure</h3>
          <p className="text-white/90 mb-6">Our gamified platform turns practice into play.</p>
          <Link href="/login" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
            Start Free Practice
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 px-4 mt-8 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
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
