import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Herocitizen = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto py-20 px-6 sm:py-28 lg:px-8 text-center">
        {/* Titre principal */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          data-aos="fade-down"
        >
          Bienvenue sur notre site de traitement et d’analyse de données
        </h1>

        {/* Sous-titre */}
        <p
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Vous êtes dans l’<strong>espace citoyen</strong>.  
          Informez-vous et explorez nos données pour mieux comprendre la qualité de l’air.
        </p>

        {/* Bouton CTA */}
        <div
          className="mt-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="/analyse"
            className="inline-flex items-center px-8 py-3 rounded-full text-base font-semibold bg-white text-blue-700 shadow-lg hover:shadow-xl transition hover:bg-blue-50"
          >
            Explorer les données
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herocitizen;
