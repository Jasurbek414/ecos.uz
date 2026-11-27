import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center pt-24 pb-28 sm:pt-28 sm:pb-36 lg:pb-40 bg-[#07130e] overflow-hidden">
      {/* 1. Full High-Res Master Background Filling 100% of the Screen */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-[center_right] sm:bg-[center_right_5%] pointer-events-none select-none"
        style={{
          backgroundImage: `url('/images/hero-bg-master.webp')`,
        }}
      />

      {/* 2. Cyber Gradient Vignettes for Crystal-Clear Text Legibility on the Left */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#07130e] via-[#07130e]/95 sm:via-[#07130e]/85 lg:via-[#07130e]/60 to-transparent w-full lg:w-3/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#07130e] via-transparent to-[#07130e]/60 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07130e] via-transparent to-[#07130e] pointer-events-none" />

      {/* 3. Subtle Ambient Neon Lighting */}
      <div className="absolute top-1/3 right-1/4 -z-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[380px] sm:min-h-[460px]">
          
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
                <div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
                </div>
                <span>{t.hero.watchVideoBtn}</span>
              </button>
            </div>

            {/* Mobile Devices Illustration (Visible only on smaller screens where background is cropped) */}
            <div className="block lg:hidden pt-6">
              <img
                src="/images/hero-devices-mobile.webp"
                alt="ECOS Ekosistema"
                className="w-full max-w-sm mx-auto drop-shadow-[0_15px_30px_rgba(0,229,117,0.25)] select-none pointer-events-none"
              />
            </div>

          </div>

          {/* Right Spacer Column (5 cols) on desktop: lets the background 3D laptop & TV tower shine through naturally */}
          <div className="hidden lg:block lg:col-span-5 h-full min-h-[460px]" />

        </div>
      </div>
    </section>
  );
};
