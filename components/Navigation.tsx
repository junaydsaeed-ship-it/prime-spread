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

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navBg = isHome
    ? scrolled
      ? "bg-[#1B2632]/95 backdrop-blur-md shadow-lg"
      : "bg-transparent"
    : "bg-[#EEE9DF]/95 backdrop-blur-md shadow-sm border-b border-[#C9C1B1]/40"

  const textColor = isHome && !scrolled ? "text-[#EEE9DF]" : isHome ? "text-[#EEE9DF]" : "text-[#1B2632]"
  const logoColor = isHome && !scrolled ? "text-[#FFB162]" : isHome ? "text-[#FFB162]" : "text-[#A35139]"

  return (
    <>
      <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/prime-spread-logo.svg"
              alt="Prime Spread"
              width={36}
              height={36}
              className="shrink-0"
              priority
            />
            <span className={cn("text-xl font-bold tracking-tight transition-colors", logoColor)}>
              Prime Spread
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  textColor,
                  pathname === link.href
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFB162] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button asChild variant={isHome ? "default" : "default"} size="sm">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn("md:hidden p-2 rounded-md transition-colors", textColor)}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

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
