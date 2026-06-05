"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    title: "Starter Plan",
    price: "$19",
    description: "Best for small teams getting started.",
    button: "Start Free Trial",
    featured: false,
    features: [
      "Up to 10 Team Members",
      "Employee & Attendance Management",
      "Basic Ticketing System",
      "Inventory Essentials",
      "Shared Workspace Access",
      "Standard Reporting",
    ],
  },
  {
    title: "Professional Plan",
    price: "$49",
    description: "Designed for scaling businesses.",
    button: "Get Started",
    featured: true,
    features: [
      "Unlimited Team Members",
      "Advanced HR & Workforce Tools",
      "Ticketing & SLA Tracking",
      "Inventory & Asset Management",
      "Security & Access Controls",
      "Advanced Analytics Dashboard",
      "Business Performance Insights",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise Plan",
    price: "$199",
    description: "Built for enterprise operations.",
    button: "Contact Sales",
    featured: false,
    features: [
      "Everything in Professional",
      "Custom Module Configuration",
      "Advanced Permission Controls",
      "Dedicated Account Manager",
      "Enterprise-Level Security",
      "API & Integration Support",
      "Premium Onboarding Assistance",
      "24/7 Priority Support",
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1040px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[700px] text-center"
        >
          <h2 className="text-[38px] font-bold leading-tight text-[#172283] md:text-[56px]">
            <span className="text-[#456cff]">Simple Pricing</span> For Every
            <br />
            Business Stage
          </h2>

          <p className="mt-4 text-base text-[#6c78bd] md:text-lg">
            Choose a plan that grows with your business and access powerful ERP
            tools from one connected platform.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[30px] border p-8 ${
                plan.featured
                  ? "border-transparent bg-gradient-to-br from-[#2dc0f4] via-[#1c5cff] to-[#08278f] text-white shadow-[0_30px_80px_rgba(41,97,255,0.25)]"
                  : "border-[#d7defe] bg-white shadow-[0_15px_40px_rgba(70,108,255,0.08)]"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-[-38px] top-[20px] rotate-45 bg-white px-10 py-1 text-xs font-semibold text-[#172283]">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-xl font-semibold ${
                  plan.featured ? "text-white" : "text-[#172283]"
                }`}
              >
                {plan.title}
              </h3>

              <div className="mt-3 flex items-end gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={`pb-1 text-lg ${
                    plan.featured
                      ? "text-white/90"
                      : "text-[#456cff]"
                  }`}
                >
                  / month
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  plan.featured
                    ? "text-white/80"
                    : "text-[#6c78bd]"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-white text-[#1e58ff]"
                          : "bg-[#eef3ff] text-[#456cff]"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>

                    <span
                      className={
                        plan.featured
                          ? "text-white/90"
                          : "text-[#6676b8]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 inline-flex h-11 items-center rounded-full px-6 text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-white text-[#1d53ff] hover:scale-[1.03]"
                    : "bg-gradient-to-r from-[#26b6f4] to-[#08278f] text-white hover:scale-[1.03]"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}