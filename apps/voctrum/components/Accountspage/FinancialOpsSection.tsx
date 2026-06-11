import Image from "next/image"

const cards = [
  {
    title: "Revenue Tracking",
    description: "Monitor income trends and business growth in real time.",
    icon: "/AccountsIcon2.svg",
    preview: "revenue",
  },
  {
    title: "Expense Management",
    description: "Track operational costs and spending across departments.",
    icon: "/AccountsIcon3.svg",
    preview: "expense",
  },
  {
    title: "Invoice Control",
    description: "Manage paid, pending, and overdue invoices efficiently.",
    icon: "/AccountsIcon4.svg",
    preview: "invoice",
  },
  {
    title: "Cash Flow Monitoring",
    description: "Stay informed about incoming and outgoing funds.",
    icon: "/AccountsIcon5.svg",
    preview: "cashflow",
  },
]

const FinancialOpsSection = () => {
  return (
    <section id="features" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Financial Operations
          </span>

          <h2 className="mt-7 text-[38px] font-bold leading-[1.05] text-[#172283] sm:text-[50px]">
            <span className="text-[#456cff]">Everything</span> Your
            <br />
            Finance Team Needs
          </h2>

          <p className="mx-auto mt-4 max-w-[400px] text-sm leading-snug text-[#6c78bd]">
            Gain complete visibility into financial performance with
            real-time reporting and transaction management.
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
              <p className="mt-3 max-w-[280px] text-xs leading-snug text-[#6c78bd]">{card.description}</p>

              <div className="absolute inset-x-0 bottom-0 flex h-[210px] items-end justify-center">
                {card.preview === "revenue" && <RevenuePreview />}
                {card.preview === "expense" && <ExpensePreview />}
                {card.preview === "invoice" && <InvoicePreview />}
                {card.preview === "cashflow" && <CashFlowPreview />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const RevenuePreview = () => (
  <div className="relative h-[250px] w-[80%] overflow-hidden">
    <Image src="/AccountsImg1.png" alt="Revenue Preview" fill className="object-contain object-bottom" />
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef2f7] to-transparent" />
  </div>
)

const ExpensePreview = () => (
  <div className="relative mb-[-6px] h-[190px] w-[330px] overflow-hidden rounded-t-[10px] bg-white px-5 py-4 shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-[#9ca8cc]">Expense Breakdown</p>
    <div className="space-y-2.5">
      {[
        ["Salaries", "45%", "#456cff"],
        ["Operations", "25%", "#22c55e"],
        ["Marketing", "15%", "#f59e0b"],
        ["Other", "15%", "#9ca8cc"],
      ].map(([name, pct, color]) => (
        <div key={name} className="flex items-center gap-2">
          <span className="w-[70px] shrink-0 text-[8px] text-[#7a86a3]">{name}</span>
          <span className="h-1.5 flex-1 rounded-full bg-[#eceef4]">
            <span className="block h-1.5 rounded-full" style={{ width: pct, backgroundColor: color }} />
          </span>
          <span className="w-[24px] text-right text-[8px] text-[#7a86a3]">{pct}</span>
        </div>
      ))}
    </div>
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7]/80 to-transparent" />
  </div>
)

const InvoicePreview = () => (
  <div className="relative w-[290px] rounded-[16px] bg-white px-5 pt-4 pb-10 shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-[#9ca8cc]">Invoice Status</p>
    <div className="flex items-center gap-5">
      <div className="relative flex h-[100px] w-[100px] shrink-0 items-center justify-center">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#eef2ff" strokeWidth="5" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#22c55e" strokeWidth="5" strokeDasharray="53.7 87.96" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#ef4444" strokeWidth="5" strokeDasharray="24.6 87.96" strokeDashoffset="-53.7" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#456cff" strokeWidth="5" strokeDasharray="9.7 87.96" strokeDashoffset="-78.3" />
        </svg>
        <div className="absolute text-center">
          <p className="text-[15px] font-bold leading-none text-[#172283]">846</p>
          <p className="text-[8px] leading-tight text-[#9ca8cc]">Total</p>
        </div>
      </div>
      <div className="space-y-3">
        {[["Paid", "514", "#22c55e"], ["Overdue", "234", "#ef4444"], ["Unpaid", "98", "#456cff"]].map(([label, val, color]) => (
          <div key={label} className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
            <span className="text-[10px] text-[#9ca8cc]">{label}</span>
            <span className="ml-auto text-[11px] font-bold text-[#172283]">{val}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-12 rounded-b-[16px] bg-gradient-to-t from-[#eef2f7] to-transparent" />
  </div>
)

const CashFlowPreview = () => (
  <div className="mb-7 w-[290px] rounded-[16px] bg-white px-5 py-4 shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-[#9ca8cc]">Cash Flow</p>
    <div className="mt-2 flex items-end justify-between">
      <div>
        <p className="text-[22px] font-bold text-[#172283]">$58,400</p>
        <p className="text-[9px] text-[#22c55e]">↑ 4.1% this month</p>
      </div>
      <div className="flex h-10 items-end gap-0.5 pb-1">
        {[40, 60, 45, 75, 55, 80, 65].map((h, i) => (
          <div
            key={i}
            className="w-2 rounded-t-sm"
            style={{ height: `${h}%`, backgroundColor: i === 5 ? "#456cff" : "#dce4f5" }}
          />
        ))}
      </div>
    </div>
  </div>
)

export default FinancialOpsSection
