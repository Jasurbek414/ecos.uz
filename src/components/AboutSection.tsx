import React from 'react';
import {
  Check,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Description Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 block">
              {t.about.badge}
            </span>

            <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {t.about.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white p-3 rounded-xl border border-slate-200/70 shadow-2xs"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Corporate Credential Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Building2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-outfit font-black text-slate-900 text-base">
                    {t.about.cardTitle}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.about.cardSubtitle}
                  </p>
                </div>
              </div>

              {/* 4 Key stats */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black font-outfit text-emerald-700">
                    {t.about.stat1Val}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {t.about.stat1Label}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black font-outfit text-slate-900">
                    {t.about.stat2Val}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {t.about.stat2Label}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black font-outfit text-slate-900">
                    {t.about.stat3Val}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {t.about.stat3Label}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black font-outfit text-emerald-700">
                    {t.about.stat4Val}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {t.about.stat4Label}
                  </div>
                </div>
              </div>

              {/* Security & Reliability statement */}
              <div className="pt-2 flex items-center gap-2.5 text-xs text-slate-500 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Barcha jarayonlar xalqaro axborot xavfsizligi va qonuniy me'yorlar doirasida amalga oshiriladi.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
