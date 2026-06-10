import HowItWorksSection from "@/components/IamPage/HowItWorksSection"
import IamHeroSection from "@/components/IamPage/IamHeroSection"
import SecureOperations from "@/components/IamPage/SecureOperations"
import StrenghtenSecuritySection from "@/components/IamPage/StrengthenSecuritySection"

export default function IamPage() {
  return (
    <div>
      <IamHeroSection />
      <SecureOperations />
      <HowItWorksSection />
      <StrenghtenSecuritySection />
      <section className="pointer-events-none relative z-20 -mb-[86px] h-[86px] overflow-visible bg-transparent">
        <div
          className="absolute left-1/2 -top-px z-10 h-[87px] w-[min(92vw,720px)] -translate-x-1/2 bg-[#eef2f7]"
          style={{ clipPath: "polygon(0 0, 100% 0, 74% 100%, 26% 100%)" }}
        />
      </section>
    </div>
  )
}