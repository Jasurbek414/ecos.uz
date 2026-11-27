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
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#03231a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-emerald-900/60 shadow-xl shadow-emerald-950/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-emerald-900/50">
            {t.stats.map((stat, idx) => {
              const Icon = iconMap[stat.icon] || Users;

              return (
                <div
                  key={idx}
                  className={`flex items-center justify-start md:justify-center gap-3.5 ${
                    idx !== 0 ? 'pt-4 md:pt-0 md:pl-4' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-900/50 text-[#00d66c] flex items-center justify-center shrink-0 border border-emerald-800/50">
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-outfit font-black text-white tracking-tight">
                      {stat.val}
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">
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
