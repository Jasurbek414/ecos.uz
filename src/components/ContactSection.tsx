import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  PhoneCall,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
  Building,
  User,
  Phone,
  HelpCircle,
} from 'lucide-react';

interface ContactSectionProps {
  prefilledSummary?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledSummary }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('ALL');
  const [message, setMessage] = useState(prefilledSummary || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update message if prefilledSummary changes
  React.useEffect(() => {
    if (prefilledSummary) {
      setMessage(prefilledSummary);
    }
  }, [prefilledSummary]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || phone.length < 9) {
      alert('Iltimos, ismingiz va telefon raqamingizni to\'liq kiriting!');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4F46E5', '#06B6D4', '#10B981', '#F59E0B'],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Bog'lanish & Ariza</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-outfit font-black text-white tracking-tight">
            Biznesingizni Birgalikda Avtomatlashtiramiz
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Mutaxassislarimiz 15 daqiqa ichida siz bilan bog'lanib, bepul konsultatsiya va texnik
            yechim taklif qilishadi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-outfit font-bold text-white">
                ECOS Technologies Bosh Ofisi
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Toshkentdagi innovatsion IT Park va apparat ta'minoti laboratoriyamizga tashrif buyurib,
                uskunalarni jonli sinovdan o'tkazishingiz mumkin.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Telefon raqamlar:</span>
                    <a href="tel:+998712000055" className="font-bold text-white hover:text-cyan-400 transition-colors block">
                      +998 (71) 200-00-55
                    </a>
                    <a href="tel:+998901234567" className="font-semibold text-slate-300 hover:text-cyan-400 transition-colors block mt-0.5">
                      +998 (90) 123-45-67 (Telegram)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Elektron pochta:</span>
                    <a href="mailto:info@ecos.uz" className="font-bold text-white hover:text-cyan-400 transition-colors">
                      info@ecos.uz
                    </a>
                    <span className="text-slate-500 block text-xs">sales@ecos.uz (Savdo bo'limi)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Ofis manzili:</span>
                    <span className="font-bold text-white">
                      O'zbekiston, Toshkent shahri, Mirzo Ulug'bek tumani, IT Park hududi
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Ish vaqti:</span>
                    <span className="font-bold text-white">Dushanba - Shanba, 09:00 - 19:00</span>
                    <span className="text-emerald-400 block text-[11px] font-medium mt-0.5">
                      24/7 Navbatchi kiberxavfsizlik va server monitoringi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guaranteed SLA Badge */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-300">
                Arizangiz <strong>15 daqiqa ichida</strong> ko'rib chiqiladi va yetakchi muhandisimiz
                yechim loyihasi bilan qo'ng'iroq qiladi.
              </p>
            </div>
          </div>

          {/* Right Lead Capture Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-outfit font-black text-white">
                    Arizangiz Qabul Qilindi!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Rahmat, <strong className="text-white">{fullName}</strong>. Tez orada
                    mutaxassisimiz ko'rsatilgan telefon raqamingiz orqali bog'lanadi.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white cursor-pointer"
                    >
                      Yana ariza yuborish
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl font-outfit font-bold text-white">
                      Bepul Konsultatsiya & Audit Uchun Ariza
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Kerakli ma'lumotlarni qoldiring, biz eng samarali yechimni tanlab beramiz
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-indigo-400" />
                        Ismingiz *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Masalan: Jasurbek Rahimov"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-indigo-400" />
                        Telefon Raqamingiz *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+998 90 123 45 67"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-indigo-400" />
                        Kompaniya yoki Biznes Nomi
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Kompaniya nomi (ixtiyoriy)"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                        Qiziqtirgan Yo'nalish
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                      >
                        <option value="ALL">Kompleks Ekotizim (Barchasi)</option>
                        <option value="HOTEL">Hotel ECOS (Mehmonxona Avtomatizatsiyasi)</option>
                        <option value="CRM">CRM & ERP Tizimlari</option>
                        <option value="IOT">Smart IoT & Face ID Terminallari</option>
                        <option value="AI">Sun'iy Intellekt & AI Agentlar</option>
                        <option value="OTHER">Boshqa maxsus loyiha</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Loyiha Haqida Qisqacha yoki Savollaringiz
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Biznesingiz haqida, xodimlar yoki xonalar soni, maqsadlaringiz..."
                      className="w-full p-4 rounded-xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Yuborilmoqda...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Arizani Yuborish (Bepul Konsultatsiya)</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Arizani yuborish orqali siz shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
