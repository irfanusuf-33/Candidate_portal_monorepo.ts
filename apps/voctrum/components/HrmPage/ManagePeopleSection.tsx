import Image from "next/image"

const cards = [
  {
    title: "Employee Management",
    description: "Maintain employee records, departments, roles, and workforce data from one centralized dashboard.",
    icon: "/HrmIcon5.svg",
    preview: "leave",
  },
  {
    title: "Attendance Tracking",
    description: "Track attendance, leaves, working hours, and employee activity with real-time visibility.",
    icon: "/HrmIcon6.svg",
    preview: "attendance",
  },
  {
    title: "Recruitment Pipeline",
    description: "Manage hiring stages, candidate progress, and open positions with a structured workflow.",
    icon: "/HrmIcon7.svg",
    preview: "recruitment",
  },
  {
    title: "Payroll & Reports",
    description: "Handle payroll processing, workforce insights, and HR reports with complete accuracy.",
    icon: "/HrmIcon8.svg",
    preview: "reports",
  },
]

const ManagePeopleSection = () => {
  return (
    <section id="features" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Built for Modern Teams
          </span>

          <h2 className="mt-7 text-[38px] font-bold leading-[1.05] text-[#172283] sm:text-[50px]">
            <span className="text-[#456cff]">Everything</span> You Need to
            <br />
            Manage People
          </h2>

          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-snug text-[#6c78bd]">
            Simplify workforce operations with tools that help your team stay organized, productive, and connected across every department.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative min-h-[450px] overflow-hidden rounded-[30px] bg-[#eef2f7] px-7 pb-7 pt-6 shadow-[inset_0_0_0_1px_rgba(79,103,181,0.03)]"
            >
              <Image src={card.icon} alt="" width={55} height={55} className="h-[55px] w-[55px]" />

              <h3 className="mt-5 text-[23px] font-bold leading-none text-[#172283]">{card.title}</h3>
              <p className="mt-3 max-w-[300px] text-xs leading-snug text-[#6c78bd]">{card.description}</p>

              <div className="absolute inset-x-0 bottom-0 flex h-[210px] items-end justify-center">
                {card.preview === "leave" && <LeavePreview />}
                {card.preview === "attendance" && <AttendancePreview />}
                {card.preview === "recruitment" && <RecruitmentPreview />}
                {card.preview === "reports" && <ReportsPreview />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const LeavePreview = () => (
  <div className="relative mb-9 h-[150px] w-[310px]">
    {[
      ["Casual Leaves", "#e4b55c", "10", "top-0 left-5"],
      ["Earned Leaves", "#48b65a", "10", "top-12 left-0 z-10"],
      ["Sick Leaves", "#7697e8", "6", "top-24 left-8"],
      ["Loss of Pay", "#f29aa2", "0", "top-36 left-12"],
    ].map(([label, color, total, position]) => (
      <div key={label} className={`absolute ${position} flex h-[74px] w-[280px] items-center rounded-[18px] bg-white px-4 shadow-[0_18px_38px_rgba(61,80,142,0.14)]`}>
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-[6px]" style={{ borderColor: color }}>
          <span className="text-[13px] font-bold text-[#6b7489]">{total}</span>
        </div>
        <div className="ml-4 min-w-0 flex-1">
          <p className="text-xs font-semibold text-[#8b92a7]">{label}</p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-[#eef0f3] px-3 py-1 text-[10px] text-[#717b91]">Used 6</span>
            <span className="rounded-full bg-[#eef0f3] px-3 py-1 text-[10px] text-[#717b91]">Remaining 4</span>
          </div>
        </div>
      </div>
    ))}
  </div>
)

const AttendancePreview = () => (
  <div className="relative mb-[-20px] h-[230px] w-[230px] overflow-hidden">
    <Image
      src="/MobileImgTransparent.png"
      alt="Attendance tracking mobile dashboard"
      width={360}
      height={430}
      className="absolute left-1/2 top-0 h-[280px] w-[230px] -translate-x-1/2 object-contain object-top"
    />
    <div className="absolute left-1/2 top-[72px] w-[150px] -translate-x-1/2">
      <p className="mb-3 text-[11px] font-bold text-[#172283]">Today&apos;s Attendance</p>
      <div className="grid grid-cols-4 gap-2">
        {[
          ["1", "Present", "#e3fbeb", "#22b95b"],
          ["19", "Absent", "#ffe7e8", "#e44d55"],
          ["1", "Leaves", "#fff2df", "#e99b2e"],
          ["1", "Late", "#e9edff", "#4777ff"],
        ].map(([count, label, bg, color]) => (
          <span key={label} className="rounded-md px-1.5 py-2 text-center" style={{ backgroundColor: bg, color }}>
            <b className="block text-[10px]">{count}</b>
            <span className="text-[7px]">{label}</span>
          </span>
        ))}
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

const RecruitmentPreview = () => (
  <div className="relative mb-[-6px] h-[190px] w-[330px] overflow-hidden rounded-t-[10px] bg-white shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <div className="flex h-8 items-center border-b border-[#edf0f6] px-4">
      <span className="mx-auto h-2 w-20 rounded-b-md bg-black" />
    </div>
    <div className="grid grid-cols-[58px_1fr]">
      <div className="space-y-3 border-r border-[#edf0f6] p-3 text-[7px] text-[#7a86a3]">
        {["Dashboard", "Employees", "Attendance", "Leave", "Performance", "Payroll"].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className="p-4">
        <p className="text-[10px] font-bold text-[#172283]">Recruitment Pipeline</p>
        <div className="mt-4 space-y-3">
          {[
            ["Applied", "95%", "#2858f0"],
            ["Shortlisted", "80%", "#e5a640"],
            ["Interview", "55%", "#dfe2e8"],
          ].map(([label, width, color]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-[8px] text-[#8b95ad]">
                <span>{label}</span>
                <span>{width}</span>
              </div>
              <span className="block h-1.5 rounded-full bg-[#eceef4]">
                <span className="block h-1.5 rounded-full" style={{ width, backgroundColor: color }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

const ReportsPreview = () => (
  <div className="mb-7 grid h-[150px] w-[310px] place-items-center bg-[#c9c8c6]">
    <span className="grid h-12 w-12 place-items-center rounded-full border-4 border-white bg-[#ab45c9] text-2xl font-bold text-white shadow-[0_8px_16px_rgba(87,64,105,0.22)]">
      A
    </span>
  </div>
)

export default ManagePeopleSection
