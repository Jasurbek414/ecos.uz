import React from 'react';
import {
  Layers,
  CreditCard,
  ShieldCheck,
  Headphones,
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const advantages = [
    {
      title: 'Bitta Qo\'ldan Kalit Ostida',
      description: 'Dasturchi, tarmoqchi va montajchilarni alohida izlamaysiz. Barcha tizimni ECOS o\'z zimmasiga oladi.',
      icon: Layers,
      color: 'text-emerald-700 bg-emerald-100',
    },
    {
      title: 'O\'zbekiston Standartlari',
      description: 'Click, Payme, Uzum to\'lovlari, milliy Soliq OFD cheklari va mahalliy mehnat qonunchiligiga to\'liq mos.',
      icon: CreditCard,
      color: 'text-rose-700 bg-rose-100',
    },
    {
      title: 'Kiberxavfsizlik & VPN',
      description: 'MikroTik WireGuard orqali shifrlangan tarmoq va Face ID da fotosurat orqali aldashdan (anti-spoofing) himoya.',
      icon: ShieldCheck,
      color: 'text-emerald-700 bg-emerald-100',
    },
    {
      title: '1 Yillik Kafolat & 24/7 Servis',
      description: 'Barcha dastur va uskunalarga rasmiy 1 yillik kafolat hamda favqulodda holatlarda tunu-kun tezkor yordam.',
      icon: Headphones,
      color: 'text-slate-800 bg-slate-100',
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
            Nega Aynan ECOS?
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1">
            Biznesingiz Uchun Asosiy Afzalliklar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all space-y-3"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${adv.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-outfit font-bold text-sm text-slate-900">{adv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
