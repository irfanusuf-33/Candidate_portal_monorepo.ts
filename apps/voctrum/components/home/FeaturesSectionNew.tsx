// components/home/FeaturesSectionNew.tsx
"use client"

import { AppWindow, Heart, LayoutDashboard, LayoutList, TrendingUp, Users } from "lucide-react"

const features = [
  {
    icon: <LayoutDashboard className="h-5 w-5 text-indigo-600" />,
    title: "Smart Operations Management",
    desc: "Manage workflows, track activities, and run your business from one unified system.",
  },
  {
    icon: <Heart className="h-5 w-5 text-indigo-600" />,
    title: "Unified Sales Pipeline",
    desc: "Track leads, manage deals, and monitor progress with a clear and structured workflow.",
  },
  {
    icon: <LayoutList className="h-5 w-5 text-indigo-600" />,
    title: "Automated Workflows",
    desc: "Automate repetitive tasks and streamline approvals to improve efficiency across teams.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-indigo-600" />,
    title: "Real-Time Insights",
    desc: "Access live dashboards and reports to make faster and more informed business decisions.",
  },
  {
    icon: <Users className="h-5 w-5 text-indigo-600" />,
    title: "Team Collaboration",
    desc: "Keep teams aligned with shared workflows, updates, and seamless communication tools.",
  },
  {
    icon: <AppWindow className="h-5 w-5 text-indigo-600" />,
    title: "System Integrations",
    desc: "Connect tools and platforms to manage your entire business from a single system.",
  },
]

export default function FeaturesSectionNew() {
  return (
    <section className="relative z-10 -mt-[176px] bg-[#eef2f8]">
      <div className="absolute left-0 top-0 z-0 h-[210px] w-full -translate-y-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 210"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0 210H300C334 210 356 205 384 193L612 93C681 63 759 63 828 93L1056 193C1084 205 1106 210 1140 210H1440V210H0Z"
            fill="#eef2f8"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-2">
        <div className="mb-7 flex justify-center">
          <span
            className="rounded-full px-5 py-2 text-sm font-medium text-white shadow-[0_10px_24px_rgba(55,91,255,0.22)]"
            style={{ background: "linear-gradient(135deg, #3d74ff, #5f67ff)" }}
          >
            Everything You Need to Run and Scale
          </span>
        </div>

        <h2 className="mb-5 text-center text-4xl font-bold leading-[1.08] md:text-[64px]" style={{ color: "#111b7a" }}>
          <span className="text-[#3f6cff]">Everything</span> You Need
          <br />
          to Run and Scale
        </h2>

        <p className="mx-auto mb-12 max-w-xl text-center text-base leading-snug text-[#6c78bd] md:text-xl">
          Voctrum ERP brings together tools to manage operations,
          <br />
          track performance, and grow without complexity.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-4 rounded-3xl bg-white/70 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-200/40">{f.icon}</div>
              <h3 className="text-lg font-bold text-[#0f1e5c]">{f.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
