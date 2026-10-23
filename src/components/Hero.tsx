import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ShoppingCart,
  Users2,
  ScanFace,
  Bot,
  Zap,
  ChevronRight,
  KeyRound,
} from 'lucide-react';

interface HeroProps {
  onOpenConsult: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  const [activeTab, setActiveTab] = useState<'hotel' | 'crm' | 'iot' | 'ai'>('hotel');

  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white bg-tech-grid">
      {/* Background Soft Ambient Light Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-rose-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Chip Announcement */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs hover:border-emerald-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-emerald-700 font-bold">ECOS 2.0</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Biznesingiz Uchun Kompleks Raqamli Infratuzilma</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-100 text-rose-700 font-bold">YANGI</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-[1.1] text-slate-900">
            Kelajak Texnologiyalari va{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-rose-600 bg-clip-text text-transparent">
              Biznes Avtomatlashtirish
            </span>{' '}
            Ekotizimi
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dasturiy ta'minot (ERP / CRM / Hotel PMS), Smart IoT & Face ID biometriya uskunalari,
            xavfsiz korporativ tarmoqlar hamda Sun'iy Intellekt agentlari — barchasi bitta yaxlit
            kompleks platformada.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsult}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Loyihani Muhokama Qilish</span>
              <span className="w-2 h-2 rounded-full bg-rose-300 animate-ping" />
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-rose-50/50 border border-slate-200 hover:border-rose-300 text-slate-800 hover:text-rose-700 font-bold text-sm sm:text-base shadow-xs transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-rose-600" />
              <span>Narxni Hisoblash (Kalkulyator)</span>
            </a>
          </div>

          {/* Key Value Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">Dastur + Uskuna bitta qo'ldan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">24/7 Texnik qo'llab-quvvatlash</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-rose-600" />
              <span className="font-medium">100% Rasmiy kafolat & Shartnoma</span>
            </div>
          </div>
        </div>

        {/* ==================== INTERACTIVE LIVE DEMO SCREEN ==================== */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-3 sm:p-5 border border-slate-200/90 shadow-xl relative overflow-hidden">
            {/* Top Device Window Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-slate-500 ml-2 hidden sm:inline">
                  https://ecos.uz/platform-preview
                </span>
              </div>

              {/* Ecosystem Interactive Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('hotel')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'hotel'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Hotel ECOS</span>
                </button>

                <button
                  onClick={() => setActiveTab('crm')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'crm'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>CRM & Savdo</span>
                </button>

                <button
                  onClick={() => setActiveTab('iot')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'iot'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ScanFace className="w-3.5 h-3.5" />
                  <span>Smart IoT & Face ID</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'ai'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Agent</span>
                </button>
              </div>
            </div>

            {/* Dynamic Interactive Stage */}
            <div className="mt-4 rounded-2xl bg-slate-50/80 p-4 sm:p-6 border border-slate-200/80 text-slate-900">
              {activeTab === 'hotel' && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-black text-lg text-slate-900">
                          Hotel ECOS Palace & Automation
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                          LIVE SISTEMA
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Xonalar fondi, NFC qulflar, Face ID davomat va 4K CCTV kuzatuv konsoli
                      </p>
                    </div>
                    <a
                      href="https://hotel.ecos.uz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-xs font-bold text-emerald-800 border border-emerald-300 transition-colors flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <span>hotel.ecos.uz ni ko'rish</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Hotel Demo Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Bandlik Darajasi</span>
                      <p className="text-2xl font-bold font-mono text-emerald-600 mt-1">84.2%</p>
                      <span className="text-[10px] text-slate-500">101/120 ta xona band</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Bugungi Tushum</span>
                      <p className="text-2xl font-bold font-mono text-slate-900 mt-1">68.4 mln</p>
                      <span className="text-[10px] text-emerald-600 font-semibold">+14.5% o'sish</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">NFC Smart Qulflar</span>
                      <p className="text-2xl font-bold font-mono text-emerald-700 mt-1">120 IoT</p>
                      <span className="text-[10px] text-emerald-600 font-medium">Bluetooth & RFID faol</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">CCTV Kameralar</span>
                      <p className="text-2xl font-bold font-mono text-rose-600 mt-1">12 ta 4K</p>
                      <span className="text-[10px] text-rose-600 font-medium">AI Harakat deteksiyasi</span>
                    </div>
                  </div>

                  {/* Room status simulation strip */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <KeyRound className="w-4 h-4 text-rose-600" />
                      <span className="text-slate-700 font-medium">
                        № 501 Presidential Suite — Mehmon Smart NFC kartasi orqali kirdi (14:32:10)
                      </span>
                    </div>
                    <span className="font-mono text-emerald-600 font-bold hidden sm:inline">
                      Avtomatlashtirilgan
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'crm' && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-black text-lg text-slate-900">
                          ECOS CRM & Savdo Platformasi
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                          RETAIL & ERP
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Mijozlar bazasi, savdo voronkasi, ombor qoldiqlari va fiskal cheklar
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Oylik Savdo Aylanishi</span>
                      <p className="text-2xl font-bold font-mono text-slate-900 mt-1">840.5 mln</p>
                      <span className="text-[10px] text-emerald-600 font-semibold">+22.4% o'sish</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Faol Bitimlar</span>
                      <p className="text-2xl font-bold font-mono text-emerald-600 mt-1">148 ta</p>
                      <span className="text-[10px] text-slate-500">Voronka bo'yicha</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">POS Kassa Cheklari</span>
                      <p className="text-2xl font-bold font-mono text-emerald-700 mt-1">2,410 ta</p>
                      <span className="text-[10px] text-emerald-600">Soliq integratsiyasi faol</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Mijozlar Qaytiqligi</span>
                      <p className="text-2xl font-bold font-mono text-rose-600 mt-1">94.8%</p>
                      <span className="text-[10px] text-rose-600">LTV ko'rsatkichi</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'iot' && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-black text-lg text-slate-900">
                          Smart IoT, Face ID & MikroTik Tarmoqlari
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300 font-bold">
                          HARDWARE & NETWORK
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Biometrik Face ID turniketlari, WireGuard VPN shifrlash va smart datchiklar
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Face ID Terminallar</span>
                      <p className="text-2xl font-bold font-mono text-emerald-600 mt-1">100% Onlayn</p>
                      <span className="text-[10px] text-slate-500">Hikvision & Dahua ISAPI</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Aniqlash Tezligi</span>
                      <p className="text-2xl font-bold font-mono text-rose-600 mt-1">&lt; 0.2 soniya</p>
                      <span className="text-[10px] text-rose-600">Anti-spoofing himoya</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">MikroTik RouterOS 7</span>
                      <p className="text-2xl font-bold font-mono text-emerald-700 mt-1">WireGuard</p>
                      <span className="text-[10px] text-emerald-600">12ms o'rtacha ping</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Kunlik Biometriya</span>
                      <p className="text-2xl font-bold font-mono text-slate-900 mt-1">15,400+ ta</p>
                      <span className="text-[10px] text-slate-500">Davomat va kirish</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-black text-lg text-slate-900">
                          ECOS AI Business Automation
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                          PRO AI AGENTS
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        24/7 mijozlar bilan muloqot, buyurtmalarni qabul qilish va avtomatik hisobotlar
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">AI Javob Berish Vaqti</span>
                      <p className="text-2xl font-bold font-mono text-emerald-600 mt-1">&lt; 1 soniya</p>
                      <span className="text-[10px] text-slate-500">Telegram & Sayt vidjeti</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Operator Xarajati</span>
                      <p className="text-2xl font-bold font-mono text-rose-600 mt-1">-65% Tejam</p>
                      <span className="text-[10px] text-rose-600">Avtomatik yopilgan lidlar</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Tillar</span>
                      <p className="text-2xl font-bold font-mono text-emerald-700 mt-1">UZ / RU / EN</p>
                      <span className="text-[10px] text-emerald-600">Ovozli va matnli</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[11px] text-slate-500 font-medium">Avtomatik Savdo</span>
                      <p className="text-2xl font-bold font-mono text-slate-900 mt-1">42% konversiya</p>
                      <span className="text-[10px] text-slate-500">Buyurtma shakllantirish</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <p className="text-3xl sm:text-5xl font-outfit font-black text-emerald-600">
              50+
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">
              Muvaffaqiyatli Korporativ Loyiha
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <p className="text-3xl sm:text-5xl font-outfit font-black text-slate-900">
              99.98%
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">
              Uptime & Xavfsizlik Kafolati
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <p className="text-3xl sm:text-5xl font-outfit font-black text-rose-600">
              25k+
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">
              Kunlik Biometrik Skanlar
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <p className="text-3xl sm:text-5xl font-outfit font-black text-emerald-700">
              3x
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">
              Biznes Jarayonlari Tezligi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
