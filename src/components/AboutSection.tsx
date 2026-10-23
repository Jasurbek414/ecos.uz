import React from 'react';
import {
  Code,
  Cpu,
  Layers,
  ShieldCheck,
  Check,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
              Kompaniya Haqida
            </span>
            <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight">
              ECOS Technologies — Biznesingizning Ishonchli IT Hamkori
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Biz O'zbekiston bozoridagi korxonalar, savdo tarmoqlari va mehmonxonalar uchun dasturiy ta'minot
              ishlab chiqish, smart uskunalar montaji va kiberxavfsiz tarmoq infratuzilmasini kompleks ravishda
              yo'lga qo'yuvchi texnologik kompaniyamiz.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Mijozlarimizga tarqoq xizmatlar o'rniga barcha kerakli jarayonlarni — dastur, server, turniket,
              Face ID va kameralarni bitta qo'ldan, o'zaro to'liq integratsiyalangan holda topshiramiz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Shartnoma asosida 100% rasmiy faoliyat</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Professional muhandislar jamoasi</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Milliy to'lov (Click, Payme) va Soliq OFD</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Toshkentda laboratoriya va tezkor servis</span>
              </div>
            </div>
          </div>

          {/* Right Highlights (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Dasturlash & Integratsiya</h3>
                <p className="text-xs text-slate-500 mt-0.5">Veb, mobil ilovalar va ERP/CRM platformalari</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Smart Uskunalar & Tarmoq</h3>
                <p className="text-xs text-slate-500 mt-0.5">Face ID, MikroTik WireGuard va 4K CCTV montaji</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Kafolatli Servis & Qo'llab-quvvatlash</h3>
                <p className="text-xs text-slate-500 mt-0.5">24/7 monitoring va bepul texnik ko'rsatmalar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
