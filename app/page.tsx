import {
  HeroSection,
  ProblemSection,
  WhatYouWillLearnSection,
  LeadFormSection,
  TargetAudienceSection,
  MentorSection,
  BonusesSection,
  CourseInfoSection,
  FinalCTASection,
  FooterSection,
} from "@/components/landing"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0C1211] text-white font-inter">
      <HeroSection />
      <ProblemSection />
      <WhatYouWillLearnSection />
      <LeadFormSection />
      <TargetAudienceSection />
      <MentorSection />
      <BonusesSection />
      <CourseInfoSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  )
}
