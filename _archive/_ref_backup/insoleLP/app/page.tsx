'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServiceFeatures from '../components/ServiceFeatures';
import ImportantNotice from '../components/ImportantNotice';
import SymptomChecklist from '../components/SymptomChecklist';
import ShockingFacts from '../components/ShockingFacts';
import CoveredConditions from '../components/CoveredConditions';
import UsageFlow from '../components/UsageFlow';
import MedicalAssistance from '../components/MedicalAssistance';
import InsoleEffects from '../components/InsoleEffects';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LineRegistration from '../components/LineRegistration';
import SpecialContent from '../components/SpecialContent';
import FinalCTA from '../components/FinalCTA';
import FloatingCTA from '../components/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <HeroSection />
      <ServiceFeatures />
      <ImportantNotice />
      <SymptomChecklist />
      <ShockingFacts />
      <CoveredConditions />
      <UsageFlow />
      <MedicalAssistance />
      <InsoleEffects />
      <Testimonials />
      <FAQ />
      <LineRegistration />
      <SpecialContent />
      <FinalCTA />
      <FloatingCTA />
    </div>
  );
}