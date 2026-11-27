import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-center pt-24 pb-20 sm:pt-28 sm:pb-28 lg:pb-32 bg-[#07130e] overflow-hidden">
      {/* 1. Full High-Res Tashkent Skyline Background */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-[center_right_10%] pointer-events-none select-none opacity-90"
        style={{
          backgroundImage: `url('/images/hero-bg.webp')`,
        }}
      />

      {/* 2. Cyber Gradient Vignettes for Crystal-Clear Text Legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#07130e] via-[#07130e]/90 sm:via-[#07130e]/75 lg:via-[#07130e]/40 to-transparent w-full lg:w-3/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#07130e] via-transparent to-[#07130e]/50 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07130e]/80 via-transparent to-[#07130e] pointer-events-none" />

      {/* 3. Subtle Ambient Neon Lighting */}
      <div className="absolute top-1/3 right-1/4 -z-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[380px] sm:min-h-[460px]">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-800/60 text-xs text-slate-200 shadow-sm backdrop-blur-md">
              <span className="text-sm">🚀</span>
              <span className="font-medium text-slate-300">{t.hero.badge}</span>
            </div>

            {/* Headline matching mockup */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-outfit font-black tracking-tight text-white leading-[1.14] max-w-xl mx-auto lg:mx-0">
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
                <div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
                </div>
                <span>{t.hero.watchVideoBtn}</span>
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): 3D Laptop, Smartphone & Neon Orbit Platform */}
          <div className="lg:col-span-5 flex items-center justify-center pt-6 lg:pt-0">
            <div className="relative w-full max-w-md lg:max-w-none flex items-center justify-center">
              <img
                src="/images/hero-devices-v2.png"
                alt="ECOS Ekosistema Mahsulotlari"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,214,108,0.3)] select-none pointer-events-none transform lg:scale-105 transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
