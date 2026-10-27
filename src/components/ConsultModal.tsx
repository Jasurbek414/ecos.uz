import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  User,
} from 'lucide-react';
import { sendLeadToTelegram } from '../utils/telegram';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDirection?: string;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({
  isOpen,
  onClose,
  initialDirection = 'ERP_CRM',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [direction, setDirection] = useState(initialDirection);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  React.useEffect(() => {
    if (initialDirection) {
      setDirection(initialDirection);
    }
  }, [initialDirection, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendLeadToTelegram({
        fullName,
        phone,
        direction,
        message: notes,
        source: "ecos.uz Konsultatsiya Modali"
      });
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
    setIsDone(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#059669', '#0284c7', '#dc2626'],
      });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl border border-slate-200 p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Yopish"
        >
          <X className="w-4 h-4" />
        </button>

        {isDone ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-outfit font-bold text-slate-900">
              Arizangiz Qabul Qilindi!
            </h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Tez orada ECOS IT mutaxassislari siz bilan bog'lanishadi.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsDone(false);
                  onClose();
                }}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs cursor-pointer"
              >
                Tushunarli
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="pb-2 border-b border-slate-100">
              <h3 className="text-base font-outfit font-bold text-slate-900">
                Loyiha Bo'yicha Bepul Maslahat
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Mutaxassisimiz 15 daqiqada siz bilan bog'lanadi
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-slate-400" />
                Ismingiz *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jasurbek Rahimov"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                Telefon Raqamingiz *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 90 123 45 67"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 font-mono focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Qiziqtirgan Yo'nalish
              </label>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white cursor-pointer"
              >
                <option value="ERP_CRM">🏢 ERP & CRM Tizimlari (Kompaniyani to'liq avtomatlashtirish)</option>
                <option value="MOBILE_APP">📱 Mobil Ilovalar (iOS & Android — Flutter / Native)</option>
                <option value="WEB_SAAS">🌐 Veb-saytlar, Murakkab Portallar va SaaS Platformalar</option>
                <option value="AI_BOT">🤖 Sun'iy Intellekt (AI) & Telegram Botlar</option>
                <option value="HOTEL_PMS">🏨 Hotel ECOS PMS (Mehmonxona boshqaruv tizimi)</option>
                <option value="FACEID_IOT">📹 Face ID & Biometriya (Turniket, Xodimlar/Maktab Davomati)</option>
                <option value="NETWORK_VPN">🛡 Tarmoq Xavfsizligi, MikroTik VPN & Server Infratuzilmasi</option>
                <option value="CUSTOM_DEV">⚙️ Maxsus Buyurtma Asosida Dasturlash (Custom Software)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Qisqacha izoh (ixtiyoriy)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Xodimlar yoki xonalar soni, biznesingiz..."
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Yuborilmoqda...' : 'Arizani Jo\'natish'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
