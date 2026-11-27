import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(50), 60);
    const timer2 = setTimeout(() => setProgress(90), 160);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);
    }, 320);
    const timer4 = setTimeout(() => setLoading(false), 520);

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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060B08] transition-opacity duration-300 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background cyber radial glow */}
      <div className="absolute w-72 h-72 bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none animate-pulse" />

      {/* Hexagon Logo Container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center p-0.5 shadow-[0_0_35px_rgba(0,229,117,0.4)] animate-bounce duration-1000">
          <div className="w-full h-full bg-[#07130e] rounded-[14px] flex items-center justify-center">
            <span className="font-outfit font-black text-3xl text-emerald-400">e</span>
          </div>
        </div>
      </div>

      {/* Brand Title */}
      <div className="text-center space-y-1 mb-6">
        <h2 className="font-outfit font-black text-2xl tracking-widest text-white">
          ECOS
        </h2>
        <p className="text-[11px] text-gray-400 tracking-wider">
          Innovatsiya. Imkoniyat. Rivojlanish.
        </p>
      </div>

      {/* Loading Bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-[#00e575] transition-all duration-300 ease-out shadow-[0_0_10px_#00e575]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
