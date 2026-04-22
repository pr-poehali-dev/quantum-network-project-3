import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 md:col-span-5">
              <h1 className="text-8xl font-bold tracking-tighter mb-8">ОБО МНЕ</h1>
              <div className="aspect-[4/5] bg-neutral-100 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-bold text-neutral-200">ГР</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-32">
              <p className="text-2xl font-bold tracking-tighter mb-6">
                Речкин Георгий Юрьевич — графический дизайнер, специалист по логотипам и фирменному стилю.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Учусь в Тюменском государственном университете (ТюмГУ). Параллельно занимаюсь частной практикой — создаю логотипы и визуальные системы для бизнеса по всей России.
              </p>
              <p className="text-neutral-600 mb-6">
                Убеждён, что хороший логотип — это не красивая картинка, а точное решение конкретной задачи. Именно поэтому я не начинаю рисовать, пока не понял бизнес клиента изнутри.
              </p>
              <p className="text-neutral-600 mb-10">
                Работаю с малым и средним бизнесом, стартапами и частными специалистами. Каждый проект — уникальный, каждое решение — обоснованное.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-black pt-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-red-600 mb-4">Принципы</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Форма следует за функцией</li>
                    <li>Уникальность в каждом проекте</li>
                    <li>Точность в деталях</li>
                    <li>Срок — это обещание</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-red-600 mb-4">Инструменты</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Adobe Illustrator</li>
                    <li>Figma</li>
                    <li>Adobe Photoshop</li>
                    <li>Procreate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-black text-white p-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Честность", desc: "Скажу честно, если ваша идея не работает. Предложу лучшее решение — даже если оно сложнее." },
              { title: "Скорость", desc: "Ценю ваше время. Работаю без затягиваний, держу сроки и на связи в рабочее время." },
              { title: "Результат", desc: "Не сдаю работу, пока сам не доволен. Ваш логотип должен работать — это главный критерий." },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="text-2xl font-bold tracking-tighter text-red-500 mb-3">{v.title}</h3>
                <p className="text-neutral-400">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-block px-10 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-black transition-colors">
              Связаться со мной
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
