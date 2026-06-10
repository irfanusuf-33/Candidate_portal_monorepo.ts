import Image from "next/image"

const cards = [
  {
    title: "User Access Management",
    description: "Control users, permissions, and access levels from one secure dashboard.",
    icon: "/IamIcon2.svg",
    preview: "users",
  },
  {
    title: "Role-Based Permissions",
    description: "Assign roles and manage responsibilities with structured access control.",
    icon: "/IamIcon3.svg",
    preview: "roles",
  },
  {
    title: "Policy Enforcement",
    description: "Maintain security standards with permission rules and approval workflows.",
    icon: "/IamIcon4.svg",
    preview: "policy",
  },
  {
    title: "Activity Monitoring",
    description: "Track login history, actions, and access events in real time.",
    icon: "/IamIcon5.svg",
    preview: "activity",
  },
]

const SecureOperations = () => {
  return (
    <section id="features" className="bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#456cff] px-4 py-1.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(63,108,255,0.22)]">
            Built for Secure Operations
          </span>
          <h2 className="mt-7 text-[38px] font-bold leading-[1.05] text-[#172283] sm:text-[50px]">
            <span className="text-[#456cff]">Everything</span> You Need to
            <br />
            Protect Access
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-snug text-[#6c78bd]">
            From user permissions to access monitoring, manage identities and security policies from one centralised system.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative min-h-[450px] overflow-visible rounded-[30px] bg-[#eef2f7] px-7 pb-7 pt-6 shadow-[inset_0_0_0_1px_rgba(79,103,181,0.03)]"
            >
              <Image src={card.icon} alt="" width={55} height={55} className="h-[55px] w-[55px]" />
              <h3 className="mt-5 text-[23px] font-bold leading-none text-[#172283]">{card.title}</h3>
              <p className="mt-3 max-w-[300px] text-xs leading-snug text-[#6c78bd]">{card.description}</p>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
                {card.preview === "users" && <UsersPreview />}
                {card.preview === "roles" && <RolesPreview />}
                {card.preview === "policy" && <PolicyPreview />}
                {card.preview === "activity" && <ActivityPreview />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const UsersPreview = () => (
  <div className="relative mb-4 h-[210px] w-[360px]">
    {/* Back Card */}
    <div className="absolute left-5 -top-5 z-10 w-[300px] rounded-[24px] border border-white/50 bg-white/30 px-5 py-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-[4px] border border-[#cfcfcf]" />

          <span className="text-[15px] font-medium text-[#7d7d7d]">
            Saqib Sheikh
          </span>
        </div>

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#efefef]">
          <span className="text-[12px] text-[#8b8b8b]">⌄</span>
        </div>
      </div>

      <div className="ml-8 mt-3 inline-flex items-center rounded-full bg-[#ffe6e6] px-3 py-1">
        <span className="text-[11px] font-medium text-[#ff6a6a]">
          ⊘ Disable
        </span>
      </div>
    </div>

    {/* Front Card */}
    <div className="absolute left-0 top-[55px] z-20 w-[340px] rounded-[30px] border border-[#edf1ff] bg-white px-6 py-5 shadow-[0_18px_35px_rgba(34,54,120,0.08)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-[4px] border border-[#bfbfbf]" />

          <span className="border-b border-[#8c8c8c] text-[16px] font-medium text-[#4d4d4d]">
            Arslaan shah
          </span>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ededed]">
          <span className="text-[13px] text-[#777777]">⌄</span>
        </div>
      </div>

      <div className="ml-9 mt-3 inline-flex items-center rounded-full bg-[#e5f5e8] px-4 py-1">
        <span className="text-[12px] font-medium text-[#2fb15c]">
          ✓ Active
        </span>
      </div>

      <p className="ml-9 mt-3 text-[13px] text-[#4d6cff]">
        arslaan.shah@voctrum.com
      </p>
    </div>
  </div>
)

const RolesPreview = () => (
  <div className="relative h-[250px] w-[80%] overflow-hidden">
    <Image src="/IamImgCard2.jpg" alt="Roles Preview" fill className="object-contain object-bottom mix-blend-multiply" />
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef2f7] to-transparent" />
  </div>
)

const PolicyPreview = () => (
  <div className="relative h-[250px] w-[80%] overflow-hidden">
    <Image src="/IamImgCard3.png" alt="Policy Preview" fill className="object-contain object-bottom mix-blend-multiply" />
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef2f7] to-transparent" />
  </div>
)

const ActivityPreview = () => (
  <div className="relative h-[290px] w-[80%] overflow-hidden">
    <Image src="/IamImgCard4.png" alt="Activity Preview" fill className="object-contain object-bottom" />
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef2f7] to-transparent" />
  </div>
)

export default SecureOperations