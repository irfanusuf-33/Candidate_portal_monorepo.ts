import Image from "next/image"

const cards = [
  {
    title: "Customer Management",
    description: "Manage customer information, communication history, and sales activities from a centralized workspace.",
    icon: "/SalesIcon2.svg",
    img: "/SalesImgCard1.png",
  },
  {
    title: "Opportunity Tracking",
    description: "Monitor every deal stage and identify opportunities that need attention before they slow down.",
    icon: "/SalesIcon3.svg",
    img: "/SalesImgCard2.png",
  },
  {
    title: "Pipeline Funnel",
    description: "Visualize your sales pipeline, monitor deal progress, and improve conversion rates with complete funnel visibility.",
    icon: "/SalesIcon4.svg",
    img: "/SalesImgCard3.png",
  },
  {
    title: "Lead Tracking",
    description: "Monitor lead sources, engagement, and progress to improve conversions and sales performance.",
    icon: "/SalesIcon5.svg",
    img: "/SalesImgCard4.png",
  },
]

const SalesPerformanceSection = () => {
  return (
    <section id="features" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Sales Performance
          </span>
          <h2 className="mt-7 text-[38px] font-bold leading-[1.05] text-[#172283] sm:text-[50px]">
            <span className="text-[#456cff]">Everything</span> You Need To
            <br />
            Scale Revenue Faster
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-snug text-[#6c78bd]">
            Gain complete visibility across your sales pipeline, customer relationships, and business performance.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative min-h-[450px] overflow-hidden rounded-[30px] bg-[#eef2f7] px-7 pb-7 pt-6 shadow-[inset_0_0_0_1px_rgba(79,103,181,0.03)]"
            >
              <Image src={card.icon} alt="" width={55} height={55} className="h-[55px] w-[55px]" />
              <h3 className="mt-5 text-[23px] font-bold leading-none text-[#172283]">{card.title}</h3>
              <p className="mt-3 max-w-[300px] text-xs leading-snug text-[#6c78bd]">{card.description}</p>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
                <div className="relative h-[260px] w-[80%] overflow-hidden">
                  <Image src={card.img} alt={card.title} fill className="object-contain object-bottom" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef2f7] to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SalesPerformanceSection
