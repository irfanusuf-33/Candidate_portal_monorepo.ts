import CrmHeroSection from "@/components/CrmPage/CrmHeroSection"
import CrmhowItWorks from "@/components/CrmPage/CrmhowItWorks"
import GetADemo from "@/components/CrmPage/GetADemo"
import ManageClientsSection from "@/components/CrmPage/ManageClientsSection"

export default function CrmPage() {
  return (
    <div>
      <CrmHeroSection />
      <ManageClientsSection />
      <CrmhowItWorks />
      <GetADemo />
    </div>
  )
}
