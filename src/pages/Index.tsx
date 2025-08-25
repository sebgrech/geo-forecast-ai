import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OutcomeBar from '@/components/OutcomeBar';
import LiveMapSection from '@/components/LiveMapSection';
import ValueProps from '@/components/ValueProps';
import HowItWorks from '@/components/HowItWorks';
import UseCaseTabs from '@/components/UseCaseTabs';
import SocialProof from '@/components/SocialProof';
import Roadmap from '@/components/Roadmap';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <OutcomeBar />
        <LiveMapSection />
        <ValueProps />
        <HowItWorks />
        <UseCaseTabs />
        <SocialProof />
        <Roadmap />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;