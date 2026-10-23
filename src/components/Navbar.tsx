import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  PhoneCall,
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
    { label: 'Kompaniya haqida', href: '#about' },
    { label: 'Xizmatlarimiz', href: '#services' },
    { label: 'Mahsulotlar', href: '#products' },
    { label: 'Nega biz?', href: '#why-us' },
    { label: 'Aloqa', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-white/60 backdrop-blur-xs py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 p-0.5 shadow-xs flex items-center justify-center text-white font-outfit font-black text-xl relative">
              <span>E</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-rose-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-black text-xl tracking-wider text-slate-900">
                  ECOS
                </span>
                <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  TECH
                </span>
              </div>
              <p className="text-[9px] font-semibold text-slate-400 tracking-widest uppercase -mt-0.5">
                Technologies
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switch */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 text-xs font-bold text-slate-600">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'uz' ? 'bg-white text-emerald-800 shadow-2xs font-extrabold' : 'hover:text-slate-900'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'ru' ? 'bg-white text-emerald-800 shadow-2xs font-extrabold' : 'hover:text-slate-900'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en' ? 'bg-white text-emerald-800 shadow-2xs font-extrabold' : 'hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenConsult}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Bog'lanish</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsult}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
            >
              Aloqa
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 pb-3 bg-white border-b border-slate-200 shadow-lg">
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 text-xs font-bold text-slate-600">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-1 rounded ${language === 'uz' ? 'bg-white text-emerald-800 shadow-2xs' : ''}`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded ${language === 'ru' ? 'bg-white text-emerald-800 shadow-2xs' : ''}`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-white text-emerald-800 shadow-2xs' : ''}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsult();
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <span>Konsultatsiya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
