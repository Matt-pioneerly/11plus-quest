import Link from 'next/link'

export default function TermsPage() {
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
        <h1 className="font-display text-4xl gradient-text mb-8">Terms of Service</h1>
        
        <div className="glass-card p-8 text-gray-400 space-y-6">
          <p className="text-sm text-gray-500">Last updated: January 2025</p>
          
          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using 11+ Quest ("the Service"), you agree to be bound by these Terms of Service. 
              If you are a parent or guardian registering on behalf of a child, you accept these terms on their behalf 
              and are responsible for their use of the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>
              11+ Quest is an educational platform providing gamified practice questions and mock exams 
              for children preparing for 11+ entrance examinations. The Service includes free and paid 
              subscription tiers with varying levels of access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. User Accounts</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You must provide accurate information when creating an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must be at least 18 years old to create an account, or have parental consent</li>
              <li>One account per user; sharing accounts is not permitted</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Subscriptions and Payments</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Paid subscriptions are billed monthly or annually as selected</li>
              <li>Payments are processed securely through Stripe</li>
              <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
              <li>You can cancel at any time; access continues until the end of the billing period</li>
              <li>Refunds are provided at our discretion for unused portions of subscriptions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Free Tier Limitations</h2>
            <p>
              Free accounts are limited to 5 questions per day. This limit resets at midnight UTC. 
              Free accounts do not have access to mock exams or certain premium features.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">6. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Share, reproduce, or distribute our questions or content</li>
              <li>Use automated systems or bots to access the Service</li>
              <li>Attempt to gain unauthorized access to other accounts or systems</li>
              <li>Use the Service for any illegal purpose</li>
              <li>Harass or harm other users</li>
              <li>Manipulate leaderboards or gamification systems unfairly</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property</h2>
            <p>
              All content on 11+ Quest, including questions, explanations, graphics, and software, 
              is owned by us or our licensors and is protected by copyright and other intellectual 
              property laws. You may not copy, modify, or distribute our content without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">8. Educational Disclaimer</h2>
            <p>
              11+ Quest provides educational practice materials but does not guarantee exam success. 
              Our questions are designed to match common 11+ exam formats but are not official exam 
              materials. Results on our platform may not reflect actual exam performance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, 11+ Quest shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of the 
              Service. Our total liability shall not exceed the amount you paid us in the past 12 months.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">10. Termination</h2>
            <p>
              We may suspend or terminate your account if you violate these Terms. You may delete your 
              account at any time. Upon termination, your right to use the Service ceases immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">11. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify you of material changes via email 
              or through the Service. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of England and Wales. Any disputes shall be resolved 
              in the courts of England and Wales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">13. Contact</h2>
            <p>
              For questions about these Terms, contact us at:<br />
              <span className="text-pink-400">legal@11plusquest.com</span>
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
