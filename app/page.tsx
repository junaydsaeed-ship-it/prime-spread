"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, ArrowDown, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Component as EtherealShadow } from "@/components/ui/etheral-shadow"
import Footer from "@/components/Footer"

function AnimatedWord() {
  const [index, setIndex] = useState(0)
  const words = useMemo(() => ["impactful", "authentic", "creative", "strategic", "delicious"], [])

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % words.length), 2400)
    return () => clearTimeout(id)
  }, [index, words])

  return (
    <span className="relative inline-flex justify-center" style={{ minWidth: "320px" }}>
      &nbsp;
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute font-bold text-[#FFB162]"
          initial={{ opacity: 0, y: 60 }}
          animate={
            index === i
              ? { y: 0, opacity: 1 }
              : { y: index > i ? -60 : 60, opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

const services = [
  {
    title: "Brand Campaigns",
    desc: "We design and execute influencer campaigns that feel native to the food community — driving real engagement, not just impressions.",
    icon: "📣",
  },
  {
    title: "Creator Partnerships",
    desc: "We match food creators with brands that align with their voice, helping them build sustainable income through consistent sponsorships.",
    icon: "🤝",
  },
  {
    title: "Vision-First Strategy",
    desc: "Every collaboration is crafted around your unique story — no cookie-cutter briefs, just campaigns that feel genuinely you.",
    icon: "✨",
  },
]

function HomeContactForm() {
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
    <section className="bg-[#2C3B4D] py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest">Get in touch</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#EEE9DF] leading-tight">
            Ready to spread further?
          </h2>
          <p className="mt-5 text-[#C9C1B1] text-lg leading-relaxed">
            Tell us about your brand or your channel. We&apos;ll find the right fit and
            make something worth sharing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
              <div className="w-14 h-14 rounded-full bg-[#FFB162]/20 flex items-center justify-center">
                <CheckCircle size={28} className="text-[#FFB162]" />
              </div>
              <h3 className="text-xl font-bold text-[#EEE9DF]">Message sent!</h3>
              <p className="text-[#C9C1B1] text-sm max-w-xs">
                Thanks for reaching out — we&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="home-name" className="block text-sm font-medium text-[#EEE9DF]/80 mb-2">
                  Your name
                </label>
                <input
                  id="home-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-xl border border-[#EEE9DF]/15 bg-[#1B2632]/60 text-[#EEE9DF] placeholder:text-[#C9C1B1]/40 focus:outline-none focus:ring-2 focus:ring-[#FFB162]/40 focus:border-[#FFB162]/50 transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="home-email" className="block text-sm font-medium text-[#EEE9DF]/80 mb-2">
                  Email address
                </label>
                <input
                  id="home-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#EEE9DF]/15 bg-[#1B2632]/60 text-[#EEE9DF] placeholder:text-[#C9C1B1]/40 focus:outline-none focus:ring-2 focus:ring-[#FFB162]/40 focus:border-[#FFB162]/50 transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="home-message" className="block text-sm font-medium text-[#EEE9DF]/80 mb-2">
                  Message
                </label>
                <textarea
                  id="home-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your brand or channel..."
                  className="w-full px-4 py-3 rounded-xl border border-[#EEE9DF]/15 bg-[#1B2632]/60 text-[#EEE9DF] placeholder:text-[#C9C1B1]/40 focus:outline-none focus:ring-2 focus:ring-[#FFB162]/40 focus:border-[#FFB162]/50 transition-all text-sm resize-none"
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

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#1B2632] flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 pointer-events-none">
          <EtherealShadow
            color="rgba(163, 81, 57, 1)"
            animation={{ scale: 100, speed: 90 }}
            noise={{ opacity: 1, scale: 1.2 }}
            sizing="fill"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#FFB162]/15 border border-[#FFB162]/30 text-[#FFB162] text-sm font-medium px-4 py-2 rounded-full mb-8"
          >
            London&apos;s Food Influencer Agency
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#EEE9DF] leading-tight tracking-tight">
            Where food brands
            <br />
            meet{" "}
            <span className="inline-flex flex-col items-center">
              <AnimatedWord />
            </span>
            <br />
            creators.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#C9C1B1] max-w-2xl mx-auto leading-relaxed">
            Saeora connects kitchen appliance brands and food companies with the creators
            their audience already loves — building campaigns that feel real, perform brilliantly,
            and last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a campaign <MoveRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/influencers">I&apos;m a creator</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C9C1B1]/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* Services preview */}
      <section className="py-24 px-6 bg-[#EEE9DF]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#A35139] text-sm font-semibold uppercase tracking-widest">What we do</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1B2632]">
              Everything you need to grow.
            </h2>
            <p className="mt-4 text-[#2C3B4D]/70 max-w-xl mx-auto">
              Whether you&apos;re a brand looking to scale or a creator ready to monetise, we&apos;ve built
              our process around your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white/60 border border-[#C9C1B1]/40 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#1B2632] mb-3">{service.title}</h3>
                <p className="text-[#2C3B4D]/70 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="dark">
              <Link href="/services">
                See all services <MoveRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <HomeContactForm />
      <Footer />
    </main>
  )
}
