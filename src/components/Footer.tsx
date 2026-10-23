import React from 'react';
import {
  ArrowUp,
  Send,
  Phone,
  Mail,
  ExternalLink,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-outfit font-black text-lg relative shadow-xs">
              <span>E</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-rose-500" />
            </div>
            <div>
              <span className="font-outfit font-bold text-base text-slate-900 block leading-tight">
                ECOS Technologies
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Dasturiy ta'minot & Smart IoT yechimlari
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-600">
            <a href="#about" className="hover:text-emerald-700 transition-colors">Kompaniya haqida</a>
            <a href="#services" className="hover:text-emerald-700 transition-colors">Xizmatlar</a>
            <a href="#products" className="hover:text-emerald-700 transition-colors">Mahsulotlar</a>
            <a href="https://hotel.ecos.uz" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 flex items-center gap-1">
              <span>Hotel ECOS</span>
              <ExternalLink className="w-3 h-3 text-emerald-600" />
            </a>
            <a href="#why-us" className="hover:text-emerald-700 transition-colors">Afzalliklar</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Aloqa</a>
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/ecos_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-colors"
              title="Telegram"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:info@ecos.uz"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 flex items-center justify-center transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href="tel:+998712000055"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-colors"
              title="Telefon"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              title="Yuqoriga"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 text-center sm:text-left">
          <span>© {new Date().getFullYear()} ECOS Technologies MCHJ. Barcha huquqlar himoyalangan.</span>
          <span>Toshkent, O'zbekiston</span>
        </div>
      </div>
    </footer>
  );
};
