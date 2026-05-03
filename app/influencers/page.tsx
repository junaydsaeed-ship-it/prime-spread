"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MoveRight, Star, DollarSign, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"

const benefits = [
  {
    icon: <DollarSign size={22} />,
    title: "Consistent brand income",
    desc: "Stop relying on sporadic one-off deals. We work to build a regular pipeline of brand partnerships that match your content and keep income flowing.",
  },
  {
    icon: <Shield size={22} />,
    title: "We handle the negotiation",
    desc: "Know your worth and get paid accordingly. We push back on lowball offers, protect your creative rights, and make sure every deal is fair.",
  },
  {
    icon: <Star size={22} />,
    title: "Brand-fit matching",
    desc: "We only bring you brands that actually make sense for your audience — no awkward product placements, no compromising your credibility.",
  },
  {
    icon: <Zap size={22} />,
    title: "Fast turnaround",
    desc: "From first conversation to signed contract, we move quickly so you never lose a deal to slow communication or admin delays.",
  },
]

const niches = [
  "Home cooking & everyday meals",
  "Kitchen appliance demos",
  "Meal prep & batch cooking",
  "Family-friendly recipes",
  "Quick weeknight dinners",
  "Budget cooking & money-saving meals",
  "Comfort food & baking",
  "Healthy home cooking",
]

const faqs = [
  {
    q: "Who do we work with?",
    a: "We partner with food brands and food influencers looking to grow.",
  },
  {
    q: "How do campaigns start?",
    a: "We define your goals to match with creators who fit your brand.",
  },
  {
    q: "How long do campaigns take?",
    a: "Campaigns typically launch within a few weeks after planning.",
  },
  {
    q: "Can I manage campaigns myself?",
    a: "We handle campaign management end to end for smooth execution.",
  },
  {
    q: "Do I have to pay anything to join your creator network?",
    a: "Never. We operate on a commission basis from the brand side. You pay nothing to be in our network, and we only earn when you earn.",
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function InfluencersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#A35139] pt-44 pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB162]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeUp}>
            <span className="text-[#EEE9DF]/80 text-sm font-semibold uppercase tracking-widest">
              For food creators
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#EEE9DF] leading-tight">
              Turn your passion<br />into a pay cheque.
            </h1>
            <p className="mt-6 text-[#EEE9DF]/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Join Saeora&apos;s creator network and get matched with kitchen and food brands
              that genuinely fit your content — while we handle all the business side.
            </p>
            <Button asChild size="lg" variant="outlineLight" className="mt-8">
              <Link href="/contact?type=creator">
                Apply to join our network <MoveRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What we offer creators */}
      <section className="py-24 px-6 bg-[#EEE9DF]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[#A35139] text-sm font-semibold uppercase tracking-widest">What you get</span>
            <h2 className="mt-3 text-4xl font-bold text-[#1B2632]">
              Everything a creator needs<br />to grow their brand income.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/60 border border-[#C9C1B1]/40 rounded-2xl p-8 flex gap-5"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#FFB162]/20 text-[#A35139] flex items-center justify-center">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1B2632] text-lg mb-2">{b.title}</h3>
                  <p className="text-[#2C3B4D]/65 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="py-24 px-6 bg-[#1B2632]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest">Who we work with</span>
            <h2 className="mt-3 text-4xl font-bold text-[#EEE9DF]">We cover every corner of food content.</h2>
            <p className="mt-4 text-[#C9C1B1] max-w-xl mx-auto">
              Our brand partners are looking for creators across all food niches. If it&apos;s food-related, there&apos;s probably a brand waiting to work with you.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {niches.map((niche, i) => (
              <motion.span
                key={niche}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-[#2C3B4D] border border-[#EEE9DF]/10 text-[#EEE9DF] text-sm font-medium px-5 py-2.5 rounded-full"
              >
                {niche}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for creators */}
      <section className="py-24 px-6 bg-[#EEE9DF]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[#A35139] text-sm font-semibold uppercase tracking-widest">The process</span>
            <h2 className="mt-3 text-4xl font-bold text-[#1B2632]">How it works for creators</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { n: "1", title: "Apply to join", desc: "Tell us about your channel, niche, and what kinds of brands you&apos;d love to work with." },
                { n: "2", title: "We review your profile", desc: "Our team looks at your content, engagement, and audience fit — usually within 5 working days." },
                { n: "3", title: "You're in the network", desc: "We start matching you with brand opportunities and bring deals to you directly." },
                { n: "4", title: "Create & get paid", desc: "You do what you do best. We handle contracts, timelines, and payment chasing." },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#FFB162] text-[#1B2632] font-bold flex items-center justify-center text-sm">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B2632] mb-1">{step.title}</h4>
                    <p className="text-[#2C3B4D]/65 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]"
            >
              <img
                src="/food-creators.jpg"
                alt="Food creator filming a cooking video"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#2C3B4D]">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest">FAQs</span>
            <h2 className="mt-3 text-4xl font-bold text-[#EEE9DF]">Common questions</h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#1B2632]/50 border border-[#EEE9DF]/10 rounded-xl p-6"
              >
                <h4 className="font-bold text-[#EEE9DF] mb-3">{faq.q}</h4>
                <p
                  className="text-[#C9C1B1] text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFB162] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-bold text-[#1B2632]">Ready to work with brands you love?</h2>
            <p className="mt-4 text-[#1B2632]/70 text-lg">
              Apply to join our creator network — it&apos;s free, fast, and designed to work around you.
            </p>
            <Button asChild variant="dark" size="lg" className="mt-8">
              <Link href="/contact?type=creator">
                Apply now <MoveRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
