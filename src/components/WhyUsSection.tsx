import React from 'react';
import {
  Layers,
  CreditCard,
  ShieldCheck,
  Headphones,
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const advantages = [
    {
      title: 'Bitta Jamoa — To\'liq Javobgarlik',
      description: 'Dastur boshqa joydan, turniket va kompyuterlar boshqa joydan olinganda nosozlik yuz bersa bir-biriga to\'nkaydi. ECOS da esa butun tizimga bitta jamoa to\'liq javob beradi.',
      icon: Layers,
      iconColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      title: 'O\'zbekiston Qonunchiligi va Soliq Standartlari',
      description: 'Davlat soliq qo\'mitasi (OFD) fiskal cheklari, Click, Payme, Uzum to\'lov tizimlari hamda mahalliy mehnat hisob-kitoblariga 100% moslashtirilgan.',
      icon: CreditCard,
      iconColor: 'bg-slate-100 text-slate-800',
    },
    {
      title: 'Ma\'lumotlar Xavfsizligi va Shaxsiy Nazorat',
      description: 'Biznesingiz sirlari va hisobotlari begonalar qo\'liga tushmaydi. Face ID apparatlarimizni esa fotosurat yoki telefon orqali alday olmaysiz — faqat tirik insonni taniydi.',
      icon: ShieldCheck,
      iconColor: 'bg-rose-50 text-rose-700',
    },
    {
      title: '1 Yillik Rasmiy Kafolat va O\'qitish',
      description: 'Tizimni topshirgach, xodimlaringizni ishlatishga to\'liq o\'rgatamiz. Barcha dastur va apparatlarga 1 yillik rasmiy kafolat shartnomasi beriladi.',
      icon: Headphones,
      iconColor: 'bg-teal-100 text-teal-800',
    },
  ];

  return (
    <section id="advantages" className="py-16 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
            Afzalliklarimiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1">
            Nega Aynan ECOS Technologies?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Biz mijozlarimizga vaqtinchalik yechim emas, balki yillar davomida uzluksiz ishlaydigan tizim quramiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/50 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all flex items-start gap-4"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${adv.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-outfit font-bold text-base text-slate-900">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
