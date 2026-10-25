import { useState } from 'react';
import { ServicesBooking } from './ServicesBooking';
import heroPainting from './assets/hero-painting.jpg';
import project1 from './assets/project-1.jpg';
import project2 from './assets/project-2.jpg';
import project3 from './assets/project-3.jpg';

// Вставляем проект 01 (Светлый Дом / Додзё Медиа)
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  linkText: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'БРИСКЛИ',
    category: 'Сайт · Брендинг · Реклама',
    image: project1,
    linkText: 'Смотреть проект →',
  },
  {
    id: 2,
    title: 'ТРЕЙД ОВЕРСИЗ',
    category: 'Сайт · Стратегия · Реклама',
    image: project2,
    linkText: 'Смотреть проект →',
  },
  {
    id: 3,
    title: 'ГОСТИНЫЙ ДВОР',
    category: 'Сайт · Брендинг · Стратегия',
    image: project3,
    linkText: 'Смотреть проект →',
  },
];

function DojoMediaView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F4EFE6] text-[#1A1A1A] font-sans antialiased selection:bg-[#2A1D2D] selection:text-white pb-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-6 lg:py-10">
        <header className="flex items-center justify-between pb-6 border-b border-[#E0D9CD]">
          <div className="text-2xl sm:text-3xl tracking-tight font-serif text-[#1A1A1A]">
            Додзё Медиа
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-normal text-[#1A1A1A]">
            <a href="#projects" className="hover:opacity-60 transition-opacity">Проекты</a>
            <a href="#approach" className="hover:opacity-60 transition-opacity">Подход</a>
            <a href="#contacts" className="hover:opacity-60 transition-opacity">Контакты</a>
          </nav>
          <button 
            onClick={() => window.location.href = 'mailto:hello@dojo-media.com'}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#2A1D2D] text-white px-8 py-3.5 text-sm hover:bg-[#3d2c41] transition-colors cursor-pointer">
            Обсудить проект <span>→</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-[#E0D9CD] bg-[#F4EFE6] space-y-1.5 focus:outline-none cursor-pointer"
            aria-label="Меню"
          >
            <span className={`block h-[1.5px] w-5 bg-[#1A1A1A] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-[#1A1A1A] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-[#1A1A1A] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-b border-[#E0D9CD] space-y-4">
            <a href="#projects" className="block text-base hover:opacity-60">Проекты</a>
            <a href="#approach" className="block text-base hover:opacity-60">Подход</a>
            <a href="#contacts" className="block text-base hover:opacity-60">Контакты</a>
            <button 
              onClick={() => window.location.href = 'mailto:hello@dojo-media.com'}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#2A1D2D] text-white px-8 py-3.5 text-sm hover:bg-[#3d2c41] transition-colors cursor-pointer">
              Обсудить проект <span>→</span>
            </button>
          </div>
        )}

        {/* HERO СЕКЦИЯ */}
        <section className="pt-10 lg:pt-16 pb-12 lg:pb-16">
          {/* lg:items-end прижимает правый блок к нижней линии заголовка */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 mb-8 lg:mb-12">
            <div>
              <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#736B63] mb-4">
                САЙТЫ · ПОИСК · СМЫСЛ
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-[72px] leading-[1.08] tracking-tight max-w-2xl font-serif">
                Цифровое ремесло.<br />
                Измеримый результат.
              </h1>
            </div>

            {/* Правый текстовый блок */}
            <div className="lg:max-w-sm flex flex-col justify-between lg:pb-2">
              <p className="text-sm sm:text-base leading-relaxed text-[#4A453F] mb-4">
                Собираем сайты, поиск и рекламу в единую систему. Помогаем амбициозным брендам расти.
              </p>
              <p className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#736B63]">
                ИЗ ЯРОСЛАВЛЯ — В ЛЮБУЮ ТОЧКУ МИРА
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden border border-[#E0D9CD]">
            <img
              src={heroPainting}
              alt="Цифровое ремесло Додзё Медиа"
              className="w-full h-[220px] sm:h-[380px] lg:h-[480px] object-cover object-center"
            />
          </div>
        </section>
        
        <section id="projects" className="py-8 lg:py-12 border-t border-[#E0D9CD]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 lg:mb-10 gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] tracking-tight font-serif">
              Избранные работы
            </h2>
            <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#736B63]">
              ТРИ ПРОЕКТА. ТРИ ИСТОРИИ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group border border-[#E0D9CD] bg-[#F4EFE6] p-4 flex flex-col justify-between hover:border-[#1A1A1A] transition-colors duration-200"
              >
                <div>
                  <div className="w-full aspect-[4/3] overflow-hidden mb-5 bg-[#EAE4D9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl tracking-tight mb-2 font-serif">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#736B63] mb-6">
                    {project.category}
                  </p>
                </div>
                <a
                  href="#project-details"
                  className="inline-flex items-center text-xs tracking-wider text-[#1A1A1A] group-hover:translate-x-1 transition-transform"
                >
                  {project.linkText}
                </a>
              </article>
            ))}
          </div>
        </section>

        <footer id="contacts" className="pt-12 sm:pt-16 pb-8 border-t border-[#E0D9CD] mt-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3 font-serif">
                Начнём с вашей идеи.
              </h2>
              <a
                href="mailto:hello@dojo-media.com"
                className="text-sm sm:text-base text-[#575149] hover:text-[#1A1A1A] underline decoration-1 underline-offset-4"
              >
                hello@dojo-media.com
              </a>
            </div>
            <button 
              onClick={() => window.location.href = 'mailto:hello@dojo-media.com'}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#2A1D2D] text-white px-8 py-3.5 text-sm hover:bg-[#3d2c41] transition-colors cursor-pointer">
              Обсудить проект <span>→</span>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#736B63] gap-2 pt-6 border-t border-[#E0D9CD]/60">
            <div>© 2026 Додзё Медиа</div>
            <div>Мастерство начинается с деталей.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'landing1' | 'landing2'>('landing1');

  return (
    <div className="min-h-screen flex flex-col">
      {/* ПЛАВАЮЩИЙ СЕЛЕКТОР МАКЕТОВ ДЛЯ ПРОВЕРЯЮЩЕГО */}
      <div className="sticky top-0 z-50 bg-[#111827] text-white px-4 py-2.5 flex items-center justify-between border-b border-gray-800 shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">Тестовое задание Вайб-кодер</span>
        </div>

        <div className="flex items-center bg-gray-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('landing1')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'landing1'
                ? 'bg-[#F4EFE6] text-[#1A1A1A] shadow'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            01. Светлый Дом (Додзё)
          </button>
          <button
            onClick={() => setActiveTab('landing2')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'landing2'
                ? 'bg-[#28B8B5] text-white shadow'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            02. Услуги и запись
          </button>
        </div>
      </div>

      {/* ОТОБРАЖЕНИЕ ВЫБРАННОГО МАКЕТА */}
      <main className="flex-1">
        {activeTab === 'landing1' ? <DojoMediaView /> : <ServicesBooking />}
      </main>
    </div>
  );
}