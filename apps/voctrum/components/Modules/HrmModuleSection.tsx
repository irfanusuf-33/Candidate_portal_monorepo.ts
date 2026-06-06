import { ArrowRight, Minus, Plus } from "lucide-react"
import Link from "next/link"
import ModuleCardImage from "@/components/Modules/ModuleCardImage"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const HrmModuleSection = () => {
  return (
    <section className="bg-[#fffbf7] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] items-center gap-12 lg:grid-cols-[440px_1fr] lg:gap-16">
        <ModuleCardImage src="/ImageCard2.jpg" alt="HRM module card" />

        <div className="mx-auto w-full max-w-[520px] lg:mx-0">
          <h2 className="text-[42px] font-bold leading-none text-[#f06d00] md:text-5xl">
            HRM
          </h2>

          <p className="mt-5 max-w-[370px] text-sm leading-snug text-[#6d7fc4] md:text-base">
            Manage employee operations, attendance, leave requests, performance, and HR workflows with complete visibility.
          </p>

          {/* <Link
            href="/contact"
            className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[#f06d00] pl-5 pr-1.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(240,109,0,0.18)] transition-transform hover:scale-[1.03]"
          >
            Explore Our People
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#f06d00]">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link> */}
          <Link
            href="/modules/hrm"
            className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[#f06d00] pl-5 pr-1.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(240,109,0,0.18)] transition-transform hover:scale-[1.03]"
          >
            Explore Our People
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#f06d00]">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>

          <Accordion type="single" collapsible defaultValue="efficiency" className="mt-12 gap-3 md:mt-16">
            <AccordionItem
              value="manage"
              className="overflow-hidden rounded-2xl border border-[#f3e7dd] bg-white shadow-[0_18px_50px_rgba(240,109,0,0.08)]"
            >
              <AccordionTrigger className="min-h-[56px] items-center justify-start gap-4 px-5 py-0 text-left hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <Plus className="h-5 w-5 shrink-0 text-[#315cff] group-aria-expanded/accordion-trigger:hidden" strokeWidth={2.6} />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#13247c] group-aria-expanded/accordion-trigger:block" strokeWidth={2.6} />
                <span className="text-sm font-bold text-[#13247c]">
                  What can I manage in Our People?
                </span>
              </AccordionTrigger>
              <AccordionContent className="ml-9 max-w-[350px] px-5 pb-5 text-sm leading-snug text-[#6879bb]">
                You can manage employee records, attendance, leave requests, performance updates, and HR approvals in one workspace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="efficiency" className="overflow-hidden rounded-2xl border-0 bg-[#edf1f8]">
              <AccordionTrigger className="min-h-[56px] items-center justify-start gap-4 px-5 py-0 text-left hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <Plus className="h-5 w-5 shrink-0 text-[#315cff] group-aria-expanded/accordion-trigger:hidden" strokeWidth={2.6} />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#13247c] group-aria-expanded/accordion-trigger:block" strokeWidth={2.6} />
                <span className="text-sm font-bold text-[#13247c]">
                  How does it improve workforce efficiency?
                </span>
              </AccordionTrigger>
              <AccordionContent className="ml-9 max-w-[350px] px-5 pb-5 text-sm leading-snug text-[#6879bb]">
                Automates repetitive HR workflows and simplifies employee management to improve productivity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default HrmModuleSection
