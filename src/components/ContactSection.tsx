import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  PhoneCall,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  User,
  Phone,
  HelpCircle,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [direction, setDirection] = useState('HOTEL');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#059669', '#0284c7', '#dc2626'],
        });
      } catch (err) {}
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">
            Aloqa & Ariza
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1">
            Biz Bilan Bog'laning
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Loyiha bo'yicha savollaringiz bormi? Mutaxassisimiz 15 daqiqa ichida siz bilan bog'lanib, bepul maslahat beradi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="text-base font-outfit font-bold text-slate-900">
                ECOS Technologies Aloqa Markazi
              </h3>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Telefon raqam:</span>
                    <a href="tel:+998712000055" className="font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                      +998 (71) 200-00-55
                    </a>
                    <span className="text-slate-500 block text-[11px] mt-0.5">
                      Qo'llab-quvvatlash va sotuv bo'limi
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <Send className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Telegram kanal & bot:</span>
                    <a
                      href="https://t.me/ecos_uz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      @ecos_uz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Elektron pochta:</span>
                    <a href="mailto:info@ecos.uz" className="font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                      info@ecos.uz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Bosh ofis:</span>
                    <span className="font-medium text-slate-900">
                      O'zbekiston, Toshkent shahri, IT Park hududi
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Ish vaqti:</span>
                    <span className="font-medium text-slate-900">
                      Dushanba - Shanba, 09:00 - 19:00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <p className="text-xs text-slate-700 font-medium">
                Arizangiz bo'yicha muhandisimiz <strong>15 daqiqa ichida</strong> qo'ng'iroq qiladi.
              </p>
            </div>
          </div>

          {/* Right Clean Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs">
              {isSuccess ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-outfit font-bold text-slate-900">
                    Arizangiz Muvaffaqiyatli Qabul Qilindi!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Rahmat, <strong className="text-slate-900">{fullName}</strong>. Tez orada siz bilan ko'rsatilgan
                    telefon raqamingiz orqali bog'lanamiz.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-3 px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold cursor-pointer"
                  >
                    Yana ariza yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2 border-b border-slate-100">
                    <h3 className="text-base font-outfit font-bold text-slate-900">
                      Loyihani Muhokama Qilish Uchun Ariza
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Ma'lumotlaringizni qoldiring, biz sizga eng ma'qul yechimni tanlab beramiz
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-500" />
                        Ismingiz *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Jasurbek Rahimov"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-slate-500" />
                        Telefon Raqamingiz *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+998 90 123 45 67"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 font-mono focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                      Qiziqtirgan Yo'nalish
                    </label>
                    <select
                      value={direction}
                      onChange={(e) => setDirection(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="HOTEL">Hotel ECOS PMS (Mehmonxona boshqaruvi)</option>
                      <option value="RETAIL">ECOS Savdo & Kassa (POS, Soliq OFD)</option>
                      <option value="FACEID">Face ID & Davomat (Turniket apparatlari)</option>
                      <option value="CUSTOM">Maxsus Dasturiy Ta'minot (Veb, Mobil ilova)</option>
                      <option value="NETWORK">Tarmoq & Kiberxavfsizlik (MikroTik VPN)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Loyiha yoki savolingiz haqida qisqacha (ixtiyoriy)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Biznesingiz turi, xonalar yoki xodimlar soni, rejangiz..."
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Yuborilmoqda...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Arizani Yuborish</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
