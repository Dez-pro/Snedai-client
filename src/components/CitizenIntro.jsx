import React, { useEffect } from "react";
import { Info, Users, BarChart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const CitizenIntro = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-blue-700"
          data-aos="fade-down"
        >
          L’Espace Citoyen : votre plateforme de confiance
        </h2>

        {/* Paragraphe intro */}
        <p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Cet espace est conçu pour vous offrir une vision claire et transparente 
          des données environnementales. Il permet à chaque citoyen de s’informer, 
          de comprendre et de contribuer à l’amélioration de la qualité de l’air.
        </p>

        {/* Points clés */}
        <div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="p-6 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition">
            <Info className="w-10 h-10 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-blue-800">
              Information fiable
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Accédez à des données officielles, mises à jour et validées par nos experts.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition">
            <Users className="w-10 h-10 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-blue-800">
              Participation citoyenne
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Impliquez-vous activement et contribuez à une meilleure compréhension collective.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition">
            <BarChart className="w-10 h-10 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-blue-800">
              Analyse accessible
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Explorez des indicateurs clairs pour suivre l’évolution de la qualité de l’air.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
          <a
            href="/donnees"
            className="inline-block px-8 py-3 rounded-full text-white bg-blue-700 font-semibold shadow-lg hover:bg-blue-800 transition"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};

export default CitizenIntro;