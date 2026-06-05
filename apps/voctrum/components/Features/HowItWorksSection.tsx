import Image from "next/image"

const steps = [
  {
    number: "1",
    title: "Identify Business Gaps",
    description:
      "Find disconnected processes, scattered data, and manual workflows slowing down your teams.",
    icon: "/FeaturesCircle1.svg",
    className: "lg:left-[13%] lg:top-[170px]",
    contentClassName: "lg:left-0 lg:top-[34px]",
    numberClassName: "lg:left-[25%] lg:top-[6px]",
  },
  {
    number: "2",
    title: "Connect Every Department",
    description:
      "Bring HR, sales, inventory, finance, support, and operations into one centralized system.",
    icon: "/FeaturesCircle2.svg",
    className: "lg:left-[40%] lg:top-[62px]",
    contentClassName: "lg:left-[34%] lg:top-[265px]",
    numberClassName: "lg:left-[52%] lg:top-[218px]",
  },
  {
    number: "3",
    title: "Automate & Scale Faster",
    description:
      "Reduce manual work, improve visibility, and grow with smarter workflows and insights.",
    icon: "/FeaturesCircle3.svg",
    className: "lg:left-[75%] lg:top-[125px]",
    contentClassName: "lg:left-[68%] lg:top-[265px]",
    numberClassName: "lg:left-[86%] lg:top-[225px]",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-[#edf2f8] px-5 pb-16 pt-12 md:px-8 lg:pb-20 lg:pt-14">
      <div className="mx-auto max-w-[940px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex h-7 items-center rounded-full bg-[#3f70ff] px-5 text-[11px] font-semibold text-white shadow-[0_12px_24px_rgba(63,112,255,0.22)]">
            How It Works
          </span>

          <h2 className="mt-6 text-[34px] font-bold leading-[1.02] text-[#172283] md:text-[42px]">
            From Business Chaos
            <br />
            to Connected <span className="text-[#4372ff]">Operations</span>
          </h2>
        </div>

        <div className="relative mt-5 hidden h-[330px] lg:block">
          <svg
            className="absolute left-0 top-[110px] h-[150px] w-full overflow-visible"
            viewBox="0 0 940 170"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 95 C125 150 255 135 335 48 C390 -12 475 -18 548 32 C612 76 622 132 703 122 C790 112 790 35 940 58"
              stroke="rgba(22,42,120,0.10)"
              strokeWidth="11"
              strokeLinecap="round"
              filter="url(#softShadow)"
            />
            <path
              d="M0 92 C125 147 255 132 335 45 C390 -15 475 -21 548 29 C612 73 622 129 703 119 C790 109 790 32 940 55"
              stroke="#0e5bff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <filter
                id="softShadow"
                x="-20"
                y="-40"
                width="980"
                height="250"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
          </svg>

          {steps.map((step) => (
            <div key={step.number}>
              <span
                className={`absolute select-none text-[82px] font-bold leading-none text-[#cfd6ea]/80 [mask-image:linear-gradient(to_bottom,black_0%,black_38%,transparent_100%)] ${step.numberClassName}`}
              >
                {step.number}
              </span>

              <div className={`absolute z-10 ${step.className}`}>
                <Image
                  src={step.icon}
                  alt=""
                  width={140}
                  height={140}
                  className="h-[140px] w-[140px] drop-shadow-[0_18px_34px_rgba(18,36,100,0.10)]"
                />
              </div>

              <div className={`absolute z-20 max-w-[220px] ${step.contentClassName}`}>
                <h3 className="text-[21px] font-bold leading-[0.92] text-[#172283]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] leading-snug text-[#6d7bbd]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-[22px] bg-white p-6 shadow-[0_18px_42px_rgba(25,35,95,0.07)]"
            >
              <span className="absolute right-5 top-4 text-6xl font-bold leading-none text-[#cfd6ea]/80 [mask-image:linear-gradient(to_bottom,black_0%,black_48%,transparent_100%)]">
                {step.number}
              </span>
              <Image
                src={step.icon}
                alt=""
                width={64}
                height={64}
                className="relative z-10 h-16 w-16"
              />
              <h3 className="relative z-10 mt-6 text-2xl font-bold leading-tight text-[#172283]">
                {step.title}
              </h3>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-[#6d7bbd]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
