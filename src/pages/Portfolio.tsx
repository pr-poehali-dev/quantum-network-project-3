import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const projects = [
  { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/25a04dd0-5113-4b3e-b34a-67b52182f7bd.jpg", title: "Логотип для IT-компании", tag: "Брендинг", desc: "Минималистичный знак с сильным характером" },
  { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/edffe009-052c-4fa7-826d-7838a3ff465d.jpg", title: "Айдентика ресторана", tag: "Айдентика", desc: "Логотип и полный фирменный стиль" },
  { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/fffe1526-5eeb-4b33-be35-1dee5c3e5f0b.jpg", title: "Брендинг магазина", tag: "Брендинг", desc: "Лого, носители, упаковка" },
  { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/25a04dd0-5113-4b3e-b34a-67b52182f7bd.jpg", title: "Логотип юридической фирмы", tag: "Логотип", desc: "Строгость и доверие в одном знаке" },
  { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/edffe009-052c-4fa7-826d-7838a3ff465d.jpg", title: "Фирменный стиль клиники", tag: "Айдентика", desc: "Чистый и профессиональный образ" },
  { img: "https://cdn.poehali.dev/projects/629eef84-1604-443f-92f2-6a18a3cc0024/files/fffe1526-5eeb-4b33-be35-1dee5c3e5f0b.jpg", title: "Знак для кофейни", tag: "Логотип", desc: "Тепло и стиль в минималистичной форме" },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold tracking-tighter mb-4">ПОРТФОЛИО</h1>
          <p className="text-xl text-neutral-500 mb-16 max-w-xl">Каждая работа — уникальное решение под конкретный бизнес.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p) => (
              <div key={p.title} className="group">
                <div className="aspect-square overflow-hidden mb-4 bg-neutral-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="text-xs uppercase tracking-widest text-red-600 mb-1 block">{p.tag}</span>
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-neutral-500">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-block px-10 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-black transition-colors">
              Заказать свой логотип
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
