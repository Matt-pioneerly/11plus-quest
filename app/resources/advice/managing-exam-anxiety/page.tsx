import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing 11+ Exam Anxiety in Children | Tips for Parents | 11+ Quest',
  description: 'Practical strategies to help your child manage 11+ exam anxiety. Learn how to reduce stress, build confidence, and support your child through the grammar school entrance process.',
  keywords: '11+ anxiety, exam stress children, 11+ exam nerves, calm child exam, grammar school stress',
}

export default function ExamAnxietyPage() {
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
      <div className="px-4 max-w-4xl mx-auto py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          <span>→</span>
          <Link href="/resources#advice" className="hover:text-white transition-colors">Advice</Link>
          <span>→</span>
          <span className="text-white">Exam Anxiety</span>
        </div>
      </div>

      {/* Article */}
      <article className="py-8 px-4 max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">Parent Advice</span>
            <span className="text-gray-500 text-sm">8 min read</span>
          </div>
          <h1 className="font-display text-4xl gradient-text mb-4">Managing 11+ Exam Anxiety</h1>
          <p className="text-gray-400 text-lg">
            Practical strategies to help your child stay calm, confident, and perform their best 
            on exam day.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* Introduction */}
          <div className="glass-card p-6 mb-8">
            <p className="text-gray-400">
              It&apos;s completely normal for children to feel anxious about the 11+ exam. The pressure of 
              a timed test, the importance placed on the outcome, and the unfamiliar environment can 
              all contribute to stress. As a parent, there&apos;s a lot you can do to help.
            </p>
          </div>

          {/* Signs of Anxiety */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">🔍 Recognising Anxiety</h2>
            <p className="text-gray-400 mb-4">
              Children show stress in different ways. Watch for these signs:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <h3 className="font-bold text-white mb-2">Physical Signs</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Stomach aches or headaches</li>
                  <li>• Trouble sleeping</li>
                  <li>• Loss of appetite</li>
                  <li>• Fidgeting or restlessness</li>
                  <li>• Nail biting or hair twirling</li>
                </ul>
              </div>
              <div className="glass-card p-4">
                <h3 className="font-bold text-white mb-2">Emotional Signs</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Irritability or mood swings</li>
                  <li>• Tearfulness</li>
                  <li>• Avoidance of practice</li>
                  <li>• Negative self-talk</li>
                  <li>• Asking for constant reassurance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Strategies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">💪 Strategies That Help</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-bold text-pink-400 mb-3">1. Keep Things in Perspective</h3>
                <p className="text-gray-400 mb-3">
                  Your child picks up on your anxiety. If you&apos;re stressed about the 11+, they will be too. 
                  Try to project calm confidence, and remind them (and yourself) that:
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>The 11+ is one test on one day - it doesn&apos;t define their intelligence or future</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>There are many paths to success - grammar school is just one option</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>You&apos;ll be proud of them regardless of the outcome</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-purple-400 mb-3">2. Normalise the Feelings</h3>
                <p className="text-gray-400 mb-3">
                  Don&apos;t dismiss their worries with &quot;there&apos;s nothing to be nervous about&quot;. Instead, validate:
                </p>
                <div className="bg-white/5 rounded-xl p-4 my-4">
                  <p className="text-gray-300 italic">
                    &quot;It&apos;s completely normal to feel nervous before something important. Even adults feel 
                    that way! Those butterflies show you care about doing well. Let&apos;s talk about some 
                    ways to handle those feelings...&quot;
                  </p>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-emerald-400 mb-3">3. Teach Breathing Techniques</h3>
                <p className="text-gray-400 mb-3">
                  Simple breathing exercises can calm the nervous system in minutes. Practice these 
                  together so they become automatic:
                </p>
                <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                  <h4 className="font-semibold text-emerald-400 mb-2">4-7-8 Breathing</h4>
                  <ol className="text-gray-400 text-sm space-y-1">
                    <li>1. Breathe in quietly through your nose for 4 seconds</li>
                    <li>2. Hold your breath for 7 seconds</li>
                    <li>3. Exhale completely through your mouth for 8 seconds</li>
                    <li>4. Repeat 3-4 times</li>
                  </ol>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-yellow-400 mb-3">4. Build Confidence Through Preparation</h3>
                <p className="text-gray-400 mb-3">
                  The best antidote to anxiety is feeling prepared. But balance is key:
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Regular, short practice sessions (20-30 mins) are better than long cramming</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Focus on progress, not perfection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Celebrate improvements, however small</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Avoid comparing to siblings or friends</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Don&apos;t overdo mock exams - they can increase anxiety</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-blue-400 mb-3">5. Create an Exam Day Routine</h3>
                <p className="text-gray-400 mb-3">
                  Familiarity reduces anxiety. In the weeks before, establish routines that you&apos;ll use on exam day:
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Same breakfast they&apos;ll have on exam day</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Same getting-ready routine</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Practice the journey to the exam venue</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>Have a calming phrase or ritual (breathing, stretching)</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-rose-400 mb-3">6. Watch Your Language</h3>
                <p className="text-gray-400 mb-3">
                  Small changes in how you talk about the exam make a big difference:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                    <p className="text-red-400 text-sm font-semibold mb-2">❌ Avoid</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&quot;If you fail...&quot;</li>
                      <li>&quot;You have to pass this&quot;</li>
                      <li>&quot;This is really important&quot;</li>
                      <li>&quot;Don&apos;t be nervous&quot;</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                    <p className="text-emerald-400 text-sm font-semibold mb-2">✓ Try Instead</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>&quot;Whatever happens...&quot;</li>
                      <li>&quot;Just do your best&quot;</li>
                      <li>&quot;It&apos;s okay to feel nervous&quot;</li>
                      <li>&quot;I&apos;m proud of how hard you&apos;ve worked&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exam Day Tips */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">📅 On Exam Day</h2>
            <div className="glass-card p-6">
              <ul className="text-gray-400 space-y-3">
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span>Wake up with plenty of time - rushing increases stress</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span>Eat a good breakfast with protein (eggs, yoghurt) for sustained energy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span>Arrive 15 minutes early, but not too early (more waiting = more worry)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span>Do your breathing exercises in the car or waiting area</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span>Keep the goodbye brief and positive: &quot;You&apos;ve got this. See you soon!&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">→</span>
                  <span>Plan something fun for afterwards - a treat, activity, or outing</span>
                </li>
              </ul>
            </div>
          </section>

          {/* When to Seek Help */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">⚠️ When to Seek Help</h2>
            <div className="glass-card p-6 border border-yellow-500/20">
              <p className="text-gray-400 mb-4">
                Some level of nervousness is normal and even helpful. But if your child experiences any 
                of the following, consider speaking to their teacher or GP:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Persistent sleep problems lasting more than a few weeks</li>
                <li>• Refusing to go to school or complete any practice</li>
                <li>• Panic attacks (racing heart, difficulty breathing, overwhelming fear)</li>
                <li>• Physical symptoms that don&apos;t improve with reassurance</li>
                <li>• Signs of depression (withdrawal, hopelessness, loss of interest)</li>
              </ul>
              <p className="text-yellow-400 text-sm mt-4">
                Remember: No exam is worth your child&apos;s mental health. It&apos;s okay to step back if needed.
              </p>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">💜 Final Thoughts</h2>
            <div className="glass-card p-6">
              <p className="text-gray-400">
                Your child will remember how you handled this period long after they&apos;ve forgotten 
                their test score. Make it a positive experience of working together, building resilience, 
                and knowing that your love isn&apos;t conditional on exam results. That security is the 
                best gift you can give them.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Practice Without the Pressure</h3>
          <p className="text-gray-400 mb-6">
            Our gamified platform turns practice into play. XP, streaks, and mascots make 
            learning feel like a game, not a chore.
          </p>
          <Link 
            href="/login"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Try Free Today ✨
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h3 className="text-lg font-bold text-white mb-4">Related Advice</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/resources/advice/supporting-without-pressure" className="glass-card p-4 hover:bg-white/10 transition-colors">
            <span className="text-2xl">💜</span>
            <h4 className="font-semibold text-white mt-2">Supporting Without Pressure</h4>
            <p className="text-gray-500 text-sm">Finding the right balance</p>
          </Link>
          <Link href="/resources/advice/what-if-they-dont-pass" className="glass-card p-4 hover:bg-white/10 transition-colors">
            <span className="text-2xl">🌟</span>
            <h4 className="font-semibold text-white mt-2">What If They Don&apos;t Pass?</h4>
            <p className="text-gray-500 text-sm">Keeping perspective</p>
          </Link>
          <Link href="/resources/guides/exam-day" className="glass-card p-4 hover:bg-white/10 transition-colors">
            <span className="text-2xl">🎯</span>
            <h4 className="font-semibold text-white mt-2">Exam Day Guide</h4>
            <p className="text-gray-500 text-sm">What to expect</p>
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
