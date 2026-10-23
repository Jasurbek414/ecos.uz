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
  Network,
  Bot,
  Play,
  Zap,
  Activity,
  Layers,
  ChevronRight,
  KeyRound,
  Radio,
} from 'lucide-react';

interface HeroProps {
  onOpenConsult: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  const [activeTab, setActiveTab] = useState<'hotel' | 'crm' | 'iot' | 'ai'>('hotel');

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow bg-tech-grid">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Chip Announcement */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-indigo-500/30 text-xs font-semibold text-slate-200 shadow-lg shadow-indigo-900/20 hover:border-indigo-400/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-cyan-300">ECOS 2.0</span>
            <span className="text-slate-500">•</span>
            <span>Biznesingiz Uchun Kompleks Raqamli Infratuzilma</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-[1.1] text-white">
            Kelajak Texnologiyalari va{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
              Biznes Avtomatlashtirish
            </span>{' '}
            Ekotizimi
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Dasturiy ta'minot (ERP / CRM / Hotel PMS), Smart IoT & Face ID biometriya uskunalari,
            xavfsiz korporativ tarmoqlar hamda Sun'iy Intellekt agentlari — barchasi bitta yaxlit
            kompleks platformada.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsult}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Loyihani Muhokama Qilish</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel hover:bg-slate-900 border-white/10 hover:border-indigo-400/30 text-slate-200 hover:text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Narxni Hisoblash (Kalkulyator)</span>
            </a>
          </div>

