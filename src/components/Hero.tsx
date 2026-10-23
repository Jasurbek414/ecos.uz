import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Hotel,
  ShoppingCart,
  ScanFace,
  ExternalLink,
  ShieldCheck,
  Send,
  Building2,
  CreditCard,
  Wifi,
  Lock,
  QrCode,
  Check,
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

          {/* Right Bento Showcase (6 Cols) */}
          <div className="lg:col-span-6 space-y-3.5">
            {/* Top Primary Card: Hotel ECOS PMS */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">Hotel ECOS PMS & Smart Palace</h3>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                    <p className="text-xs text-slate-500">Mehmonxona, Smart NFC qulflar va 4K CCTV</p>
                  </div>
                </div>

                <a
                  href="https://hotel.ecos.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>hotel.ecos.uz</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Realistic Visual Room Rack Grid */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium px-0.5">
                  <span>Xonalar holati (2-qavat)</span>
                  <span className="text-emerald-700 font-semibold font-mono">Bandlik: 84% (101/120)</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  <div className="p-2 rounded-lg bg-emerald-50/80 border border-emerald-200 text-center">
                    <span className="text-[10px] font-mono text-emerald-800 block font-bold">№ 201</span>
                    <span className="text-[9px] text-emerald-700 block">Band</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50/80 border border-emerald-200 text-center">
                    <span className="text-[10px] font-mono text-emerald-800 block font-bold">№ 202</span>
                    <span className="text-[9px] text-emerald-700 block">Band</span>
                  </div>
                  <div className="p-2 rounded-lg bg-sky-50 border border-sky-200 text-center">
                    <span className="text-[10px] font-mono text-sky-800 block font-bold">№ 203</span>
                    <span className="text-[9px] text-sky-700 block">Bo'sh</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50/80 border border-emerald-200 text-center">
                    <span className="text-[10px] font-mono text-emerald-800 block font-bold">№ 204</span>
                    <span className="text-[9px] text-emerald-700 block">Band</span>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-center">
                    <span className="text-[10px] font-mono text-amber-800 block font-bold">№ 205</span>
                    <span className="text-[9px] text-amber-700 block">Tozalanmoqda</span>
                  </div>
                  <div className="p-2 rounded-lg bg-sky-50 border border-sky-200 text-center">
                    <span className="text-[10px] font-mono text-sky-800 block font-bold">№ 206</span>
                    <span className="text-[9px] text-sky-700 block">Bo'sh</span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>120 ta Smart NFC eshik qulflari tarmoqqa ulangan</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-100/70 px-1.5 py-0.5 rounded">
                  Onlayn
                </span>
              </div>
            </div>

            {/* Bottom 2 Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Card A: Face ID & Davomat */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5 hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center">
                      <ScanFace className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Face ID & Davomat</h4>
                      <p className="text-[10px] text-slate-500">Biometrik turniket nazorati</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    Hikvision
                  </span>
                </div>

                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 space-y-1 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-600 font-medium">Turniket #1 (Kirish):</span>
                    <span className="text-emerald-700 font-mono font-semibold">08:58:12</span>
                  </div>
                  <p className="text-[11px] text-slate-700 truncate">
                    Sh. Alimov — Davomat qabul qilindi
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                  <span>MikroTik WireGuard VPN</span>
                  <span className="text-emerald-700 font-mono font-semibold">12ms ping</span>
                </div>
              </div>

              {/* Card B: Savdo POS & OFD */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5 hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Savdo & POS Kassa</h4>
                      <p className="text-[10px] text-slate-500">Fiskal chek va to'lovlar</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                    Soliq OFD
                  </span>
                </div>

                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 space-y-1 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-600 font-medium">Kunlik cheklar soni:</span>
                    <span className="text-slate-900 font-mono font-bold">1,420 ta</span>
                  </div>
                  <p className="text-[11px] text-slate-700">
                    Click / Payme / Uzum to'lovlar integratsiyasi
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                  <span>Fiskal chek uzatish</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> 100% Sinxron
                  </span>
                </div>
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
