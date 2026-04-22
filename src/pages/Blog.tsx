import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const posts = [
  {
    date: "15 апреля 2026",
    tag: "Советы",
    title: "5 признаков плохого логотипа",
    desc: "Почему большинство логотипов не работают и как отличить качественный знак от «нарисованного за час».",
  },
  {
    date: "3 апреля 2026",
    tag: "Разбор",
    title: "Почему минимализм — это не простота",
    desc: "Многие путают минимализм с отсутствием идей. Объясняю, почему за простой формой всегда стоит сложная работа.",
  },
  {
    date: "22 марта 2026",
    tag: "Процесс",
    title: "Как я создаю логотип: от брифа до финала",
    desc: "Полный разбор моего рабочего процесса с примерами скетчей и промежуточных версий реального проекта.",
  },
  {
    date: "10 марта 2026",
    tag: "Советы",
    title: "Что написать дизайнеру в первом сообщении",
    desc: "Частая проблема клиентов — не знают, с чего начать. Составил шаблон идеального первого сообщения.",
  },
  {
    date: "28 февраля 2026",
    tag: "Разбор",
    title: "Цвет в логотипе: как не ошибиться",
    desc: "Разбираю психологию цвета на примерах известных брендов и объясняю, как выбрать цвет для своего логотипа.",
  },
  {
    date: "14 февраля 2026",
    tag: "Кейс",
    title: "Как мы переработали логотип тюменской кофейни",
    desc: "Кейс с «до» и «после»: почему старый знак не работал и что мы изменили.",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold tracking-tighter mb-4">БЛОГ</h1>
          <p className="text-xl text-neutral-500 mb-16 max-w-xl">Пишу о дизайне, логотипах и визуальных коммуникациях — понятно и по делу.</p>
          <div className="space-y-0 divide-y divide-black border-t border-black">
            {posts.map((p) => (
              <article key={p.title} className="py-10 grid grid-cols-12 gap-6 group cursor-pointer hover:bg-neutral-50 transition-colors px-0">
                <div className="col-span-12 md:col-span-2">
                  <span className="text-xs text-neutral-400">{p.date}</span>
                </div>
                <div className="col-span-12 md:col-span-1">
                  <span className="text-xs uppercase tracking-widest text-red-600">{p.tag}</span>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2 group-hover:text-red-600 transition-colors">{p.title}</h2>
                  <p className="text-neutral-500">{p.desc}</p>
                </div>
                <div className="col-span-12 md:col-span-2 md:text-right flex md:justify-end items-start">
                  <span className="text-2xl group-hover:translate-x-2 transition-transform inline-block">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
