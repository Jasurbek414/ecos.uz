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
    <section className="relative -mt-6 sm:-mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {t.ecosystem.map((item, idx) => {
          const Icon = iconMap[item.icon] || Users;

          return (
            <div
              key={idx}
              onClick={() => onSelectProduct?.(item.name)}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-lg hover:border-emerald-300 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#00d66c] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 stroke-[2.5]" />
              </div>

              <div>
                <h3 className="font-outfit font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
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
