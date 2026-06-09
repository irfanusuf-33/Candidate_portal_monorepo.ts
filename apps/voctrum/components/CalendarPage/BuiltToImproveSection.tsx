"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const BuiltToImproveSection = () => {
  return (
    <section className="bg-[#eef2f8] px-5 py-16 sm:px-9">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <h2 className="max-w-[580px] text-[36px] font-bold leading-tight sm:text-[44px]">
          <span className="text-[#456cff]">Built</span>{" "}
          <span className="text-[#172283]">To Improve Productivity &amp; Coordination</span>
        </h2>

        <p className="mt-4 max-w-[360px] text-[13px] leading-snug text-[#6d7fc4]">
          Voctrum Calendar helps businesses reduce scheduling confusion and improve operational efficiency.
        </p>

        <Link
          href="#"
          className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-[linear-gradient(90deg,#2aa8f5,#09268f)] pl-5 pr-1.5 text-[13px] font-semibold text-white shadow-[0_14px_30px_rgba(28,99,213,0.22)] transition-transform hover:scale-[1.03]"
        >
          Start with Voctrum Ticketing
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#09268f]">
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </Link>

        <div className="mt-12 w-full max-w-[900px]">
          <Image
            src="/CalendarGroupImg.png"
            alt="Voctrum Calendar productivity UI"
            width={900}
            height={500}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default BuiltToImproveSection
