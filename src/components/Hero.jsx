import React from "react";
import bgImage from "../assets/fond-drone.jpeg"; // adapte le chemin si besoin
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full bg-no-repeat bg-cover bg-center text-sm pb-44 mt-2 font-poppins rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

      {/* Contenu */}
      <div className="relative z-10">
        {/* Title */}
        <h5 className="text-4xl md:text-7xl font-medium max-w-[850px] text-center mx-auto pt-24 text-white">
          Bienvenue sur notre plateforme d’analyse de la qualité de l’air
        </h5>

        {/* Description */}
        <p className="text-xl md:text-lg mx-auto max-w-2xl text-center mt-8 max-md:px-2 text-gray-200">
          Ce site a pour objectif de mesurer, analyser et partager des données fiables
          sur la qualité de l’air en Côte d’Ivoire. Grâce à ces informations, les citoyens
          peuvent mieux se protéger, les chercheurs approfondir leurs études et les
          décideurs mettre en place des actions pour améliorer les conditions de vie des populations.
        </p>

        {/* CTA Buttons */}
        <div className="mx-auto w-full flex items-center justify-center gap-3 mt-12">
          <Link to="/login">
          <button className="bg-slate-800 hover:bg-slate-200/30 font-semibold hover:text-black  text-white px-7 py-4 rounded-full  transition">
            Explorer les données
          </button>
         </Link>
         <a href="#about">
          <button className="flex items-center gap-2 border hover:text-black  text-white font-semibold hover:bg-slate-200/30 border-slate-300  rounded-full px-7 py-4">
            Notre mission
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
