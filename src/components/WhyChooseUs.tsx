import React from 'react';
import {
  Zap,
  ShieldCheck,
  Headphones,
  Settings,
  Cloud,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhyChooseUsProps {
  onOpenModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    zap: Zap,
    shield: ShieldCheck,
    headset: Headphones,
    settings: Settings,
    cloud: Cloud,
    trending: TrendingUp,
  };

  return (
    <section id="afzalliklar" className="pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 bg-[#f8faf9] border-b border-slate-100 relative">
      <div id="biz-haqimizda" className="absolute -top-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854]">
              <span className="w-4 h-0.5 bg-[#00d66c] rounded-full inline-block" />
              <span>{t.whyUs.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-outfit font-black text-slate-900 leading-[1.18] tracking-tight">
              {t.whyUs.title}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              {t.whyUs.description}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="bg-[#00d66c] hover:bg-[#00bf60] active:scale-95 text-slate-950 font-bold px-6 py-2.5 rounded-full inline-flex items-center justify-center gap-2 text-xs transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <span>{t.whyUs.aboutBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x3 Grid (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
              {t.whyUs.items.map((item, idx) => {
                const Icon = iconMap[item.icon] || Zap;

                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-start"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#00d66c] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 stroke-[2.5]" />
                    </div>

                    <h3 className="font-outfit font-bold text-sm text-slate-900 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
