import React from 'react';
import {
  ArrowRight,
  Send,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Clock,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
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

  const metrics = [
    { val: t.hero.metric1Val, label: t.hero.metric1Label, icon: Layers },
    { val: t.hero.metric2Val, label: t.hero.metric2Label, icon: Cpu },
    { val: t.hero.metric3Val, label: t.hero.metric3Label, icon: ShieldCheck },
    { val: t.hero.metric4Val, label: t.hero.metric4Label, icon: Clock },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white border-b border-slate-100 overflow-hidden">
      {/* Subtle modern ambient background */}
      <div className="absolute top-0 right-1/3 -z-10 w-[500px] h-[500px] bg-emerald-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-10 -z-10 w-96 h-96 bg-slate-50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Corporate Overline */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-7 sm:w-10 h-px bg-emerald-600/40" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-800 uppercase font-sans">
              ECOS Technologies — {t.hero.badge}
            </span>
            <span className="w-7 sm:w-10 h-px bg-emerald-600/40" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-outfit font-black tracking-tight text-slate-900 leading-[1.12]">
            {t.hero.titlePart1}
            <span className="text-emerald-700 relative inline-block">
              {t.hero.titleHighlight}
            </span>
            {t.hero.titlePart2}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-emerald-700 active:bg-slate-950 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-slate-900/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.hero.contactBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://t.me/khorowiy_malchik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <Send className="w-4 h-4 text-emerald-600" />
              <span>{t.hero.telegramBtn}</span>
            </a>
          </div>

          {/* Key Trust Signals */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Rasmiy shartnoma va hisob-faktura</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% maxfiylik kafolati (NDA)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>1 yillik rasmiy texnik kafolat</span>
            </div>
          </div>
        </div>

        {/* 4 Metric Credential Cards */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-outfit font-black text-slate-900 tracking-tight">
                  {item.val}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1 leading-snug">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
