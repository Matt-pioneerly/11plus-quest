import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '11+ Quest - Level Up Your Brain!',
  description: 'Anime-style 11+ exam practice with gamification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        {/* Star Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
