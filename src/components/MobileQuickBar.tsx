import React from 'react';
import { Phone, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MobileQuickBar: React.FC = () => {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href="tel:+998970504202"
          className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{isRu ? 'Позвонить' : 'Qo\'ng\'iroq'}</span>
        </a>

        <a
          href="https://t.me/khorowiy_malchik"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
        >
          <Send className="w-3.5 h-3.5 text-emerald-400" />
          <span>Telegram</span>
        </a>
      </div>
    </div>
  );
};
