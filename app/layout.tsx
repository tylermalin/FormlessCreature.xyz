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
  title: 'Formless Creature — Growth Infrastructure for Platforms',
  description: 'Retention infrastructure for platforms. Email, SMS, promotional bonus engines, and the compliance architecture underneath them. Engineered, measured, tied to your numbers.',
  keywords: ['growth', 'automation', 'marketing', 'web3', 'deeptech', 'startups', 'retention', 'infrastructure'],
  openGraph: {
    type: 'website',
    url: 'https://formlesscreature.xyz/',
    title: 'Formless Creature — Growth Infrastructure for Platforms',
    description: 'Acquisition is solved. Retention is infrastructure. Email, SMS, promotional bonus engines, and the compliance architecture underneath them.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20Formless%20Creature%20Logo%20on%20Black-h1tmyZTjXYeo36nhWWtWwg1E3rslVR.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formless Creature — Growth Infrastructure for Platforms',
    description: 'Acquisition is solved. Retention is infrastructure.',
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
