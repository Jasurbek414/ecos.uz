import React from 'react';
import {
  Hotel,
  ShoppingCart,
  Users2,
  Wheat,
  GraduationCap,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Zap,
  Lock,
  Camera,
  Radio,
  BarChart3,
  QrCode,
  ScanFace,
  ExternalLink,
} from 'lucide-react';

interface EcosystemShowcaseProps {
  onOpenConsult: () => void;
}

export const EcosystemShowcase: React.FC<EcosystemShowcaseProps> = ({ onOpenConsult }) => {
  const products = [
    {
      id: 'hotel-ecos',
      title: 'Hotel ECOS — Smart Palace PMS',
      tagline: '5-Yulduzli Mehmonxona va Dam Olish Maskanalari Uchun 100% Yaxlit Boshqaruv',
      badge: 'Flagship Platform',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: Hotel,
      liveUrl: 'https://hotel.ecos.uz',
      features: [
        'Xonalar fondi va 2D/3D qavatlar xaritasi',
        'Smart NFC & Bluetooth eshik qulflari (IoT)',
        'Hikvision / Dahua 4K CCTV jonli kuzatuv konsoli',
        'Housekeeping xizmati va ratsiya (PTT) jonli efiri',
        'Face ID xodimlar davomati va avtomatik HR oylik (payroll)',
      ],
      stats: '120+ Xona • 16 Ta Xodim Roli • 12 Ta 4K Kamera',
      gradient: 'from-amber-600/30 via-slate-900 to-slate-950',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ecos-crm',
      title: 'ECOS CRM & Enterprise ERP',
      tagline: 'B2B va Savdo Korxonalari Uchun Mijozlar, Moliya va Bitimlar Boshqaruvi',
      badge: 'Business Suite',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      icon: Users2,
      features: [
        'Ko\'p bosqichli savdo voronkasi (Kanban board)',
        'Mijozlar bilan aloqa tarixi (Call, Telegram, SMS)',
        'Shartnomalar, schet-fakturalar va to\'lov integratsiyalari',
        'Xodimlar samaradorligi (KPI) va savdo rejalari',
        'Boshqaruvchi uchun jonli analitika va moliyaviy grafiklar',
      ],
      stats: '3x Savdo Konversiyasi • 100% Avtomatlashtirish',
      gradient: 'from-indigo-600/30 via-slate-900 to-slate-950',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ecos-savdo',
      title: 'ECOS Savdo & Retail POS',
      tagline: 'Supermarket, Do\'konlar Tarmog\'i va Restoranlar Uchun Tezkor Kassa va Ombor',
      badge: 'Retail & POS',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: ShoppingCart,
      features: [
        'Tezkor POS kassa interfeysi (sensorli ekran va klaviatura)',
        'Shtrix-kod, QR-kod va tarozilar bilan to\'g\'ridan-to\'g\'ri aloqa',
        'O\'zbekiston davlat soliq (OFD) fiskal cheklari integratsiyasi',
        'Ombor qoldiqlari, partiyalar, tannarx va inventarizatsiya',
        'Click, Payme, Uzum va naqd pul kassa hisobi',
      ],
      stats: '0.5 Sekund Kassa Cheki • Real Vaqt Ombori',
      gradient: 'from-cyan-600/30 via-slate-900 to-slate-950',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e5577ff0?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ecos-agro',
      title: 'ECOS AgroInvest & Agrar Monitoring',
      tagline: 'Qishloq Xo\'jaligi, Ekin Maydonlari va Agro-Logistika Raqamli Nazorati',
      badge: 'AgroTech',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: Wheat,
      features: [
        'Maydonlar kadastri, konturlari va tuproq xaritasi',
        'Texnikalar GPS harakati va yoqilg\'i sarfi nazorati',
        'Hosil prognozi va sarflangan xarajatlar tahlili',
        'Agroinvestitsiyalar rentabelligi va hosil sotuvi hisobi',
      ],
      stats: '15,000+ Gektar Maydon • 25% Xarajat Tejami',
      gradient: 'from-emerald-600/30 via-slate-900 to-slate-950',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'edu-ecos',
      title: 'Edu ECOS — Smart Ta\'lim & Maktablar',
      tagline: 'Maktab, Litsey va O\'quv Markazlari Uchun Face ID Davomat va Nazorat',
      badge: 'EdTech',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      icon: GraduationCap,
      features: [
        'O\'quvchilar va o\'qituvchilar Face ID turniket davomati',
        'O\'quvchi maktabga kirganda ota-onaga Telegram/SMS xabarnoma',
        'Elektron dars jadvali, baholash va jurnal',
        'O\'quv to\'lovlari va qarzdorliklar avtomatik nazorati',
      ],
      stats: '100% Xavfsiz Muhit • Ota-onalarga Tezkor Xabar',
      gradient: 'from-purple-600/30 via-slate-900 to-slate-950',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Mahsulotlar Katalogi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white tracking-tight">
            ECOS Raqamli Ekotizimi Mahsulotlari
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Har bir soha uchun maxsus loyihalashtirilgan, o'zaro bir-biri bilan uzviy integratsiyalashgan
            tayyor platformalar va dasturiy majmualar.
          </p>
        </div>

        {/* Product Cards Stack */}
        <div className="space-y-8">
          {products.map((p, idx) => {
            const Icon = p.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={p.id}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Content (or right when reversed) */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${p.badgeColor}`}
                      >
                        {p.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{p.stats}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-white flex items-center gap-3">
                        <span className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-indigo-400">
                          <Icon className="w-6 h-6" />
                        </span>
                        <span>{p.title}</span>
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 mt-2 font-medium leading-relaxed">
                        {p.tagline}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-2">
                      {p.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {p.liveUrl ? (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <span>Jonli Tizimni Ko'rish</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          onClick={onOpenConsult}
                          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <span>Demo Buyurtma Qilish</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      )}

                      <button
                        onClick={onOpenConsult}
                        className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-white/10 transition-colors cursor-pointer"
                      >
                        Batafsil ma'lumot
                      </button>
                    </div>
                  </div>

                  {/* Right Image / Mockup (or left when reversed) */}
                  <div
                    className={`lg:col-span-5 relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Floating Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-mono text-emerald-400 font-bold">100% ISHLAB TURGAN TIZIM</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">ECOS v2.4</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
