import type { Metadata } from 'next'
import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Formless Creature | Consulting for Growth, AI Integration, Automation',
  description: 'Operator-led consultancy across growth, AI integration, and automation. One team that integrates strategy, execution, and measurement across disciplines, instead of stitching together five vendors who do not talk to each other.',
  keywords: ['growth consulting', 'AI integration', 'automation', 'lifecycle marketing', 'AI governance', 'workflow automation', 'EU AI Act', 'AI strategy', 'agency'],
  openGraph: {
    type: 'website',
    url: 'https://formlesscreature.xyz/',
    title: 'Formless Creature | Consulting for Growth, AI Integration, Automation',
    description: 'One team that integrates growth, AI, and automation under partner-level coordination, instead of stitching together five vendors who do not talk to each other.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20Formless%20Creature%20Logo%20on%20Black-h1tmyZTjXYeo36nhWWtWwg1E3rslVR.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formless Creature | Consulting for Growth, AI Integration, Automation',
    description: 'Growth, AI, and automation under two partners.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20Formless%20Creature%20Logo%20on%20Black-h1tmyZTjXYeo36nhWWtWwg1E3rslVR.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
