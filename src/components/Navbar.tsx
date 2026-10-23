import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Layers,
  Cpu,
  Bot,
  Calculator,
  PhoneCall,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface NavbarProps {
  onOpenConsult: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'uz' | 'ru' | 'en'>('uz');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ekotizim', href: '#ecosystem', icon: Layers },
    { label: 'Dasturlar & IT', href: '#services', icon: Cpu },
    { label: 'Smart IoT', href: '#iot-hardware', icon: ShieldCheck },
    { label: 'AI Yechimlar', href: '#ai-solutions', icon: Bot },
    { label: 'Kalkulyator', href: '#calculator', icon: Calculator },
    { label: 'Afzalliklar', href: '#why-us', icon: Sparkles },
    { label: 'Aloqa', href: '#contact', icon: PhoneCall },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-rose-500 p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative">
                <span className="font-outfit font-black text-xl text-emerald-700">
                  E
                </span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-black text-xl sm:text-2xl tracking-wider text-slate-900">
                  ECOS
                </span>
                <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  TECH
                </span>
              </div>
              <p className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase -mt-0.5">
                Technologies
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-white hover:shadow-xs transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Pill */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs font-bold text-slate-600">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  language === 'uz' ? 'bg-emerald-600 text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  language === 'ru' ? 'bg-emerald-600 text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  language === 'en' ? 'bg-emerald-600 text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenConsult}
              className="relative group px-5 py-2.5 rounded-xl font-bold text-xs text-white overflow-hidden transition-all duration-300 cursor-pointer shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 transition-all duration-300 group-hover:opacity-95" />
              <span className="relative flex items-center gap-2">
                <span>Konsultatsiya Olish</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsult}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-xs"
            >
              Bog'lanish
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-xs cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pb-4 animate-in fade-in slide-in-from-top-2">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xl space-y-3">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-300 text-sm font-semibold text-slate-700 hover:text-emerald-700 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-emerald-600" />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Tilni tanlang:</span>
              <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs font-bold text-slate-700">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-2.5 py-1 rounded-lg ${language === 'uz' ? 'bg-emerald-600 text-white shadow-xs' : ''}`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-2.5 py-1 rounded-lg ${language === 'ru' ? 'bg-emerald-600 text-white shadow-xs' : ''}`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-lg ${language === 'en' ? 'bg-emerald-600 text-white shadow-xs' : ''}`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsult();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Bepul Konsultatsiya Olish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
