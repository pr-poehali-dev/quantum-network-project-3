import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Сколько стоит логотип?", a: "Стоимость зависит от объёма работы. Логотип начинается от 5 000 ₽, полный фирменный стиль — от 25 000 ₽. Точную цену назову после изучения вашего брифа." },
  { q: "Сколько времени займёт работа?", a: "Логотип — от 5 до 14 рабочих дней. Всё зависит от сложности и количества правок. При срочном заказе могу ускорить — обсудим." },
  { q: "Сколько правок включено?", a: "В зависимости от тарифа: от 1 до неограниченного количества раундов правок. Правки в рамках утверждённого направления — всегда бесплатно." },
  { q: "Какие файлы я получу в итоге?", a: "SVG, PNG (на белом и прозрачном фоне), PDF. По запросу — AI или EPS. Плюс гайд по применению логотипа." },
  { q: "Нужно ли платить сразу?", a: "Нет. Работаем по предоплате 50% после утверждения условий. Остальное — после сдачи финального результата." },
  { q: "Что если логотип мне не понравится?", a: "Я работаю до результата, который вас устраивает. Если после всех итераций результат не подошёл — верну предоплату. Такого ещё не было, но гарантия есть." },
  { q: "Вы работаете только с Тюменью?", a: "Нет, работаю с клиентами из любых городов России и СНГ. Всё общение и сдача работ — онлайн." },
  { q: "Как начать работу?", a: "Напишите мне в любой удобный мессенджер или через форму на сайте. Обычно отвечаю в течение часа." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold tracking-tighter mb-4">FAQ</h1>
          <p className="text-xl text-neutral-500 mb-16 max-w-xl">Ответы на самые частые вопросы.</p>
          <div className="max-w-3xl divide-y divide-black border-t border-black">
            {faqs.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full py-6 flex justify-between items-start text-left gap-4"
                >
                  <span className="text-xl font-bold tracking-tight">{f.q}</span>
                  <span className="text-2xl text-red-600 flex-shrink-0 mt-0.5">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="pb-6 text-neutral-600 leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16">
            <p className="text-lg mb-6">Не нашли ответ на свой вопрос?</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors">
              Написать напрямую
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
