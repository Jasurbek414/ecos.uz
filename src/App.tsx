import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemBar } from './components/EcosystemBar';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProductsShowcase } from './components/ProductsShowcase';
import { StatsBanner } from './components/StatsBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenModal = (productName?: string) => {
    if (productName && typeof productName === 'string') {
      setSelectedProduct(productName);
    } else {
      setSelectedProduct('ECOS Ekosistema');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00d66c] selection:text-[#07130e] antialiased">
      {/* 1. Header / Navbar */}
      <Navbar onOpenModal={() => handleOpenModal()} />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <div id="home">
          <Hero onOpenModal={() => handleOpenModal()} />
        </div>

        {/* 6 Products Ecosystem Bar */}
        <div id="ekotizim">
          <EcosystemBar onSelectProduct={(name) => handleOpenModal(name)} />
        </div>

        {/* Why Choose ECOS (2x3 Grid) */}
        <WhyChooseUs onOpenModal={() => handleOpenModal()} />

        {/* Products Showcase (HR, POS, CRM with UI Mockups) */}
        <ProductsShowcase onOpenModal={() => handleOpenModal()} />

        {/* Stats Teal Banner (10+, 1000+, 12, 99%) */}
        <StatsBanner />

        {/* Testimonials Slider */}
        <TestimonialsSection />

        {/* CTA Rocket Banner */}
        <CtaBanner onOpenModal={() => handleOpenModal()} />
      </main>

      {/* 3. Dark Footer */}
      <Footer onOpenModal={() => handleOpenModal()} />

      {/* 4. Interactive Inquiry / Lead Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialProduct={selectedProduct}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
