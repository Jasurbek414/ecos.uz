import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Send,
  ShoppingCart,
  ScanFace,
  Smartphone,
  Hotel,
  Sparkles,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface HeroProps {
  onOpenConsult: (direction?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  return (
    <section className="pt-28 pb-14 md:pt-36 md:pb-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Dasturiy Ta'minot & Biznesni Avtomatlashtirish</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-outfit font-black tracking-tight text-slate-900 leading-[1.15]">
              Biznesingizni qog'oz va daftardan qutqaring:{' '}
              <span className="text-emerald-700">barcha hisob-kitobni</span> avtomatlashtiramiz
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Kassa, ombor qoldiqlari, xodimlar davomati va mijozlar buyurtmasi — barchasi bitta qulay tizimda va telefoningizda. Biznesingizni xatolarsiz, oson boshqaring.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => onOpenConsult()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Bepul maslahat olish</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://t.me/khorowiy_malchik"
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
                <span>O'rganish juda oson</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Telefonda ishlaydi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1 yillik rasmiy kafolat</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Problem-Solution Helper (6 Cols) - Human-first, No dry technical jargon */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs">
              
              {/* Box Title */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sizga qanday yechim kerak?</span>
                </div>
                <h3 className="text-lg sm:text-xl font-outfit font-black text-slate-900 mt-1">
                  Biznesingizdagi asosiy muammoni tanlang:
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tugmani bosing, biz sizga aynan mos keladigan dasturni taklif qilamiz:
                </p>
              </div>

              {/* 4 Clear Solution Selector Cards */}
              <div className="space-y-2.5">
                
                {/* 1. Savdo & Kassa */}
                <button
                  type="button"
                  onClick={() => onOpenConsult('ERP_CRM')}
                  className="w-full p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition-all text-left flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        Savdo, Kassa va Ombor hisobi
                      </h4>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Do'kon & Ombor
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Daftarga yozishni to'xtatish, tushum va qoldiq tovarlarni telefonda ko'rish.
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </button>

                {/* 2. Davomat & Face ID */}
                <button
                  type="button"
                  onClick={() => onOpenConsult('FACEID_IOT')}
                  className="w-full p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xs transition-all text-left flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ScanFace className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        Xodimlar davomati va oylik (Face ID)
                      </h4>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Ofis & Maktab
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Kech qolishlarni to'xtatish, yuzdan tanish va daqiqasigacha oylik hisoblash.
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </button>

                {/* 3. Mobil Ilova & Bot */}
                <button
                  type="button"
                  onClick={() => onOpenConsult('MOBILE_APP')}
                  className="w-full p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-500 hover:shadow-xs transition-all text-left flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        Mobil Ilova va Telegram Bot
                      </h4>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Savdo & Yetkazish
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Mijozlar menyu va tovarlarni ko'rishi, uydan turib oson buyurtma berishi.
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </button>

                {/* 4. Hotel & Smart Qulflar */}
                <button
                  type="button"
                  onClick={() => onOpenConsult('HOTEL_PMS')}
                  className="w-full p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xs transition-all text-left flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        Mehmonxona yoki Dam olish maskani
                      </h4>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Hotel PMS
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Xonalar bandligi, elektron smart qulflar va tozalik nazorati.
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </button>
              </div>

              {/* Bottom Helpful Note */}
              <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Aynan nima kerakligini bilmayapsizmi?
                </span>
                <button
                  type="button"
                  onClick={() => onOpenConsult()}
                  className="font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer flex items-center gap-1"
                >
                  <span>Bepul maslahat olish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Clean Human-Friendly Stats Row */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">50+</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Muvaffaqiyatli loyiha</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-emerald-700">100%</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Oddiy va o'zbek tilida</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">1 Yil</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Rasmiy to'liq kafolat</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">24/7</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Doimiy qo'llab-quvvatlash</p>
          </div>
        </div>
      </div>
    </section>
  );
};
