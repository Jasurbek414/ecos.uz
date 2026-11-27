import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Send,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.competencies, href: '#competencies' },
    { label: t.nav.values, href: '#values' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src="/logo.png"
                alt="ECOS Technologies"
                className="w-10 h-10 rounded-xl object-cover shadow-2xs transition-transform duration-200 group-hover:scale-105"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-outfit font-black text-xl tracking-tight text-slate-900">
                    ECOS
                  </span>
                  <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    TECH
                  </span>
                </div>
                <p className="text-[10px] font-medium text-slate-500 tracking-wider uppercase -mt-0.5">
                  Technologies
                </p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200/80 text-xs font-semibold">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    language === 'uz'
                      ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  O'Z
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    language === 'ru'
                      ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  RU
                </button>
              </div>

              {/* Direct Phone link */}
              <a
                href="tel:+998970504202"
                className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>+998 (97) 050-42-02</span>
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>{t.nav.consultBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Controls (Language + Hamburger) */}
            <div className="flex md:hidden items-center gap-2">
              <div className="flex items-center rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-2 py-1 rounded-md transition-all ${
                    language === 'uz'
                      ? 'bg-white text-emerald-800 shadow-2xs'
                      : 'text-slate-500'
                  }`}
                >
                  O'Z
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-2 py-1 rounded-md transition-all ${
                    language === 'ru'
                      ? 'bg-white text-emerald-800 shadow-2xs'
                      : 'text-slate-500'
                  }`}
                >
                  RU
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-slate-900/40 backdrop-blur-xs transition-opacity">
          <div className="fixed top-[65px] left-0 right-0 bottom-0 bg-white p-6 flex flex-col justify-between overflow-y-auto shadow-xl border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {language === 'ru' ? 'Навигация' : 'Bo\'limlar'}
              </p>

              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/60 text-slate-800 hover:text-emerald-800 font-semibold text-base transition-colors border border-slate-100"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Direct Quick Contact Buttons for Mobile */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href="tel:+998970504202"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+998 (97) 050-42-02</span>
              </a>

              <a
                href="https://t.me/khorowiy_malchik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl border border-slate-200 bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2.5"
              >
                <Send className="w-4 h-4 text-emerald-600" />
                <span>Telegram: @khorowiy_malchik</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
