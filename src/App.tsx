import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
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
        {/* Hero Section */}
        <Hero onOpenConsult={() => setIsConsultOpen(true)} />

        {/* Flagship Products */}
        <ProductsSection onOpenConsult={() => setIsConsultOpen(true)} />

        {/* Custom IT Services */}
        <ServicesSection onOpenConsult={() => setIsConsultOpen(true)} />

        {/* About ECOS Technologies */}
        <AboutSection />

        {/* Why Choose ECOS */}
        <WhyUsSection />

        {/* Contact Information & Form */}
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
