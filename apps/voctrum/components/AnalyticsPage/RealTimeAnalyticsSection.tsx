import Image from "next/image"

const cards = [
  {
    title: "Audience Insights",
    description: "Understand who your audience is, where they come from, and how they interact with your content.",
    icon: "/AnalyticsIcon2.svg",
    preview: "audience",
  },
  {
    title: "Engagement Tracking",
    description: "Monitor likes, comments, shares, clicks, and interactions to measure content effectiveness.",
    icon: "/AnalyticsIcon3.svg",
    preview: "engagement",
  },
  {
    title: "Campaign Performance",
    description: "Track campaign reach, conversions, and ROI with clear performance reporting.",
    icon: "/AnalyticsIcon4.svg",
    preview: "campaign",
  },
  {
    title: "Cross-Platform Analytics",
    description: "Compare results across Facebook, Instagram, YouTube, and TikTok from one dashboard.",
    icon: "/AnalyticsIcon5.svg",
    preview: "crossplatform",
  },
]

const RealTimeAnalyticsSection = () => {
  return (
    <section id="features" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Real-Time Analytics
          </span>
          <h2 className="mt-7 text-[38px] font-bold leading-[1.05] text-[#172283] sm:text-[50px]">
            <span className="text-[#456cff]">Everything</span> You Need to
            <br />
            Measure Performance
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-snug text-[#6c78bd]">
            Monitor engagement, audience growth, campaign results, and content performance across all connected platforms.
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
                {card.preview === "audience" && <CardPreview src="/AnalyticsImgCard1.png" alt="Audience Insights Preview" />}
                {card.preview === "engagement" && <CardPreview src="/AnalyticsImgCard2.png" alt="Engagement Tracking Preview" />}
                {card.preview === "campaign" && <CardPreview src="/AnalyticsImgCard3.png" alt="Campaign Performance Preview" />}
                {card.preview === "crossplatform" && <CardPreview src="/AnalyticsImgCard4.png" alt="Cross-Platform Analytics Preview" />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const CardPreview = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative h-[260px] w-[80%] overflow-hidden">
    <Image src={src} alt={alt} fill className="object-contain object-bottom" />
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef2f7] to-transparent" />
  </div>
)

export default RealTimeAnalyticsSection
