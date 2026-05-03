"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/influencers", label: "Influencers" },
  { href: "/contact", label: "Contact" },
]

const PillNav = ({ pathname, floating = false }: { isHome: boolean; pathname: string; floating?: boolean }) => (
  <div className={cn(
    "flex items-center gap-1 rounded-full px-1.5 py-1.5 ring-1 backdrop-blur-md",
    floating ? "bg-[#1B2632]/90 ring-white/10" : "bg-white/5 ring-white/10"
  )}>
    {links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "px-5 py-2.5 text-base font-medium rounded-full transition-colors",
          pathname === link.href ? "text-white" : "text-white/70 hover:text-white"
        )}
      >
        {link.label}
      </Link>
    ))}
    <Link
      href="/contact"
      className="ml-1 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-medium transition-colors bg-white text-neutral-900 hover:bg-white/90"
    >
      Work With Us
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 7h10v10" /><path d="M7 17 17 7" />
      </svg>
    </Link>
  </div>
)

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const textColor = isHome && !scrolled ? "text-[#EEE9DF]" : isHome ? "text-[#EEE9DF]" : "text-[#1B2632]"

  return (
    <>
      {/* Top banner — logo + right-aligned pill, fades out on scroll */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            key="banner"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50"
            style={{ minHeight: 144 }}
          >
            <Link href="/" style={{ left: 72, top: 32 }} className="absolute flex items-center group">
              <Image
                src="/saeora-logo.svg"
                alt="Saeora"
                width={96}
                height={96}
                className="shrink-0"
                priority
              />
            </Link>

            <div className="hidden md:flex absolute" style={{ top: 58, right: 48 }}>
              <PillNav isHome={isHome} pathname={pathname} />
            </div>

            <div className="flex md:hidden justify-end pt-5 pr-6">
              <button
                className={cn("p-2 rounded-md transition-colors", textColor)}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scrolled pill — centred at top, fades in */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="scrolled-pill"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-5 left-1/2 z-50 hidden md:flex -translate-x-1/2"
          >
            <PillNav isHome={isHome} pathname={pathname} floating />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#1B2632] shadow-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium py-2 border-b border-[#2C3B4D] transition-colors",
                    pathname === link.href
                      ? "text-[#FFB162]"
                      : "text-[#EEE9DF] hover:text-[#FFB162]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="default" className="mt-2 w-full">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
