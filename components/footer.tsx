import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  navigate: [
    { href: "/#approach", label: "Approach" },
    { href: "/#practices", label: "Practices" },
    { href: "/#delivery", label: "Delivery" },
    { href: "/#engagement", label: "Engagement" },
    { href: "/#process", label: "Process" },
  ],
  company: [
    { href: "/#about", label: "About" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
  ],
  connect: [
    { href: "/audit", label: "Request audit" },
    { href: "mailto:tyler@formlesscreature.xyz", label: "tyler@formlesscreature.xyz" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formless%20white%20banner-0oc5J9kNKTdkv24zFP5WWtML107PDK.png"
              alt="Formless Creature"
              width={180}
              height={40}
              className="h-auto w-[180px] mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Consulting for growth, AI integration, and automation. Two partners, hand-selected specialist bench, sixteen service lines across three practices.
            </p>
          </div>

          {/* The work */}
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-5">
              The work
            </h5>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e5e5e5] hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-5">
              Company
            </h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e5e5e5] hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-5">
              Connect
            </h5>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e5e5e5] hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Formless Creature LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Two partners. Three practices. Sixteen service lines.
          </p>
        </div>
      </div>
    </footer>
  )
}
