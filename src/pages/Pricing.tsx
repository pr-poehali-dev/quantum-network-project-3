import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "СТАРТ",
    price: "5 000 ₽",
    desc: "Для малого бизнеса и стартапов",
    items: ["1 концепция логотипа", "1 раунд правок", "Файлы PNG, SVG", "Срок: 5 дней"],
    accent: false,
  },
  {
    name: "БИЗНЕС",
    price: "12 000 ₽",
    desc: "Оптимальный выбор для большинства",
    items: ["3 концепции логотипа", "2 раунда правок", "Все форматы файлов", "Гайд по применению", "Срок: 7 дней"],
    accent: true,
  },
  {
    name: "ПРЕМИУМ",
    price: "25 000 ₽",
    desc: "Полный фирменный стиль под ключ",
    items: ["5 концепций логотипа", "Неограниченные правки", "Полный брендбук", "Шаблоны соцсетей", "Срок: 14 дней"],
    accent: false,
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold tracking-tighter mb-4">ЦЕНЫ</h1>
          <p className="text-xl text-neutral-500 mb-16 max-w-xl">Прозрачные цены без скрытых платежей. Оплата после утверждения концепции.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-10 border-b md:border-b-0 md:border-r border-black last:border-r-0 last:border-b-0 ${p.accent ? "bg-black text-white" : "bg-white text-black"}`}
              >
                <div className={`text-xs uppercase tracking-widest mb-6 ${p.accent ? "text-red-500" : "text-red-600"}`}>{p.name}</div>
                <div className="text-5xl font-bold tracking-tighter mb-2">{p.price}</div>
                <div className={`text-sm mb-8 ${p.accent ? "text-neutral-400" : "text-neutral-500"}`}>{p.desc}</div>
                <ul className="space-y-3 mb-10">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className={p.accent ? "text-red-500" : "text-red-600"}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 text-sm uppercase tracking-widest transition-colors ${p.accent ? "bg-red-600 text-white hover:bg-white hover:text-black" : "bg-black text-white hover:bg-red-600"}`}
                >
                  Выбрать
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-500 mt-8 text-sm">Не уверены, что подходит? Напишите — подберём вариант под ваш бюджет.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
