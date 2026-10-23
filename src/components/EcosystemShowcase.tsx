import React from 'react';
import {
  Hotel,
  ShoppingCart,
  GraduationCap,
  ExternalLink,
  ArrowRight,
  Check,
} from 'lucide-react';

interface EcosystemShowcaseProps {
  onOpenConsult: () => void;
}

export const EcosystemShowcase: React.FC<EcosystemShowcaseProps> = ({ onOpenConsult }) => {
  const products = [
    {
      id: 'hotel-ecos',
      title: 'Hotel ECOS — Smart Palace PMS',
      tagline: '5-yulduzli mehmonxonalar uchun xonalar fondi, Smart IoT qulflar, Face ID va CCTV boshqaruvi.',
      badge: 'Flagship Platform',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Hotel,
      liveUrl: 'https://hotel.ecos.uz',
      features: [
        'Xonalar bronlash va interaktiv qavatlar xaritasi',
        'Smart NFC va Bluetooth elektron eshik qulflari',
        '4K CCTV kameralar va Face ID xodimlar davomati',
      ],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ecos-crm',
      title: 'ECOS CRM & Savdo POS',
      tagline: 'B2B va chakana savdo uchun mijozlar bazasi, sotuvlar voronkasi, kassa va ombor hisobi.',
      badge: 'Savdo & Moliya',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      icon: ShoppingCart,
      features: [
        'Soliq OFD fiskal cheklari va shtrix-kod integratsiyasi',
        'Click, Payme, Uzum orqali tezkor to\'lovlar',
        'Real vaqtda ombor qoldiqlari va moliyaviy hisobotlar',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0a67e5577ff0?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'edu-ecos',
      title: 'Edu ECOS — Smart Ta\'lim & Davomat',
      tagline: 'Maktab, litsey va o\'quv markazlari uchun Face ID turniket davomati va ota-onaga xabarnoma.',
      badge: 'Ta\'lim & Nazorat',
      badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
      icon: GraduationCap,
      features: [
        'O\'quvchi kirganda ota-onaga SMS/Telegram xabar',
        'O\'qituvchilar ish vaqti hisobi (Face ID)',
        'O\'quv to\'lovlari va qarzdorliklar nazorati',
      ],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="products" className="py-16 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
            Tayyor Mahsulotlarimiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1">
            ECOS Raqamli Ekotizimi Platformalari
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Sohangizga moslashtirilgan, amaliyotda 100% muvaffaqiyatli ishlayotgan tayyor yechimlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border bg-white/90 backdrop-blur-xs ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-outfit font-bold text-base text-slate-900">{p.title}</h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.tagline}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                      {p.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Jonli Tizimni Ko'rish</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenConsult}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Demo Ko'rish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
