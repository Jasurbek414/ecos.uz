import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ScanFace,
  ShieldCheck,
  Send,
  Lock,
  Layers,
  Cpu,
  Server,
  Smartphone,
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

          {/* Right Capabilities Visual (6 Cols) - Zero Admin Panel Exposure */}
          <div className="lg:col-span-6 space-y-3.5">
            {/* Capability Card 1: Enterprise Software */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Dasturiy Ta'minot Ishlab Chiqish</h3>
                    <p className="text-xs text-slate-500">ERP, CRM, veb-portallar va mobil ilovalar</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Software
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Platforma</span>
                  <span className="text-xs font-bold text-slate-900">React & Flutter</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">To'lovlar</span>
                  <span className="text-xs font-bold text-emerald-700">Click & Payme</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Davlat Soliq</span>
                  <span className="text-xs font-bold text-slate-900">OFD Fiskal Chek</span>
                </div>
              </div>
            </div>

            {/* Capability Card 2: Smart IoT & Biometriya */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                    <ScanFace className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Face ID, Turniket & Smart Qulflar</h3>
                    <p className="text-xs text-slate-500">Uskunalarni yetkazib berish va montaj qilish</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                  Hardware
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Biometriya</span>
                  <span className="text-xs font-bold text-slate-900">Hikvision & Dahua</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Himoya</span>
                  <span className="text-xs font-bold text-emerald-700">Anti-spoofing</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Davomat</span>
                  <span className="text-xs font-bold text-slate-900">Telegram Bot</span>
                </div>
              </div>
            </div>

            {/* Capability Card 3: Cybersecurity & Network */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Tarmoq Xavfsizligi & VPN</h3>
                    <p className="text-xs text-slate-500">Filiallararo shifrlangan ishonchli aloqa</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  Security
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">VPN Tunnel</span>
                  <span className="text-xs font-bold text-slate-900">MikroTik WireGuard</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Kamera</span>
                  <span className="text-xs font-bold text-emerald-700">4K CCTV Video</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Monitoring</span>
                  <span className="text-xs font-bold text-slate-900">24/7 Barqaror</span>
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
