"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [type, setType] = useState<"brand" | "creator">("brand")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1B2632] pt-44 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest">
              Get in touch
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#EEE9DF] leading-tight">
              Let&apos;s talk.
            </h1>
            <p className="mt-5 text-[#C9C1B1] text-lg max-w-xl mx-auto">
              Whether you&apos;re a brand ready to run a campaign or a creator looking for consistent
              partnerships, we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 px-6 bg-[#EEE9DF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16">

          {/* Contact info */}
          <motion.div
            {...fadeUp}
            className="md:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#1B2632]">Contact details</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#FFB162]/20 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#A35139]" />
                </div>
                <div>
                  <div className="text-xs text-[#2C3B4D]/50 font-semibold uppercase tracking-widest mb-1">Email</div>
                  <a
                    href="mailto:hello@saeora.co.uk"
                    className="text-[#1B2632] font-medium hover:text-[#A35139] transition-colors"
                  >
                    hello@saeora.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#2C3B4D] rounded-2xl p-6 text-[#EEE9DF]">
              <p className="text-[#C9C1B1] text-sm">We aim to reply to all inquiries within 24 hours.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-16 gap-5">
                <div className="w-16 h-16 rounded-full bg-[#FFB162]/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#A35139]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B2632]">Message sent!</h3>
                <p className="text-[#2C3B4D]/65 max-w-sm">
                  Thanks for reaching out. We&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Type toggle */}
                <div>
                  <label className="block text-xs text-[#2C3B4D]/50 font-semibold uppercase tracking-widest mb-3">
                    I am a…
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setType("brand")}
                      className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                        type === "brand"
                          ? "border-[#FFB162] bg-[#FFB162]/10 text-[#A35139]"
                          : "border-[#C9C1B1]/50 text-[#2C3B4D]/60 hover:border-[#C9C1B1]"
                      }`}
                    >
                      Brand / Company
                    </button>
                    <button
                      type="button"
                      onClick={() => setType("creator")}
                      className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                        type === "creator"
                          ? "border-[#FFB162] bg-[#FFB162]/10 text-[#A35139]"
                          : "border-[#C9C1B1]/50 text-[#2C3B4D]/60 hover:border-[#C9C1B1]"
                      }`}
                    >
                      Creator / Influencer
                    </button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1B2632] mb-2">
                      Full name <span className="text-[#A35139]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-[#C9C1B1]/60 bg-white/70 text-[#1B2632] placeholder:text-[#2C3B4D]/30 focus:outline-none focus:ring-2 focus:ring-[#FFB162]/50 focus:border-[#FFB162] transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1B2632] mb-2">
                      Email address <span className="text-[#A35139]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#C9C1B1]/60 bg-white/70 text-[#1B2632] placeholder:text-[#2C3B4D]/30 focus:outline-none focus:ring-2 focus:ring-[#FFB162]/50 focus:border-[#FFB162] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#1B2632] mb-2">
                    {type === "brand" ? "Company / Brand name" : "Channel / Handle"}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={type === "brand" ? "Your company name" : "@yourchannel"}
                    className="w-full px-4 py-3 rounded-xl border border-[#C9C1B1]/60 bg-white/70 text-[#1B2632] placeholder:text-[#2C3B4D]/30 focus:outline-none focus:ring-2 focus:ring-[#FFB162]/50 focus:border-[#FFB162] transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1B2632] mb-2">
                    Message <span className="text-[#A35139]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      type === "brand"
                        ? "Tell us about your brand and what you're hoping to achieve..."
                        : "Tell us about your content, audience, and the kinds of brands you'd love to work with..."
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#C9C1B1]/60 bg-white/70 text-[#1B2632] placeholder:text-[#2C3B4D]/30 focus:outline-none focus:ring-2 focus:ring-[#FFB162]/50 focus:border-[#FFB162] transition-all text-sm resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  Send message <Send size={16} />
                </Button>

                <p className="text-xs text-[#2C3B4D]/40 text-center">
                  By submitting, you agree to us contacting you about your enquiry. We never share your details.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
