import Image from "next/image"

const cards = [
  {
    title: "Ticket Management",
    description: "Create, assign, and track support tickets from submission to resolution in one organised workspace.",
    icon: "/TicketingIcon2.svg",
    preview: "tickets",
  },
  {
    title: "Issue Tracking",
    description: "Monitor issue status, priority levels, and department assignments with complete visibility.",
    icon: "/TicketingIcon3.svg",
    preview: "issues",
  },
  {
    title: "Team Collaboration",
    description: "Assign tickets to agents, add notes, and coordinate resolutions across departments together.",
    icon: "/TicketingIcon4.svg",
    preview: "collaboration",
  },
  {
    title: "Reports & Analytics",
    description: "Analyse ticket trends, team performance, and resolution rates with detailed reporting tools.",
    icon: "/TicketingIcon5.svg",
    preview: "reports",
  },
]

const HandleRequestsSection = () => {
  return (
    <section id="features" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Built for Support Teams
          </span>

          <h2 className="mt-7 text-[38px] font-bold leading-[1.05] text-[#172283] sm:text-[50px]">
            <span className="text-[#456cff]">Everything</span> You Need to
            <br />
            Handle Requests
          </h2>

          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-snug text-[#6c78bd]">
            Streamline support operations with tools that help your team stay responsive, organised, and efficient across every request.
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
                {card.preview === "tickets" && <TicketsPreview />}
                {card.preview === "issues" && <IssuesPreview />}
                {card.preview === "collaboration" && <CollaborationPreview />}
                {card.preview === "reports" && <ReportsPreview />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const TicketsPreview = () => (
  <div className="relative mb-[-6px] h-[190px] w-[330px] overflow-hidden rounded-t-[10px] bg-white shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <div className="flex h-8 items-center border-b border-[#edf0f6] px-4">
      <span className="mx-auto h-2 w-20 rounded-b-md bg-black" />
    </div>
    <div className="p-4">
      <p className="mb-3 text-[10px] font-bold text-[#172283]">Recent Tickets</p>
      <div className="space-y-2">
        {[
          ["#1042", "Login issue", "Open", "#e3fbeb", "#22b95b"],
          ["#1043", "Payment failed", "In Progress", "#fff2df", "#e99b2e"],
          ["#1044", "Export error", "Resolved", "#e9edff", "#456cff"],
        ].map(([id, title, status, bg, color]) => (
          <div key={id} className="flex items-center justify-between rounded-lg border border-[#edf0f6] px-3 py-1.5">
            <span className="text-[9px] font-semibold text-[#456cff]">{id}</span>
            <span className="text-[9px] text-[#172283]">{title}</span>
            <span className="rounded-full px-2 py-0.5 text-[8px] font-semibold" style={{ backgroundColor: bg, color }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

const IssuesPreview = () => (
  <div className="relative mb-[-6px] h-[190px] w-[330px] overflow-hidden rounded-t-[10px] bg-white px-5 py-4 shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <p className="mb-3 text-[10px] font-bold text-[#172283]">Issues by Priority</p>
    <div className="space-y-2.5">
      {[
        ["Critical", "85%", "#e44d55"],
        ["High", "65%", "#e99b2e"],
        ["Medium", "45%", "#456cff"],
        ["Low", "25%", "#22b95b"],
      ].map(([label, width, color]) => (
        <div key={label} className="flex items-center gap-2">
          <span className="w-[52px] shrink-0 text-[8px] text-[#7a86a3]">{label}</span>
          <span className="h-2 flex-1 rounded-full bg-[#eceef4]">
            <span className="block h-2 rounded-full" style={{ width, backgroundColor: color }} />
          </span>
          <span className="w-[24px] text-right text-[8px] text-[#7a86a3]">{width}</span>
        </div>
      ))}
    </div>
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

const CollaborationPreview = () => (
  <div className="relative mb-[-6px] h-[190px] w-[330px] overflow-hidden rounded-t-[10px] bg-white px-5 py-4 shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <p className="mb-3 text-[10px] font-bold text-[#172283]">Team Activity</p>
    <div className="space-y-2.5">
      {[
        ["Irfan", "Assigned ticket #1042", "2m ago"],
        ["Adnan", "Resolved ticket #1039", "15m ago"],
        ["Sara", "Added note to #1041", "1h ago"],
      ].map(([name, action, time]) => (
        <div key={name} className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf2ff] text-[9px] font-bold text-[#456cff]">{name?.[0] ?? ""}</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-semibold text-[#172283]">{action}</p>
            <p className="text-[8px] text-[#9ca8cc]">{time}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

const ReportsPreview = () => (
  <div className="relative mb-[-6px] h-[190px] w-[330px] overflow-hidden rounded-t-[10px] bg-white px-5 py-4 shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <p className="mb-3 text-[10px] font-bold text-[#172283]">Performance Trends</p>
    <div className="mb-2 flex items-center gap-3 text-[8px] text-[#8b95ad]">
      <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#456cff]" />Created</span>
      <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />Resolved</span>
    </div>
    <svg viewBox="0 0 260 60" className="w-full" preserveAspectRatio="none">
      <polyline points="0,50 32,35 65,42 98,20 130,28 163,15 195,25 228,35 260,22" fill="none" stroke="#456cff" strokeWidth="2" strokeLinejoin="round" />
      <polyline points="0,55 32,48 65,52 98,38 130,42 163,32 195,38 228,48 260,40" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" strokeLinejoin="round" />
    </svg>
    <div className="mt-2 flex justify-between text-[7px] text-[#b0b8cc]">
      {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => <span key={m}>{m}</span>)}
    </div>
    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

export default HandleRequestsSection
