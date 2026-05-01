"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"

const values = [
  {
    title: "Authenticity first",
    desc: "We only facilitate partnerships that genuinely make sense. Forced content doesn't convert — and it doesn't reflect well on anyone.",
  },
  {
    title: "Long-term thinking",
    desc: "We build relationships, not transactions. Our creators and brand partners tend to work together again and again.",
  },
  {
    title: "Rooted in food culture",
    desc: "Our team eats, cooks, and lives this space. We understand what food audiences respond to because we're part of them.",
  },
]

const forBrands = [
  "End-to-end campaign management — from creator discovery to final reporting",
  "Access to a curated network of food and cooking creators across all niches",
  "Brief writing and creative strategy that gets results, not just reach",
  "Contract negotiation and rights management handled for you",
  "Clear, honest reporting on what worked and what to do next",
]

const forInfluencers = [
  "A consistent pipeline of brand deals that actually suit your content",
  "Rate negotiation so you always get fairly compensated",
  "Creative brief review — we push back on anything that compromises your voice",
  "Full admin and payment management, so you focus on creating",
  "A long-term relationship, not just a one-off placement",
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function AboutContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-[#EEE9DF] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <span className="text-[#A35139] text-sm font-semibold uppercase tracking-widest">Work with us</span>
          <h2 className="mt-3 text-4xl font-bold text-[#1B2632]">Get in touch</h2>
          <p className="mt-3 text-[#2C3B4D]/65">
            Whether you&apos;re a brand or a creator, we&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
              <div className="w-14 h-14 rounded-full bg-[#FFB162]/20 flex items-center justify-center">
                <CheckCircle size={28} className="text-[#A35139]" />
              </div>
              <h3 className="text-xl font-bold text-[#1B2632]">Message sent!</h3>
              <p className="text-[#2C3B4D]/65 text-sm max-w-xs">
                We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="about-name" className="block text-sm font-medium text-[#1B2632] mb-2">
                    Full name
                  </label>
                  <input
                    id="about-name"
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
                  <label htmlFor="about-email" className="block text-sm font-medium text-[#1B2632] mb-2">
                    Email address
                  </label>
                  <input
                    id="about-email"
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
                <label htmlFor="about-message" className="block text-sm font-medium text-[#1B2632] mb-2">
                  Message
                </label>
                <textarea
                  id="about-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your brand or channel..."
                  className="w-full px-4 py-3 rounded-xl border border-[#C9C1B1]/60 bg-white/70 text-[#1B2632] placeholder:text-[#2C3B4D]/30 focus:outline-none focus:ring-2 focus:ring-[#FFB162]/50 focus:border-[#FFB162] transition-all text-sm resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                Send message <Send size={15} />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#1B2632] py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest">
              About Prime Spread
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#EEE9DF] leading-tight">
              Built for the food world,<br />by people who love it.
            </h1>
            <p className="mt-6 text-[#C9C1B1] text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;re a London-based influencer marketing agency specialising in food and cooking.
              We sit between brands and creators — making sure every partnership works for both sides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we do — split for brands and creators */}
      <section className="py-24 px-6 bg-[#EEE9DF]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[#A35139] text-sm font-semibold uppercase tracking-widest">What we do</span>
            <h2 className="mt-3 text-4xl font-bold text-[#1B2632]">We work on both sides of the table.</h2>
            <p className="mt-4 text-[#2C3B4D]/65 max-w-xl mx-auto">
              Prime Spread exists to bridge the gap between food brands that want genuine reach
              and creators who want partnerships that respect their voice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For brands */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1B2632] rounded-2xl p-10"
            >
              <div className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest mb-3">For brands</div>
              <h3 className="text-2xl font-bold text-[#EEE9DF] mb-6">
                Influencer campaigns that actually perform.
              </h3>
              <ul className="space-y-4">
                {forBrands.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFB162] shrink-0" />
                    <span className="text-[#C9C1B1] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* For influencers */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#A35139] rounded-2xl p-10"
            >
              <div className="text-[#EEE9DF]/70 text-sm font-semibold uppercase tracking-widest mb-3">For creators</div>
              <h3 className="text-2xl font-bold text-[#EEE9DF] mb-6">
                Consistent deals that respect your creativity.
              </h3>
              <ul className="space-y-4">
                {forInfluencers.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EEE9DF] shrink-0" />
                    <span className="text-[#EEE9DF]/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#2C3B4D]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest">How we work</span>
            <h2 className="mt-3 text-4xl font-bold text-[#EEE9DF]">Our values</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1B2632]/40 border border-[#EEE9DF]/10 rounded-2xl p-8"
              >
                <div className="w-10 h-1 bg-[#FFB162] rounded-full mb-5" />
                <h3 className="text-xl font-bold text-[#EEE9DF] mb-3">{v.title}</h3>
                <p className="text-[#C9C1B1] leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutContactForm />
      <Footer />
    </main>
  )
}
