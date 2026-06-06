import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Add Clients",
    description: "Store customer information and organize contacts in one place.",
    icon: "/CrmIcon5.svg",
    highlight: true,
  },
  {
    number: "02",
    title: "Track Opportunities",
    description: "Manage enquiries, deals, and potential business opportunities.",
    icon: "/CrmIcon6.svg",
  },
  {
    number: "03",
    title: "Schedule Activities",
    description: "Track meetings, follow-ups, calls, and important client actions.",
    icon: "/CrmIcon7.svg",
  },
  {
    number: "04",
    title: "Build Stronger Relationships",
    description: "Keep communication organized and improve customer engagement.",
    icon: "/CrmIcon8.svg",
  },
]

const CrmhowItWorks = () => {
  return (
    <section className="overflow-hidden bg-[linear-gradient(125deg,#ffffff_0%,#ffffff_46%,#eef3ff_100%)] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] items-center gap-14 lg:grid-cols-[430px_1fr] lg:gap-20">
        <div>
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            How It Works
          </span>

          <h2 className="mt-9 max-w-[420px] text-[48px] font-bold leading-[1.02] text-[#172283] sm:text-[58px]">
            From First
            <br />
            Contact
            <br />
            to Long-Term
            <br />
            <span className="text-[#456cff]">Relationships</span>
          </h2>

          <p className="mt-6 max-w-[450px] text-base leading-snug text-[#6c78bd]">
            Manage every client interaction with a structured workflow that improves follow-ups, visibility, and business growth.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute left-[26px] top-14 hidden h-[360px] border-l-2 border-dotted border-[#456cff] md:block" />

          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="relative grid gap-5 md:grid-cols-[58px_1fr] md:items-center">
                <div className="relative z-10 hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(38,79,210,0.18)] md:flex">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${
                      step.highlight ? "bg-[#7d9dff]" : "bg-[#172283]"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <article className="flex min-h-[104px] items-center gap-5 rounded-[28px] border border-[#d7e0ff] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(57,81,169,0.08)] sm:px-6">
                  <Image
                    src={step.icon}
                    alt=""
                    width={76}
                    height={76}
                    className="h-[76px] w-[76px] shrink-0"
                  />

                  <div>
                    <p className="mb-1 text-xs font-bold text-[#456cff] md:hidden">
                      {step.number}
                    </p>
                    <h3 className="text-[22px] font-bold leading-tight text-[#172283]">
                      {step.title}
                    </h3>
                    <p className="mt-1 max-w-[330px] text-base leading-snug text-[#6c78bd]">
                      {step.description}
                    </p>
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

export default CrmhowItWorks
