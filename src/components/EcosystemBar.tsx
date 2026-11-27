import React from 'react';
import {
  Users,
  ShoppingCart,
  TrendingUp,
  Eye,
  MessageSquare,
  PhoneCall,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EcosystemBarProps {
  onSelectProduct?: (name: string) => void;
}

export const EcosystemBar: React.FC<EcosystemBarProps> = ({ onSelectProduct }) => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    users: Users,
    cart: ShoppingCart,
    chart: TrendingUp,
    eye: Eye,
    chat: MessageSquare,
    phone: PhoneCall,
  };

  return (
    <section className="relative -mt-14 sm:-mt-20 lg:-mt-24 z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-4">
        {t.ecosystem.map((item, idx) => {
          const Icon = iconMap[item.icon] || Users;

          return (
            <div
              key={idx}
              onClick={() => onSelectProduct?.(item.name)}
              className="bg-white rounded-2xl sm:rounded-[22px] p-4 sm:p-5 border border-slate-100 shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,214,108,0.15)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[140px] sm:min-h-[155px]"
            >
              {/* Top Icon with soft green background pill */}
              <div className="w-10 h-10 rounded-xl sm:rounded-2xl bg-[#ecfdf5] text-[#00d66c] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#00d66c] group-hover:text-slate-950 transition-colors">
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Title & Description matching mockup */}
              <div>
                <h3 className="font-outfit font-black text-sm sm:text-[15px] text-slate-900 group-hover:text-emerald-600 transition-colors tracking-tight leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 leading-snug font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
