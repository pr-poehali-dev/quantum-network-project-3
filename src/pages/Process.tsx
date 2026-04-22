import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const steps = [
  { num: "01", title: "Бриф", desc: "Заполняете короткую анкету о бизнесе, целевой аудитории и пожеланиях. Это занимает 10–15 минут и даёт мне всё необходимое для старта." },
  { num: "02", title: "Анализ", desc: "Изучаю ваш рынок, конкурентов и лучшие практики в нише. Ищу точку отличия, которая ляжет в основу логотипа." },
  { num: "03", title: "Концепции", desc: "Разрабатываю несколько направлений. Показываю вам варианты с объяснением идеи за каждым решением." },
  { num: "04", title: "Правки", desc: "Вы выбираете направление и даёте обратную связь. Дорабатываю до результата, который вас устраивает." },
  { num: "05", title: "Финал", desc: "Передаю все файлы в нужных форматах: SVG, PNG, PDF. Плюс гайд по применению — что можно, что нельзя." },
];

export default function Process() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold tracking-tighter mb-4">ПРОЦЕСС</h1>
          <p className="text-xl text-neutral-500 mb-16 max-w-xl">Понятная последовательность шагов — без сюрпризов и затянутых согласований.</p>
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.num} className={`py-12 grid grid-cols-12 gap-8 border-t border-black ${i === steps.length - 1 ? "border-b" : ""}`}>
                <div className="col-span-2 md:col-span-1">
                  <span className="text-4xl font-bold text-red-600">{s.num}</span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h2 className="text-3xl font-bold tracking-tighter">{s.title}</h2>
                </div>
                <div className="col-span-12 md:col-span-7 md:pt-1">
                  <p className="text-lg text-neutral-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-black text-white p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold tracking-tighter mb-4">Готовы начать?</h3>
              <p className="text-neutral-400">Среднее время от брифа до финального логотипа — 5–14 дней.</p>
            </div>
            <div className="md:text-right">
              <Link to="/contact" className="inline-block px-10 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Написать мне
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
