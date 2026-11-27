import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-28 bg-[#07130e] overflow-hidden">
      {/* 1. Full High-Res Tashkent Cyber City Background */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-right lg:bg-[center_right_10%] opacity-40 sm:opacity-55 pointer-events-none select-none transition-opacity duration-700"
        style={{
          backgroundImage: `url('/images/hero-bg.webp')`,
        }}
      />

      {/* 2. Cyber Gradient Vignettes for Perfect Text Legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#07130e] via-[#07130e]/95 lg:via-[#07130e]/80 to-transparent lg:w-3/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#07130e] via-transparent to-[#07130e]/60 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07130e] via-transparent to-[#07130e] pointer-events-none" />

      {/* 3. Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 -z-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 -z-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-800/60 text-xs text-slate-200 shadow-sm backdrop-blur-md">
              <span className="text-sm">🚀</span>
              <span className="font-medium text-slate-300">{t.hero.badge}</span>
            </div>

            {/* Headline matching image */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-outfit font-black tracking-tight text-white leading-[1.12]">
              <span className="text-[#00e575] drop-shadow-[0_0_25px_rgba(0,229,117,0.35)]">
                {t.hero.titleHighlight}
              </span>
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
                className="w-full sm:w-auto bg-[#00d66c] hover:bg-[#00bf60] active:scale-95 text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/30 cursor-pointer hover:shadow-emerald-500/50"
              >
                <span>🚀 {t.hero.startBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto border border-slate-700/80 hover:border-emerald-500/60 bg-slate-900/60 backdrop-blur-sm text-slate-200 font-semibold px-6 py-3.5 rounded-full text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:text-white"
              >
                <div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center group-hover:border-emerald-400">
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
              <div className="absolute inset-0 bg-emerald-500/25 filter blur-3xl rounded-full transform scale-95 -z-10 animate-pulse" />
              
              <img
                src="/images/hero-devices-clean.png"
                alt="ECOS Laptop and Smartphone Ecosystem"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,214,108,0.35)] select-none pointer-events-none transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
