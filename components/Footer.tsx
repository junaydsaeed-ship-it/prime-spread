import Link from "next/link"
import Image from "next/image"
import { Globe, Share2, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1B2632] text-[#EEE9DF]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/saeora-logo.svg"
                alt="Saeora"
                width={48}
                height={48}
                className="shrink-0"
              />
              <span className="text-2xl font-bold text-[#FFB162]">Saeora</span>
            </div>
            <p className="mt-4 text-[#C9C1B1] text-sm leading-relaxed max-w-xs">
              London&apos;s go-to influencer marketing agency for food brands and cooking creators.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Social" className="text-[#C9C1B1] hover:text-[#FFB162] transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#C9C1B1] hover:text-[#FFB162] transition-colors">
                <Share2 size={20} />
              </a>
              <a href="mailto:hello@primespread.co.uk" aria-label="Email" className="text-[#C9C1B1] hover:text-[#FFB162] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#C9C1B1] mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/influencers", label: "Influencers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#EEE9DF]/80 hover:text-[#FFB162] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#C9C1B1] mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-[#EEE9DF]/80">
              <li>
                <a href="mailto:hello@primespread.co.uk" className="hover:text-[#FFB162] transition-colors">
                  hello@primespread.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+442071234567" className="hover:text-[#FFB162] transition-colors">
                  +44 (0)20 7123 4567
                </a>
              </li>
              <li className="text-[#C9C1B1] pt-2">London, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2C3B4D] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#C9C1B1] text-xs">
            © {new Date().getFullYear()} Saeora Ltd. All rights reserved.
          </p>
          <p className="text-[#C9C1B1] text-xs">Based in London, working globally.</p>
        </div>
      </div>
    </footer>
  )
}
