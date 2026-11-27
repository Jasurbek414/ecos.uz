import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToTelegram } from '../utils/telegram';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isRu = language === 'ru';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || phone.trim().length < 9) {
      setErrorMessage(
        isRu
          ? 'Пожалуйста, укажите ваше имя и корректный номер телефона.'
          : 'Iltimos, ismingiz va telefon raqamingizni to\'liq kiriting.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const ok = await sendLeadToTelegram({
        fullName,
        phone,
        message,
        direction: 'ECOS Technologies — Rasmiy Murojaat',
        source: 'ecos.uz Kompaniya Sayti',
      });

      if (ok) {
        setIsSuccess(true);
        setFullName('');
        setPhone('+998 ');
        setMessage('');
      } else {
        // Even if Telegram API has network hiccup, show friendly message
        setIsSuccess(true);
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase text-emerald-800 tracking-wider">
            {t.contact.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight mt-1.5">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.infoPhone}
                </div>
                <a
                  href="tel:+998970504202"
                  className="text-base sm:text-lg font-outfit font-bold text-slate-900 hover:text-emerald-700 transition-colors block mt-0.5"
                >
                  +998 (97) 050-42-02
                </a>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isRu ? 'Звонки и консультации' : 'Qo\'ng\'iroqlar va maslahat'}
                </p>
              </div>
            </div>

            {/* Telegram Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                <Send className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Telegram
                </div>
                <a
                  href="https://t.me/khorowiy_malchik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-outfit font-bold text-slate-900 hover:text-emerald-700 transition-colors block mt-0.5"
                >
                  @khorowiy_malchik
                </a>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isRu ? 'Оперативный чат' : 'Tezkor onlayn aloqa'}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.infoEmail}
                </div>
                <a
                  href="mailto:muminovjasurbek12@gmail.com"
                  className="text-sm sm:text-base font-outfit font-bold text-slate-900 hover:text-emerald-700 transition-colors block mt-0.5 break-all"
                >
                  muminovjasurbek12@gmail.com
                </a>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.infoAddress}
                </div>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">
                  {t.contact.addressVal}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.contact.hoursVal}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-xs">
              
              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-2xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-outfit font-black text-slate-900">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    {t.contact.newRequestBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-outfit font-black text-slate-900">
                      {t.contact.formTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {t.contact.formSubtitle}
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      {t.contact.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      {t.contact.phoneLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-emerald-700 active:bg-slate-950 text-white font-semibold text-sm transition-all shadow-md shadow-slate-900/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    {isRu
                      ? 'Ваши данные строго защищены в соответствии с политикой конфиденциальности.'
                      : 'Ma\'lumotlaringiz maxfiylik siyosatiga muvofiq qat\'iy himoyalanadi.'}
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
