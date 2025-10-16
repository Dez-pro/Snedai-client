import React, { useState } from "react";
import { Database } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Services", href: "#service" },
    { name: "Fonctionnalités", href: "#features" },
    { name: "A propos", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 h-[70px] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-white/80 backdrop-blur-md text-gray-700 shadow-md">
      {/* Logo */}
      <a href="#header" className="text-2xl font-bold">
        <div className="flex items-center">
          <Database size={36} className="text-blue-600" />
          <span className="text-black">Air</span>
          <span className="text-blue-600">Data</span>
        </div>
      </a>

      {/* Menu Desktop */}
      <ul className="md:flex  hidden items-center gap-10">
        {navLinks.map((link, index) => (
          <li key={index} className=" group relative">
            <a
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-all duration-300"
            >
              {link.name}
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Bouton Desktop */}
      <Link to="/login" className="hidden md:inline-block">
        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 active:scale-95 transition-all">
          Se connecter
        </button>
      </Link>

      {/* Bouton Mobile */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#000"
        >
          <path d="M3 7h24M3 15h24M3 23h24" stroke="currentColor" />
        </svg>
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white p-6 md:hidden shadow-md">
          <ul className="flex flex-col space-y-4 text-lg">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative w-fit">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)} // 🔹 Ferme le menu après clic
                  className="text-gray-600 text-sm hover:text-blue-600 transition-all duration-300 inline-block"
                >
                  {link.name}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <Link to="/login">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white mt-6 text-sm hover:scale-105 active:scale-95 transition-all w-40 h-11 rounded-full shadow-md">
              Se connecter
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;