import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Hotel,
  ExternalLink,
  ShieldCheck,
  Send,
  Lock,
  LayoutDashboard,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onOpenConsult: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Dasturiy ta'minot va Smart uskunalar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-outfit font-black tracking-tight text-slate-900 leading-[1.15]">
              Biznesingiz uchun <span className="text-emerald-700">dasturiy ta'minot</span> va{' '}
              <span className="text-slate-900">aqlli uskunalar</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Mehmonxona, savdo va xizmat ko'rsatish korxonalari uchun maxsus boshqaruv tizimlari (ERP, CRM),
              Face ID biometriya apparatlari hamda xavfsiz MikroTik tarmoqlarini kalit ostida o'rnatamiz.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onOpenConsult}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Loyiha bo'yicha maslahat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://t.me/ecos_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-emerald-600" />
                <span>Telegram orqali yozish</span>
              </a>
            </div>

            {/* Credibility highlights */}
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
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Soliq OFD va to'lovlar</span>
              </div>
            </div>
          </div>

          {/* Right Realistic Laptop Device Mockup (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[530px]">
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Laptop Display Lid */}
              <div className="bg-slate-900 rounded-t-[18px] sm:rounded-t-[22px] p-2 sm:p-2.5 border-[2px] border-slate-700/80 shadow-2xl relative">
                {/* Webcam dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 border border-slate-600 mx-auto mb-1.5" />

                {/* Display Screen */}
                <div className="rounded-lg sm:rounded-xl overflow-hidden bg-white border border-slate-200/60 shadow-inner flex flex-col aspect-[16/10]">
                  {/* Browser Chrome Header */}
                  <div className="bg-slate-100 border-b border-slate-200 px-3 py-1.5 flex items-center justify-between text-[11px]">
                    {/* Window dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>

                    {/* Browser URL pill */}
                    <a
                      href="https://hotel.ecos.uz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white px-2.5 py-0.5 rounded-md border border-slate-200 text-slate-700 flex items-center gap-1 text-[10px] font-mono hover:text-emerald-700 transition-colors"
                    >
                      <Lock className="w-2.5 h-2.5 text-emerald-600" />
                      <span>hotel.ecos.uz</span>
                      <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                    </a>

                    {/* Live indicator */}
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-semibold text-emerald-700 hidden sm:inline">Faol Tizim</span>
                    </div>
                  </div>

                  {/* Screen Inner Dashboard Content */}
                  <div className="flex-1 flex overflow-hidden bg-slate-50 text-slate-900">
                    {/* Left Mini Sidebar */}
                    <div className="w-16 sm:w-20 bg-slate-900 text-slate-400 p-2 flex flex-col justify-between shrink-0 border-r border-slate-800">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1 px-1 py-0.5">
                          <div className="w-3.5 h-3.5 rounded bg-emerald-600 flex items-center justify-center text-white font-black text-[8px]">
                            E
                          </div>
                          <span className="text-[9px] font-bold text-white tracking-wider hidden sm:inline">HOTEL</span>
                        </div>

                        <div className="space-y-0.5 text-[9px] font-medium pt-1">
                          <div className="px-1.5 py-1 rounded bg-emerald-600 text-white flex items-center gap-1">
                            <LayoutDashboard className="w-2.5 h-2.5" />
                            <span className="hidden sm:inline">Asosiy</span>
                          </div>
                          <div className="px-1.5 py-1 rounded text-slate-400 flex items-center gap-1">
                            <Hotel className="w-2.5 h-2.5" />
                            <span className="hidden sm:inline">Xonalar</span>
                          </div>
                          <div className="px-1.5 py-1 rounded text-slate-400 flex items-center gap-1">
                            <Calendar className="w-2.5 h-2.5" />
                            <span className="hidden sm:inline">Bron</span>
                          </div>
                          <div className="px-1.5 py-1 rounded text-slate-400 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span className="hidden sm:inline">Xizmat</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-[8px] text-slate-500 px-1 font-mono">
                        v2.4
                      </div>
                    </div>

                    {/* Dashboard Main Canvas */}
                    <div className="flex-1 p-2 sm:p-2.5 overflow-hidden flex flex-col justify-between">
                      {/* Top Bar inside PMS */}
                      <div className="flex items-center justify-between pb-1 border-b border-slate-200/80">
                        <div>
                          <h4 className="text-[10px] sm:text-[11px] font-bold text-slate-900 leading-tight">
                            Hotel ECOS Palace — Boshqaruv Paneli
                          </h4>
                          <p className="text-[8px] sm:text-[9px] text-slate-500">Bugungi xonalar fondi va tushum</p>
                        </div>
                        <a
                          href="https://hotel.ecos.uz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[9px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-1 shrink-0"
                        >
                          <span>Ochish</span>
                          <ExternalLink className="w-2 h-2" />
                        </a>
                      </div>

                      {/* KPI 4 Cards */}
                      <div className="grid grid-cols-4 gap-1.5 pt-0.5">
                        <div className="p-1 rounded-md bg-white border border-slate-200 shadow-2xs text-center">
                          <span className="text-[7.5px] text-slate-400 block leading-tight">Bandlik</span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 font-mono">84.2%</span>
                        </div>
                        <div className="p-1 rounded-md bg-white border border-slate-200 shadow-2xs text-center">
                          <span className="text-[7.5px] text-slate-400 block leading-tight">Check-in</span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-900 font-mono">18 ta</span>
                        </div>
                        <div className="p-1 rounded-md bg-white border border-slate-200 shadow-2xs text-center">
                          <span className="text-[7.5px] text-slate-400 block leading-tight">Xonalar</span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-900 font-mono">101/120</span>
                        </div>
                        <div className="p-1 rounded-md bg-white border border-slate-200 shadow-2xs text-center">
                          <span className="text-[7.5px] text-slate-400 block leading-tight">Tushum</span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-900 font-mono">68.4m</span>
                        </div>
                      </div>

                      {/* Interactive Room Rack / Floor Map */}
                      <div className="p-1.5 rounded-md bg-white border border-slate-200 space-y-1 shadow-2xs">
                        <div className="flex items-center justify-between text-[8px]">
                          <span className="font-semibold text-slate-700">2-qavat xonalari:</span>
                          <div className="flex items-center gap-1.5 text-[7.5px] font-medium text-slate-500">
                            <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Band</span>
                            <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Bo'sh</span>
                            <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Tozalash</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-6 gap-1 text-[8.5px] text-center font-mono">
                          <div className="py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                            201
                          </div>
                          <div className="py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                            202
                          </div>
                          <div className="py-0.5 rounded bg-sky-100 text-sky-800 font-bold border border-sky-200">
                            203
                          </div>
                          <div className="py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                            204
                          </div>
                          <div className="py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-200">
                            205
                          </div>
                          <div className="py-0.5 rounded bg-sky-100 text-sky-800 font-bold border border-sky-200">
                            206
                          </div>
                        </div>
                      </div>

                      {/* Mini IoT Strip */}
                      <div className="p-1 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[8px] text-emerald-800">
                        <div className="flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          <span>Smart NFC qulflar va 4K CCTV integratsiyalangan</span>
                        </div>
                        <span className="font-mono font-bold text-[7.5px] bg-emerald-200 px-1 py-0.2 rounded">100% ONLINE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Bottom Aluminum Base & Hinge */}
              <div className="relative mx-auto bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-b-xl sm:rounded-b-2xl h-3 sm:h-3.5 w-[104%] -left-[2%] shadow-[0_20px_35px_-10px_rgba(0,0,0,0.25)] border-t border-slate-200">
                {/* Thumb notch in center */}
                <div className="w-14 sm:w-16 h-1 bg-slate-600/60 rounded-b-md mx-auto" />
              </div>

              {/* Floating Bottom Link Pill */}
              <div className="mt-3.5 text-center">
                <a
                  href="https://hotel.ecos.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-800 text-xs font-semibold transition-all shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Jonli tizimni ko'rish: <strong>hotel.ecos.uz</strong></span>
                  <ExternalLink className="w-3 h-3 text-emerald-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Stats Row */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">50+</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Muvaffaqiyatli loyiha</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-emerald-700">100%</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Dastur + Uskuna kalit ostida</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">1 Yil</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Rasmiy to'liq kafolat</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">24/7</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Texnik ko'mak xizmati</p>
          </div>
        </div>
      </div>
    </section>
  );
};
