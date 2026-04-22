import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/", label: "Главная" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/services", label: "Услуги" },
  { href: "/pricing", label: "Цены" },
  { href: "/process", label: "Процесс" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/blog", label: "Блог" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "Обо мне" },
  { href: "/contact", label: "Контакты" },
];

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter">
          Г.РЕЧКИН
        </Link>
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-xs uppercase tracking-widest hover:text-red-600 transition-colors ${location.pathname === l.href ? "text-red-600" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-sm uppercase tracking-widest"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "Меню"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-black px-4 py-6 flex flex-col space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-widest hover:text-red-600 transition-colors ${location.pathname === l.href ? "text-red-600" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
