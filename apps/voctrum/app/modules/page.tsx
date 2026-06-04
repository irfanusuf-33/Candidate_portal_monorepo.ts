import HeroSection from "@/components/Modules/HeroSection"
import CrmModuleSection from "@/components/Modules/CrmModuleSection"
import HrmModuleSection from "@/components/Modules/HrmModuleSection"
import InventoryModuleSection from "@/components/Modules/InventoryModuleSection"
import TicketingModuleSection from "@/components/Modules/TicketingModuleSection"
import CalendarModuleSection from "@/components/Modules/CalendarModuleSection"
import IamModuleSection from "@/components/Modules/IamModuleSection"
import AccountsModuleSection from "@/components/Modules/AccountsModuleSection"
import AnalyticsModuleSection from "@/components/Modules/AnalyticsModuleSection"
import SalesModuleSection from "@/components/Modules/SalesModuleSection"

export default function ModulesPage() {
  return (
    <div>
      <HeroSection />
      <CrmModuleSection />
      <HrmModuleSection />
      <InventoryModuleSection />
      <TicketingModuleSection />
      <CalendarModuleSection />
      <IamModuleSection />
      <AccountsModuleSection />
      <AnalyticsModuleSection />
      <SalesModuleSection />
    </div>
  )
}
