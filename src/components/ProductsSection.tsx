import React from 'react';
import {
  Hotel,
  ShoppingCart,
  ScanFace,
  ExternalLink,
  Check,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ProductsSectionProps {
  onOpenConsult: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenConsult }) => {
  return (
    <section id="products" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
            Mahsulotlarimiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1">
            ECOS Texnologik Mahsulotlari
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Biznesingiz talablariga moslashtirilgan, amaliyotda to'liq sinovdan o'tgan tayyor platformalar.
          </p>
        </div>

        {/* 3 Main Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Hotel ECOS */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Hotel className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  HOTEL PMS
                </span>
              </div>

              <div>
                <h3 className="text-lg font-outfit font-bold text-slate-900">
                  Hotel ECOS — Smart Palace
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Mehmonxona va dam olish maskanlari uchun xonalar fondi, smart qulflar va xizmatchilar boshqaruvi.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Xonalar bandligi va qavatlar xaritasi</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Smart NFC & Bluetooth elektron qulflar</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>4K CCTV kameralar va Face ID davomat</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <a
                href="https://hotel.ecos.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <span>Jonli Tizimni Ko'rish</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. ECOS Savdo POS */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  RETAIL & POS
                </span>
              </div>

              <div>
                <h3 className="text-lg font-outfit font-bold text-slate-900">
                  ECOS Savdo & POS Kassa
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Supermarketlar, do'konlar va omborlar uchun tezkor kassa, fiskal chek va qoldiqlar hisobi.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Soliq OFD fiskal cheklari integratsiyasi</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Click, Payme, Uzum va naqd pul kassa</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Shtrix-kod, tarozilar va ombor partiyalari</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                onClick={onOpenConsult}
                className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Demo Buyurtma Qilish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. ECOS Face ID */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
                  <ScanFace className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                  HARDWARE
                </span>
              </div>

              <div>
                <h3 className="text-lg font-outfit font-bold text-slate-900">
                  ECOS Face ID & Davomat
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Ofislar, maktablar va fabrikalar uchun biometrik turniketlar va xodimlar ish vaqti hisobi.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>Hikvision / Dahua Face ID apparatlari montaji</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>Telegram bot orqali avtomatik kunlik hisobot</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>MikroTik WireGuard orqali xavfsiz VPN</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                onClick={onOpenConsult}
                className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Uskunalarni Tanlash</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
