import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Connect Social Accounts",
    description: "Link Facebook, Instagram, YouTube, and TikTok to centralize analytics.",
    icon: "/AnalyticsIcon6.svg",
    color: "#7c4b82",
  },
  {
    number: "02",
    title: "Collect Performance Data",
    description: "Automatically gather audience, engagement, and campaign metrics.",
    icon: "/AnalyticsIcon7.svg",
    color: "#6a3870",
  },
  {
    number: "03",
    title: "Monitor Trends",
    description: "Track growth, content performance, and engagement in real time.",
    icon: "/AnalyticsIcon8.svg",
    color: "#52285e",
  },
  {
    number: "04",
    title: "Optimize Strategy",
    description: "Use insights to improve content, campaigns, and marketing outcomes.",
    icon: "/AnalyticsIcon9.svg",
    color: "#3a1a46",
  },
]

const HowItWorksSection = () => {
  return (
    <section
      className="overflow-hidden px-5 py-20 md:px-8 lg:py-24"
      style={{ background: "linear-gradient(125deg,#ffffff 0%,#ffffff 52%,#f5f0ff 100%)" }}
    >
      <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-[500px_1fr] lg:gap-20">
        <div>
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            How It Works
          </span>

          <h2 className="mt-9 text-[40px] font-bold leading-[1.02] text-[#172283] sm:text-[46px]">
            Track<br />Performance In<br />Four Simple <span className="text-[#456cff]">Steps</span>
          </h2>

          <p className="mt-6 max-w-[400px] text-base leading-snug text-[#6c78bd]">
            Connect your social channels and transform raw data into actionable business insights.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute left-[26px] top-14 hidden h-[360px] border-l-2 border-dotted border-[#7c4b82]/50 md:block" />

          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="relative grid gap-5 md:grid-cols-[58px_1fr] md:items-center">
                <div className="relative z-10 hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(124,75,130,0.18)] md:flex">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </span>
                </div>

                <article className="flex min-h-[88px] items-center gap-5 rounded-[28px] border border-[#ede4f0] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(124,75,130,0.08)] sm:px-6">
                  <span
                    className="grid h-[64px] w-[64px] shrink-0 place-items-center rounded-[17px]"
                    style={{ backgroundColor: step.color }}
                  >
                    <Image src={step.icon} alt="" width={65} height={65} className="h-[65px] w-[65px]" />
                  </span>

                  <div>
                    <p className="mb-1 text-xs font-bold text-[#7c4b82] md:hidden">{step.number}</p>
                    <h3 className="text-[20px] font-bold leading-tight text-[#172283] sm:text-[22px]">{step.title}</h3>
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

export default HowItWorksSection
