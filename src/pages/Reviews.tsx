import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const reviews = [
  { name: "Алексей М.", company: "IT-стартап, Тюмень", text: "Георгий сделал нам логотип, который с первого взгляда передаёт суть продукта. Работал быстро, держал слово по срокам. Очень доволен результатом.", rating: 5 },
  { name: "Ирина С.", company: "Ресторан «Берёза»", text: "Обратилась за айдентикой для нового заведения. Георгий предложил три очень разных направления — выбрать было сложно, потому что все хорошие! Итог превзошёл ожидания.", rating: 5 },
  { name: "Дмитрий К.", company: "Магазин одежды", text: "Нужен был логотип срочно. Георгий уложился в 4 дня и сделал именно то, что я себе представлял, даже не умея это объяснить словами.", rating: 5 },
  { name: "Наталья В.", company: "Юридическая компания", text: "Профессиональный подход: сначала задал правильные вопросы о бизнесе, потом предложил решение. Логотип получился строгим и запоминающимся.", rating: 5 },
  { name: "Павел Ф.", company: "Медицинский центр", text: "Мягкий, чистый стиль — именно то, что нужно клинике. Георгий понял задачу с первого брифа.", rating: 5 },
  { name: "Анна Г.", company: "Кофейня Brew", text: "Сделал лого для нашей кофейни — теперь клиенты узнают нас сразу. Простой знак, который работает на всём: на чашках, вывеске, упаковке.", rating: 5 },
];

export default function Reviews() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-8xl font-bold tracking-tighter mb-4">ОТЗЫВЫ</h1>
          <p className="text-xl text-neutral-500 mb-16 max-w-xl">Что говорят клиенты после работы со мной.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-black">
            {reviews.map((r, i) => (
              <div key={r.name} className={`p-8 border-b border-r border-black ${i % 3 === 2 ? "border-r-0" : ""} ${i >= reviews.length - (reviews.length % 3 || 3) ? "border-b-0" : ""}`}>
                <div className="flex gap-1 mb-4">
                  {Array(r.rating).fill(0).map((_, j) => (
                    <span key={j} className="text-red-600">★</span>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed">"{r.text}"</p>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-sm text-neutral-500">{r.company}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-block px-10 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors">
              Стать следующим клиентом
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
