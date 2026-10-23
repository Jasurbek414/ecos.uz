import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { EcosystemShowcase } from './components/EcosystemShowcase';
import { WhyUs } from './components/WhyUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';

export function App() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOpenConsult={() => setIsConsultOpen(true)} />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero onOpenConsult={() => setIsConsultOpen(true)} />

        {/* About ECOS Technologies */}
        <AboutSection />

        {/* Core IT Services */}
        <ServicesSection onOpenConsult={() => setIsConsultOpen(true)} />

        {/* Flagship Products (Hotel ECOS, CRM, Edu) */}
        <EcosystemShowcase onOpenConsult={() => setIsConsultOpen(true)} />

        {/* Why Choose ECOS */}
        <WhyUs />

        {/* Contact & Consultation Form */}
        <ContactSection />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Consultation Modal */}
      <ConsultModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </div>
  );
}

export default App;
