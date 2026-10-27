import React from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Store,
  Building,
  UtensilsCrossed,
  Hotel,
  Layers,
} from 'lucide-react';

interface GuideSectionProps {
  onOpenConsult: (direction?: string) => void;
}

export const GuideSection: React.FC<GuideSectionProps> = ({ onOpenConsult }) => {
  return (
    <section id="guide" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
            <span>Oddiy tilda tushuntiramiz</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight">
            Dasturiy Ta'minot va Avtomatlashtirish o'zi nima va biznesga nima beradi?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hech qanday murakkab texnik so'zlarsiz — nima uchun zamonaviy bizneslar daftardan voz kechib, dasturlarga o'tmoqda?
          </p>
        </div>

        {/* 4 Core Concepts Explained Simply */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {/* 1. Dastur nima? */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg mb-4">
                💻
              </div>
              <h3 className="font-outfit font-bold text-base text-slate-900 mb-2">
                1. Dasturiy Ta'minot (Dastur) nima?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bu — biznesingizdagi barcha ma'lumotlar (savdo, kassa, qarzlar, tovarlar, mijozlar) xavfsiz saqlanadigan va hisob-kitobni o'zi qiladigan qulay tizim. Daftardek yo'qolmaydi, yirtilmaydi va doim telefoningizda bo'ladi.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Barcha hisob bitta joyda</span>
            </div>
          </div>

          {/* 2. Avtomatlashtirish nima? */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg mb-4">
                ⚡
              </div>
              <h3 className="font-outfit font-bold text-base text-slate-900 mb-2">
                2. Avtomatlashtirish nima?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bu — inson qo'lda qiladigan, ko'p vaqt va asab oladigan ishlarni kompyuterga topshirish. Tovar sotilganda ombordan o'zi ayiriladi, kassa va kunlik sof foydani o'zi hisoblaydi, xodim kelganida daqiqasigacha qayd etadi.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Vaqt va asab tejaladi</span>
            </div>
          </div>

          {/* 3. O'g'rilik va Xatolardan himoya */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold text-lg mb-4">
                🛡
              </div>
              <h3 className="font-outfit font-bold text-base text-slate-900 mb-2">
                3. Xato va Kamomadning oldini olish
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Qo'lda hisoblanganda xodim adashishi, daftardagi sonlar o'zgartirilishi yoki pul kamomad bo'lishi mumkin. Dasturda har bir tiyin tushum, har bir tovar va har bir chek ro'yxatga olinadi — aldashning iloji yo'q.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-rose-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% shaffof nazorat</span>
            </div>
          </div>

          {/* 4. Masofadan boshqarish */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-lg mb-4">
                📱
              </div>
              <h3 className="font-outfit font-bold text-base text-slate-900 mb-2">
                4. Masofadan Boshqaruv
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kun bo'yi ishxonada yoki kassada o'tirishingiz shart emas. Siz safarda, uyda yoki dam olishda bo'lsangiz ham, bugun qancha savdo bo'ldi, kim ishga keldi — barchasini o'z telefoningizda ko'rib turasiz.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-purple-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Telefoningizda 24/7 jonli</span>
            </div>
          </div>
        </div>

        {/* Big Contrast: Avval Qanday Edi vs ECOS Dasturi Bilan */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
              Haqiqiy taqqoslash
            </span>
            <h3 className="text-xl sm:text-3xl font-outfit font-black text-slate-900 tracking-tight mt-1">
              Qog'oz daftarda ishlash vs ECOS dasturi bilan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case 1: Savdo va Kassa */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xs">
              <h4 className="font-outfit font-bold text-base text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span>🛒</span>
                <span>Savdo, Kassa va Ombor</span>
              </h4>
              <div className="mt-4 space-y-4">
                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-rose-900">
                  <div className="flex items-center gap-1.5 font-bold text-rose-700 mb-1">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>Daftarda ishlaganda:</span>
                  </div>
                  <p className="text-rose-800 leading-relaxed">
                    Hamma narsa qog'ozda, qarzlar chalkash, omborda qaysi tovar qolganini bilish uchun kun bo'yi sanash kerak.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-700 mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>ECOS dasturi bilan:</span>
                  </div>
                  <p className="text-emerald-800 leading-relaxed">
                    Telefonda bir tugma bilan: qoldiq tovarlar, kim qancha qarzdorligi va bugungi tushum darhol ko'rinadi.
                  </p>
                </div>
              </div>
            </div>

            {/* Case 2: Xodimlar va Davomat */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xs">
              <h4 className="font-outfit font-bold text-base text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span>👥</span>
                <span>Xodimlar va Oylik hisobi</span>
              </h4>
              <div className="mt-4 space-y-4">
                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-rose-900">
                  <div className="flex items-center gap-1.5 font-bold text-rose-700 mb-1">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>Daftarda ishlaganda:</span>
                  </div>
                  <p className="text-rose-800 leading-relaxed">
                    Xodimlar kech keladi, daftarga yolg'on vaqt yozadi, oy oxirida oylik hisoblashda janjal va norozilik bo'ladi.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-700 mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>ECOS dasturi bilan:</span>
                  </div>
                  <p className="text-emerald-800 leading-relaxed">
                    Face ID apparati yuzni taniydi, daqiqasigacha aniq hisoblaydi va oyni oxirida tayyor oylik jadvalini chiqaradi.
                  </p>
                </div>
              </div>
            </div>

            {/* Case 3: Mijozlar va Buyurtmalar */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xs">
              <h4 className="font-outfit font-bold text-base text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span>📱</span>
                <span>Mijozlar Buyurtmasi</span>
              </h4>
              <div className="mt-4 space-y-4">
                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-rose-900">
                  <div className="flex items-center gap-1.5 font-bold text-rose-700 mb-1">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>Daftarda ishlaganda:</span>
                  </div>
                  <p className="text-rose-800 leading-relaxed">
                    Mijozlar telefon qilib kutadi, xodim ulgurmaydi, xabarlar javobsiz qolib mijoz boshqa joyga ketadi.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-700 mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>ECOS dasturi bilan:</span>
                  </div>
                  <p className="text-emerald-800 leading-relaxed">
                    Telegram bot yoki mobil ilova kechayu-kunduz mijozga tovarlarni ko'rsatadi va avtomatik buyurtma oladi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem-Solver: "O'zingizga mos yechimni toping" for undecided visitors */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider">
                Sizning sohangiz qaysi?
              </span>
              <h3 className="text-2xl sm:text-3xl font-outfit font-black tracking-tight text-white mt-1">
                O'zingizga nima kerakligini bilmayapsizmi?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                O'z faoliyatingiz turini tanlang, biz biznesingizga eng mos dasturni tavsiya qilamiz:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Option 1: Do'kon / Ombor */}
              <button
                onClick={() => onOpenConsult('ERP_CRM')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/80 transition-all text-left flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <Store className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                    Do'kon, Supermarket yoki Ombor
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Kassa, tovar qoldiqlari, tushum va qarz daftarlarini avtomatlashtirish.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
                  <span>Savdo & Kassa dasturi</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Option 2: Ofis / O'quv markazi / Maktab */}
              <button
                onClick={() => onOpenConsult('FACEID_IOT')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/80 transition-all text-left flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                    <Building className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors">
                    Ofis, O'quv markazi, Maktab yoki Ishxona
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Xodimlar yoki o'quvchilar davomatini Face ID bilan nazorat qilish, oylik hisoblash.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-blue-400 font-semibold">
                  <span>Face ID & Davomat tizimi</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Option 3: Kafe / Oshxona / Yetkazib berish */}
              <button
                onClick={() => onOpenConsult('MOBILE_APP')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/80 transition-all text-left flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                    <UtensilsCrossed className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors">
                    Kafe, Oshxona yoki Yetkazib berish
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Telegram orqali avtomatik buyurtma olish, kassa va oshxona o'rtasidagi cheklar.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-purple-400 font-semibold">
                  <span>Telegram Bot & Kassa</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Option 4: Mehmonxona / Dalahovli */}
              <button
                onClick={() => onOpenConsult('HOTEL_PMS')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/80 transition-all text-left flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors">
                    Mehmonxona yoki Dam olish maskani
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Xonalar bandligi, elektron kartali smart qulflar va tozalik nazorati.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-teal-400 font-semibold">
                  <span>Hotel ECOS Tizimi</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Option 5: Maxsus Dastur / O'zgacha G'oya */}
              <button
                onClick={() => onOpenConsult('CUSTOM_DEV')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/80 transition-all text-left flex flex-col justify-between group cursor-pointer sm:col-span-2 lg:col-span-2"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-rose-300 transition-colors">
                    O'zgacha g'oya yoki Maxsus loyihangiz bormi?
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Aynan sizning biznesingiz talablariga mos maxsus mobil ilova, veb-portal yoki murakkab tizimni noldan ishlab chiqamiz.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-rose-400 font-semibold">
                  <span>Maxsus Dasturlash (Custom)</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Bottom CTA Box */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-sm font-semibold text-white">
                  Siz faqat biznesingizdagi muammoni ayting — yechimni biz beramiz!
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Xodimlaringizni ishlatishga o'rgatamiz, 1 yil rasmiy kafolat beramiz.
                </p>
              </div>
              <button
                onClick={() => onOpenConsult()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                <span>Bepul Maslahat Olish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
