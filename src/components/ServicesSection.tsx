import React from 'react';
import {
  Code2,
  ScanFace,
  Bot,
  ArrowRight,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsult: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsult }) => {
  const services = [
    {
      id: 'software',
      title: 'Dasturiy Ta\'minot Ishlab Chiqish',
      description: 'Biznesingiz ehtiyojlariga moslashtirilgan veb-saytlar, mobil ilovalar (iOS/Android), CRM va ERP tizimlarini noldan ishlab chiqamiz.',
      icon: Code2,
      iconColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      tag: 'Software Dev',
      tagColor: 'bg-emerald-50 text-emerald-700',
      bullets: [
        'Veb-saytlar va mijozlar portallari (React, Next.js)',
        'Mobil ilovalar (Flutter iOS & Android)',
        'Click, Payme, Uzum va Soliq OFD integratsiyalari',
      ],
    },
    {
      id: 'hardware',
      title: 'Smart IoT, Face ID & Tarmoq',
      description: 'Korxona va mehmonxonalar uchun zamonaviy biometrik Face ID turniketlari, 4K video kuzatuv va xavfsiz VPN tarmoqlarini montaj qilamiz.',
      icon: ScanFace,
      iconColor: 'bg-rose-100 text-rose-700 border-rose-200',
      tag: 'IoT & Network',
      tagColor: 'bg-rose-50 text-rose-700',
      bullets: [
        'Hikvision va Dahua Face ID terminallari',
        'MikroTik WireGuard shifrlangan korporativ VPN',
        'Elektron smart NFC/Bluetooth qulflar va turniketlar',
      ],
    },
    {
      id: 'ai',
      title: 'AI & Biznes Avtomatlashtirish',
      description: 'Mijozlaringiz bilan 24/7 muloqot qiluvchi, buyurtma qabul qiluvchi aqlli sun\'iy intellekt agentlari va avtomatik hisobot tizimlari.',
      icon: Bot,
      iconColor: 'bg-teal-100 text-teal-800 border-teal-200',
      tag: 'AI Solutions',
      tagColor: 'bg-teal-50 text-teal-800',
      bullets: [
        'Telegram va veb-saytlar uchun 24/7 AI maslahatchilar',
        'Face ID orqali avtomatik HR oylik (payroll) hisobi',
        'Biznes ko\'rsatkichlarini jonli tahlil qilish (BI)',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
            Xizmatlarimiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1">
            Biznes Uchun IT Xizmatlar Majmuasi
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Dasturlashdan boshlab, tarmoq uskunalarini o'rnatishgacha bo'lgan barcha IT jarayonlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${s.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${s.tagColor}`}>
                      {s.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-outfit font-bold text-slate-900">{s.title}</h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-700">
                    {s.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/60">
                  <button
                    onClick={onOpenConsult}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Batafsil ma'lumot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
