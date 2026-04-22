import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Логотип",
    desc: "Создаю уникальный знак, который отражает суть вашего бизнеса. Подхожу к работе системно: анализирую рынок, конкурентов и целевую аудиторию.",
    items: ["3 концепции на выбор", "2 раунда правок", "Финальные файлы во всех форматах", "Гайд по использованию"],
  },
  {
    num: "02",
    title: "Фирменный стиль",
    desc: "Полная визуальная система для вашего бренда: логотип, цвета, типографика, паттерны и правила их применения.",
    items: ["Логотип и все его версии", "Фирменные цвета и шрифты", "Шаблоны документов и соцсетей", "Брендбук"],
  },
  {
    num: "03",
    title: "Брендбук",
    desc: "Документ, который объясняет как правильно использовать ваш бренд. Незаменим при работе с подрядчиками и командой.",
    items: ["Правила использования логотипа", "Цветовая палитра", "Типографическая система", "Примеры применения"],
  },
  {
    num: "04",
    title: "Графика для соцсетей",
    desc: "Оформление аккаунтов Instagram, ВКонтакте и других платформ в едином фирменном стиле.",
    items: ["Шаблоны постов и сторис", "Обложки и аватары", "Иконки актуального", "Подача в PDF или Figma"],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold tracking-tighter mb-4">УСЛУГИ</h1>
          <p className="text-xl text-neutral-500 mb-16 max-w-xl">Всё, что нужно вашему бренду — от логотипа до полного визуального стиля.</p>
          <div className="space-y-0 divide-y divide-black">
            {services.map((s) => (
              <div key={s.num} className="py-12 grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-1">
                  <span className="text-sm text-red-600 font-bold">{s.num}</span>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h2 className="text-4xl font-bold tracking-tighter mb-4">{s.title}</h2>
                  <p className="text-neutral-600">{s.desc}</p>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/pricing" className="inline-block px-10 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors">
              Посмотреть цены
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
