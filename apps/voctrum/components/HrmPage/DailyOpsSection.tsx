import { ArrowRight, CalendarDays } from "lucide-react"
import Link from "next/link"

const DailyOpsSection = () => {
  return (
    <section className="relative bg-[#eef2f7] px-5 pt-16 pb-[120px] md:px-8">
      <div className="relative z-10 mx-auto flex max-w-[1040px] flex-col items-center text-center">
        <h2 className="max-w-[560px] text-[38px] font-bold leading-[1.02] text-[#172283] sm:text-[50px]">
          Manage Your
          <br />
          Workforce <span className="text-[#456cff]">Smarter</span>
        </h2>

        <p className="mt-4 max-w-[430px] text-sm leading-snug text-[#6c78bd]">
          Simplify HR operations, improve team visibility, and scale your workforce with one connected platform.
        </p>

        <Link
          href="/products/register"
          className="mt-6 inline-flex h-8 items-center gap-2 rounded-full bg-gradient-to-r from-[#25b8f4] to-[#082da9] pl-5 pr-1 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(20,75,196,0.22)] transition-transform hover:scale-[1.03]"
        >
          Start with Voctrum HRM
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0b2da9]">
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.6} />
          </span>
        </Link>

        <div className="relative mt-[58px] h-[305px] w-full max-w-[760px]">
          <RecruitmentCard />
          <PerformanceCard />
          <AttendanceCard />
          <LeaveRequestCard />
        </div>
      </div>

    </section>
  )
}

const RecruitmentCard = () => (
  <div className="absolute left-[42px] top-[32px] hidden w-[292px] -rotate-[5deg] rounded-[18px] bg-white px-5 py-5 text-left shadow-[0_28px_60px_rgba(65,78,120,0.16)] md:block">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-sm font-bold text-[#343c54]">Recruitment Pipeline</h3>
      <span className="inline-flex items-center gap-1 rounded-md border border-[#cdd3df] px-2 py-1 text-[10px] text-[#8b95ad]">
        dd-mm-yyyy
        <CalendarDays className="h-3 w-3" />
      </span>
    </div>
    {[
      ["Applied", "95%", "#2858f0"],
      ["Shortlisted", "80%", "#e5a640"],
      ["Interview", "55%", "#dfe2e8"],
    ].map(([label, width, color]) => (
      <div key={label} className="mt-4">
        <div className="mb-2 flex justify-between text-[10px] text-[#8b95ad]">
          <span>{label}</span>
          <span>{width}</span>
        </div>
        <span className="block h-2 rounded-full bg-[#eceef4]">
          <span className="block h-2 rounded-full" style={{ width, backgroundColor: color }} />
        </span>
      </div>
    ))}
  </div>
)

const PerformanceCard = () => (
  <div className="absolute left-1/2 top-0 z-20 w-[352px] -translate-x-1/2 rounded-[22px] bg-white px-5 py-5 text-left shadow-[0_30px_70px_rgba(65,78,120,0.18)]">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-lg font-bold text-[#1b2238]">Team Performance</h3>
      <span className="inline-flex items-center gap-1 rounded-md border border-[#cdd3df] px-2 py-1 text-[10px] text-[#8b95ad]">
        dd-mm-yyyy
        <CalendarDays className="h-3 w-3" />
      </span>
    </div>
    {[
      ["Irfan Yousuf", "Software Development", "Designers", "90%", "#49b95a"],
      ["Adnan", "RTO", "Grammerly", "70%", "#e5a640"],
    ].map(([name, role, team, value, color]) => (
      <div key={name} className="mb-3 rounded-[16px] border border-[#d8dde8] p-4 last:mb-0">
        <div className="grid grid-cols-[36px_1fr_1fr] items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-[#d9dee8]" />
          <div>
            <p className="text-xs font-bold text-[#1b2238]">Team Leader</p>
            <p className="text-[10px] text-[#8993aa]">{name}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-[#1b2238]">Department</p>
            <p className="text-[10px] text-[#8993aa]">{role}</p>
          </div>
        </div>
        <p className="mt-3 text-[10px] text-[#8993aa]">{team}</p>
        <span className="mt-2 flex items-center gap-2">
          <span className="h-2 flex-1 rounded-full bg-[#e8e9eb]">
            <span className="block h-2 rounded-full" style={{ width: value, backgroundColor: color }} />
          </span>
          <span className="text-[10px] text-[#7abf76]">{value}</span>
        </span>
      </div>
    ))}
  </div>
)

const AttendanceCard = () => (
  <div className="absolute left-0 top-[176px] z-30 w-[292px] rounded-[18px] bg-white px-5 py-5 text-left shadow-[0_28px_60px_rgba(65,78,120,0.16)]">
    <h3 className="mb-4 text-sm font-bold text-[#343c54]">Today&apos;s Attendance</h3>
    <div className="grid grid-cols-4 gap-3">
      {[
        ["1", "Present", "#e3fbeb", "#22b95b"],
        ["19", "Absent", "#ffe7e8", "#e44d55"],
        ["1", "Leaves", "#fff2df", "#e99b2e"],
        ["1", "Late", "#e9edff", "#4777ff"],
      ].map(([count, label, bg, color]) => (
        <span key={label} className="rounded-md px-2 py-2 text-center" style={{ backgroundColor: bg, color }}>
          <b className="block text-[11px]">{count}</b>
          <span className="text-[8px]">{label}</span>
        </span>
      ))}
    </div>
  </div>
)

const LeaveRequestCard = () => (
  <div className="absolute right-0 top-[96px] z-30 hidden w-[300px] rotate-[7deg] rounded-[24px] bg-white px-5 py-5 text-left shadow-[0_28px_60px_rgba(65,78,120,0.16)] sm:block">
    <div className="flex items-start gap-3">
      <span className="h-8 w-8 rounded-full bg-[#d99b6a]" />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-[#4777ff] underline">Shafiya Hameed</p>
        <p className="mt-0.5 text-[10px] text-[#8a95ae]">Technology</p>
        <div className="mt-3 flex gap-3">
          <span className="rounded-md border border-[#40c96b] px-3 py-1 text-[10px] text-[#28a950]">Approved</span>
          <span className="rounded-md border border-[#ef4b57] px-3 py-1 text-[10px] text-[#e33d48]">Rejected</span>
        </div>
      </div>
      <span className="rounded-md bg-[#fff1d8] px-2 py-1 text-[10px] text-[#e39a25]">Pending</span>
    </div>
  </div>
)

export default DailyOpsSection
