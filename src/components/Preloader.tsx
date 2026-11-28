import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(55), 80);
    const timer2 = setTimeout(() => setProgress(88), 200);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);
    }, 380);
    const timer4 = setTimeout(() => setLoading(false), 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050c08] transition-all duration-400 ease-out select-none ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Cyber Radial Ambient Illumination */}
      <div className="absolute w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute w-[220px] h-[220px] bg-[#00e575]/15 rounded-full blur-[60px] pointer-events-none animate-pulse" />

      {/* 2. Sleek Dual-Ring Cyber Spinner with Central Emblem */}
      <div className="relative w-24 h-24 flex items-center justify-center mb-7">
        {/* Outer Rotating Neon Arc */}
        <div className="absolute inset-0 rounded-full border-2 border-emerald-500/15 border-t-[#00e575] border-r-[#00e575]/50 animate-spin [animation-duration:1.2s]" />
        
        {/* Inner Counter-Rotating Arc */}
        <div className="absolute inset-2 rounded-full border-2 border-teal-500/10 border-b-[#00e575] border-l-[#00e575]/40 animate-spin [animation-direction:reverse] [animation-duration:1.6s]" />

        {/* Central Glowing ECOS Hexagon Emblem */}
        <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/30 to-[#00e575]/10 border border-[#00e575]/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,117,0.35)] backdrop-blur-sm">
          <svg
            className="w-6 h-6 text-[#00e575] drop-shadow-[0_0_8px_rgba(0,229,117,0.8)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      {/* 3. High-Tech Brand Typography */}
      <div className="text-center space-y-1.5 mb-7">
        <h2 className="font-outfit font-black text-2xl tracking-[0.28em] text-white pl-[0.28em]">
          ECOS
        </h2>
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-emerald-400/80 tracking-wider">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00e575] animate-ping" />
          <span>TIZIM YUKLANMOQDA</span>
        </div>
      </div>

      {/* 4. Hairline Progress Bar & Percentage */}
      <div className="w-52 flex flex-col items-center gap-2">
        <div className="w-full h-[2.5px] bg-slate-800/80 rounded-full overflow-hidden p-0 backdrop-blur-xs">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-[#00e575] to-teal-300 transition-all duration-300 ease-out shadow-[0_0_12px_#00e575]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-400">
          <span className="text-slate-500">v2.0</span>
          <span className="text-emerald-400 font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
