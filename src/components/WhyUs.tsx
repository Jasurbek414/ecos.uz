import React from 'react';
import {
  Layers,
  CreditCard,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const advantages = [
    {
      title: 'Bitta Qo\'ldan To\'liq Yechim (Turnkey)',
      description:
        'Dasturchi, tarmoq muhandisi va apparat o\'rnatuvchilarni alohida qidirishingiz shart emas. ECOS dasturiy ta\'minotdan boshlab, Face ID va serverlarni montaj qilishgacha barcha bosqichni o\'z bo\'yniga oladi.',
      icon: Layers,
      color: 'text-indigo-400 bg-indigo-500/20 border-indigo-500/30',
    },
    {
      title: 'O\'zbekiston To\'lov & Soliq Integratsiyasi',
      description:
        'Click, Payme, Uzum Bank to\'lovlari, milliy fiskal chek (OFD Soliq) tizimlari va mahalliy mehnat qonunchiligi (HR davomat) standartlariga 100% moslashtirilgan.',
      icon: CreditCard,
      color: 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
    },
    {
      title: 'Kiberxavfsizlik & Shifrlangan VPN Tarmoq',
      description:
        'Ma\'lumotlaringiz tashqi xakerlik hujumlaridan himoyalangan. MikroTik WireGuard orqali filiallararo shifrlangan aloqa va Face ID da fotosurat orqali aldashdan (anti-spoofing) to\'liq himoya.',
      icon: ShieldCheck,
      color: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30',
    },
    {
      title: '24/7 Jonli Texnik Qo\'llab-Quvvatlash & Kafolat',
      description:
        'Barcha dastur va o\'rnatilgan uskunalarga rasmiy 1 yillik to\'liq kafolat. Muhandislarimiz tunu-kun favqulodda holatlarda monitoring va tezkor yordam ko\'rsatishga tayyor.',
      icon: Headphones,
      color: 'text-amber-400 bg-amber-500/20 border-amber-500/30',
    },
  ];

  return (
    <section id="why-us" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Nega Aynan ECOS?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white tracking-tight">
            Biznesingizni Nega Bizga Ishonishingiz Kerak?
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Biz shunchaki dastur yozmaymiz, balki biznesingizni samarali va to'xtovsiz ishlaydigan
            avtomatlashtirilgan raqamli tizimga aylantiramiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col sm:flex-row items-start gap-6 group"
              >
                <div
                  className={`p-4 rounded-2xl border shrink-0 group-hover:scale-105 transition-transform ${adv.color}`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-outfit font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
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
