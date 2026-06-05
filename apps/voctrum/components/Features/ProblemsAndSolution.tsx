import Image from "next/image"

const problems = [
  {
    title: "1. Disconnected Teams",
    description:
      "Departments often work in silos, making communication slower and business operations inefficient.",
  },
  {
    title: "2. Manual Payroll & HR",
    description:
      "Managing salaries, attendance, and employee records manually creates delays and errors.",
  },
  {
    title: "3. Poor Sales Visibility",
    description:
      "Businesses struggle to track leads, opportunities, and sales performance effectively.",
  },
  {
    title: "4. Inventory & Support Delays",
    description:
      "Limited stock visibility and slow ticket resolution impact productivity and customer experience.",
  },
]

const solutions = [
  {
    title: "Solution 01",
    heading: "One Connected System",
    description:
      "Bring HR, operations, sales, support, and inventory into one centralized platform.",
  },
  {
    title: "Solution 02",
    heading: "Smart Workforce Management",
    description:
      "Track attendance, automate payroll, manage leaves, and organize employee data effortlessly.",
  },
  {
    title: "Solution 03",
    heading: "Real-Time Business Insights",
    description:
      "Monitor performance through dashboards, reports, and analytics for faster decisions.",
  },
  {
    title: "Solution 04",
    heading: "Faster Operations & Support",
    description:
      "Improve workflows with ticket tracking, inventory visibility, and automated processes.",
  },
]

export default function ProblemsAndSolution() {
  return (
    <section className="bg-[#edf2f8] px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-[930px]">
        <div className="mx-auto max-w-[540px] text-center">
          <span className="inline-flex h-7 items-center rounded-full bg-[#3f70ff] px-5 text-[11px] font-semibold text-white shadow-[0_12px_24px_rgba(63,112,255,0.22)]">
            Problems & Solutions
          </span>

          <h2 className="mt-6 text-[36px] font-bold leading-[0.94] text-[#172283] md:text-[44px]">
            <span className="text-[#4372ff]">Business</span> Challenges,
            <br />
            Solved Smarter
          </h2>

          <p className="mx-auto mt-4 max-w-[430px] text-sm leading-relaxed text-[#6d7bbd]">
            Modern businesses struggle with disconnected operations. Voctrum
            simplifies workflows with one connected ERP platform.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[22px] bg-white p-6 shadow-[0_18px_46px_rgba(25,35,95,0.08)]">
            <div className="mb-6 flex items-center gap-4 rounded-[16px] bg-[#eef2f7] px-5 py-4">
              <Image
                src="/DangerIcon.svg"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 shrink-0"
              />
              <h3 className="text-xl font-bold text-[#172283]">
                Business Problems
              </h3>
            </div>

            <div className="space-y-5">
              {problems.map((problem) => (
                <div key={problem.title}>
                  <h4 className="text-sm font-bold text-[#172283]">
                    {problem.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#6d7bbd]">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[22px]">
            <Image
              src="/FeaturesImagecard1.jpg"
              alt="Business team reviewing operational challenges"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 455px, 100vw"
            />
          </div>

          <div className="relative min-h-[400px] overflow-hidden rounded-[22px]">
            <Image
              src="/FeaturesImagecard2.jpg"
              alt="Team collaborating around a laptop"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 455px, 100vw"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-[20px] bg-white p-5 shadow-[0_18px_42px_rgba(25,35,95,0.07)]"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/GreenTickIcon.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />
                  <span className="text-base font-bold text-[#49a95d]">
                    {solution.title}
                  </span>
                </div>

                <h4 className="mt-7 text-sm font-bold leading-tight text-[#172283]">
                  {solution.heading}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#6d7bbd]">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
