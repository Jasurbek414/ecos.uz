import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GuideSection } from './components/GuideSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';

export function App() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [consultDirection, setConsultDirection] = useState('ERP_CRM');

  const handleOpenConsult = (direction: string = 'ERP_CRM') => {
    setConsultDirection(direction);
    setIsConsultOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOpenConsult={() => handleOpenConsult()} />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsult={handleOpenConsult} />

        {/* Plain Language Educational & Problem Solving Guide */}
        <GuideSection onOpenConsult={handleOpenConsult} />

        {/* Flagship Products */}
        <ProductsSection onOpenConsult={() => handleOpenConsult('HOTEL_PMS')} />

        {/* Custom IT Services */}
        <ServicesSection onOpenConsult={() => handleOpenConsult('ERP_CRM')} />

        {/* Why Choose ECOS */}
        <WhyUsSection />

        {/* About ECOS Technologies */}
        <AboutSection />

        {/* Contact Information & Form */}
        <ContactSection />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Consultation Modal */}
      <ConsultModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialDirection={consultDirection}
      />
    </div>
  );
}

export default App;
