import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsList = [
    {
      quote: t.testimonials.quote,
      author: t.testimonials.author,
      company: t.testimonials.company,
      avatar: '/images/testimonial-avatar.png',
    },
    {
      quote:
        "EcosCRM va EcosVision tizimlari korxonamizning barcha filiallaridagi hisobotlarni 100% bitta ekranda jamlab berdi. Ish samaradorligimiz 2 barobar oshdi!",
      author: "Jasurbek Mo'minov",
      company: 'Toshkent, "EcosHolding" MChJ',
      avatar: '/images/testimonial-avatar.png',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsList[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-[#f8faf9] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854]">
              <span className="w-4 h-0.5 bg-[#00d66c] rounded-full inline-block" />
              <span>{t.testimonials.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-outfit font-black text-slate-900 tracking-tight leading-[1.18]">
              {t.testimonials.title}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              {t.testimonials.description}
            </p>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 bg-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                aria-label="Oldingi fikr"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 bg-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                aria-label="Keyingi fikr"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Testimonial Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md shadow-slate-200/40 relative">
              
              {/* 5 Green Stars */}
              <div className="flex items-center justify-end gap-1 mb-4 text-[#00d66c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00d66c]" />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-5">
                {/* Businessman Avatar */}
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 border-2 border-emerald-100 shadow-xs"
                />

                {/* Quote and Author */}
                <div className="space-y-4">
                  <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed italic">
                    "{current.quote}"
                  </p>

                  <div>
                    <h4 className="font-outfit font-black text-base text-slate-900">
                      {current.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {current.company}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
