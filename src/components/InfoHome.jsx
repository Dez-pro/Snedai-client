import React, { useEffect } from "react";
import { BarChart, Users, Brain, Info } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre principal */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-blue-700"
          data-aos="fade-down"
        >
          Les trois espaces de l’application web
        </h2>

        {/* Paragraphe introductif */}
        <p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Notre plateforme de traitement et d’analyse des données environnementales 
          offre trois interfaces adaptées aux besoins de chaque profil utilisateur.  
          Chacun d’eux joue un rôle essentiel dans la compréhension, l’étude et la 
          gestion de la qualité de l’air pour un avenir plus sain.
        </p>

        {/* Espaces de l'application */}
        <div
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Espace Citoyen */}
          <div className="p-8 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition">
            <Users className="w-10 h-10 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-blue-800">
              Espace Citoyen
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Conçu pour permettre à chaque citoyen de <strong> visualiser facilement les données </strong> 
              par secteur et d’accéder à des <strong>analyses simples et compréhensibles </strong>.  
              Cet espace favorise la sensibilisation et l’engagement du grand public.
            </p>
          </div>

          {/* Espace Chercheur */}
          <div className="p-8 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition">
            <Brain className="w-10 h-10 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-blue-800">
              Espace Chercheur
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Dédié aux experts et chercheurs, cet espace propose des 
              <strong> analyses approfondies </strong> avec des <strong> graphiques avancés </strong> 
              et des outils interactifs pour un travail de recherche plus précis 
              et plus efficace.
            </p>
          </div>

          {/* Espace Décideur */}
          <div className="p-8 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition">
            <BarChart className="w-10 h-10 text-blue-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-blue-800">
              Espace Décideur / Autorité
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Un espace réservé aux responsables et autorités publiques, 
              offrant des <strong> tableaux de bord visuels et dynamiques </strong> 
              pour faciliter la <strong> prise de décision stratégique </strong> 
              en matière de sécurité et de santé publique.
            </p>
          </div>
        </div>

        {/* CTA (Appel à l’action) */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
          <a
            href="/roles"
            className="inline-block px-8 py-3 rounded-full text-white bg-blue-700 font-semibold shadow-lg hover:bg-blue-800 transition"
          >
            Découvrir les espaces
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoHome;