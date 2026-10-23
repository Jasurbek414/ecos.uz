import React from 'react';
import {
  Check,
  Building,
  ShieldCheck,
  Users,
  Award,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
              Biz Haqimizda
            </span>
            <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight">
              ECOS Technologies — Biznes Infratuzilmasini Yaratuvchi Jamoa
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Biz O'zbekiston korxonalari uchun dasturiy ta'minot yaratish, biometrik Face ID uskunalarini o'rnatish
              hamda kiberxavfsiz tarmoqlarni sozlashga ixtisoslashgan texnologik kompaniyamiz.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bizning asosiy afzalligimiz — <strong>bitta qo'ldan kalit ostida topshirish</strong> tamoyili.
              Siz dasturchi, tarmoqchi va xavfsizlik muhandisini alohida izlamaysiz. Barcha apparat va dasturiy
              ta'minot bir-biriga uzviy bog'langan holda ishga tushiriladi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>Shartnoma asosida 100% rasmiy faoliyat</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>Soliq OFD va Click/Payme to'liq integratsiya</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>1 yillik rasmiy kafolat va texnik yordam</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>Toshkentda o'z servis laboratoriyamiz</span>
              </div>
            </div>
          </div>

          {/* Right Cards (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Ofis va Laboratoriya</h4>
                <p className="text-xs text-slate-500 mt-0.5">Toshkent shahri, IT Park hududi</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Tajribali Muhandislar</h4>
                <p className="text-xs text-slate-500 mt-0.5">Dasturchilar va tarmoq xavfsizligi mutaxassislari</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Ishonchli Xizmat</h4>
                <p className="text-xs text-slate-500 mt-0.5">Barcha loyihalar rasmiy shartnoma bilan topshiriladi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
