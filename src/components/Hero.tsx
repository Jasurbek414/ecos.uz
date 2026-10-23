import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Hotel,
  Users2,
  ScanFace,
  Bot,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onOpenConsult: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-white">
      {/* Subtle Ambient Dots */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-emerald-50/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Presentation (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ECOS Technologies — Rasmiy IT Kompaniya</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-outfit font-black tracking-tight text-slate-900 leading-tight">
              Biznesingiz Uchun Zamonaviy{' '}
              <span className="text-emerald-600">Dasturiy Ta'minot</span> va{' '}
              <span className="text-rose-600">Smart IoT</span> Yechimlari
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Korxona va mehmonxonalar uchun maxsus ERP/CRM tizimlari, Face ID biometriya apparatlari,
              MikroTik xavfsiz tarmoqlari hamda AI yordamchilarni kalit ostida ishlab chiqamiz va o'rnatamiz.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenConsult}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Bepul Konsultatsiya Olish</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 font-bold text-sm transition-all text-center"
              >
                Mahsulotlar bilan tanishish
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Kalit ostida topshirish</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1 yillik rasmiy kafolat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-600" />
                <span>24/7 Texnik ko'mak</span>
              </div>
            </div>
          </div>

          {/* Right Sleek Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-800">ECOS Platformalar Holati</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                  99.9% Faol
                </span>
              </div>

              {/* Product 1: Hotel ECOS */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Hotel ECOS PMS</h3>
                    <p className="text-[11px] text-slate-500">Mehmonxona va Smart IoT qulflar</p>
                  </div>
                </div>
                <a
                  href="https://hotel.ecos.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Ko'rish</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Product 2: CRM & ERP */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">ECOS CRM & Savdo POS</h3>
                    <p className="text-[11px] text-slate-500">Mijozlar, ombor va Soliq OFD kassa</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                  B2B Suite
                </span>
              </div>

              {/* Product 3: Face ID & Hardware */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                    <ScanFace className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Face ID & MikroTik VPN</h3>
                    <p className="text-[11px] text-slate-500">Biometrik davomat va 4K CCTV</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded">
                  Hardware
                </span>
              </div>

              {/* Product 4: AI Agents */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">AI Biznes Agentlar</h3>
                    <p className="text-[11px] text-slate-500">24/7 Telegram va ovozli muloqot</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-teal-800 bg-teal-50 px-2 py-1 rounded">
                  AI 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Compact Numbers */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-emerald-600">50+</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Bajarilgan Loyihalar</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">99.9%</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Tarmoq Barqarorligi</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-rose-600">100%</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Rasmiy Kafolat</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-emerald-700">24/7</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Doimiy Qo'llab-quvvatlash</p>
          </div>
        </div>
      </div>
    </section>
  );
};
