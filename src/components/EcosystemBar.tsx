import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface EcosystemBarProps {
  onSelectProduct?: (name: string) => void;
}

/* 1. Custom High-Fidelity Duotone SVG Icons */
const HrIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="7" r="4" strokeWidth="2.2" fill="currentColor" fillOpacity="0.15" />
    <path
      d="M22 21v-2a4 4 0 0 0-3-3.87"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
    <path
      d="M16 3.13a4 4 0 0 1 0 7.75"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const PosIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="8.5" cy="20.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="18.5" cy="20.5" r="1.5" fill="currentColor" stroke="none" />
    <path
      d="M2.5 3.5h3l2.68 11.5a1.5 1.5 0 0 0 1.47 1.15h9.7a1.5 1.5 0 0 0 1.47-1.15L22.5 7.5H6.5"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 11.5h6"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const CrmIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M3 3v16a2 2 0 0 0 2 2h16"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 14l4-4 4 3 6-7"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 6h4v4"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="7" y="15" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.4" stroke="none" />
    <rect x="11" y="12" width="2" height="6" rx="0.5" fill="currentColor" opacity="0.4" stroke="none" />
    <rect x="15" y="9" width="2" height="9" rx="0.5" fill="currentColor" opacity="0.4" stroke="none" />
  </svg>
);

const VisionIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3.5" strokeWidth="2.2" fill="currentColor" fillOpacity="0.18" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const ChatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.08"
    />
    <circle cx="8.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 3.5a7 7 0 0 1 6 6"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M14.5 7a3.5 3.5 0 0 1 3 3"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

export const EcosystemBar: React.FC<EcosystemBarProps> = ({ onSelectProduct }) => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    users: HrIcon,
    cart: PosIcon,
    chart: CrmIcon,
    eye: VisionIcon,
    chat: ChatIcon,
    phone: PhoneIcon,
  };

  return (
    <section className="relative -mt-10 sm:-mt-16 lg:-mt-24 z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 lg:gap-4">
        {t.ecosystem.map((item, idx) => {
          const Icon = iconMap[item.icon] || HrIcon;

          return (
            <div
              key={idx}
              onClick={() => onSelectProduct?.(item.name)}
              className="bg-white rounded-2xl sm:rounded-[22px] p-3.5 sm:p-4 lg:p-5 border border-slate-100/90 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,214,108,0.18)] hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[135px] sm:min-h-[155px]"
            >
              {/* Top Custom Icon Badge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#ebfcf3] to-[#d4fae8] border border-emerald-400/25 text-[#00c961] flex items-center justify-center mb-2.5 sm:mb-4 shadow-xs group-hover:bg-gradient-to-br group-hover:from-[#00e575] group-hover:to-[#00b85b] group-hover:text-slate-950 group-hover:border-emerald-400 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(0,229,117,0.35)] transition-all duration-300">
                <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </div>

              {/* Title & Description matching mockup */}
              <div>
                <h3 className="font-outfit font-black text-xs sm:text-sm lg:text-[15px] text-slate-900 group-hover:text-emerald-600 transition-colors tracking-tight leading-snug">
                  {item.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] lg:text-xs text-slate-500 mt-0.5 sm:mt-1 leading-snug font-normal">
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
