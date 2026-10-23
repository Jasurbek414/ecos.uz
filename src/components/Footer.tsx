import React from 'react';
import {
  ArrowUp,
  Send,
  Phone,
  Mail,
  ExternalLink,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-rose-500 p-0.5 shadow-xs">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative">
                  <span className="font-outfit font-black text-lg text-emerald-700">
                    E
                  </span>
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-rose-600" />
                </div>
              </div>
              <span className="font-outfit font-black text-xl tracking-wider text-slate-900">
                ECOS Technologies
              </span>
            </a>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Biznesni kompleks avtomatlashtirish, dasturiy ta'minot (ERP, CRM, Hotel PMS),
              Smart IoT uskunalar montaji va Sun'iy Intellekt yechimlarini ishlab chiqish kompaniyasi.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/ecos_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-all"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@ecos.uz"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-rose-700 hover:border-rose-300 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+998712000055"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-all"
                title="Qo'ng'iroq"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Ecosystem Products */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-slate-900 text-sm uppercase tracking-wider">
              Ekotizim Mahsulotlari
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://hotel.ecos.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>Hotel ECOS Palace</span>
                  <ExternalLink className="w-3 h-3 text-emerald-600" />
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-emerald-700 transition-colors font-medium">
                  ECOS CRM & ERP
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-emerald-700 transition-colors font-medium">
                  ECOS Savdo & Retail POS
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-emerald-700 transition-colors font-medium">
                  ECOS AgroInvest
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-emerald-700 transition-colors font-medium">
                  Edu ECOS Ta'lim
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-slate-900 text-sm uppercase tracking-wider">
              Yo'nalishlar
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-emerald-700 transition-colors font-medium">
                  Web & Mobil Ilovalar
                </a>
              </li>
              <li>
                <a href="#iot-hardware" className="hover:text-emerald-700 transition-colors font-medium">
                  Face ID Terminallari
                </a>
              </li>
              <li>
                <a href="#iot-hardware" className="hover:text-emerald-700 transition-colors font-medium">
                  MikroTik WireGuard VPN
                </a>
              </li>
              <li>
                <a href="#iot-hardware" className="hover:text-emerald-700 transition-colors font-medium">
                  Smart NFC & Bluetooth Qulflar
                </a>
              </li>
              <li>
                <a href="#ai-solutions" className="hover:text-emerald-700 transition-colors font-medium">
                  AI Agentlar & Botlar
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-slate-900 text-sm uppercase tracking-wider">
              Kompaniya
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#why-us" className="hover:text-emerald-700 transition-colors font-medium">
                  Biz Haqimizda
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-700 transition-colors font-medium">
                  Narxlar Kalkulyatori
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-700 transition-colors font-medium">
                  Hamkorlik & Aloqa
                </a>
              </li>
              <li>
                <span className="text-slate-400 cursor-not-allowed">
                  Maxfiylik Siyosati (GDPR)
                </span>
              </li>
              <li>
                <span className="text-slate-400 cursor-not-allowed">
                  Ommaviy Oferta
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} ECOS Technologies MCHJ. Barcha huquqlar himoyalangan.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              O'zbekistonda mehr bilan yaratilgan
            </span>
            <button
              onClick={scrollToTop}
              title="Yuqoriga qaytish"
              className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
