"use client"

import { motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Voctrum ERP?",
    answer:
      "Voctrum is an all-in-one ERP platform designed to manage operations, people, inventory, support, security, finance, and business growth from one connected system.",
  },
  {
    question: "What modules are included?",
    answer:
      "Voctrum includes CRM, HRM, inventory, ticketing, calendar, IAM, accounts, analytics, and sales modules that work together across one shared workflow.",
  },
  {
    question: "Can Voctrum scale with my business?",
    answer:
      "Yes. Teams can start with the modules they need today, then add more departments, users, permissions, reports, and automations as the business grows.",
  },
  {
    question: "Is Voctrum suitable for multiple departments?",
    answer:
      "Yes. Voctrum is built for cross-functional teams, so sales, finance, support, HR, operations, and leadership can work from connected data without switching systems.",
  },
]

export default function FAQSection() {
  return (
    <section id="faqs" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1088px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto w-full max-w-[460px] text-center lg:mx-0 lg:text-left"
        >
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Common Questions
          </span>

          <h2 className="mt-8 text-[42px] font-bold leading-[1.05] text-[#172283] sm:text-6xl">
            <span className="text-[#456cff]">Frequently</span> Asked
            <br />
            Questions
          </h2>

          <p className="mt-6 max-w-[430px] text-lg leading-snug text-[#6c78bd]">
            Everything you need to know about Voctrum ERP and how it helps businesses operate smarter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="w-full"
        >
          <Accordion type="single" defaultValue="faq-0" collapsible className="gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-[22px] border border-[#e1e6f0] bg-white shadow-[0_24px_54px_rgba(34,53,114,0.08)]"
              >
                <AccordionTrigger className="group min-h-[76px] items-center justify-start gap-5 rounded-[22px] px-7 py-5 text-left text-base font-bold text-[#172283] hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <span className="relative flex h-6 w-6 shrink-0 items-center justify-center text-[#456cff]">
                    <Plus className="absolute h-6 w-6 opacity-100 transition-opacity group-aria-expanded:opacity-0" strokeWidth={2.6} />
                    <Minus className="absolute h-6 w-6 opacity-0 transition-opacity group-aria-expanded:opacity-100" strokeWidth={2.6} />
                  </span>
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-[76px] pr-8 text-base leading-snug text-[#6c78bd]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
