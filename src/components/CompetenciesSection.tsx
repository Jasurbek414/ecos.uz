import React from 'react';
import {
  Code2,
  ScanFace,
  Cpu,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CompetenciesSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    { icon: Code2, badge: 'SOFTWARE' },
    { icon: ScanFace, badge: 'IOT & SMART' },
    { icon: Cpu, badge: 'AI & DATA' },
    { icon: ShieldCheck, badge: 'SECURITY' },
  ];

  return (
    <section id="competencies" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase text-emerald-800 tracking-wider">
            {t.competencies.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1.5">
            {t.competencies.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.competencies.description}
          </p>
        </div>

        {/* 4 Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.competencies.items.map((item, idx) => {
            const iconObj = icons[idx] || icons[0];
            const Icon = iconObj.icon;

            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 text-slate-900 flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/70">
                      {iconObj.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-outfit font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
