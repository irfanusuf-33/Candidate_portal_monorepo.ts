"use client"

import { motion } from "framer-motion"
import {
  Boxes,
  CalendarClock,
  ChartNoAxesColumn,
  CircleDollarSign,
  GitBranch,
  Handshake,
  ShieldCheck,
  Sprout,
  Ticket,
  type LucideIcon,
} from "lucide-react"

type ModuleItem = {
  title: string
  icon: LucideIcon
  textColor: string
  bgColor: string
}

const modules: ModuleItem[] = [
  {
    title: "CRM",
    icon: Handshake,
    textColor: "text-[#2346d7]",
    bgColor: "bg-[#cfd8ff]",
  },
  {
    title: "HRM",
    icon: GitBranch,
    textColor: "text-[#ef7300]",
    bgColor: "bg-[#ffe4c8]",
  },
  {
    title: "Inventory",
    icon: Boxes,
    textColor: "text-[#5d82ff]",
    bgColor: "bg-[#d4dcff]",
  },
  {
    title: "Ticketing",
    icon: Ticket,
    textColor: "text-[#7048db]",
    bgColor: "bg-[#dfd3ff]",
  },
  {
    title: "Calendar",
    icon: CalendarClock,
    textColor: "text-[#009ca3]",
    bgColor: "bg-[#dceff2]",
  },
  {
    title: "IAM",
    icon: ShieldCheck,
    textColor: "text-[#ff4049]",
    bgColor: "bg-[#ffd5d7]",
  },
  {
    title: "Accounts",
    icon: CircleDollarSign,
    textColor: "text-[#dfa22c]",
    bgColor: "bg-[#f7ecd7]",
  },
  {
    title: "Analytics",
    icon: ChartNoAxesColumn,
    textColor: "text-[#744b79]",
    bgColor: "bg-[#e6dfe8]",
  },
  {
    title: "Sales",
    icon: Sprout,
    textColor: "text-[#3a9b42]",
    bgColor: "bg-[#dff2df]",
  },
]

export default function CoreModulesSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Core System Modules
          </span>

          <h2 className="mx-auto mt-8 max-w-[620px] text-[42px] font-bold leading-[1.05] text-[#172283] sm:text-6xl md:text-[64px]">
            Built as One
            <br />
            <span className="text-[#456cff]">Powerful</span> System
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-snug text-[#6c78bd]">
            Each module is designed to handle a core part of your business while staying fully connected across the system.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-9 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`flex h-[84px] items-center rounded-full pl-2 pr-7 ${module.bgColor}`}
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon className={`h-9 w-9 ${module.textColor}`} strokeWidth={2.8} />
                </span>
                <span className={`ml-4 text-[28px] font-bold leading-none ${module.textColor}`}>
                  {module.title}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
