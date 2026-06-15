"use client"

import Image from "next/image"
import { WobbleCard } from "@/components/ui/wobble-card"

const cards = [
  {
    title: "Smarter Task Management",
    description:
      "Reduce repetitive work and simplify everyday business operations.",
    icon: "/FeaturesIcon1.svg",
    background: "/OperationsCard1.jpg",
  },
  {
    title: "Faster Business Decisions",
    description: "Access real-time insights to make quicker and smarter decisions.",
    icon: "/FeaturesIcon2.svg",
    background: "/OperationsCard2.jpg",
  },
  {
    title: "Better Team Productivity",
    description: "Keep teams aligned and workflows running more efficiently.",
    icon: "/FeaturesIcon3.svg",
    background: "/OperationsCard3.jpg",
  },
  {
    title: "Stronger Business Control",
    description: "Manage operations, access, and workflows with complete visibility.",
    icon: "/FeaturesIcon4.svg",
    background: "/OperationsCard2.jpg",
  },
  {
    title: "Faster Team Collaboration",
    description:
      "Keep departments connected with shared workflows and real-time updates.",
    icon: "/FeaturesIcon5.svg",
    background: "/OperationsCard3.jpg",
  },
  {
    title: "Smarter Financial Planning",
    description:
      "Track payroll, expenses, and resources with better financial clarity.",
    icon: "/FeaturesIcon6.svg",
    background: "/OperationsCard1.jpg",
  },
]

export default function OperationsSection() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-[960px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <h2 className="text-[42px] font-bold leading-[1.02] text-[#172283] md:text-[54px]">
            <span className="text-[#4372ff]">Built</span> to Improve
            <br />
            Everyday Operations
          </h2>

          <p className="max-w-[340px] justify-self-start pt-6 text-left text-base leading-snug text-[#6d7bbd] lg:justify-self-end lg:text-center">
            From workforce management to finance and customer support, Voctrum
            helps teams work faster and smarter.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <WobbleCard containerClassName="relative min-h-[194px] overflow-hidden rounded-[24px] shadow-[0_22px_46px_rgba(20,74,185,0.16)]">
            <article
              key={card.title}
              className="relative h-full min-h-[194px] overflow-hidden rounded-[24px] p-6 text-white"
            >
              <Image
                src={card.background}
                alt=""
                fill
                className="scale-[1.48] object-cover"
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
              />

              <div className="relative z-10 flex h-full min-h-[146px] flex-col justify-start">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <Image
                    src={card.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="h-[48px] w-[48px]"
                  />
                </span>

                <h3 className="mt-6 max-w-[230px] text-[23px] font-bold leading-[0.92]">
                  {card.title}
                </h3>

                <p className="mt-3 max-w-[245px] text-sm leading-snug text-white/90">
                  {card.description}
                </p>
              </div>
            </article>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
