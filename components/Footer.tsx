"use client"

import { useState } from "react"
import Link from "next/link"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
  }

  return (
    <footer className="bg-[#1B2632] text-[#EEE9DF]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact + email signup */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#C9C1B1] mb-4">Contact</h4>
            <a
              href="mailto:hello@saeora.co.uk"
              className="text-[#EEE9DF] hover:text-[#FFB162] transition-colors text-sm"
            >
              hello@saeora.co.uk
            </a>

            <div className="mt-6">
              {submitted ? (
                <p className="text-[#FFB162] text-sm">Thanks — we&apos;ll be in touch.</p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#2C3B4D] border border-[#EEE9DF]/10 text-[#EEE9DF] placeholder:text-[#C9C1B1]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB162]/40"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#FFB162] text-[#1B2632] font-semibold text-sm hover:bg-[#FFB162]/90 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation */}
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
        </div>

        <div className="border-t border-[#2C3B4D] mt-12 pt-8">
          <p className="text-[#C9C1B1] text-xs">
            © {new Date().getFullYear()} Saeora Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
