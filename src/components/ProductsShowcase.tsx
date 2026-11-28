import React from 'react';
import {
  Users,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProductsShowcaseProps {
  onOpenModal: () => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    users: Users,
    cart: ShoppingCart,
    chart: TrendingUp,
  };

  return (
    <section id="mahsulotlar" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
          
          {/* Left Title Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00a855] text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d66c]" />
              <span>{t.showcase.tag}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight leading-[1.18]">
              {t.showcase.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              {t.showcase.description}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="bg-[#00d66c] hover:bg-[#00bf60] active:scale-95 text-slate-950 font-bold px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-xs transition-all shadow-md shadow-emerald-500/25 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/35"
              >
                <span>{t.showcase.allBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Product Mockup Cards (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
              {t.showcase.items.map((item, idx) => {
                const Icon = iconMap[item.icon] || Users;

                return (
                  <div
                    key={idx}
                    onClick={onOpenModal}
                    className="bg-white rounded-2xl sm:rounded-[22px] border border-slate-200/80 overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_36px_rgba(0,214,108,0.15)] hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col"
                  >
                    {/* Mockup Preview Area with Cyber Backdrop */}
                    <div className="w-full bg-[#07130e] aspect-[16/10] overflow-hidden relative flex items-center justify-center p-2.5 sm:p-3">
                      {/* Subtle ambient neon glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                      
                      {/* High-res Image container */}
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-md shadow-black/40 transform group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                      />
                    </div>

                    {/* Card Description */}
                    <div className="p-4 sm:p-4.5 bg-white flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-[#ecfdf5] text-[#00d66c] flex items-center justify-center shrink-0 group-hover:bg-[#00d66c] group-hover:text-slate-950 transition-colors">
                            <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                          </div>
                          <h3 className="font-outfit font-black text-sm sm:text-[15px] text-slate-900 group-hover:text-emerald-600 transition-colors tracking-tight">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-snug pl-9">
                          {item.desc}
                        </p>
                      </div>
                    </div>
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
