import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { ValuesSection } from './components/ValuesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

function MainContent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white antialiased">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Page Content (pb-14 on mobile to prevent overlap with MobileQuickBar) */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Company Hero */}
        <Hero />

        {/* Company Identity & Culture */}
        <AboutSection />

        {/* Strategic Technical Competencies */}
        <CompetenciesSection />

        {/* Core Principles & Guarantees */}
        <ValuesSection />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* 3. Corporate Footer */}
      <Footer />

      {/* 4. Persistent Mobile Quick Action Bar */}
      <MobileQuickBar />
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
