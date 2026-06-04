
// app/page.tsx

import AnalyticsSection from "@/components/landing/analytics-section"
import IntegrationsSection from "@/components/landing/integrations-section"
import PricingSection from "@/components/landing/pricing-section"
import TestimonialsSection from "@/components/landing/testimonials-section"

import HeroSection from "@/components/landing/hero-section"
import FeaturesSection from "@/components/landing/features-section"
import CTASection from "@/components/shared/cta-section"
import HeroSectionNew from "@/components/home/HeroSectionNew"
import FeaturesSectionNew from "@/components/home/FeaturesSectionNew"
import UnifiedSalesSection from "@/components/home/UnifiedSalesSection"






export default function Home() {

  return (
    <main className="min-h-screen">
      {/* <HeroSection /> */}

      <HeroSectionNew/>
      {/* <FeaturesSection /> */}

      <FeaturesSectionNew/>
      <UnifiedSalesSection/>

      <AnalyticsSection />
      <IntegrationsSection />
      {/* <PricingSection /> */}
      {/* <TestimonialsSection />s */}
      <CTASection />
    </main>
  )
}