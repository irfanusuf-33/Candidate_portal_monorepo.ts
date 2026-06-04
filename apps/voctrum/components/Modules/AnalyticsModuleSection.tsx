import { ArrowRight, Minus, Plus } from "lucide-react"
import Link from "next/link"
import ModuleCardImage from "@/components/Modules/ModuleCardImage"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AnalyticsModuleSection = () => {
  return (
    <section className="bg-[#fbf9fc] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] items-center gap-12 lg:grid-cols-[440px_1fr] lg:gap-16">
        <ModuleCardImage src="/ImageCard8.jpg" alt="Analytics module card" />

        <div className="mx-auto w-full max-w-[520px] lg:mx-0">
          <h2 className="text-[42px] font-bold leading-none text-[#7c4b82] md:text-5xl">
            Analytics
          </h2>

          <p className="mt-5 max-w-[390px] text-sm leading-snug text-[#6d7fc4] md:text-base">
            Access reports, dashboards, KPIs, and analytics to make informed business decisions.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[#7c4b82] pl-5 pr-1.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(124,75,130,0.18)] transition-transform hover:scale-[1.03]"
          >
            Explore Insights
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#7c4b82]">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>

          <Accordion type="single" collapsible defaultValue="decisions" className="mt-12 gap-3 md:mt-16">
            <AccordionItem
              value="reports"
              className="overflow-hidden rounded-2xl border border-[#eee4f0] bg-white shadow-[0_18px_50px_rgba(124,75,130,0.08)]"
            >
              <AccordionTrigger className="min-h-[56px] items-center justify-start gap-4 px-5 py-0 text-left hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <Plus className="h-5 w-5 shrink-0 text-[#315cff] group-aria-expanded/accordion-trigger:hidden" strokeWidth={2.6} />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#13247c] group-aria-expanded/accordion-trigger:block" strokeWidth={2.6} />
                <span className="text-sm font-bold text-[#13247c]">
                  What kind of reports are available?
                </span>
              </AccordionTrigger>
              <AccordionContent className="ml-9 max-w-[360px] px-5 pb-5 text-sm leading-snug text-[#6879bb]">
                Insights can show operational reports, KPI summaries, team performance, financial snapshots, and trend dashboards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="decisions" className="overflow-hidden rounded-2xl border-0 bg-[#edf1f8]">
              <AccordionTrigger className="min-h-[56px] items-center justify-start gap-4 px-5 py-0 text-left hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <Plus className="h-5 w-5 shrink-0 text-[#315cff] group-aria-expanded/accordion-trigger:hidden" strokeWidth={2.6} />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#13247c] group-aria-expanded/accordion-trigger:block" strokeWidth={2.6} />
                <span className="text-sm font-bold text-[#13247c]">
                  How does Insights support decision-making?
                </span>
              </AccordionTrigger>
              <AccordionContent className="ml-9 max-w-[360px] px-5 pb-5 text-sm leading-snug text-[#6879bb]">
                Use real-time analytics and dashboards to make faster, smarter decisions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsModuleSection
