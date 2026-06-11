import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Record Transactions",
    description: "Capture revenue, expenses, and financial activities in one place.",
    icon: "/AccountsIcon6.svg",
    iconBg: "#dfa33a",
  },
  {
    number: "02",
    title: "Track Invoices",
    description: "Monitor paid, pending, and overdue invoices in real time.",
    icon: "/AccountsIcon7.svg",
    iconBg: "#b8862e",
  },
  {
    number: "03",
    title: "Monitor Performance",
    description: "Analyze profit, expenses, and cash flow through live dashboards.",
    icon: "/AccountsIcon8.svg",
    iconBg: "#9a6f24",
  },
  {
    number: "04",
    title: "Make Better Decisions",
    description: "Use financial insights to improve planning and business growth.",
    icon: "/AccountsIcon9.svg",
    iconBg: "#7a5518",
  },
]

const HowItWorks = () => {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] items-center gap-14 lg:grid-cols-[430px_1fr] lg:gap-20">
        {/* Left text */}
        <div>
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            How It Works
          </span>

          <h2 className="mt-9 max-w-[340px] text-[32px] font-bold leading-[1.02] text-[#172283] sm:text-[40px] lg:text-[46px]">
            From Revenue
            <br />
            to <span className="text-[#456cff]">Reporting</span>
          </h2>

          <p className="mt-6 max-w-[360px] text-base leading-snug text-[#6c78bd]">
            Manage financial operations through a structured workflow designed for visibility and control.
          </p>
        </div>

        {/* Right steps */}
        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute left-[26px] top-14 hidden h-[360px] border-l-2 border-dotted border-[#dfa33a] md:block" />

          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="relative grid gap-5 md:grid-cols-[58px_1fr] md:items-center">
                {/* Circle number */}
                <div className="relative z-10 hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(223,163,58,0.2)] md:flex">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: step.iconBg }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <article className="flex min-h-[88px] items-center gap-4 rounded-[28px] border border-[#ede8e0] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(57,81,169,0.07)] sm:px-6">
                  <span
                    className="grid h-[60px] w-[60px] shrink-0 place-items-center rounded-[16px]"
                    style={{ backgroundColor: step.iconBg }}
                  >
                    <Image src={step.icon} alt="" width={60} height={60} className="h-15 w-15" />
                  </span>

                  <div>
                    <p className="mb-0.5 text-xs font-bold text-[#dfa33a] md:hidden">{step.number}</p>
                    <h3 className="text-[18px] font-bold leading-tight text-[#172283] sm:text-[20px]">{step.title}</h3>
                    <p className="mt-1 max-w-[280px] text-sm leading-snug text-[#6c78bd]">{step.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
