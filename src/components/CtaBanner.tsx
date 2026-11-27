import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import rocketImg from '../assets/rocket.png';

interface CtaBannerProps {
  onOpenModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#061c14] border border-emerald-900/80 p-6 sm:p-10 overflow-hidden shadow-2xl shadow-emerald-950/30">
          
          {/* Cyber green ambient background glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Cyber Grid Lines */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #00d66c 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Left: Rocket Graphic + Text */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-center sm:text-left">
              <img
                src={rocketImg}
                alt="ECOS Rocket"
                className="w-24 sm:w-28 h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,214,108,0.4)] select-none shrink-0"
              />

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-outfit font-black text-white leading-tight tracking-tight">
                  <span>{t.cta.titlePrefix}</span>
                  <span className="text-[#00e575]">{t.cta.titleHighlight}</span>
                  <span>{t.cta.titleMiddle}</span>
                  <span className="text-[#00e575]">{t.cta.titleHighlight2}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {t.cta.subtitle}
                </p>
              </div>
            </div>

            {/* Right: Boshlash Button */}
            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto bg-[#00d66c] hover:bg-[#00bf60] active:scale-95 text-slate-950 font-bold px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/30 cursor-pointer"
              >
                <span>{t.cta.startBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