          {/* Key Value Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dastur + Uskuna bitta qo'ldan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>24/7 Texnik qo'llab-quvvatlash</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Rasmiy kafolat & Shartnoma</span>
            </div>
          </div>
        </div>

        {/* ==================== INTERACTIVE LIVE DEMO SCREEN ==================== */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-panel rounded-3xl p-3 sm:p-5 border-white/10 shadow-2xl relative overflow-hidden">
            {/* Top Device Window Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  https://ecos.uz/platform-preview
                </span>
              </div>

              {/* Ecosystem Interactive Tabs */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-white/10 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('hotel')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'hotel'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Hotel ECOS</span>
                </button>

                <button
                  onClick={() => setActiveTab('crm')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'crm'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>CRM & Savdo</span>
                </button>

                <button
                  onClick={() => setActiveTab('iot')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'iot'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ScanFace className="w-3.5 h-3.5" />
                  <span>Smart IoT & Face ID</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'ai'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Agent</span>
                </button>
              </div>
            </div>

            {/* Dynamic Interactive Stage */}
            <div className="mt-4 rounded-2xl bg-slate-950 p-4 sm:p-6 border border-white/5 text-white">
              {activeTab === 'hotel' && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-black text-lg text-white">
                          Hotel ECOS Palace & Automation
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          LIVE SISTEMA
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Xonalar fondi, NFC qulflar, Face ID davomat va 4K CCTV kuzatuv konsoli
                      </p>
                    </div>
                    <a
                      href="https://hotel.ecos.uz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-indigo-600/40 hover:bg-indigo-600 text-xs font-bold text-indigo-300 hover:text-white border border-indigo-500/40 transition-colors flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <span>hotel.ecos.uz ni ko'rish</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Hotel Demo Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Bandlik Darajasi</span>
                      <p className="text-xl font-bold font-mono text-emerald-400 mt-1">84.2%</p>
                      <span className="text-[10px] text-slate-500">101/120 ta xona band</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Bugungi Tushum</span>
                      <p className="text-xl font-bold font-mono text-amber-300 mt-1">68.4 mln</p>
                      <span className="text-[10px] text-emerald-400">+14.5% o'sish</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">NFC Smart Qulflar</span>
                      <p className="text-xl font-bold font-mono text-cyan-400 mt-1">120 IoT</p>
                      <span className="text-[10px] text-cyan-300">Bluetooth & RFID faol</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">CCTV Kameralar</span>
                      <p className="text-xl font-bold font-mono text-indigo-400 mt-1">12 ta 4K</p>
                      <span className="text-[10px] text-indigo-300">AI Harakat deteksiyasi</span>
                    </div>
                  </div>

                  {/* Room status simulation strip */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <KeyRound className="w-4 h-4 text-amber-400" />
                      <span className="text-slate-300">
                        № 501 Presidential Suite — Mehmon Smart NFC kartasi orqali kirdi (14:32:10)
                      </span>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold hidden sm:inline">
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
                        <span className="font-outfit font-black text-lg text-white">
                          ECOS CRM & Savdo Platformasi
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          RETAIL & ERP
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Mijozlar bazasi, savdo voronkasi, ombor qoldiqlari va fiskal cheklar
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Oylik Savdo Aylanishi</span>
                      <p className="text-xl font-bold font-mono text-indigo-400 mt-1">840.5 mln</p>
                      <span className="text-[10px] text-emerald-400">+22.4% o'sish</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Faol Bitimlar</span>
                      <p className="text-xl font-bold font-mono text-amber-400 mt-1">148 ta</p>
                      <span className="text-[10px] text-slate-400">Voronka bo'yicha</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">POS Kassa Cheklari</span>
                      <p className="text-xl font-bold font-mono text-emerald-400 mt-1">2,410 ta</p>
                      <span className="text-[10px] text-slate-400">Soliq integratsiyasi faol</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Mijozlar Qaytiqligi</span>
                      <p className="text-xl font-bold font-mono text-cyan-400 mt-1">94.8%</p>
                      <span className="text-[10px] text-cyan-300">LTV ko'rsatkichi</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'iot' && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-black text-lg text-white">
                          Smart IoT, Face ID & MikroTik Tarmoqlari
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                          HARDWARE & NETWORK
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Biometrik Face ID turniketlari, WireGuard VPN shifrlash va smart datchiklar
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Face ID Terminallar</span>
                      <p className="text-xl font-bold font-mono text-indigo-400 mt-1">100% Onlayn</p>
                      <span className="text-[10px] text-slate-400">Hikvision & Dahua ISAPI</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Aniqlash Tezligi</span>
                      <p className="text-xl font-bold font-mono text-emerald-400 mt-1">&lt; 0.2 soniya</p>
                      <span className="text-[10px] text-emerald-400">Anti-spoofing himoya</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">MikroTik RouterOS 7</span>
                      <p className="text-xl font-bold font-mono text-cyan-400 mt-1">WireGuard</p>
                      <span className="text-[10px] text-cyan-300">12ms o'rtacha ping</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Kunlik Biometriya</span>
                      <p className="text-xl font-bold font-mono text-amber-400 mt-1">15,400+ ta</p>
                      <span className="text-[10px] text-slate-400">Davomat va kirish</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-outfit font-black text-lg text-white">
                          ECOS AI Business Automation
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          PRO AI AGENTS
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        24/7 mijozlar bilan muloqot, buyurtmalarni qabul qilish va avtomatik hisobotlar
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">AI Javob Berish Vaqti</span>
                      <p className="text-xl font-bold font-mono text-purple-400 mt-1">&lt; 1 soniya</p>
                      <span className="text-[10px] text-slate-400">Telegram & Sayt vidjeti</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Operator Xarajati</span>
                      <p className="text-xl font-bold font-mono text-emerald-400 mt-1">-65% Tejam</p>
                      <span className="text-[10px] text-emerald-400">Avtomatik yopilgan lilar</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Tillar</span>
                      <p className="text-xl font-bold font-mono text-cyan-400 mt-1">UZ / RU / EN</p>
                      <span className="text-[10px] text-cyan-300">Ovozli va matnli</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                      <span className="text-[11px] text-slate-400">Avtomatik Savdo</span>
                      <p className="text-xl font-bold font-mono text-amber-400 mt-1">42% konversiya</p>
                      <span className="text-[10px] text-slate-400">Buyurtma shakllantirish</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-center">
          <div>
            <p className="text-3xl sm:text-5xl font-outfit font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              50+
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">
              Muvaffaqiyatli Korporativ Loyiha
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-5xl font-outfit font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              99.98%
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">
              Uptime & Xavfsizlik Kafolati
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-5xl font-outfit font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              25k+
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">
              Kunlik Biometrik Skanlar
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-5xl font-outfit font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              3x
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">
              Biznes Jarayonlari Tezligi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
