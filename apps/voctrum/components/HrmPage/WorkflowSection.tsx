import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Candidate Application",
    description: "Track new applications, open roles, and recruitment activity in one organized pipeline.",
    icon: "/HrmIcon1.svg",
    color: "bg-[#ff9833]",
  },
  {
    number: "02",
    title: "Employee Onboarding",
    description: "Add employee details, departments, permissions, and documentation without manual processes.",
    icon: "/HrmIcon2.svg",
    color: "bg-[#ea6e00]",
  },
  {
    number: "03",
    title: "Attendance & Performance",
    description: "Departments can update status, add notes, and coordinate resolutions together.",
    icon: "/HrmIcon3.svg",
    color: "bg-[#a84e00]",
  },
  {
    number: "04",
    title: "Payroll & Reporting",
    description: "Process payroll, generate reports, and track workforce insights from one unified system.",
    icon: "/HrmIcon4.svg",
    color: "bg-[#7a3d08]",
  },
]

const WorkflowSection = () => {
  return (
    <section id="how-it-works" className="overflow-hidden bg-[linear-gradient(125deg,#ffffff_0%,#ffffff_52%,#fff3e7_100%)] px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] items-center gap-14 lg:grid-cols-[430px_1fr] lg:gap-20">
        <div>
          <span className="inline-flex rounded-full bg-[#456cff] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Smart HR Workflow
          </span>

          <h2 className="mt-9 max-w-[430px] text-[46px] font-bold leading-[1.02] text-[#172283] sm:text-[58px]">
            From Hiring to
            <br />
            Daily <span className="text-[#456cff]">Operations</span>
          </h2>

          <p className="mt-6 max-w-[450px] text-base leading-snug text-[#6c78bd]">
            Manage every stage of the employee lifecycle with streamlined workflows built for clarity, collaboration, and efficiency.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute left-[26px] top-14 hidden h-[440px] border-l-2 border-dotted border-[#456cff] md:block" />

          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="relative grid gap-5 md:grid-cols-[58px_1fr] md:items-center">
                <div className="relative z-10 hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(38,79,210,0.18)] md:flex">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${step.color}`}>
                    {step.number}
                  </span>
                </div>

                <article className="flex min-h-[104px] items-center gap-5 rounded-[28px] border border-[#d7e0ff] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(57,81,169,0.08)] sm:px-6">
                  <span className={`grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[17px] ${step.color}`}>
                    <Image src={step.icon} alt="" width={42} height={42} className="h-[42px] w-[42px]" />
                  </span>

                  <div>
                    <p className="mb-1 text-xs font-bold text-[#456cff] md:hidden">{step.number}</p>
                    <h3 className="text-[20px] font-bold leading-tight text-[#172283] sm:text-[22px]">{step.title}</h3>
                    <p className="mt-1 max-w-[340px] text-sm leading-snug text-[#6c78bd] sm:text-base">{step.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection
