"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fcmarkonly-d2U4DaaK7ouPlnToLY1ezKlIMTFBXq.png"
              alt="Formless Creature"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="font-medium text-foreground tracking-tight hidden sm:block">
              Formless Creature
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Approach
            </Link>
            <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </Link>
            <Link 
              href="#contact" 
              className="text-sm bg-foreground text-background px-5 py-2.5 rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            <Link 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link 
              href="#approach" 
              onClick={() => setIsOpen(false)}
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              Approach
            </Link>
            <Link 
              href="#process" 
              onClick={() => setIsOpen(false)}
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block text-lg bg-foreground text-background px-5 py-3 rounded-full font-medium text-center hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
