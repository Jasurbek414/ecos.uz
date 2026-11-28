import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, Send, Phone, ArrowRight } from 'lucide-react';
import { sendLeadToTelegram } from '../utils/telegram';
import { useLanguage } from '../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
}) => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [product, setProduct] = useState(initialProduct || 'ECOS Ekosistema');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle ESC key and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(language === 'uz' ? 'Ismingizni kiriting' : 'Введите ваше имя');
      return;
    }
    if (phone.replace(/\D/g, '').length < 9) {
      setError(language === 'uz' ? 'Telefon raqamingizni to‘liq kiriting' : 'Введите полный номер телефона');
      return;
    }

    setLoading(true);
    setError('');

    const ok = await sendLeadToTelegram({
      fullName: name,
      phone: phone,
      direction: product,
      source: 'ecos.uz modal',
    });

    setLoading(false);

    if (ok) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setName('');
        setPhone('+998 ');
        onClose();
      }, 2500);
    } else {
      setError(language === 'uz' ? 'Xatolik yuz berdi. Qayta urinib ko‘ring.' : 'Произошла ошибка. Попробуйте еще раз.');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#0e1713] border border-emerald-500/30 rounded-3xl p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(0,229,117,0.18)] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {success ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#00e575] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,229,117,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold font-outfit text-white mb-2">
              {language === 'uz' ? 'Arizangiz qabul qilindi!' : 'Заявка принята!'}
            </h3>
            <p className="text-sm text-gray-300">
              {language === 'uz' 
                ? 'Mutaxassisimiz tez orada siz bilan bog‘lanadi.' 
                : 'Наш специалист свяжется с вами в ближайшее время.'}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00e575] text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e575] animate-ping" />
                ECOS Technologies
              </div>
              <h2 className="text-2xl font-bold font-outfit tracking-tight">
                {language === 'uz' ? 'Bepul konsultatsiya oling' : 'Получите бесплатную консультацию'}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                {language === 'uz'
                  ? 'Ma’lumotlaringizni qoldiring, 15 daqiqa ichida javob beramiz.'
                  : 'Оставьте данные, и мы свяжемся с вами в течение 15 минут.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  {language === 'uz' ? 'Ismingiz' : 'Ваше имя'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'uz' ? 'Masalan: Jasurbek' : 'Например: Жасурбек'}
                  className="w-full px-4 py-3 bg-[#15231c] border border-emerald-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-[#00e575] focus:ring-1 focus:ring-[#00e575] transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  {language === 'uz' ? 'Telefon raqamingiz' : 'Номер телефона'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+998 90 123 45 67"
                  className="w-full px-4 py-3 bg-[#15231c] border border-emerald-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-[#00e575] focus:ring-1 focus:ring-[#00e575] transition-all placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  {language === 'uz' ? 'Qiziqtirgan mahsulot' : 'Интересующий продукт'}
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-4 py-3 bg-[#15231c] border border-emerald-500/20 rounded-xl text-white text-sm focus:outline-none focus:border-[#00e575] focus:ring-1 focus:ring-[#00e575] transition-all cursor-pointer"
                >
                  <option value="ECOS Ekosistema">ECOS Ekosistema (Barcha yechimlar)</option>
                  <option value="EcosHR">EcosHR (Kadrlar va davomat)</option>
                  <option value="EcosPOS">EcosPOS (Savdo va kassa)</option>
                  <option value="EcosCRM">EcosCRM (Mijozlar boshqaruvi)</option>
                  <option value="EcosVision">EcosVision (Kuzatuv va Face ID)</option>
                  <option value="EcosChat">EcosChat (Onlayn muloqot)</option>
                  <option value="EcosPhone">EcosPhone (IP telefoniya)</option>
                </select>
              </div>

              {error && (
                <p className="text-xs text-rose-400 bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00e575] hover:from-emerald-400 hover:to-[#00bf60] text-[#07130e] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(0,229,117,0.35)] cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#07130e]" />
                    <span>{language === 'uz' ? 'Yuborilmoqda...' : 'Отправка...'}</span>
                  </>
                ) : (
                  <>
                    <span>{language === 'uz' ? 'Yuborish' : 'Отправить'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <a
                href="tel:+998970504202"
                className="flex items-center gap-1.5 hover:text-[#00e575] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00e575]" />
                <span>+998 (97) 050-42-02</span>
              </a>
              <a
                href="https://t.me/ecos_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#00e575] transition-colors text-[#00e575] font-medium"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
