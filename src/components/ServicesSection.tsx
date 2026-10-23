import React from 'react';
import {
  Code2,
  Cpu,
  Bot,
  Smartphone,
  Globe,
  Database,
  Lock,
  Wifi,
  ScanFace,
  Server,
  Zap,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsult: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsult }) => {
  return (
    <section id="services" className="py-24 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Asosiy Yo'nalishlar & Kompetensiyalar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white tracking-tight">
            Biznesingiz Uchun Kompleks IT Xizmatlar
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Dasturiy ta'minot yaratishdan boshlab, tarmoq uskunalarini montaj qilish va sun'iy intellekt
            integratsiyasigacha bo'lgan to'liq tsiklli IT-xizmatlar.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= PILLAR 1: SOFTWARE DEVELOPMENT ================= */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />

            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <Code2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase text-indigo-400 tracking-wider">
                  01. Dasturiy Ta'minot
                </span>
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-white mt-1">
                  Veb & Mobil Ilovalar, ERP / CRM
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Har qanday murakkablikdagi biznes jarayonlarini avtomatlashtiruvchi zamonaviy dasturlar ishlab chiqamiz.
                </p>
              </div>

              {/* Specific Offerings */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Web & Mobil ilovalar:</strong> React, Flutter (iOS & Android)</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>ERP & CRM Tizimlari:</strong> Savdo, moliya va omborxona</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>To'lov tizimlari:</strong> Click, Payme, Uzum va bank API lari</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Yuqori yuklama:</strong> PostgreSQL, Redis, Docker mikroservislar</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8">
              <button
                onClick={onOpenConsult}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-bold transition-all border border-white/10 hover:border-indigo-500 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dastur Buyurtma Qilish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================= PILLAR 2: SMART IOT & HARDWARE ================= */}
          <div
            id="iot-hardware"
            className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-600/20">
                <ScanFace className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider">
                  02. Smart IoT & Uskunalar
                </span>
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-white mt-1">
                  Face ID, MikroTik & Smart Qulflar
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Biometrik xavfsizlik, xodimlar davomati va korporativ tarmoq infratuzilmasini noldan o'rnatamiz.
                </p>
              </div>

              {/* Specific Offerings */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Face ID Terminallari:</strong> Hikvision, Dahua va ZKTeco</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>MikroTik & VPN:</strong> WireGuard xavfsiz ofislararo tunnel</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Smart Qulflar:</strong> Mehmonxona va ofislar uchun NFC/Bluetooth</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>CCTV Kuzatuv:</strong> 4K kameralar, NVR va AI harakat tahlili</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8">
              <button
                onClick={onOpenConsult}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-slate-200 hover:text-white text-xs font-bold transition-all border border-white/10 hover:border-cyan-500 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Uskunalarni Tanlash</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================= PILLAR 3: AI & AUTOMATION ================= */}
          <div
            id="ai-solutions"
            className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400 flex items-center justify-center shadow-lg shadow-purple-600/20">
                <Bot className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider">
                  03. AI & Avtomatlashtirish
                </span>
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-white mt-1">
                  Sun'iy Intellekt & Aqlli Agentlar
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Mijozlar bilan 24/7 muloqot qiluvchi, buyurtma qabul qiluvchi va hisobot tayyorlovchi AI tizimlari.
                </p>
              </div>

              {/* Specific Offerings */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>AI Mijozlar Xizmati:</strong> Telegram, Instagram va sayt botlari</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Avtomat HR Davomat:</strong> Face ID skani orqali oylik (payroll) hisobi</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Savdo Analitikasi:</strong> Katta ma'lumotlar (BI) va savdo prognozi</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Inson omilini kamaytirish:</strong> Qaytariluvchi ishlarni 90% avtomat qilish</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8">
              <button
                onClick={onOpenConsult}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-purple-600 text-slate-200 hover:text-white text-xs font-bold transition-all border border-white/10 hover:border-purple-500 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>AI Agentini Ulash</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
