import React from 'react';
import {
  Code,
  Smartphone,
  Bot,
  Cpu,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsult: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsult }) => {
  const services = [
    {
      title: 'ERP & CRM Tizimlari Ishlab Chiqish',
      description: 'Kompaniya jarayonlarini 100% raqamlashtirish: moliya, ombor, savdo, xodimlar davomati va oylik hisoblash tizimlari.',
      icon: Code,
      iconBg: 'bg-emerald-100 text-emerald-800',
      bullets: [
        'React, TypeScript, Spring Boot & Node.js',
        'Click, Payme, Uzum to\'lov tizimlari',
        'Davlat Soliq OFD va 1C integratsiyasi',
      ],
    },
    {
      title: 'Mobil Ilovalar (iOS & Android)',
      description: 'Biznesingiz uchun mijozlar va xodimlar foydalanadigan zamonaviy, tezkor va xavfsiz mobil ilovalar yaratamiz.',
      icon: Smartphone,
      iconBg: 'bg-blue-100 text-blue-800',
      bullets: [
        'Flutter va Kotlin / Swift texnologiyalari',
        'Push bildirishnomalar va offline ishlash rejimi',
        'App Store va Google Play\'ga to\'liq joylashtirish',
      ],
    },
    {
      title: 'Sun\'iy Intellekt (AI) & Telegram Botlar',
      description: 'Mijozlarga avtomatik xizmat ko\'rsatish, savdo qilish va hisobotlarni yuboruvchi aqlli bot va AI assistentlar.',
      icon: Bot,
      iconBg: 'bg-purple-100 text-purple-800',
      bullets: [
        'Telegram bot orqali savdo va qabullar',
        'AI yordamida mijozlar bilan muloqot',
        'Avtomatik kunlik grafik va xabarnomalar',
      ],
    },
    {
      title: 'Smart IoT, Face ID & Tarmoq Xavfsizligi',
      description: 'Biometrik Face ID apparatlari, turniketlar, smart qulflar hamda shifrlangan xavfsiz MikroTik VPN tarmoqlari montaji.',
      icon: Cpu,
      iconBg: 'bg-rose-100 text-rose-700',
      bullets: [
        'Hikvision va Dahua biometrik apparatlari',
        'Mehmonxonalar uchun NFC smart qulflar',
        'MikroTik RouterOS 7 va WireGuard VPN',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
            Xizmatlarimiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1">
            Biznesingiz Uchun IT Yechimlar
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Dasturlashdan boshlab uskunalarni o'rnatishgacha — barcha IT jarayonlar bitta ishonchli jamoa qo'lida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/50 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${srv.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-outfit font-bold text-base text-slate-900">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {srv.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <button
                    onClick={onOpenConsult}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Maslahat olish</span>
                    <span>→</span>
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
