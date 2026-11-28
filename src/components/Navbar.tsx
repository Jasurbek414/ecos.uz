import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ecosLogoMark from '../assets/ecos-logo-mark.png';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll on mobile menu open
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

  const navItems = [
    { id: 'home', label: t.nav.home, href: '#' },
    { id: 'products', label: t.nav.products, href: '#mahsulotlar' },
    { id: 'about', label: t.nav.about, href: '#biz-haqimizda' },
    { id: 'advantages', label: t.nav.advantages, href: '#afzalliklar' },
    { id: 'pricing', label: t.nav.pricing, href: '#narxlar' },
    { id: 'contact', label: t.nav.contact, href: '#boglanish' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string, href: string) => {
    e.preventDefault();
    setActiveTab(id);
    setMobileMenuOpen(false);

    if (id === 'contact' || id === 'pricing') {
      onOpenModal();
      return;
    }

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
            ? 'bg-[#06100b]/95 backdrop-blur-md border-b border-emerald-950/80 shadow-lg shadow-black/40 py-3'
            : 'bg-[#07130e] py-4 sm:py-5 border-b border-emerald-950/40'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'home', '#')}
              className="flex items-center gap-3 group"
            >
              {/* Authentic ECOS Isometric Green Hexagon Emblem */}
              <img
                src={ecosLogoMark}
                alt="ECOS"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_0_15px_rgba(0,229,117,0.45)] group-hover:scale-105 transition-transform"
              />
              <span className="font-outfit font-black text-2xl tracking-tight text-white group-hover:text-white">
                ECOS
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs font-medium">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id, item.href)}
                    className={`relative py-1 transition-colors ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00d66c] rounded-full animate-in fade-in duration-200" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Button & Language Switcher */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Switch */}
              <div className="flex items-center rounded-full bg-slate-900/80 p-0.5 border border-slate-800 text-[11px] font-bold">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    language === 'uz'
                      ? 'bg-[#00d66c] text-slate-950 font-black shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    language === 'ru'
                      ? 'bg-[#00d66c] text-slate-950 font-black shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  RU
                </button>
              </div>

              {/* Kirish Button */}
              <button
                onClick={onOpenModal}
                className="bg-[#00d66c] hover:bg-[#00bf60] active:scale-95 text-slate-950 font-bold px-5 py-2 rounded-full text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <span>{t.nav.loginBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center gap-2">
              <div className="flex items-center rounded-full bg-slate-900 p-0.5 border border-slate-800 text-[10px] font-bold">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-1.5 py-0.5 rounded-full transition-all ${
                    language === 'uz'
                      ? 'bg-[#00d66c] text-slate-950 font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-1.5 py-0.5 rounded-full transition-all ${
                    language === 'ru'
                      ? 'bg-[#00d66c] text-slate-950 font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  RU
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900 text-white border border-slate-800"
                aria-label="Menyu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden bg-black/70 backdrop-blur-sm">
          <div className="fixed top-[65px] left-0 right-0 bottom-0 bg-[#07130e] p-6 flex flex-col justify-between overflow-y-auto border-t border-emerald-950">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id, item.href)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 text-slate-200 font-semibold text-sm border border-slate-800/60 hover:border-emerald-600/50"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#00d66c]" />
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3.5 rounded-full bg-[#00d66c] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>{t.nav.loginBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
