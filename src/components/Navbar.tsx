import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Send,
} from 'lucide-react';

interface NavbarProps {
  onOpenConsult: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Oddiy tilda', href: '#guide' },
    { label: 'Mahsulotlar', href: '#products' },
    { label: 'Xizmatlar', href: '#services' },
    { label: 'Afzalliklar', href: '#advantages' },
    { label: 'Biz haqimizda', href: '#about' },
    { label: 'Aloqa', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3'
          : 'bg-white py-4 sm:py-5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="ECOS Technologies"
              className="w-10 h-10 rounded-xl object-cover shadow-sm transition-transform duration-200 group-hover:scale-105"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-black text-xl tracking-tight text-slate-900">
                  ECOS
                </span>
                <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  TECH
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-500 tracking-wider uppercase -mt-0.5">
                Technologies
              </p>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Contacts */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+998970504202"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>+998 (97) 050-42-02</span>
            </a>

            <button
              onClick={onOpenConsult}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Bog'lanish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsult}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
            >
              Bog'lanish
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
            <a
              href="tel:+998970504202"
              className="text-xs font-semibold text-slate-700 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>+998 (97) 050-42-02</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsult();
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center gap-1"
            >
              <span>Ariza qoldirish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
