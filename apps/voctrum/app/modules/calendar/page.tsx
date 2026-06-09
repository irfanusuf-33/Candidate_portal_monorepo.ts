import BuiltToImproveSection from "@/components/CalendarPage/BuiltToImproveSection"
import BusinessOpsSections from "@/components/CalendarPage/BusinessOpsSections"
import CalendarHeroSection from "@/components/CalendarPage/CalendarHeroSection"
import SimpleWorkflowSection from "@/components/CalendarPage/SimpleWorkflowSection"

export default function CalendarPage() {
  return (
    <div>
      <CalendarHeroSection />
      <BusinessOpsSections />
      <SimpleWorkflowSection />
      <BuiltToImproveSection />
      <section className="pointer-events-none relative z-20 -mb-[86px] h-[86px] overflow-visible bg-transparent">
        <div
          className="absolute left-1/2 -top-px z-10 h-[87px] w-[min(92vw,720px)] -translate-x-1/2 bg-[#eef2f8]"
          style={{ clipPath: "polygon(0 0, 100% 0, 74% 100%, 26% 100%)" }}
        />
      </section>
    </div>
  )
}
