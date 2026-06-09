import Image from "next/image"

const cards = [
  {
    title: "Centralised Asset Dashboard",
    description: "Get a complete overview of products, stock levels, warehouse activity, and movement from one place.",
    icon: "/HrmIcon5.svg",
    preview: "dashboard",
  },
  {
    title: "Warehouse Management",
    description: "Manage multiple warehouses, monitor utilisation, and transfer assets efficiently between locations.",
    icon: "/HrmIcon5.svg",
    preview: "warehouse",
  },
  {
    title: "Real-Time Stock Monitoring",
    description: "Track inventory availability instantly and stay updated on in-stock, low-stock, or unavailable items.",
    icon: "/HrmIcon5.svg",
    preview: "stock",
  },
  {
    title: "Low Stock Alerts",
    description: "Receive proactive alerts for critical inventory shortages and maintain uninterrupted operations.",
    icon: "/HrmIcon8.svg",
    preview: "alerts",
  },
]

const ManageAssestsSection = () => {
  return (
    <section id="features" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Built for Asset Teams
          </span>

          <h2 className="mt-7 text-[38px] font-bold leading-[1.05] text-[#172283] sm:text-[50px]">
            <span className="text-[#456cff]">Everything</span> You Need to
            <br />
            Manage Assets
          </h2>

          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-snug text-[#6c78bd]">
            From stock tracking to warehouse operations, manage every asset with complete visibility, availability tracking, and operational control.
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
                {card.preview === "dashboard" && <DashboardPreview />}
                {card.preview === "warehouse" && <WarehousePreview />}
                {card.preview === "stock" && <StockPreview />}
                {card.preview === "alerts" && <AlertsPreview />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const DashboardPreview = () => (
  <div className="relative mb-[-6px] h-[190px] w-[330px] overflow-hidden rounded-t-[10px] bg-white shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <div className="flex h-8 items-center border-b border-[#edf0f6] px-4">
      <span className="mx-auto h-2 w-20 rounded-b-md bg-black" />
    </div>
    <div className="grid grid-cols-[58px_1fr]">
      <div className="space-y-3 border-r border-[#edf0f6] p-3 text-[7px] text-[#7a86a3]">
        {["Dashboard", "Products", "Warehouse", "Categories", "Stock", "Reports"].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className="p-3">
        <p className="mb-2 text-[9px] font-bold text-[#172283]">Asset Overview</p>
        <div className="grid grid-cols-3 gap-1.5">
          {[["120", "In Stock", "#e3fbeb", "#22b95b"], ["14", "Low Stock", "#fff2df", "#e99b2e"], ["6", "Out", "#ffe7e8", "#e44d55"]].map(([v, l, bg, c]) => (
            <div key={l} className="rounded-lg p-2 text-center" style={{ backgroundColor: bg }}>
              <p className="text-[11px] font-bold" style={{ color: c }}>{v}</p>
              <p className="text-[7px] text-[#8b95ad]">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center rounded-xl bg-[#edf2ff] p-2">
          <div className="relative h-12 w-12">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#eef2ff" strokeWidth="5" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#456cff" strokeWidth="5" strokeDasharray="52 87.96" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#34d399" strokeWidth="5" strokeDasharray="22 87.96" strokeDashoffset="-52" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#172283]">16</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

const WarehousePreview = () => (
  <div className="relative mb-[-6px] h-[190px] w-[330px] overflow-hidden rounded-t-[10px] bg-white px-5 py-4 shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <p className="mb-3 text-[9px] font-bold text-[#172283]">Warehouse Utilisation</p>
    <div className="space-y-2.5">
      {[
        ["Main Hub", "92%", "#456cff"],
        ["Warehouse A", "78%", "#456cff"],
        ["Warehouse B", "55%", "#456cff"],
        ["Warehouse C", "40%", "#456cff"],
        ["Warehouse D", "30%", "#456cff"],
      ].map(([name, pct, color]) => (
        <div key={name} className="flex items-center gap-2">
          <span className="w-[80px] shrink-0 text-[8px] text-[#7a86a3]">{name}</span>
          <span className="h-2 flex-1 rounded-full bg-[#eceef4]">
            <span className="block h-2 rounded-full" style={{ width: pct, backgroundColor: color }} />
          </span>
          <span className="w-[24px] text-right text-[8px] text-[#7a86a3]">{pct}</span>
        </div>
      ))}
    </div>
    <button className="mt-3 text-[9px] font-semibold text-[#456cff]">View All Warehouses →</button>
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

const StockPreview = () => (
  <div className="relative mb-[-20px] h-[230px] w-[230px] overflow-hidden">
    <Image
      src="/MobileImgTransparent.png"
      alt="Stock monitoring mobile"
      width={360}
      height={430}
      className="absolute left-1/2 top-0 h-[280px] w-[230px] -translate-x-1/2 object-contain object-top"
    />
    <div className="absolute left-1/2 top-[72px] w-[150px] -translate-x-1/2">
      <p className="mb-2 text-[10px] font-bold text-[#172283]">Monthly stock levels</p>
      <div className="flex h-[60px] items-end gap-1">
        {[30, 50, 40, 70, 45, 60, 35, 55, 48, 65, 42, 58].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ height: `${h}%`, backgroundColor: i % 2 === 0 ? "#456cff" : "#f87171" }}
          />
        ))}
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
  </div>
)

const AlertsPreview = () => (
  <div className="mb-7 w-[300px] rounded-[16px] bg-white px-5 py-4 shadow-[0_18px_38px_rgba(61,80,142,0.14)]">
    <p className="mb-3 text-[11px] font-bold text-[#172283]">Inventory Alert</p>
    <div className="space-y-3">
      {[
        { id: "INV-00210", name: "Zara1", category: "Electronics", qty: 12, status: "Low", statusColor: "#e99b2e", statusBg: "#fff2df" },
        { id: "INV-00211", name: "Zara2", category: "Accessories", qty: 3, status: "Out of Stock", statusColor: "#e44d55", statusBg: "#ffe7e8" },
      ].map((item) => (
        <div key={item.id} className="rounded-[10px] border border-[#edf0f6] p-3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[8px] text-[#8b95ad]">ID</p>
              <p className="text-[9px] font-semibold text-[#172283]">{item.id}</p>
            </div>
            <div>
              <p className="text-[8px] text-[#8b95ad]">Name</p>
              <p className="text-[9px] font-semibold text-[#172283]">{item.name}</p>
            </div>
            <span className="rounded-md px-2 py-0.5 text-[8px] font-semibold" style={{ backgroundColor: item.statusBg, color: item.statusColor }}>
              {item.status}
            </span>
          </div>
          <div className="mt-1.5 flex gap-6">
            <div>
              <p className="text-[8px] text-[#8b95ad]">Category</p>
              <p className="text-[9px] text-[#172283]">{item.category}</p>
            </div>
            <div>
              <p className="text-[8px] text-[#8b95ad]">Quantity</p>
              <p className="text-[9px] text-[#172283]">{item.qty}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default ManageAssestsSection
