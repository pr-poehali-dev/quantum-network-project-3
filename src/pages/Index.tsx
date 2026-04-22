export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            Г.РЕЧКИН
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Работы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Обо мне
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ЛОГО
              <br />
              ГРАФ
            </h1>
            <p className="text-xl max-w-xl">
              Логотипы, которые запоминаются навсегда. Георгий Речкин — графический дизайнер из Тюмени. Лучший на рынке — и это не просто слова.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Заказать логотип
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">РАБОТЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/25a04dd0-5113-4b3e-b34a-67b52182f7bd.jpg"
                  alt="Проект 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Логотип для IT-компании</h3>
              <p className="text-neutral-400">Фирменный знак и типографическая система для технологического стартапа</p>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/edffe009-052c-4fa7-826d-7838a3ff465d.jpg"
                  alt="Проект 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Айдентика ресторана</h3>
              <p className="text-neutral-400">Минималистичный логотип и визуальная коммуникация для заведения</p>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/fffe1526-5eeb-4b33-be35-1dee5c3e5f0b.jpg"
                  alt="Проект 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Брендинг магазина</h3>
              <p className="text-neutral-400">Логотип, фирменные цвета и носители для розничного бренда</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ОБО МНЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-bold text-neutral-200">ГР</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Меня зовут Георгий Речкин. Я графический дизайнер из Тюмени, студент ТюмГУ и специалист по созданию логотипов и фирменного стиля.
              </p>
              <p className="mb-6">
                Я убеждён: хороший логотип — это не просто красивая картинка. Это характер бренда, сжатый до одного знака. Именно поэтому к каждому проекту я подхожу с полной отдачей — изучаю бизнес, конкурентов и целевую аудиторию, прежде чем взять карандаш.
              </p>
              <p className="mb-6">
                Работаю быстро, держу слово и делаю так, чтобы результат превосходил ожидания. Это и делает меня лучшим на рынке.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Чистота формы</li>
                    <li>Смысл в каждой линии</li>
                    <li>Уникальность</li>
                    <li>Точность в деталях</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Услуги</h3>
                  <ul className="space-y-2">
                    <li>Логотип</li>
                    <li>Фирменный стиль</li>
                    <li>Брендбук</li>
                    <li>Графика для соцсетей</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Хотите логотип, который работает? Напишите — обсудим ваш проект.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:rechkin@mail.ru" className="hover:underline">
                    rechkin@mail.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Город</span>
                  <span>Тюмень, Россия</span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Учёба</span>
                  <span>ТюмГУ</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Расскажите о вашем бренде"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Заказать логотип
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2026 Георгий Речкин. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Behance
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
