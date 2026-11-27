import React from 'react';
import {
  Users,
  Lock,
  FileCheck2,
  Headphones,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ValuesSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Users, Lock, FileCheck2, Headphones];

  return (
    <section id="values" className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 block">
            {t.values.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1.5">
            {t.values.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.values.description}
          </p>
        </div>

        {/* 4 Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.values.items.map((val, idx) => {
            const Icon = icons[idx] || Users;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h3 className="font-outfit font-black text-base text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
