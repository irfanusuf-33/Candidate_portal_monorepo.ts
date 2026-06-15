// components/home/HeroSectionNew.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

export default function HeroSectionNew() {
  const router = useRouter()

  return (
    <section
      className="relative flex min-h-[760px] flex-col items-center overflow-visible bg-cover bg-center bg-no-repeat pb-32"
      style={{ backgroundImage: "url('/BgImg.jpg')" }}
    >
      <div className="relative z-10 flex flex-col items-center px-4 pt-24 text-center md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 rounded-full border px-4 py-1.5 text-sm"
          style={{ background: "rgba(100,120,255,0.2)", border: "1px solid rgba(150,170,255,0.4)" }}
        >
          <span className="font-medium text-white">Built for Smart Business Growth</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-5xl font-bold leading-[1.08] text-white md:text-6xl lg:text-7xl"
        >
          The Smart ERP Built for{" "}
          <span className="whitespace-nowrap">
            <TypewriterEffect
              blur
              words={[
                { text: "Growing" },
                { text: "Businesses"},
              ]}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-xl text-base text-white/70 md:text-lg"
        >
          Manage operations, automate workflows, and scale faster
          <br />
          with one unified system and real-time insights.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => router.push("/products/register")}
          className="mt-6 flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/95 px-4 py-1 text-sm font-medium text-[#335cff] shadow-[0_14px_34px_rgba(24,45,130,0.22)] transition-all hover:scale-105"
        >
          Get Started
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3f6cff]">
            <ArrowRight className="h-4 w-4 text-white" />
          </span>
        </motion.button>
      </div>

      <div className="relative z-50 mx-auto -mt-2 flex w-full max-w-[1160px] items-end justify-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -40, y: 40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="z-20 mr-8 mb-[210px] hidden w-[248px] shrink-0 flex-col gap-4 md:flex"
        >
          <div className="flex h-[168px] flex-col justify-between rounded-[32px] border border-white/70 bg-white/95 p-[22px] shadow-[0_24px_60px_rgba(8,21,90,0.22)]">
            <p className="text-2xl font-bold leading-[0.92] text-[#172283]">
              Monthly
              <br />
              Performance
            </p>
            <div>
              <p className="text-[32px] font-bold leading-none text-[#3f6cff]">
                $24,560 <span className="align-middle text-sm font-normal text-[#1d2b80]">Growth</span>
              </p>
              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-[#a8bbff]/70">
                <div className="h-full w-[78%] rounded-full bg-[#3f6cff]" />
              </div>
            </div>
          </div>

          <div className="ml-0 w-[168px] rounded-2xl border border-white/70 bg-[#edf2ff]/95 px-4 py-3 shadow-[0_18px_38px_rgba(8,21,90,0.16)] backdrop-blur-md">
            <div className="mb-2.5 h-2.5 w-28 rounded-full bg-[#7f9fff]" />
            <div className="h-2.5 w-[136px] rounded-full bg-[#9db5ff]" />
          </div>

          <div className="ml-20 w-[168px] rounded-2xl border border-white/70 bg-[#edf2ff]/90 px-4 py-3 shadow-[0_18px_38px_rgba(8,21,90,0.14)] backdrop-blur-md">
            <div className="mb-2.5 h-2.5 w-28 rounded-full bg-[#7f9fff]" />
            <div className="h-2.5 w-[136px] rounded-full bg-[#9db5ff]" />
          </div>
        </motion.div>

        <CardContainer containerClassName="w-full max-w-[575px] !py-0" className="w-full">
          <CardBody className="w-full h-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-[60] mb-[140px] w-full max-w-[575px] shrink-0"
            >
              <CardItem translateZ={50} className="w-full">
                <div className="rounded-[40px] border-[8px] border-[#C7D4FF] bg-[#C7D4FF] shadow-[0_28px_70px_rgba(4,13,75,0.28)]">
                  <Image
                    src="/Image Frame.jpg"
                    alt="Dashboard"
                    width={1920}
                    height={1180}
                    priority
                    className="w-full rounded-[30px]"
                  />
                </div>
              </CardItem>
            </motion.div>
          </CardBody>
        </CardContainer>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="z-20 ml-8 mb-[300px] hidden h-[288px] w-[248px] shrink-0 flex-col rounded-[34px] border border-white/70 p-5 shadow-[0_30px_70px_rgba(20,40,140,0.42)] backdrop-blur-xl md:flex"
          style={{ background: "linear-gradient(150deg, rgba(255,255,255,0.2), rgba(58,91,190,0.52))" }}
        >
          <span className="mb-3 self-start rounded-full bg-white/26 px-4 py-1.5 text-sm font-semibold text-white/85">
            Try ERP Now
          </span>
          <h3 className="mb-5 text-[32px] font-bold leading-[0.98] text-white">
            Tasks Due
            <br />
            Today
          </h3>
          <div className="mt-auto flex h-[116px] items-end gap-2 border-l border-b border-dashed border-white/55 pl-[98px] pb-2">
            {[42, 70, 108].map((h) => (
              <div key={h} className="w-7 rounded-t-[5px] bg-white" style={{ height: `${h}px` }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
