import TicketingHeroSection from "@/components/TicketingPage/TicketingHeroSection"
import HandleRequestsSection from "@/components/TicketingPage/HandleRequestsSection"
import TicketWorkflowSection from "@/components/TicketingPage/TicketWorkflowSection"
import EfficiencySection from "@/components/TicketingPage/EfficiencySection"

export default function TicketingPage() {
  return (
    <div>
      <TicketingHeroSection />
      <HandleRequestsSection />
      <TicketWorkflowSection />
      <EfficiencySection />
    </div>
  )
}
