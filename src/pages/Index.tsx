import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ЛОГО
              <br />
              ГРАФ
            </h1>
            <p className="text-xl max-w-xl mb-8">
              Логотипы, которые запоминаются навсегда. Георгий Речкин — графический дизайнер из Тюмени. Лучший на рынке — и это не просто слова.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/portfolio" className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors">
                Смотреть работы
              </Link>
              <Link to="/contact" className="inline-block px-8 py-3 border-2 border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                Заказать логотип
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-9xl font-bold tracking-tighter">ГР</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "50+", label: "Логотипов создано" },
            { num: "30+", label: "Довольных клиентов" },
            { num: "3", label: "Года опыта" },
            { num: "100%", label: "Уникальность" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-bold text-red-600 mb-2">{s.num}</div>
              <div className="text-sm uppercase tracking-widest text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Preview Portfolio */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-6xl font-bold tracking-tighter">РАБОТЫ</h2>
            <Link to="/portfolio" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Все работы →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/25a04dd0-5113-4b3e-b34a-67b52182f7bd.jpg", title: "Логотип для IT-компании", desc: "Фирменный знак и типографическая система" },
              { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/edffe009-052c-4fa7-826d-7838a3ff465d.jpg", title: "Айдентика ресторана", desc: "Минималистичный логотип и визуальный стиль" },
              { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/fffe1526-5eeb-4b33-be35-1dee5c3e5f0b.jpg", title: "Брендинг магазина", desc: "Логотип и фирменные носители" },
            ].map((p) => (
              <div key={p.title} className="group">
                <div className="aspect-square overflow-hidden mb-4">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-neutral-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">ГОТОВЫ НАЧАТЬ?</h2>
          <p className="text-xl mb-10 max-w-xl mx-auto">Напишите мне — и уже через несколько дней у вашего бренда будет логотип, который работает.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Написать Георгию
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
