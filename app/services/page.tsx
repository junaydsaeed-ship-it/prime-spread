"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"

const services = [
  {
    number: "01",
    title: "Brand Campaign Management",
    subtitle: "For food and kitchen brands",
    desc: "We take food brands from brief to final deliverable — managing every step of the influencer campaign so your team doesn't have to. From creator discovery and vetting to contract negotiation, content review, and performance reporting, we handle it all.",
    detail:
      "Our deep understanding of the food and kitchen appliance space means we know which creators genuinely connect with your target audience, and how to brief them so the content actually resonates.",
    points: [
      "Creator discovery & audience analysis",
      "Campaign strategy & brief writing",
      "Contract negotiation & management",
      "Content review & approval workflow",
      "Post-campaign analytics & reporting",
    ],
    img: "/brand-analytics.jpg",
    accent: "#FFB162",
  },
  {
    number: "02",
    title: "Creator Deal Sourcing",
    subtitle: "For food and cooking influencers",
    desc: "We help talented food creators turn their passion into a sustainable income. Through our network of brand partners, we connect creators with sponsorship opportunities that match their niche, audience, and creative style — and we handle all the negotiation.",
    detail:
      "No more chasing cold outreach that goes nowhere. We bring the right brands to you, negotiate fair rates, and make sure your creative voice is protected in every deal.",
    points: [
      "Brand matching based on your niche & audience",
      "Rate negotiation & deal structuring",
      "Creative brief review & protection",
      "Ongoing brand relationship management",
      "Payment tracking & follow-up",
    ],
    img: "/creative-strategy.jpg",
    accent: "#A35139",
  },
  {
    number: "03",
    title: "Vision & Creative Alignment",
    subtitle: "For both brands and creators",
    desc: "The best influencer campaigns don't feel like ads — they feel like recommendations from a trusted friend. We specialise in finding the creative overlap between what a brand needs and what a creator does naturally, ensuring every piece of content serves both.",
    detail:
      "We sit in creative conversations with both sides, push back on briefs that are too restrictive, and advocate for content formats that will genuinely perform — not just tick a box.",
    points: [
      "Creative concept development",
      "Brand voice & creator style alignment",
      "Content format consultation",
      "Briefing workshops for brand teams",
      "Creator storytelling coaching",
    ],
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&h=500&fit=crop",
    accent: "#2C3B4D",
  },
]

const process = [
  { step: "01", title: "Discovery call", desc: "We learn your goals, audience, and what success looks like for you." },
  { step: "02", title: "Strategy", desc: "We build a tailored plan — creators, formats, timeline, and KPIs." },
  { step: "03", title: "Execution", desc: "We manage everything: outreach, briefs, content review, and go-live." },
  { step: "04", title: "Results", desc: "You get a clear report on reach, engagement, and what we'd do next." },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1B2632] pt-44 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest">
              What we do
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#EEE9DF] leading-tight">
              Services built around<br />food culture.
            </h1>
            <p className="mt-6 text-[#C9C1B1] text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a brand that wants results or a creator who wants consistency,
              we have a clear, proven process for getting you there.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-24 px-6 bg-[#EEE9DF]">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <span
                  className="text-6xl font-black opacity-15 block"
                  style={{ color: service.accent }}
                >
                  {service.number}
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest mt-2 block"
                  style={{ color: service.accent }}>
                  {service.subtitle}
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B2632]">{service.title}</h2>
                <p className="mt-5 text-[#2C3B4D]/70 leading-relaxed">{service.desc}</p>
                <p className="mt-4 text-[#2C3B4D]/60 leading-relaxed text-sm">{service.detail}</p>
                <ul className="mt-6 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#1B2632]">
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: service.accent }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#2C3B4D]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[#FFB162] text-sm font-semibold uppercase tracking-widest">How it works</span>
            <h2 className="mt-3 text-4xl font-bold text-[#EEE9DF]">Simple process, serious results.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-black text-[#FFB162]/20 mb-3">{p.step}</div>
                <h3 className="font-bold text-[#EEE9DF] text-lg mb-2">{p.title}</h3>
                <p className="text-[#C9C1B1] text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-4 text-[#FFB162]/30 text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFB162] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-bold text-[#1B2632]">Ready to get started?</h2>
            <p className="mt-4 text-[#1B2632]/70 text-lg">
              Tell us about your brand or channel and we&apos;ll come back to you within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild variant="dark" size="lg">
                <Link href="/contact">
                  Talk to us <MoveRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/influencers">I&apos;m a creator</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
