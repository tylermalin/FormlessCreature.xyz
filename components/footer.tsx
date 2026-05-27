import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fcmarkonly-d2U4DaaK7ouPlnToLY1ezKlIMTFBXq.png"
              alt="Formless Creature"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <div>
              <span className="font-medium text-foreground block">Formless Creature</span>
              <span className="text-sm text-muted-foreground">Growth infrastructure for platforms</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm">
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">
              Approach
            </Link>
            <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              Process
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Formless Creature. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
