import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  User,
  Building,
  Sparkles,
} from 'lucide-react';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [interest, setInterest] = useState('ALL');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.5 },
        });
      } catch (err) {}
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
      <div className="glass-panel bg-slate-950/95 max-w-lg w-full rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl relative my-auto animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-900 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isDone ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-outfit font-black text-white">
              Arizangiz Qabul Qilindi!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto">
              Tez orada ECOS IT mutaxassislari siz bilan ko'rsatilgan raqam orqali bog'lanishadi.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsDone(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer"
              >
                Tushunarli
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-outfit font-bold text-white">
                  Bepul IT Konsultatsiya Olish
                </h3>
                <p className="text-xs text-slate-400">
                  Biznesingizni avtomatlashtirish bo'yicha ekspert tavsiyasi
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                Ismingiz *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jasurbek Rahimov"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                Telefon Raqamingiz *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 90 123 45 67"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Qiziqtirgan Yo'nalish
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="ALL">Kompleks Ekotizim (Barchasi)</option>
                <option value="HOTEL">Hotel ECOS (Mehmonxona Avtomatizatsiyasi)</option>
                <option value="CRM">CRM & ERP Tizimlari</option>
                <option value="IOT">Smart IoT & Face ID Terminallari</option>
                <option value="AI">Sun'iy Intellekt & AI Agentlar</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Qo'shimcha izoh (ixtiyoriy)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Xodimlar yoki xonalar soni, maqsadlaringiz..."
                className="w-full p-3 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Yuborilmoqda...' : 'Arizani Jo\'natish'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
