import {
  HeroSection,
  FlywheelSection,
  ResultsSection,
  UrgencySection,
  WhatYouWillLearnSection,
  LeadFormSection,
  MentorSection,
  ToolkitSection,
  CourseInfoSection,
  FinalCTASection,
  FooterSection,
} from "@/components/landing"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#242424] text-white font-inter">
      <HeroSection />
      <FlywheelSection />
      <ResultsSection />
      <UrgencySection />
      <WhatYouWillLearnSection />
      <LeadFormSection />
      <MentorSection />
      <ToolkitSection />
      <CourseInfoSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  )
}
