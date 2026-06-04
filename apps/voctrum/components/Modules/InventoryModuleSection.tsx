import { ArrowRight, Minus, Plus } from "lucide-react"
import Link from "next/link"
import ModuleCardImage from "@/components/Modules/ModuleCardImage"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const InventoryModuleSection = () => {
  return (
    <section className="bg-[#f7faff] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] items-center gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
        <div className="mx-auto w-full max-w-[520px] lg:mx-0">
          <h2 className="text-[42px] font-bold leading-none text-[#6380ff] md:text-5xl">
            Inventory
          </h2>

          <p className="mt-5 max-w-[380px] text-sm leading-snug text-[#6d7fc4] md:text-base">
            Track stock movement, warehouses, inventory levels, and product performance in real time.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[#6380ff] pl-5 pr-1.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(99,128,255,0.18)] transition-transform hover:scale-[1.03]"
          >
            Explore Assets
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#6380ff]">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>

          <Accordion type="single" collapsible defaultValue="warehouses" className="mt-12 gap-3 md:mt-16">
            <AccordionItem
              value="stock"
              className="overflow-hidden rounded-2xl border border-[#e3e9fb] bg-white shadow-[0_18px_50px_rgba(99,128,255,0.08)]"
            >
              <AccordionTrigger className="min-h-[56px] items-center justify-start gap-4 px-5 py-0 text-left hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <Plus className="h-5 w-5 shrink-0 text-[#315cff] group-aria-expanded/accordion-trigger:hidden" strokeWidth={2.6} />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#13247c] group-aria-expanded/accordion-trigger:block" strokeWidth={2.6} />
                <span className="text-sm font-bold text-[#13247c]">
                  How does Assets prevent stock issues?
                </span>
              </AccordionTrigger>
              <AccordionContent className="ml-9 max-w-[360px] px-5 pb-5 text-sm leading-snug text-[#6879bb]">
                Assets keeps inventory counts, product movement, and reorder signals visible so teams can respond before stock gaps slow operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warehouses" className="overflow-hidden rounded-2xl border-0 bg-[#edf1f8]">
              <AccordionTrigger className="min-h-[56px] items-center justify-start gap-4 px-5 py-0 text-left hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                <Plus className="h-5 w-5 shrink-0 text-[#315cff] group-aria-expanded/accordion-trigger:hidden" strokeWidth={2.6} />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#13247c] group-aria-expanded/accordion-trigger:block" strokeWidth={2.6} />
                <span className="text-sm font-bold text-[#13247c]">
                  Can I manage multiple warehouses?
                </span>
              </AccordionTrigger>
              <AccordionContent className="ml-9 max-w-[360px] px-5 pb-5 text-sm leading-snug text-[#6879bb]">
                Yes. Manage transfers, categories, and warehouse operations from one centralized dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <ModuleCardImage src="/ImageCard3.jpg" alt="Inventory module card" />
      </div>
    </section>
  )
}

export default InventoryModuleSection
