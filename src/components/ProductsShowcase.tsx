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
    <section id="mahsulotlar" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
          
          {/* Left Title Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {t.showcase.tag}
            </span>

            <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight leading-[1.18]">
              {t.showcase.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              {t.showcase.description}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="bg-[#00d66c] hover:bg-[#00bf60] active:scale-95 text-slate-950 font-bold px-6 py-2.5 rounded-full inline-flex items-center justify-center gap-2 text-xs transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <span>{t.showcase.allBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Product Mockup Cards (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.showcase.items.map((item, idx) => {
                const Icon = iconMap[item.icon] || Users;

                return (
                  <div
                    key={idx}
                    onClick={onOpenModal}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all duration-200 cursor-pointer group flex flex-col"
                  >
                    {/* Mockup Preview Area */}
                    <div className="w-full bg-[#07130e] overflow-hidden flex items-center justify-center relative">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Card Description */}
                    <div className="p-3.5 bg-white flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1 text-slate-900">
                          <Icon className="w-3.5 h-3.5 text-[#00d66c]" />
                          <h3 className="font-outfit font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">
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
