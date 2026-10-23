import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Hotel,
  ShoppingCart,
  ScanFace,
  ExternalLink,
  ShieldCheck,
  Send,
  Building2,
  CreditCard,
  Wifi,
} from 'lucide-react';

interface HeroProps {
  onOpenConsult: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  const [activeTab, setActiveTab] = useState<'hotel' | 'retail' | 'hardware'>('hotel');

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column (6.5 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Dasturiy ta'minot va Smart uskunalar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-outfit font-black tracking-tight text-slate-900 leading-[1.15]">
              Biznesingiz uchun <span className="text-emerald-700">dasturiy ta'minot</span> va{' '}
              <span className="text-slate-900">aqlli uskunalar</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Mehmonxona, savdo va xizmat ko'rsatish korxonalari uchun maxsus boshqaruv tizimlari (ERP, CRM),
              Face ID biometriya apparatlari hamda xavfsiz MikroTik tarmoqlarini kalit ostida o'rnatamiz.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onOpenConsult}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Loyiha bo'yicha maslahat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://t.me/ecos_uz"
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
                <span>Kalit ostida topshirish</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1 yillik rasmiy kafolat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Soliq OFD va to'lovlar</span>
              </div>
            </div>
          </div>

          {/* Right Product Console (5.5 Cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] space-y-4">
              {/* Console Window Top */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    ecos.uz/system-overview
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-[11px] font-semibold text-emerald-700">Tizim faol</span>
                </div>
              </div>

              {/* Tabs Switcher */}
              <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('hotel')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'hotel'
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Hotel ECOS
                </button>
                <button
                  onClick={() => setActiveTab('retail')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'retail'
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Savdo & Kassa
                </button>
                <button
                  onClick={() => setActiveTab('hardware')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'hardware'
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Face ID & Tarmoq
                </button>
              </div>

              {/* Console Body: Dynamic View */}
              <div className="bg-white rounded-xl p-4 border border-slate-200/80 space-y-4">
                {activeTab === 'hotel' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">Hotel ECOS PMS & Smart Palace</h4>
                          <p className="text-[10px] text-slate-500">Mehmonxona boshqaruv tizimi</p>
                        </div>
                      </div>
                      <a
                        href="https://hotel.ecos.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>hotel.ecos.uz</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Mini Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">Bandlik</span>
                        <span className="text-sm font-bold text-emerald-700 font-mono">84.2%</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">Xonalar</span>
                        <span className="text-sm font-bold text-slate-900 font-mono">101 / 120</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">Bugungi tushum</span>
                        <span className="text-sm font-bold text-slate-900 font-mono">68.4 mln</span>
                      </div>
                    </div>

                    {/* Live Room Strip */}
                    <div className="text-[11px] p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>№ 304 Deluxe — Smart NFC qulfiga ruxsat berildi</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">14:28</span>
                    </div>
                  </div>
                )}

                {activeTab === 'retail' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">ECOS Savdo & POS Kassa</h4>
                          <p className="text-[10px] text-slate-500">Do'konlar va omborxona hisobi</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                        Soliq OFD
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">Kunlik cheklar</span>
                        <span className="text-sm font-bold text-slate-900 font-mono">1,420 ta</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">Kassa tushumi</span>
                        <span className="text-sm font-bold text-emerald-700 font-mono">42.8 mln</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">To'lov usuli</span>
                        <span className="text-sm font-bold text-slate-900 font-mono">Click / Payme</span>
                      </div>
                    </div>

                    <div className="text-[11px] p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Fiskal chek #84920 — Davlat soliq qo'mitasiga yuborildi</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-700 font-semibold">OK</span>
                    </div>
                  </div>
                )}

                {activeTab === 'hardware' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                          <ScanFace className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">Face ID & MikroTik Tarmoqlari</h4>
                          <p className="text-[10px] text-slate-500">Biometrik nazorat va VPN tunnel</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-semibold">
                        WireGuard
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">Terminallar</span>
                        <span className="text-sm font-bold text-slate-900 font-mono">4 ta onlayn</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">Aniqlik</span>
                        <span className="text-sm font-bold text-emerald-700 font-mono">99.8%</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 block font-medium">VPN Ping</span>
                        <span className="text-sm font-bold text-slate-900 font-mono">12 ms</span>
                      </div>
                    </div>

                    <div className="text-[11px] p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-3.5 h-3.5 text-rose-600" />
                        <span>Turniket #1 — Sh. Alimov (08:58) orqali kirdi</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">ISAPI</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Stats Row */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">50+</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Muvaffaqiyatli loyiha</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-emerald-700">100%</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Dastur + Uskuna kalit ostida</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">1 Yil</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Rasmiy to'liq kafolat</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">24/7</p>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Texnik ko'mak xizmati</p>
          </div>
        </div>
      </div>
    </section>
  );
};
