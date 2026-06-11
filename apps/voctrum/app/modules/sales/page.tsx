import SalesHeroSection from "@/components/SalesPage/SalesHeroSection"
import SalesPerformanceSection from "@/components/SalesPage/SalesPerformanceSection"
import HowItWorksSection from "@/components/SalesPage/HowItWorksSection"
import StartSellingSection from "@/components/SalesPage/StartSellingSection"

export default function SalesPage() {
  return (
    <div>
      <SalesHeroSection />
      <SalesPerformanceSection />
      <HowItWorksSection />
      <StartSellingSection />
      <section className="pointer-events-none relative z-20 -mb-[86px] h-[86px] overflow-visible bg-transparent">
        <div
          className="absolute left-1/2 -top-px z-10 h-[87px] w-[min(92vw,720px)] -translate-x-1/2 bg-[#eef2f7]"
          style={{ clipPath: "polygon(0 0, 100% 0, 74% 100%, 26% 100%)" }}
        />
      </section>
    </div>
  )
}
