import React, { useEffect } from "react";
import { ChartNoAxesCombined, BarChart2, Cpu, Radio } from "lucide-react"; 
import bgfeatures from "../assets/features.jpg"; // adapte le chemin si besoin
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,    // durée de l'animation en ms
      easing: "ease-in-out",
      once: true,       // animation une seule fois
    });
  }, []);

  return (
    <section id="features" className="py-16 bg-white" data-aos="fade-up">
      {/* Titre et sous-titre */}
      <h1 className="text-4xl font-bold text-center text-blue-700" data-aos="fade-up" data-aos-delay="100">
        Fonctionnalités
      </h1>
      <p className="text-lg md:text-xl text-slate-600 mx-auto max-w-2xl text-center mt-4 px-4" data-aos="fade-up" data-aos-delay="200">
        Notre site vous propose des fonctionnalités modernes et intuitives. 
        Grâce à ces outils, explorez la qualité de l’air avec précision, suivez 
        les tendances et prenez des décisions éclairées pour un environnement plus sain.
      </p>

      {/* Contenu */}
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center mt-12">
        {/* Image illustrative */}
        <img
          className="w-full max-w-xl rounded-3xl shadow-xl object-cover h-[60vh] md:h-[70vh]"
          src={bgfeatures}
          alt="Illustration des fonctionnalités"
          data-aos="fade-right"
          data-aos-delay="300"
        />

        {/* Liste des fonctionnalités */}
        <div className="space-y-10 px-4 md:px-0">
          {/* 1. Collecte en temps réel */}
          <div className="flex items-start gap-6 max-w-md transition-transform hover:scale-105 duration-300" data-aos="fade-left" data-aos-delay="400">
            <div className="p-6 bg-violet-100 rounded-full shadow-md">
              <Radio size={28} className="text-violet-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Collecte en temps réel</h3>
              <p className="text-sm md:text-base mx-auto   max-md:px-2  text-slate-500  mt-1 max-w-lg">
                La collecte des données se fait automatiquement sur le terrain grâce 
                à des drones et des capteurs de pointe, permettant d’obtenir des 
                informations environnementales fiables et précises.
              </p>
            </div>
          </div>

          {/* 2. Analyses en temps réel */}
          <div className="flex items-start gap-6 max-w-md transition-transform hover:scale-105 duration-300" data-aos="fade-left" data-aos-delay="500">
            <div className="p-6 bg-blue-100 rounded-full shadow-md">
              <ChartNoAxesCombined size={28} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Analyses instantanées</h3>
              <p className="text-sm md:text-base mx-auto   max-md:px-2  text-slate-500  mt-1 max-w-lg">
                Accédez à des tableaux de bord mis à jour en temps réel, pour 
                transformer vos données en informations exploitables rapidement 
                et faciliter la prise de décision.
              </p>
            </div>
          </div>

          {/* 3. Visualisations */}
          <div className="flex items-start gap-6 max-w-md transition-transform hover:scale-105 duration-300" data-aos="fade-left" data-aos-delay="600">
            <div className="p-6 bg-green-100 rounded-full shadow-md">
              <BarChart2 size={28} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Visualisations interactives</h3>
              <p className="text-sm md:text-base mx-auto   max-md:px-2  text-slate-500  mt-1 max-w-lg">
                Des graphiques clairs et dynamiques vous aident à interpréter 
                facilement vos données et à détecter les tendances importantes.
              </p>
            </div>
          </div>

          {/* 4. Prédiction IA */}
          <div className="flex items-start gap-6 max-w-md transition-transform hover:scale-105 duration-300" data-aos="fade-left" data-aos-delay="700">
            <div className="p-6 bg-orange-100 rounded-full shadow-md">
              <Cpu size={28} className="text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Prédictions basées sur l’IA</h3>
              <p className="text-sm md:text-base mx-auto   max-md:px-2  text-slate-500  mt-1 max-w-lg">
                L’intelligence artificielle génère des prédictions fiables et 
                propose des recommandations pour anticiper vos besoins 
                et optimiser vos actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;