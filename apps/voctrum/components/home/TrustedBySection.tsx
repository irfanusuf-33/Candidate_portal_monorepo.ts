"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { CSSProperties } from "react"
import { WobbleCard } from "@/components/ui/wobble-card"

type Testimonial = {
  name: string
  role: string
  quote: string
  initials: string
  image: string
  avatarClassName: string
  avatarStyle: CSSProperties
}

const testimonials: Testimonial[] = [
  {
    name: "Floyd Miles",
    role: "CEO Microsoft",
    initials: "FM",
    image: "/HomePageImg1.svg",
    quote:
      "Working with Lerero feels like having both a wise mentor and innovative disruptor on your team. Their balanced approach delivers real results.",
    avatarClassName: "h-[162px] w-[162px] rounded-[18px] text-4xl",
    avatarStyle: {
      background:
        "radial-gradient(circle at 50% 22%, #26272c 0 13%, transparent 14%), radial-gradient(circle at 47% 38%, #a86f4f 0 21%, transparent 22%), linear-gradient(180deg, #f5f7f9 0%, #dfe5ea 56%, #bcd5ee 57%, #dcecfb 100%)",
    },
  },
  {
    name: "Ali Javaid",
    role: "CEO Designing",
    initials: "AJ",
    image: "/HomePageImg2.svg",
    quote:
      "FlowCRM completely transformed how we manage our sales pipeline. The visual stages make it easy to track deals and identify bottlenecks instantly.",
    avatarClassName: "h-12 w-12 rounded-full text-sm",
    avatarStyle: {
      background:
        "radial-gradient(circle at 56% 26%, #1f2432 0 20%, transparent 21%), radial-gradient(circle at 48% 46%, #b9784d 0 24%, transparent 25%), linear-gradient(135deg, #eef3ff 0%, #cfdcff 100%)",
    },
  },
  {
    name: "Priya Sharma",
    role: "Senior Software Engineer",
    initials: "PS",
    image: "/HomePageImg3.svg",
    quote:
      "The analytics and reporting tools are exactly what we needed. We're making smarter, data-driven decisions now.",
    avatarClassName: "h-12 w-12 rounded-full text-sm",
    avatarStyle: {
      background:
        "radial-gradient(circle at 51% 24%, #2b1f1a 0 18%, transparent 19%), radial-gradient(circle at 51% 43%, #c6855f 0 24%, transparent 25%), linear-gradient(135deg, #fef3e9 0%, #c7d8ff 100%)",
    },
  },
  {
    name: "Eduardo",
    role: "React JS Developer",
    initials: "ED",
    image: "/HomePageImg4.svg",
    quote:
      "I was impressed by how quickly we were able to implement this tool. It's made collaboration across teams so much smoother.",
    avatarClassName: "h-12 w-12 rounded-full text-sm",
    avatarStyle: {
      background:
        "radial-gradient(circle at 52% 23%, #3a302b 0 17%, transparent 18%), radial-gradient(circle at 50% 43%, #c58a68 0 24%, transparent 25%), linear-gradient(135deg, #eef2f7 0%, #aab9cf 100%)",
    },
  },
  {
    name: "Flores, Juanita",
    role: "MD Family Practice",
    initials: "FJ",
    image: "/HomePageImg5.svg",
    quote:
      "This platform has simplified our processes and boosted productivity. It's a must-have for any business looking to grow.",
    avatarClassName: "h-12 w-12 rounded-full text-sm",
    avatarStyle: {
      background:
        "radial-gradient(circle at 50% 24%, #d5b090 0 20%, transparent 21%), radial-gradient(circle at 50% 44%, #d29a75 0 24%, transparent 25%), linear-gradient(135deg, #fff1e8 0%, #d7e3ff 100%)",
    },
  },
]

export default function TrustedBySection() {
  const featured = testimonials[0]
  const topCard = testimonials[1]
  const bottomCards = testimonials.slice(2)

  if (!featured || !topCard) {
    return null
  }

  return (
    <section className="bg-[#eef2f8] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[970px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="grid items-start gap-6 md:grid-cols-[1fr_370px]"
        >
          <h2 className="text-[42px] font-bold leading-[1.05] text-[#172283] sm:text-6xl">
            Trusted by
            <br />
            <span className="text-[#456cff]">Growing</span> Teams
          </h2>

          <p className="max-w-[360px] text-left text-base leading-snug text-[#6c78bd] md:ml-auto md:pt-6 md:text-center">
            Teams using Voctrum ERP are simplifying operations, improving visibility, and making faster decisions every day
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <WobbleCard containerClassName="lg:col-span-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5 rounded-[28px] border-2 border-[#2a9bff] bg-white p-7 shadow-[0_26px_70px_rgba(51,93,158,0.12)] sm:flex-row sm:items-center"
          >
            <Avatar testimonial={featured} />
            <div className="max-w-[390px]">
              <h3 className="text-xl font-bold leading-tight text-[#172283]">{featured.name}</h3>
              <p className="text-base leading-tight text-[#6c78bd]">{featured.role}</p>
              <p className="mt-5 text-base leading-snug text-[#6c78bd]">&quot;{featured.quote}&quot;</p>
            </div>
          </motion.article>
          </WobbleCard>

          <TestimonialCard testimonial={topCard} index={1} />

          {bottomCards.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <WobbleCard containerClassName="h-full">
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="min-h-[220px] h-full rounded-[28px] border-2 border-[#b9ccff] bg-transparent p-7 shadow-[0_20px_54px_rgba(51,93,158,0.08)]"
    >
      <div className="flex items-center gap-3">
        <Avatar testimonial={testimonial} />
        <div>
          <h3 className="text-xl font-bold leading-tight text-[#172283]">{testimonial.name}</h3>
          <p className="text-base leading-tight text-[#6c78bd]">{testimonial.role}</p>
        </div>
      </div>

      <p className="mt-7 text-base leading-snug text-[#6c78bd]">&quot;{testimonial.quote}&quot;</p>
    </motion.article>
    </WobbleCard>
  )
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Image
      src={testimonial.image}
      alt={testimonial.name}
      width={162}
      height={162}
      className={`shrink-0 border-2 border-[#172283] object-cover ${testimonial.avatarClassName}`}
    />
  )
}
