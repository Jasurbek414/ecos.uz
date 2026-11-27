import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#07130e] overflow-hidden">
      {/* Background radial glows and cyber lights */}
      <div className="absolute top-1/4 right-10 -z-0 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 -z-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #00d66c 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-800/60 text-xs text-slate-200 shadow-sm">
              <span className="text-sm">🚀</span>
              <span className="font-medium text-slate-300">{t.hero.badge}</span>
            </div>

            {/* Headline matching image */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-outfit font-black tracking-tight text-white leading-[1.12]">
              <span className="text-[#00e575]">{t.hero.titleHighlight}</span>
              <span>{t.hero.titleSuffix}</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto bg-[#00d66c] hover:bg-[#00bf60] active:scale-95 text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <span>🚀 {t.hero.startBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto border border-slate-700/80 hover:border-slate-500 bg-slate-900/40 text-slate-200 font-semibold px-6 py-3.5 rounded-full text-sm flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
                </div>
                <span>{t.hero.watchVideoBtn}</span>
              </button>
            </div>

          </div>

          {/* Right Visual Column (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Neon platform lighting glow */}
              <div className="absolute inset-0 bg-emerald-500/20 filter blur-2xl rounded-full transform scale-90 -z-10" />
              
              <img
                src="/images/hero-devices.png"
                alt="ECOS Laptop and Smartphone Ecosystem"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,214,108,0.25)] select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
