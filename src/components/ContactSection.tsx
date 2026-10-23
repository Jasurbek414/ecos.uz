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

      // Trigger Confetti Celebration with Emerald and Ruby colors
      try {
        confetti({
          particleCount: 110,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#059669', '#E11D48', '#0D9488', '#10B981'],
        });
      } catch (err) {
        // Fallback
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Bog'lanish & Ariza</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-outfit font-black text-slate-900 tracking-tight">
            Biznesingizni Birgalikda Avtomatlashtiramiz
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Mutaxassislarimiz 15 daqiqa ichida siz bilan bog'lanib, bepul konsultatsiya va texnik
            yechim taklif qilishadi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/80 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-outfit font-bold text-slate-900">
                ECOS Technologies Bosh Ofisi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Toshkentdagi innovatsion IT Park va apparat ta'minoti laboratoriyamizga tashrif buyurib,
                uskunalarni jonli sinovdan o'tkazishingiz mumkin.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0 border border-emerald-200">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-medium">Telefon raqamlar:</span>
                    <a href="tel:+998712000055" className="font-bold text-slate-900 hover:text-emerald-700 transition-colors block">
                      +998 (71) 200-00-55
                    </a>
                    <a href="tel:+998901234567" className="font-semibold text-slate-700 hover:text-emerald-700 transition-colors block mt-0.5">
                      +998 (90) 123-45-67 (Telegram)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-rose-100 text-rose-700 shrink-0 border border-rose-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-medium">Elektron pochta:</span>
                    <a href="mailto:info@ecos.uz" className="font-bold text-slate-900 hover:text-rose-700 transition-colors">
                      info@ecos.uz
                    </a>
                    <span className="text-slate-500 block text-xs">sales@ecos.uz (Savdo bo'limi)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0 border border-emerald-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-medium">Ofis manzili:</span>
                    <span className="font-bold text-slate-900">
                      O'zbekiston, Toshkent shahri, Mirzo Ulug'bek tumani, IT Park hududi
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 shrink-0 border border-amber-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-medium">Ish vaqti:</span>
                    <span className="font-bold text-slate-900">Dushanba - Shanba, 09:00 - 19:00</span>
                    <span className="text-emerald-700 block text-[11px] font-semibold mt-0.5">
                      24/7 Navbatchi kiberxavfsizlik va server monitoringi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guaranteed SLA Badge */}
            <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-300">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <p className="text-xs text-slate-700 font-medium">
                Arizangiz <strong>15 daqiqa ichida</strong> ko'rib chiqiladi va yetakchi muhandisimiz
                yechim loyihasi bilan qo'ng'iroq qiladi.
              </p>
            </div>
          </div>

          {/* Right Lead Capture Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-outfit font-black text-slate-900">
                    Arizangiz Qabul Qilindi!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Rahmat, <strong className="text-slate-900">{fullName}</strong>. Tez orada
                    mutaxassisimiz ko'rsatilgan telefon raqamingiz orqali bog'lanadi.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white cursor-pointer"
                    >
                      Yana ariza yuborish
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-outfit font-bold text-slate-900">
                      Bepul Konsultatsiya & Audit Uchun Ariza
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Kerakli ma'lumotlarni qoldiring, biz eng samarali yechimni tanlab beramiz
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-emerald-600" />
                        Ismingiz *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Masalan: Jasurbek Rahimov"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-rose-600" />
                        Telefon Raqamingiz *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+998 90 123 45 67"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 font-mono focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-emerald-600" />
                        Kompaniya yoki Biznes Nomi
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Kompaniya nomi (ixtiyoriy)"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                        Qiziqtirgan Yo'nalish
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors cursor-pointer"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Loyiha Haqida Qisqacha yoki Savollaringiz
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Biznesingiz haqida, xodimlar yoki xonalar soni, maqsadlaringiz..."
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
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

                  <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
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
