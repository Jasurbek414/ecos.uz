import React from 'react';
import { Users, Building2, MapPin, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const StatsBanner: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    users: Users,
    building: Building2,
    map: MapPin,
    star: Star,
  };

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#03231a] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-emerald-900/60 shadow-xl shadow-emerald-950/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
            {t.stats.map((stat, idx) => {
              const Icon = iconMap[stat.icon] || Users;

              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center sm:items-center justify-center text-center sm:text-left gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-950/30 border border-emerald-800/20"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-900/60 text-[#00d66c] flex items-center justify-center shrink-0 border border-emerald-800/50 shadow-xs">
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-outfit font-black text-white tracking-tight">
                      {stat.val}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
