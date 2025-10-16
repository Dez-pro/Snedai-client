import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Database, Menu, X } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Headercitizen = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAppContext();

  // ici pour gérer le lien 
  const menuItems = [
    { label: "Accueil", path: "/citizen" },
    { label: "Données", path: "/donnees" },
    { label: "Analyse", path: "/analyse" },
    { label: "Prédictions", path: "/predictions" },
    { label: "Consignes", path: "/consignes" },
    { label: "Recherche", path: "/recherche" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold">
            <Database size={36} className="text-blue-600" />
            <span className="text-black">Air</span>
            <span className="text-blue-600">Data</span>
          </Link>

          {/* Menu pour grands et moyens écrans */}
          <div className="hidden sm:flex flex-1 justify-center flex-wrap space-x-4 md:space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 transition"
              >
                {item.label}
                
              </Link>
              
            ))}
          </div>

          {/* Bouton connexion / déconnexion */}
          <div className="hidden sm:flex items-center">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 hover:text-black active:scale-95 transition-all"
              >
                Déconnexion
              </button>
            ) : (
              <Link
                to="/login"
                className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
              >
                Connexion
              </Link>
            )}
          </div>

          {/* Menu burger pour petits écrans */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu déroulant pour petits écrans */}
      {menuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-1 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Bouton connexion / déconnexion dans le menu burger */}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="mt-2 px-4 py-2 bg-blue-600 hover:bg-gray-600 text-white rounded-full transition"
              >
                Déconnexion
              </button>
            ) : (
              <Link
                to="/login"
                className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
                onClick={() => setMenuOpen(false)}
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Headercitizen;