import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© 2026 Георгий Речкин. Все права защищены.</p>
        <div className="flex space-x-8">
          <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Instagram</a>
          <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Behance</a>
          <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
