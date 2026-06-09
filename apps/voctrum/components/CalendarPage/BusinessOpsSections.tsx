"use client"

import Image from "next/image"

const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
const calendarDates = Array.from({ length: 35 }, (_, i) => i + 1)
const years = ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032"]

const cards = [
  {
    icon: "/CalendarIcon2.svg",
    title: "Event Scheduling",
    desc: "Create and organize meetings, appointments, and company events easily.",
    preview: <EventSchedulingPreview />,
  },
  {
    icon: "/CalendarIcon3.svg",
    title: "Shared Team Calendar",
    desc: "Keep teams aligned with centralized schedules and real-time visibility.",
    preview: <SharedCalendarPreview />,
  },
  {
    icon: "/CalendarIcon4.svg",
    title: "Full-Day Event Support",
    desc: "Manage workshops, conferences, leaves, and long-duration business events smoothly.",
    preview: <FullDayPreview />,
  },
  {
    icon: "/CalendarIcon5.svg",
    title: "Event Details & Attachments",
    desc: "Add attendees, locations, files, and descriptions inside every event.",
    preview: <EventDetailsPreview />,
  },
]

function EventSchedulingPreview() {
  return (
    <div className="relative mb-[-6px] w-[330px] h-[210px]">
      {/* Back card - Add a title */}
      <div className="absolute top-0 inset-x-4 rounded-[14px] bg-white/80 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between text-[9px] text-[#9aa6bf]">
          <span>Add a title</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full border border-[#9aa6bf]" />Meeting platform</span>
        </div>
      </div>

      {/* Middle card - main */}
      <div className="absolute top-[28px] inset-x-0 rounded-[18px] bg-white px-5 py-4 shadow-[0_8px_30px_rgba(61,80,142,0.14)]">
        <div className="flex items-center gap-2 border-b border-[#edf0f7] pb-3 text-[10px] text-[#9aa6bf]">
          <span className="text-[#6878bb]">👤</span>
          <span>Invite required attendees</span>
        </div>
        <div className="flex items-center justify-between border-b border-[#edf0f7] py-3">
          <div className="flex items-center gap-2 text-[10px] text-[#52617c]">
            <span className="text-[#456cff]">🕐</span>
            <span>30/05/2026</span>
            <span className="text-[#9aa6bf]">📅</span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#456cff] px-3 py-1 text-[9px] font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            Full day
          </span>
        </div>
        <div className="flex items-center gap-2 pt-3 text-[10px] text-[#52617c]">
          <span className="text-[#9aa6bf]">📅</span>
          <span>30/05/2026</span>
        </div>
      </div>

      {/* Bottom card - Add description */}
      <div className="absolute bottom-0 inset-x-4 rounded-[14px] bg-white/80 px-4 py-5 shadow-sm">
        <div className="flex items-center gap-2 text-[9px] text-[#9aa6bf]">
          <span>📄</span>
          <span>Add description</span>
        </div>
      </div>
    </div>
  )
}

function SharedCalendarPreview() {
  return (
    <div className="relative mb-[-6px] w-[370px] overflow-hidden rounded-t-[18px] bg-white shadow-[0_8px_30px_rgba(61,80,142,0.14)]">
      <div className="flex items-center gap-2 border-b border-[#edf0f6] px-4 py-2.5">
        <span className="rounded-full bg-[#456cff] px-3 py-1 text-[9px] font-semibold text-white">Calendar</span>
        <span className="text-[9px] font-medium text-[#456cff]">Schedule &amp; Event Management</span>
        <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-[#9cb2ff] text-[8px] text-[#456cff]">i</span>
      </div>
      <div className="flex items-center gap-2 border-b border-[#edf0f6] px-4 py-2">
        <span className="flex items-center gap-1 rounded-md border border-[#dfe5f3] px-2 py-1 text-[9px] text-[#52617c]">May 2026 <span className="text-[8px]">▾</span></span>
        <span className="rounded-md bg-[#456cff] px-2 py-1 text-[9px] font-semibold text-white">24H</span>
        <span className="rounded-md border border-[#dfe5f3] px-2 py-1 text-[9px] text-[#52617c]">12H</span>
        <span className="rounded-md bg-[#456cff] px-3 py-1 text-[9px] font-semibold text-white">Today</span>
        <span className="ml-1 text-[12px] text-[#9aa6bf]">‹</span>
        <span className="text-[12px] text-[#9aa6bf]">›</span>
      </div>
      <div className="grid grid-cols-[48px_repeat(4,1fr)] text-[8px]">
        <div className="border-b border-r border-[#edf0f6] p-2"><span className="text-[#9aa6bf]">⏱</span></div>
        {[["10","SUN"],["11","MON"],["12","TUE"],["13","WED"]].map(([d,day]) => (
          <div key={d} className="border-b border-r border-[#edf0f6] py-1.5 text-center">
            <p className="font-bold text-[#404a60]">{d}</p>
            <p className="text-[7px] text-[#9aa6bf]">{day}</p>
          </div>
        ))}
        <div className="border-b border-r border-[#edf0f6] px-2 py-4 text-[8px] text-[#9aa6bf]">00:00</div>
        <div className="border-b border-r border-[#edf0f6]" />
        <div className="relative border-b border-r border-[#edf0f6] p-1">
          <span className="absolute inset-x-1 top-1 bottom-1 rounded-md bg-[#456cff] px-1.5 py-1 text-[8px] font-semibold text-white">Review meeting</span>
        </div>
        <div className="border-b border-r border-[#edf0f6]" />
        <div className="border-b border-r border-[#edf0f6]" />
        <div className="border-r border-[#edf0f6] px-2 py-4 text-[8px] text-[#9aa6bf]">01:00</div>
        <div className="border-r border-[#edf0f6]" />
        <div className="border-r border-[#edf0f6]" />
        <div className="border-r border-[#edf0f6]" />
        <div className="border-r border-[#edf0f6]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7]/60 to-transparent" />
    </div>
  )
}

function FullDayPreview() {
  const days = [
    ["26","27","28","29","30","1","2"],
    ["3","4","5","6","7","8","9"],
    ["10","11","12","13","14","15","16"],
    ["17","18","19","20","21","22","23"],
    ["24","25","26","27","28","29","30"],
    ["31","","","","","",""],
  ]
  const prevMonthDays = ["26","27","28","29","30"]
  const yearRows = [
    ["2021","2022","2023"],
    ["2024","2025","2026"],
    ["2027","2028","2029"],
    ["2030","2031","2032"],
  ]
  return (
    <div className="relative mb-[-6px] w-[370px] overflow-hidden rounded-t-[18px] bg-white px-5 py-4 shadow-[0_8px_30px_rgba(61,80,142,0.14)]">
      <div className="grid grid-cols-2 gap-4">
        {/* Left - Month calendar */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <p className="text-[11px] font-bold text-[#26314a]">May 2026</p>
            <span className="text-[9px] text-[#9aa6bf]">⌃</span>
          </div>
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {["S","M","T","W","T","F","S"].map((d,i) => (
              <span key={i} className="text-[8px] font-bold text-[#9aa6bf]">{d}</span>
            ))}
            {days.map((week, wi) => week.map((date, di) => (
              <span
                key={`${wi}-${di}`}
                className={`grid h-5 w-5 mx-auto place-items-center rounded-full text-[8px]
                  ${date === "30" && wi === 4 ? "bg-[#456cff] font-bold text-white" : ""}
                  ${(wi === 0 && prevMonthDays.includes(date)) || date === "" ? "text-[#c5ccd8]" : "text-[#67738a]"}
                `}
              >
                {date}
              </span>
            )))}
          </div>
        </div>
        {/* Right - Year picker */}
        <div>
          <div className="mb-2 flex items-center gap-1">
            <p className="text-[11px] font-bold text-[#26314a]">2026</p>
            <span className="text-[9px] text-[#9aa6bf]">⌃</span>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-2">
            {yearRows.map((row, ri) => row.map((y) => (
              <span
                key={y}
                className={`text-center text-[9px] font-semibold py-1 rounded-md
                  ${y === "2026" ? "bg-[#456cff] text-white" : ri === 3 ? "text-[#c5ccd8]" : "text-[#52617c]"}
                `}
              >
                {y}
              </span>
            )))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#eef2f7] to-transparent" />
    </div>
  )
}

function EventDetailsPreview() {
  return (
    <div className="relative mb-[-6px] w-[340px] overflow-hidden rounded-t-[18px] bg-white px-5 py-4 shadow-[0_8px_30px_rgba(61,80,142,0.14)]">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[15px] font-bold text-[#26314a]">Event Details</p>
        <span className="text-[13px] text-[#9aa6bf]">×</span>
      </div>
      <div className="space-y-0 divide-y divide-[#edf0f7]">
        <div className="flex items-center gap-3 py-2">
          <span className="text-[14px] text-[#456cff]">👥</span>
          <span className="text-[11px] font-medium text-[#26314a]">Review meeting</span>
        </div>
        <div className="flex items-center gap-3 py-2">
          <span className="text-[14px] text-[#456cff]">🕐</span>
          <span className="text-[11px] text-[#52617c]">Mon 11-05-2026 00:30 to 01:00</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <span className="text-[14px] text-[#456cff]">✉️</span>
            <div>
              <p className="text-[11px] font-semibold text-[#26314a]">You</p>
              <p className="text-[9px] text-[#9aa6bf]">Organizer</p>
            </div>
          </div>
          <span className="rounded-full border border-[#86efac] bg-[#dcfce7] px-3 py-1 text-[9px] font-semibold text-[#16a34a]">Host</span>
        </div>
        <div className="flex items-center gap-3 py-2">
          <span className="text-[14px] text-[#c5ccd8]">📄</span>
          <span className="text-[11px] text-[#c5ccd8]">No description provided</span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#eef2f7] to-transparent" />
    </div>
  )
}

const BusinessOpsSections = () => {
  return (
    <section id="features" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            What The Calendar Module Does
          </span>
          <h2 className="mt-7 text-[28px] font-bold leading-[1.05] text-[#172283] sm:text-[36px] lg:text-[42px]">
            <span className="text-[#456cff]">One Calendar</span> For Your Entire
            <br />
            Business Operations
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-snug text-[#6c78bd]">
            Manage meetings, schedules, and events with better visibility, coordination, and planning.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {cards.map(({ icon, title, desc, preview }) => (
            <article key={title} className="relative min-h-[450px] overflow-hidden rounded-[30px] bg-[#eef2f7] px-7 pb-7 pt-6 shadow-[inset_0_0_0_1px_rgba(79,103,181,0.03)]">
              <Image src={icon} alt={title} width={55} height={55} className="h-[55px] w-[55px]" />
              <h3 className="mt-5 text-[23px] font-bold leading-none text-[#172283]">{title}</h3>
              <p className="mt-3 max-w-[300px] text-xs leading-snug text-[#6c78bd]">{desc}</p>
              <div className="absolute inset-x-0 bottom-0 flex h-[180px] items-end justify-center">
                {preview}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessOpsSections
