import Image from "next/image"

const cards = [
  {
    title: "Client Management",
    description: "Store and organize all client information in one place.",
    icon: "/CrmIcon1.svg",
    preview: "mockup",
  },
  {
    title: "Opportunity Tracking",
    description: "Monitor leads, enquiries, and sales opportunities easily.",
    icon: "/CrmIcon2.svg",
    preview: "opportunities",
  },
  {
    title: "Contact Visibility",
    description: "Track interactions, activity history, and communications instantly.",
    icon: "/CrmIcon3.svg",
    preview: "appointments",
  },
  {
    title: "Task & Follow-Ups",
    description: "Never miss meetings, reminders, or important actions.",
    icon: "/CrmIcon4.svg",
    preview: "activity",
  },
]

const ManageClientsSection = () => {
  return (
    <section className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Built for Growing Teams
          </span>

          <h2 className="mt-7 text-[38px] font-bold leading-[1.05] text-[#172283] sm:text-[50px]">
            Everything You Need to
            <br />
            Manage <span className="text-[#456cff]">Clients</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[430px] text-sm leading-snug text-[#6c78bd]">
            From leads to follow-ups, Voctrum CRM helps teams stay organized and build stronger client relationships.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative min-h-[450px] overflow-hidden rounded-[30px] bg-[#eef2f7] px-7 pb-7 pt-6 shadow-[inset_0_0_0_1px_rgba(79,103,181,0.03)]"
            >
              <Image src={card.icon} alt="" width={55} height={55} className="h-[55px] w-[55px]" />

              <h3 className="mt-5 text-[23px] font-bold leading-none text-[#172283]">
                {card.title}
              </h3>
              <p className="mt-3 max-w-[225px] text-xs leading-snug text-[#6c78bd]">
                {card.description}
              </p>

              <div className="absolute inset-x-0 bottom-0 flex h-[190px] items-end justify-center">
                {card.preview === "mockup" && (
                  <div className="relative h-[202px] w-[305px] overflow-hidden">
                    <Image
                      src="/CrmMockup.jpg"
                      alt="Voctrum CRM dashboard mockup"
                      width={1850}
                      height={1124}
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7] to-transparent" />
                  </div>
                )}

                {card.preview === "opportunities" && <OpportunityPreview />}
                {card.preview === "appointments" && <AppointmentsPreview />}
                {card.preview === "activity" && <ActivityPreview />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const OpportunityPreview = () => (
  <div className="relative mb-[22px] h-[224px] w-[360px] max-w-full">
    <Image
      src="/CrmMockup2.png"
      alt="CRM opportunity tracking summary"
      width={1728}
      height={1333}
      className="absolute left-1/2 top-0 h-full w-[360px] max-w-none -translate-x-1/2 object-contain"
    />
  </div>
)

const AppointmentsPreview = () => (
  <div className="relative mb-5 w-[205px] overflow-hidden rounded-[12px] bg-white p-4 shadow-[0_18px_38px_rgba(61,80,142,0.13)]">
    <div className="relative">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] font-bold text-[#172283]">Appointments</p>
        <span className="text-[10px] text-[#a5afc8]">Today</span>
      </div>
      {[
        ["Meeting with CF", "05:50 PM", "5 min ago", "bg-[#2c80ff]"],
        ["Meeting with IN", "05:30 AM", "Proposal", "bg-[#2c80ff]"],
        ["Acme Corp", "05:30 PM", "Email", "bg-[#ff7a20]"],
        ["Robert L.", "15 min ago", "websites", "bg-[#22c965]"],
      ].map(([title, time, label, color]) => (
        <div key={title} className="flex items-center gap-3 border-t border-[#eef1f7] py-2 first:border-t-0">
          <span className={`h-7 w-7 rounded-full ${color}`} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-bold text-[#343c54]">{title}</p>
            <p className="text-[9px] text-[#a2acc7]">{label}</p>
          </div>
          <span className="text-[9px] font-semibold text-[#687492]">{time}</span>
        </div>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eef2f7] via-[#eef2f7]/90 to-transparent backdrop-blur-[1.5px]" />
  </div>
)

const ActivityPreview = () => (
  <div className="mb-12 w-[215px] rounded-[12px] bg-white p-4 shadow-[0_18px_38px_rgba(61,80,142,0.13)]">
    <div className="mb-3 flex items-center gap-2">
      <span className="grid grid-cols-2 gap-0.5 text-[#9ba7c7]">
        <span className="h-1 w-1 rounded-full bg-current" />
        <span className="h-1 w-1 rounded-full bg-current" />
        <span className="h-1 w-1 rounded-full bg-current" />
        <span className="h-1 w-1 rounded-full bg-current" />
      </span>
      <p className="text-[11px] font-bold text-[#172283]">Recent Activity</p>
    </div>
    {[
      ["bg-[#dce8ff]", "You emailed demo details to Tom H.", "10 min ago"],
      ["bg-[#efd9ff]", "Jane D. was assigned to you", "1 hr ago"],
      ["bg-[#ddfbe9]", "Call with Jane D.", "1 hr ago"],
      ["bg-[#fff2bd]", "You made notes for Doe's Construction.", "Today"],
    ].map(([color, title, time]) => (
      <div key={title} className="flex gap-3 py-1.5">
        <span className={`h-5 w-5 shrink-0 rounded-full ${color}`} />
        <div className="min-w-0">
          <p className="truncate text-[9px] font-semibold text-[#59627a]">{title}</p>
          <p className="text-[8px] text-[#a4aec5]">{time}</p>
        </div>
      </div>
    ))}
  </div>
)

export default ManageClientsSection
