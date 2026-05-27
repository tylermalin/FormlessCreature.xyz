"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { href: "/#approach", label: "Approach" },
  { href: "/#practices", label: "Practices" },
  { href: "/#delivery", label: "Delivery" },
  { href: "/#engagement", label: "Engagement" },
  { href: "/#about", label: "About" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fcmarkonly-d2U4DaaK7ouPlnToLY1ezKlIMTFBXq.png"
              alt="Formless Creature"
              width={32}
              height={32}
              className="h-7 md:h-8 w-auto -translate-y-px"
            />
            <span className="font-normal text-foreground tracking-tight text-[16px] md:text-[17px]">
              Formless Creature
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link 
            href="/audit"
            className="hidden md:inline-flex items-center gap-2 text-sm bg-foreground text-background px-5 py-3 rounded-2xl font-medium hover:bg-transparent hover:text-foreground border border-foreground transition-all"
          >
            Free audit
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border/20 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/audit"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-lg bg-foreground text-background px-5 py-3 rounded-2xl font-medium text-center hover:bg-foreground/90 transition-colors mt-6"
            >
              Free audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
