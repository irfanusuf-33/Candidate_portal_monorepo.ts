import DailyOpsSection from "@/components/HrmPage/DailyOpsSection"
import HrmHeroSection from "@/components/HrmPage/HrmHeroSection"
import ManagePeopleSection from "@/components/HrmPage/ManagePeopleSection"
import WorkflowSection from "@/components/HrmPage/WorkflowSection"

export default function HrmPage() {
  return (
    <div>
      <HrmHeroSection />
      <ManagePeopleSection />
      <WorkflowSection />
      <DailyOpsSection />
      <section className="pointer-events-none relative z-20 -mb-[86px] h-[86px] overflow-visible bg-transparent">
        <div
          className="absolute left-1/2 -top-px z-10 h-[87px] w-[min(92vw,720px)] -translate-x-1/2 bg-[#eef2f7]"
          style={{ clipPath: "polygon(0 0, 100% 0, 74% 100%, 26% 100%)" }}
        />
      </section>
    </div>
  )
}
