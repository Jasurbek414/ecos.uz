import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemShowcase } from './components/EcosystemShowcase';
import { ServicesSection } from './components/ServicesSection';
import { CalculatorSection } from './components/CalculatorSection';
import { TechStack } from './components/TechStack';
import { WhyUs } from './components/WhyUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';

export function App() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [prefilledSummary, setPrefilledSummary] = useState('');

  const handleOpenConsultWithEstimate = (summary: string) => {
    setPrefilledSummary(summary);
    setIsConsultOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* 1. Glassmorphic Navigation Bar */}
      <Navbar onOpenConsult={() => setIsConsultOpen(true)} />

      {/* 2. Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner with Live Tech Matrix Simulation */}
        <Hero onOpenConsult={() => setIsConsultOpen(true)} />

        {/* ECOS Flagship Ecosystem Products (Hotel ECOS, CRM, Savdo, Agro, Edu) */}
        <EcosystemShowcase onOpenConsult={() => setIsConsultOpen(true)} />

        {/* 3 Core Pillars: Software Dev, Smart IoT & Face ID, AI Automation */}
        <ServicesSection onOpenConsult={() => setIsConsultOpen(true)} />

        {/* Interactive Project Cost & Timeline Estimator (Calculator) */}
        <CalculatorSection
          onPreselectEstimate={handleOpenConsultWithEstimate}
          onOpenConsult={() => setIsConsultOpen(true)}
        />

        {/* Technical Stack Architecture */}
        <TechStack />

        {/* Why Choose ECOS (Competitive Advantages) */}
        <WhyUs />

        {/* Lead Capture Form & Corporate Contact Channels */}
        <ContactSection prefilledSummary={prefilledSummary} />
      </main>

      {/* 3. Comprehensive Footer */}
      <Footer />

      {/* 4. Global Consultation Lead Modal */}
      <ConsultModal
        isOpen={isConsultOpen}
        onClose={() => {
          setIsConsultOpen(false);
          setPrefilledSummary('');
        }}
      />
    </div>
  );
}

export default App;
