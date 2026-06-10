import { ArrowRight, Minus, Plus } from "lucide-react"
import Link from "next/link"
import ModuleCardImage from "@/components/Modules/ModuleCardImage"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const IamModuleSection = () => {
  return (
    <section className="bg-[#fffbfb] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] items-center gap-12 lg:grid-cols-[440px_1fr] lg:gap-16">
        <ModuleCardImage src="/ImageCard6.jpg" alt="IAM module card" />

        <div className="mx-auto w-full max-w-[520px] lg:mx-0">
          <h2 className="text-[42px] font-bold leading-none text-[#f34545] md:text-5xl">
            IAM
          </h2>

          <p className="mt-5 max-w-[390px] text-sm leading-snug text-[#6d7fc4] md:text-base">
            Protect systems through role-based permissions, authentication, and secure access management.
          </p>

          {/* <Link
            href="/contact"
            className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[#f34545] pl-5 pr-1.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(243,69,69,0.18)] transition-transform hover:scale-[1.03]"
          >
            Explore Security
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#f34545]">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link> */}
          <Link
            href="/modules/iam"
            className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[#f34545] pl-5 pr-1.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(243,69,69,0.18)] transition-transform hover:scale-[1.03]"
          >
            Explore Security
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#f34545]">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>

          <Accordion type="single" collapsible defaultValue="permissions" className="mt-12 gap-3 md:mt-16">
            <AccordionItem
              value="data"
              className="overflow-hidden rounded-2xl border border-[#f8e1e1] bg-white shadow-[0_18px_50px_rgba(243,69,69,0.08)]"
            >
              <AccordionTrigger className="min-h-[56px] items-center justify-start gap-4 px-5 py-0 text-left hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <Plus className="h-5 w-5 shrink-0 text-[#315cff] group-aria-expanded/accordion-trigger:hidden" strokeWidth={2.6} />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#13247c] group-aria-expanded/accordion-trigger:block" strokeWidth={2.6} />
                <span className="text-sm font-bold text-[#13247c]">
                  How does Security protect business data?
                </span>
              </AccordionTrigger>
              <AccordionContent className="ml-9 max-w-[360px] px-5 pb-5 text-sm leading-snug text-[#6879bb]">
                Security limits access with authentication, role controls, and permission checks so sensitive data stays protected.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="permissions" className="overflow-hidden rounded-2xl border-0 bg-[#edf1f8]">
              <AccordionTrigger className="min-h-[56px] items-center justify-start gap-4 px-5 py-0 text-left hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <Plus className="h-5 w-5 shrink-0 text-[#315cff] group-aria-expanded/accordion-trigger:hidden" strokeWidth={2.6} />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#13247c] group-aria-expanded/accordion-trigger:block" strokeWidth={2.6} />
                <span className="text-sm font-bold text-[#13247c]">
                  Can admins manage user permissions easily?
                </span>
              </AccordionTrigger>
              <AccordionContent className="ml-9 max-w-[360px] px-5 pb-5 text-sm leading-snug text-[#6879bb]">
                Yes. Manage roles, access levels, and permissions from one secure system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default IamModuleSection
