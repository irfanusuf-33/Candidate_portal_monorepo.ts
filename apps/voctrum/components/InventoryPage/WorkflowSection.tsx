import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Add Assets",
    description: "Register new products and assign categories instantly.",
    icon: "/InventoryIcon2.svg",
  },
  {
    number: "02",
    title: "Allocate Warehouses",
    description: "Assign inventory to warehouses and storage locations.",
    icon: "/InventoryIcon3.svg",
  },
  {
    number: "03",
    title: "Monitor Stock",
    description: "Track availability, transfers, and stock health in real time.",
    icon: "/InventoryIcon4.svg",
  },
  {
    number: "04",
    title: "Optimise Inventory",
    description: "Reduce shortages and improve operational efficiency.",
    icon: "/InventoryIcon5.svg",
  },
]

const WorkflowSection = () => {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] items-center gap-14 lg:grid-cols-[430px_1fr] lg:gap-20">
        <div>
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Simple Asset Workflow
          </span>

          <h2 className="mt-9 max-w-[380px] text-[32px] font-bold leading-[1.02] text-[#172283] sm:text-[40px] lg:text-[46px]">
            From Purchase
            <br />
            <span className="text-[#456cff]">to Distribution</span>
          </h2>

          <p className="mt-6 max-w-[380px] text-base leading-snug text-[#6c78bd]">
            Keep every asset organised with a structured workflow that simplifies inventory tracking and movement.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute left-[26px] top-14 hidden h-[360px] border-l-2 border-dotted border-[#456cff] md:block" />

          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="relative grid gap-5 md:grid-cols-[58px_1fr] md:items-center">
                <div className="relative z-10 hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(38,79,210,0.18)] md:flex">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#456cff] text-sm font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <article className="flex min-h-[88px] items-center gap-5 rounded-[28px] border border-[#d7e0ff] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(57,81,169,0.08)] sm:px-6">
                  <span className="grid h-[64px] w-[64px] shrink-0 place-items-center rounded-[17px] ">
                    <Image src={step.icon} alt="" width={60} height={60} className="h-[60px] w-[60px]" />
                  </span>

                  <div>
                    <p className="mb-1 text-xs font-bold text-[#456cff] md:hidden">{step.number}</p>
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

export default WorkflowSection
