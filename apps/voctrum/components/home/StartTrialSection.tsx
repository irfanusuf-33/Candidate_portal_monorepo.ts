"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StartTrialSection() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex min-h-[330px] max-w-[986px] flex-col overflow-hidden rounded-[30px] bg-[#456cff] shadow-[0_28px_70px_rgba(38,76,213,0.18)] lg:flex-row"
      >
        <div className="relative z-10 flex w-full flex-col justify-center px-8 py-12 text-white sm:px-10 lg:w-[48%] lg:px-8">
          <h2 className="max-w-[350px] text-[42px] font-bold leading-[1.08] sm:text-[52px]">
            Ready to
            <br />
            Run Smarter?
          </h2>

          <p className="mt-5 max-w-[360px] text-base leading-snug text-white/86">
            Switch to a system that gives you clarity, speed, and complete control over your business.
          </p>

          <Link
            href="/products/register"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-base font-medium text-[#456cff] shadow-[0_14px_34px_rgba(13,30,102,0.18)] transition-transform hover:scale-[1.03]"
          >
            Start Free Trial
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#456cff] text-white">
              <ArrowRight className="h-5 w-5" strokeWidth={2.6} />
            </span>
          </Link>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[64%] lg:block">
          <Image
            src="/TrailSectionImg.jpg"
            alt="Voctrum ERP mobile dashboard preview"
            width={2068}
            height={2153}
            className="absolute -bottom-24 right-0 h-[500px] w-auto max-w-none object-contain"
            priority
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] bg-[linear-gradient(90deg,rgba(69,108,255,0),rgba(69,108,255,0.16))] lg:block" />

        <div className="relative mt-auto h-[230px] w-full overflow-hidden lg:hidden">
          <Image
            src="/TrailSectionImg.jpg"
            alt="Voctrum ERP mobile dashboard preview"
            width={2068}
            height={2153}
            className="absolute left-1/2 top-0 h-[360px] w-auto max-w-none -translate-x-1/2 object-contain"
          />
        </div>
      </motion.div>
    </section>
  )
}
