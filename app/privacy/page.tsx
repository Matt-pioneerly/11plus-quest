import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="font-display text-xl gradient-text">11+ QUEST</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
          <Link href="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">Resources</Link>
          <Link href="/login" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl gradient-text mb-8">Privacy Policy</h1>
        
        <div className="glass-card p-8 text-gray-400 space-y-6">
          <p className="text-sm text-gray-500">Last updated: January 2025</p>
          
          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              11+ Quest ("we", "our", or "us") is committed to protecting the privacy of our users, 
              particularly children. This Privacy Policy explains how we collect, use, and safeguard 
              information when you use our educational platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Account Information:</strong> Email address used for login.</li>
              <li><strong className="text-white">Usage Data:</strong> Quiz scores, progress, XP earned, and learning statistics.</li>
              <li><strong className="text-white">Payment Information:</strong> Processed securely by Stripe; we do not store card details.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve our educational services</li>
              <li>Track learning progress and generate performance reports</li>
              <li>Process subscriptions and payments</li>
              <li>Send important service updates (you can opt out of marketing emails)</li>
              <li>Maintain leaderboards and gamification features</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Children's Privacy</h2>
            <p>
              Our service is designed for children aged 9-11 preparing for 11+ exams. We are committed 
              to complying with the Children's Online Privacy Protection Act (COPPA) and UK regulations. 
              We collect only the minimum information necessary to provide our educational services. 
              We do not knowingly collect personal information from children without parental consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Sharing</h2>
            <p className="mb-3">We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Service Providers:</strong> Supabase (database), Stripe (payments), Vercel (hosting)</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data, including 
              encryption, secure authentication, and regular security reviews. However, no internet 
              transmission is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights (GDPR)</h2>
            <p className="mb-3">If you're in the UK or EU, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Object to certain processing</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at privacy@11plusquest.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">8. Cookies</h2>
            <p>
              We use essential cookies for authentication and site functionality. We do not use 
              advertising or tracking cookies. You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">9. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. You can request deletion 
              at any time. After account deletion, we may retain anonymized aggregate data for 
              analytics purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by email or through the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <span className="text-pink-400">privacy@11plusquest.com</span>
            </p>
          </div>
        </div>
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
