import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const GetStartedSection = () => {
  return (
    <section className="bg-[#eef2f7] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1040px]">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-[42px] font-bold leading-[1.05] text-[#172283] sm:text-[54px]">
            Make Every
            <br />
            Financial Decision
            <br />
            With <span className="text-[#456cff]">Confidence</span>
          </h2>

          <p className="mt-4 text-sm leading-snug text-[#6c78bd] sm:text-base">
            Track revenue, manage expenses, monitor invoices, and
            <br />
            improve financial visibility with Voctrum Treasury.
          </p>

          <Link
            href="/products/register"
            className="mt-7 inline-flex h-9 items-center gap-2 rounded-full bg-[#456cff] pl-5 pr-1.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(69,108,255,0.32)] transition-transform hover:scale-[1.03]"
          >
            Get Started
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#456cff]">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.6} />
            </span>
          </Link>
        </div>

        <div className="mx-auto mt-14 max-w-[1000px]">
          <Image
            src="/AccountsGroupImg.png"
            alt="Accounts dashboard overview"
            width={1720}
            height={900}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default GetStartedSection
