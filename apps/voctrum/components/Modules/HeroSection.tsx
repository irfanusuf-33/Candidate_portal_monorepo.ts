"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#dcebff] px-5 pt-24 md:px-8 lg:pt-28">
      <Image
        src="/Modulesbg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 mx-auto flex max-w-[1040px] flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full bg-[#456cff] px-5 py-1.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(63,108,255,0.22)]"
        >
          Core ERP Modules
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-[790px] text-[40px] font-bold leading-[1.05] text-[#172283] sm:text-6xl lg:text-[60px]"
        >
          <span className="text-[#456cff]">Every Business</span> Function
          <br />
          One Connected System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-4 max-w-[560px] text-base leading-snug text-[#6c78bd] md:text-lg"
        >
          Explore powerful modules designed to manage people, operations, inventory, support, security, and business growth from one platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-[#26b6f4] to-[#08278f] px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(20,75,196,0.24)] transition-transform hover:scale-[1.03]"
          >
            Book a Demo
          </Link>
          <Link
            href="#modules"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[#456cff] bg-white/20 px-5 text-sm font-medium text-[#456cff] backdrop-blur-sm transition-colors hover:bg-white/50"
          >
            Explore Platform
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32 }}
          className="relative mt-8 w-full max-w-[860px]"
        >
          <div className="rounded-t-[46px] border border-white/90 bg-white/50 p-3 shadow-[0_30px_80px_rgba(42,92,185,0.18)] backdrop-blur-sm sm:p-4">
            <div className="overflow-hidden rounded-t-[36px] bg-white shadow-[inset_0_0_0_1px_rgba(60,92,180,0.08)]">
              <Image
                src="/ModulesImage.jpg"
                alt="Voctrum ERP modules dashboard"
                width={4167}
                height={1948}
                priority
                className="w-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
