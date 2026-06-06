import FeaturesHeroSection from "@/components/Features/FeaturesHeroSection"
import HowItWorksSection from "@/components/Features/HowItWorksSection"
import OperationsSection from "@/components/Features/OperationsSection"
import ProblemsAndSolution from "@/components/Features/ProblemsAndSolution"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <FeaturesHeroSection />
      <ProblemsAndSolution />
      <OperationsSection />
      <HowItWorksSection />
    </main>
  )
}
