import React, { useState } from 'react';

interface ServiceItem {
  id: string;
  title: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'aligners',
    title: 'Элайнеры',
    image: 'public/images/Услуги-Форма/Элайнеры.jpg',
  },
  {
    id: 'implantation',
    title: 'Имплантация',
    image: 'public/images/Услуги-Форма/Имплантация.png',
  },
  {
    id: 'braces',
    title: 'Брекеты',
    image: 'public/images/Услуги-Форма/Брекеты-2.jpg',
  },
  {
    id: 'therapy',
    title: 'Терапия',
    image: 'public/images/Услуги-Форма/Терапия.png',
  },
];

export const ServicesBooking: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(true);

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; agreed?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  // Автоматическая маска: не дает вводить буквы/лишние символы и форматирует строго под +7
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    
    // Если пользователь полностью стёр ввод
    if (!input) {
      setPhone('');
      return;
    }

    // Очищаем всё, кроме цифр
    let digits = input.replace(/\D/g, '');

    // Если первая цифра 8 или любая другая, принудительно переключаем на 7
    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1);
    } else if (!digits.startsWith('7')) {
      digits = '7' + digits;
    }

    // Ограничиваем ровно 11 цифрами (7 + 10 цифр номера)
    digits = digits.slice(0, 11);

    // Форматируем в стандартный вид: +7 (XXX) XXX-XX-XX
    let formatted = '+7';
    if (digits.length > 1) {
      formatted += ' (' + digits.slice(1, 4);
    }
    if (digits.length >= 4) {
      formatted += ') ' + digits.slice(4, 7);
    }
    if (digits.length >= 7) {
      formatted += '-' + digits.slice(7, 9);
    }
    if (digits.length >= 9) {
      formatted += '-' + digits.slice(9, 11);
    }

    setPhone(formatted);
  };
  const validateForm = () => {
    const newErrors: { fullName?: string; phone?: string; agreed?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Введите имя';
    }

    // Проверка: строго начинается с +7 и содержит ровно 11 цифр
    const digitsOnly = phone.replace(/\D/g, '');
    if (!phone.startsWith('+7') || digitsOnly.length !== 11) {
      newErrors.phone = 'Номер должен начинаться с +7 и содержать 10 цифр номера';
    }

    if (!agreed) {
      newErrors.agreed = 'Подтвердите согласие';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleScrollToForm = () => {
    const formElement = document.getElementById('booking-form-section');
    formElement?.scrollIntoView({ behavior: 'smooth' });
    
    // Дополнительно: через 400мс ставим фокус в поле ФИО для удобства пользователя
    setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>('input[placeholder="ФИО"]');
      input?.focus();
    }, 400);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
      setFullName('');
      setPhone('');
      setErrors({});
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#14234B] font-sans antialiased py-8 lg:py-12 px-4 sm:px-8 overflow-x-hidden">
      <div className="max-w-[1380px] mx-auto">

        {/* ЗАГОЛОВОК СЕКЦИИ */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#14234B] tracking-tight mb-8">
          Услуги
        </h2>

        {/* КАРТОЧКИ: Скролл-лента с выглядыванием 4-й карточки на десктопе */}
        <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 snap-start relative rounded-[28px] overflow-hidden h-[360px] sm:h-[400px] bg-[#1E2530] flex flex-col justify-between p-6 group cursor-pointer shadow-sm hover:shadow-lg transition-all"
            >
              {/* Фоновое фото */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111928]/90 via-[#111928]/30 to-transparent" />

              {/* Название услуги */}
              <div className="relative z-10 mt-auto mb-2">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {service.title}
                </h3>
              </div>

              {/* Кнопка "Консультация >" в правом нижнем углу */}
              <div className="relative z-10 flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleScrollToForm}
                  className="bg-[#212734]/90 hover:bg-[#2F3746] active:scale-95 text-white text-xs font-medium px-4 py-2.5 rounded-full backdrop-blur-sm transition-all cursor-pointer select-none"
                >
                  Консультация
                </button>
                
                <button
                  type="button"
                  onClick={handleScrollToForm}
                  aria-label={`Записаться на ${service.title}`}
                  className="w-9 h-9 rounded-full bg-[#212734]/90 hover:bg-[#28B8B5] active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* БАННЕР С ФОРМОЙ ЗАПИСИ */}
        <section
          id="booking-form-section"
          className="mt-10 lg:mt-14 relative bg-gradient-to-r from-[#1D4A88] via-[#1E437C] to-[#173767] text-white rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end">

            {/* Фото девушки слева */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex justify-center items-end self-end px-4 lg:px-0">
              <img
                src="public/images/Услуги-Форма/МОДЕЛЬ.png?auto=format&fit=crop&w=700&q=80"
                alt="Специалист"
                className="w-[260px] sm:w-[300px] lg:w-[340px] object-contain drop-shadow-2xl translate-y-1"
              />
            </div>

            {/* Контент формы справа */}
            <div className="order-1 lg:order-2 lg:col-span-8 p-6 sm:p-10 lg:py-10 lg:pr-12">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug tracking-tight mb-3">
                Запишитесь на бесплатную консультацию прямо сейчас!
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl">
                Хотите узнать подробнее? Наши специалисты ответят на все ваши вопросы и помогут выбрать оптимальный путь к здоровой и красивой улыбке.
              </p>
          
              {/* Форма: на десктопе все 3 элемента стоят В ОДИН РЯД */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-3.5 items-end">
                  {/* Поле ФИО */}
                  <div>
                    <label className="block text-[11px] text-white/90 mb-1 font-medium">
                      Введите ФИО
                    </label>
                    <input
                      type="text"
                      placeholder="ФИО"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F6F8FC] text-[#1E293B] placeholder-gray-400 text-sm focus:outline-none transition-all ${
                        errors.fullName ? 'ring-2 ring-red-400' : 'focus:ring-2 focus:ring-[#28B8B5]'
                      }`}
                    />
                  </div>

                  {/* Поле Телефон */}
                  <div>
                    <label className="block text-[11px] text-white/90 mb-1 font-medium">
                      Введите номер телефона
                    </label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength={18}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F6F8FC] text-[#1E293B] placeholder-gray-400 text-sm focus:outline-none transition-all ${
                        errors.phone ? 'ring-2 ring-red-400' : 'focus:ring-2 focus:ring-[#28B8B5]'
                      }`}
                    />
                  </div>

                  {/* Кнопка отправки (вровень с инпутами) */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full lg:w-auto px-7 py-3 bg-[#28B8B5] hover:bg-[#229e9b] active:scale-[0.98] text-white font-semibold text-sm rounded-2xl shadow-md transition-all cursor-pointer whitespace-nowrap h-[46px] flex items-center justify-center"
                    >
                      {isSubmitting ? 'Отправка...' : 'Записаться на прием'}
                    </button>
                  </div>
                </div>

                {/* Ошибки валидации (если есть) */}
                {(errors.fullName || errors.phone) && (
                  <div className="text-red-300 text-xs mt-2 space-x-3">
                    {errors.fullName && <span>* {errors.fullName}</span>}
                    {errors.phone && <span>* {errors.phone}</span>}
                  </div>
                )}

                {/* Чекбокс согласия */}
                <div className="mt-4">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-4 h-4 rounded text-[#28B8B5] focus:ring-0 cursor-pointer accent-[#28B8B5]"
                    />
                    <span className="text-[11px] sm:text-xs text-white/80 leading-tight">
                      я даю свое согласие на{' '}
                      <a href="#privacy" className="text-white hover:underline font-medium">
                        обработку персональных данных
                      </a>
                    </span>
                  </label>
                  {errors.agreed && (
                    <p className="text-red-300 text-xs mt-1">{errors.agreed}</p>
                  )}
                </div>
              </form>
            </div>

          </div>
        </section>

      </div>

      {/* МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-14 h-14 bg-[#28B8B5]/20 text-[#28B8B5] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#14234B] mb-2">Заявка принята!</h3>
            <p className="text-gray-600 text-sm mb-6">
              Мы перезвоним вам в течение 10 минут для согласования времени записи.
            </p>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full py-3 bg-[#14234B] hover:bg-[#1E2530] text-white font-medium rounded-xl text-sm transition-colors cursor-pointer"
            >
              Понятно
            </button>
          </div>
        </div>
      )}
    </div>
  );
};