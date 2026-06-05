"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

const faqs = [
  {
    question: "Can I upgrade my plan anytime?",
    answer:
      "Yes. As your business grows, you can upgrade your plan anytime to unlock additional modules, advanced capabilities, and higher operational flexibility.",
  },
  {
    question: "What modules are included in Voctrum?",
    answer:
      "Voctrum includes connected ERP modules for HR, attendance, ticketing, inventory, analytics, permissions, and workspace operations based on your selected plan.",
  },
  {
    question: "Do you offer custom enterprise plans?",
    answer:
      "Yes. Enterprise teams can contact sales for custom module configuration, dedicated support, onboarding assistance, and organization-specific requirements.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. You can start with a free trial to explore Voctrum's tools before choosing the plan that fits your team.",
  },
]

export default function PricingFAQs() {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section className="bg-[#eef2f7] px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1040px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-xs font-medium text-white shadow-[0_10px_25px_rgba(69,108,255,0.25)]">
            Pricing Questions
          </span>

          <h2 className="mt-8 text-[40px] font-bold leading-[0.98] text-[#172283] md:text-[56px]">
            <span className="text-[#456cff]">Frequently</span> Asked
            <br />
            Questions
          </h2>

          <p className="mt-6 max-w-[360px] text-base leading-relaxed text-[#6c78bd]">
            Everything you need to know about plans, pricing, modules, and
            getting started with Voctrum.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[24px] bg-white shadow-[0_18px_45px_rgba(20,30,90,0.08)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  className="flex w-full items-start gap-5 px-7 py-6 text-left"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#456cff]">
                    {isOpen ? (
                      <Minus size={22} strokeWidth={2.6} />
                    ) : (
                      <Plus size={22} strokeWidth={2.6} />
                    )}
                  </span>

                  <span className="text-base font-bold leading-snug text-[#172283]">
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pl-[76px] pr-8 text-base leading-relaxed text-[#6c78bd]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
