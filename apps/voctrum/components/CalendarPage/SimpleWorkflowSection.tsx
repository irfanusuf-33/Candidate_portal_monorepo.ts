"use client"

import Image from "next/image"

const steps = [
  {
    num: "01",
    icon: "/CalendarIcon6.svg",
    title: "Create Event",
    desc: "Add titles, schedules, attendees, and meeting details in seconds.",
  },
  {
    num: "02",
    icon: "/CalendarIcon7.svg",
    title: "Assign & Organize",
    desc: "Set event timings, locations, reminders, and full-day activities easily.",
  },
  {
    num: "03",
    icon: "/CalendarIcon8.svg",
    title: "Collaborate With Teams",
    desc: "Share schedules and coordinate meetings across departments.",
  },
  {
    num: "04",
    icon: "/CalendarIcon9.svg",
    title: "Track & Stay Updated",
    desc: "Monitor upcoming events and receive real-time updates instantly.",
  },
]

const stepColors = ["#2aa8a4", "#1a9e9a", "#0f8f8b", "#047a76"]

const SimpleWorkflowSection = () => {
  return (
    <section className="bg-[linear-gradient(135deg,#f7fbff_0%,#e8f1f6_60%,#d4eeed_100%)] px-5 py-16 sm:px-9">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">

        {/* Left */}
        <div className="max-w-[420px] shrink-0 lg:pt-8">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-medium text-white">
            Simple Workflow
          </span>
          <h2 className="mt-5 text-[36px] font-bold leading-[1.05] text-[#172283] sm:text-[42px]">
            Schedule, Coordinate &amp; Execute{" "}
            <span className="text-[#456cff]">Faster</span>
          </h2>
          <p className="mt-4 text-[12px] leading-snug text-[#6d7fc4]">
            Voctrum simplifies planning and scheduling with a streamlined workflow built for modern teams.
          </p>
        </div>

        {/* Right — timeline */}
        <div className="relative flex w-full flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-start gap-4">
              {/* Number + dashed line */}
              <div className="flex flex-col items-center mt-4">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ring-4 ring-white/60"
                  style={{ backgroundColor: stepColors[i] }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="my-1 h-12 border-l-2 border-dashed border-[#456cff]" />
                )}
              </div>

              {/* Card */}
              <div className="mb-4 flex flex-1 items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_4px_24px_rgba(42,71,146,0.08)]">
                <Image src={step.icon} alt={step.title} width={56} height={56} className="shrink-0" />
                <div>
                  <p className="text-[14px] font-bold text-[#172283]">{step.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-[#6d7fc4]">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SimpleWorkflowSection
