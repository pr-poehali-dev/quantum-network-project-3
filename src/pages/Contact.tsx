import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8 bg-red-600 text-white min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold tracking-tighter mb-4">КОНТАКТЫ</h1>
          <p className="text-xl mb-16 max-w-xl opacity-80">Хотите логотип, который работает? Напишите — обсудим ваш проект.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-6 border-b border-white/20 pb-6">
                  <span className="text-xs uppercase tracking-widest opacity-60 w-24 pt-1">Почта</span>
                  <a href="mailto:rechkin@mail.ru" className="text-xl hover:underline">rechkin@mail.ru</a>
                </div>
                <div className="flex items-start gap-6 border-b border-white/20 pb-6">
                  <span className="text-xs uppercase tracking-widest opacity-60 w-24 pt-1">Город</span>
                  <span className="text-xl">Тюмень, Россия</span>
                </div>
                <div className="flex items-start gap-6 border-b border-white/20 pb-6">
                  <span className="text-xs uppercase tracking-widest opacity-60 w-24 pt-1">Учёба</span>
                  <span className="text-xl">ТюмГУ</span>
                </div>
                <div className="flex items-start gap-6">
                  <span className="text-xs uppercase tracking-widest opacity-60 w-24 pt-1">Соцсети</span>
                  <div className="flex gap-6">
                    <a href="#" className="text-xl hover:underline">Instagram</a>
                    <a href="#" className="text-xl hover:underline">Behance</a>
                    <a href="#" className="text-xl hover:underline">Telegram</a>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-6">
                <p className="text-sm opacity-80">Обычно отвечаю в течение часа в рабочее время (10:00–20:00 по Тюмени).</p>
              </div>
            </div>
            <div>
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-3 opacity-60">Имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white/40 py-2 px-0 focus:outline-none focus:border-white placeholder-white/40 text-white"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-3 opacity-60">Почта</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white/40 py-2 px-0 focus:outline-none focus:border-white placeholder-white/40 text-white"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-xs uppercase tracking-widest mb-3 opacity-60">Бюджет</label>
                  <select
                    id="budget"
                    className="w-full bg-transparent border-b-2 border-white/40 py-2 px-0 focus:outline-none focus:border-white text-white"
                  >
                    <option className="text-black" value="">Выберите бюджет</option>
                    <option className="text-black" value="5000">до 5 000 ₽</option>
                    <option className="text-black" value="12000">5 000 – 12 000 ₽</option>
                    <option className="text-black" value="25000">12 000 – 25 000 ₽</option>
                    <option className="text-black" value="25000+">от 25 000 ₽</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-3 opacity-60">О проекте</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white/40 py-2 px-0 focus:outline-none focus:border-white placeholder-white/40 text-white resize-none"
                    placeholder="Расскажите о вашем бизнесе и задаче"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
