import React from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenModal?: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#060B08] text-gray-400 py-12 border-t border-emerald-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <div className="w-full h-full bg-[#07130e] rounded-[10px] flex items-center justify-center">
                  <span className="font-outfit font-black text-xl text-emerald-400">e</span>
                </div>
              </div>
              <span className="font-outfit font-black text-2xl tracking-wider text-white">
                ECOS
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {t.footer.slogan}
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:gap-3.5 text-[11px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">
            <button
              onClick={() => scrollTo('home')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollTo('ekotizim')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.nav.products}
            </button>
            <button
              onClick={() => scrollTo('biz-haqimizda')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollTo('afzalliklar')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.nav.advantages}
            </button>
            <button
              onClick={onOpenModal}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={onOpenModal}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Socials & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/ecos_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 transition-all flex items-center justify-center border border-white/10"
                title="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 transition-all flex items-center justify-center border border-white/10"
                title="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 transition-all flex items-center justify-center border border-white/10"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <p className="text-[11px] text-gray-500 text-center sm:text-right">
              © {CURRENT_YEAR} ECOS. {t.footer.rights}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
