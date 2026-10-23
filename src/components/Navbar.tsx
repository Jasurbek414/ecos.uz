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
  Globe,
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
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-outfit font-black text-xl bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  E
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-black text-xl sm:text-2xl tracking-wider text-white">
                  ECOS
                </span>
                <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-indigo-500/20 text-cyan-300 border border-indigo-400/30">
                  TECH
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-400 tracking-widest uppercase -mt-0.5">
                Technologies
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Pill */}
            <div className="flex items-center bg-slate-900/80 border border-white/10 rounded-xl p-1 text-xs font-bold text-slate-400">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  language === 'uz' ? 'bg-indigo-600 text-white' : 'hover:text-white'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  language === 'ru' ? 'bg-indigo-600 text-white' : 'hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  language === 'en' ? 'bg-indigo-600 text-white' : 'hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenConsult}
              className="relative group px-5 py-2.5 rounded-xl font-bold text-xs text-white overflow-hidden transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 transition-all duration-300 group-hover:opacity-90" />
              <span className="relative flex items-center gap-2">
                <span>Konsultatsiya Olish</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsult}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold"
            >
              Bog'lanish
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pb-4 animate-in fade-in slide-in-from-top-2">
          <div className="glass-panel p-5 rounded-3xl border border-white/10 space-y-3">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-900/70 border border-white/5 hover:border-indigo-500/40 text-sm font-semibold text-slate-200 hover:text-white flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-indigo-400" />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Tilni tanlang:</span>
              <div className="flex items-center bg-slate-900 border border-white/10 rounded-xl p-1 text-xs font-bold text-slate-300">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-2.5 py-1 rounded-lg ${language === 'uz' ? 'bg-indigo-600 text-white' : ''}`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-2.5 py-1 rounded-lg ${language === 'ru' ? 'bg-indigo-600 text-white' : ''}`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-lg ${language === 'en' ? 'bg-indigo-600 text-white' : ''}`}
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
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
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
