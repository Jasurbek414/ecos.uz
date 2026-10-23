import React from 'react';
import {
  Code2,
  Cpu,
  Bot,
  ScanFace,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsult: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsult }) => {
  return (
    <section id="services" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>Asosiy Yo'nalishlar & Kompetensiyalar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-outfit font-black text-slate-900 tracking-tight">
            Biznesingiz Uchun Kompleks IT Xizmatlar
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Dasturiy ta'minot yaratishdan boshlab, tarmoq uskunalarini montaj qilish va sun'iy intellekt
            integratsiyasigacha bo'lgan to'liq tsiklli IT-xizmatlar.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= PILLAR 1: SOFTWARE DEVELOPMENT ================= */}
          <div className="bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shadow-xs">
                <Code2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
                  01. Dasturiy Ta'minot
                </span>
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-900 mt-1">
                  Veb & Mobil Ilovalar, ERP / CRM
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Har qanday murakkablikdagi biznes jarayonlarini avtomatlashtiruvchi zamonaviy dasturlar ishlab chiqamiz.
                </p>
              </div>

              {/* Specific Offerings */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Web & Mobil ilovalar:</strong> React, Flutter (iOS & Android)</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ERP & CRM Tizimlari:</strong> Savdo, moliya va omborxona</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>To'lov tizimlari:</strong> Click, Payme, Uzum va bank API lari</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Yuqori yuklama:</strong> PostgreSQL, Redis, Docker mikroservislar</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-8">
              <button
                onClick={onOpenConsult}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dastur Buyurtma Qilish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================= PILLAR 2: SMART IOT & HARDWARE ================= */}
          <div
            id="iot-hardware"
            className="bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 border border-rose-300 text-rose-700 flex items-center justify-center shadow-xs">
                <ScanFace className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">
                  02. Smart IoT & Uskunalar
                </span>
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-900 mt-1">
                  Face ID, MikroTik & Smart Qulflar
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Biometrik xavfsizlik, xodimlar davomati va korporativ tarmoq infratuzilmasini noldan o'rnatamiz.
                </p>
              </div>

              {/* Specific Offerings */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Face ID Terminallari:</strong> Hikvision, Dahua va ZKTeco</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>MikroTik & VPN:</strong> WireGuard xavfsiz ofislararo tunnel</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Smart Qulflar:</strong> Mehmonxona va ofislar uchun NFC/Bluetooth</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>CCTV Kuzatuv:</strong> 4K kameralar, NVR va AI harakat tahlili</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-8">
              <button
                onClick={onOpenConsult}
                className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Uskunalarni Tanlash</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================= PILLAR 3: AI & AUTOMATION ================= */}
          <div
            id="ai-solutions"
            className="bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 border border-teal-300 text-teal-800 flex items-center justify-center shadow-xs">
                <Bot className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase text-teal-800 tracking-wider">
                  03. AI & Avtomatlashtirish
                </span>
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-900 mt-1">
                  Sun'iy Intellekt & Aqlli Agentlar
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Mijozlar bilan 24/7 muloqot qiluvchi, buyurtma qabul qiluvchi va hisobot tayyorlovchi AI tizimlari.
                </p>
              </div>

              {/* Specific Offerings */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>AI Mijozlar Xizmati:</strong> Telegram, Instagram va sayt botlari</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Avtomat HR Davomat:</strong> Face ID skani orqali oylik (payroll) hisobi</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Savdo Analitikasi:</strong> Katta ma'lumotlar (BI) va savdo prognozi</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Inson omilini kamaytirish:</strong> Qaytariluvchi ishlarni 90% avtomat qilish</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-8">
              <button
                onClick={onOpenConsult}
                className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
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
