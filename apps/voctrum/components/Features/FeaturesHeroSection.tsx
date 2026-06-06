import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FeaturesHeroSection = () => {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#f4faff] px-5 pt-32 md:px-8 lg:min-h-[720px] lg:pt-0">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.70)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.70)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_7%,rgba(72,119,255,0.28),transparent_34%),linear-gradient(90deg,rgba(238,249,255,0.94)_0%,rgba(245,251,255,0.82)_44%,rgba(216,229,255,0.58)_100%)]" />

      <div className="mx-auto flex min-h-[calc(760px-128px)] w-full max-w-[1060px] flex-col justify-center lg:block lg:min-h-[720px]">
        <div className="relative z-10 w-full max-w-[500px] pb-8 pt-8 text-left lg:pb-0 lg:pt-[260px]">
          <span className="inline-flex h-5 items-center rounded-full bg-[linear-gradient(90deg,#4278ff,#09258f)] px-3.5 text-[9px] font-semibold leading-none text-white shadow-[0_12px_26px_rgba(38,94,255,0.22)]">
            Unified Sales Command Center
          </span>

          <h1 className="mt-6 max-w-[500px] text-[38px] font-bold leading-[0.96] text-[#172283] md:text-[44px]">
            <span className="text-[#4372ff]">Stop Managing Chaos</span>
            <br />
            Start Running Smarter
          </h1>

          <p className="mt-3.5 max-w-[470px] text-[13px] leading-[1.22] text-[#6d7bbd]">
            Disconnected systems slow growth. Voctrum brings people, operations,
            finance, support, and sales into one connected ERP.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <Link
              href="/products/register"
              className="inline-flex h-8 items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#2aa8f5,#09268f)] pl-4 pr-1.5 text-xs font-semibold text-white shadow-[0_14px_28px_rgba(31,101,255,0.23)] transition-transform hover:scale-[1.03]"
            >
              See How it Works
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0b2690]">
                <ArrowRight size={15} strokeWidth={2.4} />
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-8 items-center justify-center gap-2 rounded-full border border-[#4a76ff] bg-white/60 pl-4 pr-2 text-xs font-medium text-[#3f69ff] transition-colors hover:bg-white"
            >
              Book Demo
              <ArrowRight size={13} strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        <div className="pointer-events-none relative mt-8 w-full lg:absolute lg:left-[calc(52%+18px)] lg:top-1/2 lg:mt-0 lg:w-[610px] lg:-translate-y-1/2 xl:w-[710px]">
          <Image
            src="/Mockup.png"
            alt="Voctrum HRM dashboard overview"
            width={600}
            height={700}
            priority
            className="h-auto w-full object-contain"
            sizes="(min-width: 1280px) 710px, (min-width: 1024px) 610px, 100vw"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesHeroSection
