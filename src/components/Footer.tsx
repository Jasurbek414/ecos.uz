import React from 'react';
import {
  Send,
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="ECOS Technologies"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div>
              <span className="font-outfit font-black text-lg text-white block leading-tight">
                ECOS Technologies
              </span>
              <span className="text-[11px] text-slate-400">
                {t.footer.desc}
              </span>
            </div>
          </div>

          {/* Socials & Direct links */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+998970504202"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-2"
              title="Qo'ng'iroq qilish"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+998 (97) 050-42-02</span>
            </a>

            <a
              href="https://t.me/khorowiy_malchik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center"
              title="Telegram"
            >
              <Send className="w-4 h-4 text-emerald-400" />
            </a>

            <a
              href="mailto:muminovjasurbek12@gmail.com"
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center"
              title="Email"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center cursor-pointer ml-2"
              title="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {CURRENT_YEAR} {t.footer.rights}</p>
          <p>{t.footer.address}</p>
        </div>

      </div>
    </footer>
  );
};
