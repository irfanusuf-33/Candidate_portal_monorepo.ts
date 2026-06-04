"use client"

import { motion } from "framer-motion"
import { Activity, ArrowRight, Clock3, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const salesHighlights = [
  {
    title: "Flexible Stage Configuration",
    icon: Settings,
    className: "right-0 top-10 md:right-0 md:top-20",
  },
  {
    title: "Seamless Deal Movement",
    icon: Activity,
    className: "left-0 top-[164px] md:-left-10 md:top-[245px]",
  },
  {
    title: "Instant Activity Updates",
    icon: Clock3,
    className: "right-2 top-[286px] md:-right-6 md:top-[285px]",
  },
]

export default function UnifiedSalesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8ff]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(78,108,255,0.16),transparent_34%),linear-gradient(90deg,rgba(255,255,255,0.96),rgba(239,242,255,0.92))]" />

      <div className="relative mx-auto grid min-h-[610px] max-w-[1240px] grid-cols-1 items-center gap-12 px-5 py-20 md:grid-cols-[0.88fr_1.12fr] md:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-[540px] text-center md:mx-0 md:text-left"
        >
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(63,108,255,0.26)]">
            Unified Sales Command Center
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-[1.05] text-[#172283] md:text-[64px]">
            <span className="text-[#456cff]">Unified</span> Sales
            <br />
            Command Center
          </h2>

          <p className="mt-5 max-w-[510px] text-lg leading-snug text-[#6c78bd] md:text-xl">
            Manage leads, track progress, and optimise every deal with a clear and connected sales workflow.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2da8f4] to-[#2f55ff] py-1.5 pl-5 pr-1.5 text-base font-medium text-white shadow-[0_16px_34px_rgba(37,86,222,0.24)] transition-transform hover:scale-[1.03]"
          >
            View Product
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15248a]">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto h-[430px] w-full max-w-[640px] md:h-[500px]"
        >
          <div className="absolute inset-x-10 bottom-4 top-0 rounded-[36px] bg-white/35 blur-3xl" />

          <Image
            src="/MobileImgTransparent.png"
            alt="Mobile sales dashboard"
            width={820}
            height={1320}
            priority
            className="absolute left-1/2 top-0 z-[1] h-[520px] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_26px_44px_rgba(9,18,74,0.22)] md:-top-2 md:h-[610px]"
          />

          {salesHighlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: 0.18 + index * 0.08 }}
                className={`absolute z-10 flex min-h-[86px] w-[min(86vw,330px)] items-center gap-4 rounded-[22px] border border-[#d4ddff] bg-white/95 px-5 py-4 shadow-[0_20px_46px_rgba(37,55,130,0.16)] backdrop-blur-md ${item.className}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#172283]">
                  <Icon className="h-9 w-9 stroke-[2.6]" />
                </span>
                <span className="text-[22px] font-bold leading-[0.98] text-[#172283]">{item.title}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
