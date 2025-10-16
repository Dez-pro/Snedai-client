import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgapropos from "../assets/apropos.jpeg";

const About = () => {
  
  useEffect(() => {
     AOS.init({
       duration: 300,    // durée de l'animation en ms
       easing: "ease-in-out",
       once: true,       // animation une seule fois
     });
   }, []);
const [openModal, setOpenModal] = useState(null);
  // null = rien ouvert, "indicateurs" ou "methodologie" = modal ouvert

  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center  gap-10 max-md:px-4 font-[Poppins] bg-white" data-aos="fade-up">
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden shrink-0">
        <img
          className="max-w-md w-full object-cover rounded-2xl"
          src={bgapropos}
          alt="Surveillance et qualité de l’air"
        />
      </div>

      {/* Text content */}
      <div className="text-sm  max-w-lg">
        <h1 className="text-2xl uppercase mt-8 font-semibold">
          À propos
        </h1>
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]" />

        <p className="mt-6 text-sm md:text-base mx-auto   max-md:px-2  text-slate-500   max-w-lg ">
          <strong className="font-semibold  text-slate-900 ">Cette plateforme</strong> est
          dédiée à l’analyse et au suivi de la qualité de l’air en Côte d’Ivoire.
          Nous collectons, agrégeons et analysons des données issues de
          différentes zones urbaines afin de produire des indices, cartes
          interactives et alertes locales.
         <br/><strong className="font-semibold  text-slate-900 ">Ojectif :</strong> transformer des mesures de terrain en informations
          claires et actionnables pour tous.Ces informations aident les citoyens
          à se protéger, soutiennent les chercheurs et ONG dans leurs travaux,
          et éclairent la prise de décision publique.
        </p>

        <p className="mt-2 text-sm md:text-base mx-auto   max-md:px-2  text-slate-500  max-w-lg ">
          Notre approche repose sur la transparence méthodologique, la
          fiabilité des mesures et l’accessibilité des résultats, pour
          améliorer durablement la qualité de vie.
        </p>

        <div className="flex items-center gap-2 mt-8">
          
            <button
          onClick={() => setOpenModal("indicateurs")}
          className="flex items-center gap-2 hover:-translate-y-1.5 transition bg-gradient-to-r from-indigo-600 to-[#0d286b] py-3 px-8 rounded-full text-white"
        >
          Voir nos indicateurs
        </button>           
             <button
          onClick={() => setOpenModal("methodologie")}
         className="flex items-center gap-2 border border-slate-300 hover:-translate-y-1.5 transition bg-gradient-to-r from-5% to-[#036583] py-3 px-8 rounded-full"
        >
          Notre méthodologie
        </button>
           {/* --- Modal Indicateurs --- */}
      {openModal === "indicateurs" && (
        <div
          className="fixed inset-0 flex items-center justify-center  bg-black/20 backdrop-blur-sm z-50"
          onClick={() => setOpenModal(null)} // Fermer si on clique dehors
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative"
            onClick={(e) => e.stopPropagation()} // Empêcher fermeture quand on clique dans le contenu
          >
            <h2 className="text-2xl font-bold mb-4">Indicateurs de Qualité de l’Air</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>PM2.5</strong> : Particules fines &lt; 2,5µm.  
                <br />⚠️ Risques : maladies respiratoires, asthme, cancers pulmonaires.
              </li>
              <li>
                <strong>PM10</strong> : Particules inhalables &lt; 10µm.  
                <br />⚠️ Risques : irritation des voies respiratoires, allergies.
              </li>
              <li>
                <strong>NO₂</strong> : Dioxyde d’azote.  
                <br />⚠️ Risques : diminution fonction pulmonaire, aggravation asthme.
              </li>
              <li>
                <strong>O₃</strong> : Ozone troposphérique.  
                <br />⚠️ Risques : toux, maux de gorge, réduction capacité respiratoire.
              </li>
              <li>
                <strong>SO₂</strong> : Dioxyde de soufre.  
                <br />⚠️ Risques : bronchites, irritation yeux/gorge.
              </li>
              <li>
                <strong>CO</strong> : Monoxyde de carbone.  
                <br />⚠️ Risques : maux de tête, vertiges, intoxications graves.
              </li>
            </ul>

            {/* Bouton fermer */}
            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* --- Modal Méthodologie --- */}
      {openModal === "methodologie" && (
        <div
          className="fixed inset-0 flex items-center justify-center  bg-black/20 backdrop-blur-sm z-50"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Notre Méthodologie</h2>

            <h3 className="text-xl font-semibold mt-4">1. Collecte des données</h3>
            <p className="text-gray-700">
              Utilisation de capteurs fixes, mobiles et drones pour mesurer la
              qualité de l’air en temps réel.  
              
            </p>

            <h3 className="text-xl font-semibold mt-4">2. Traitement & Analyse</h3>
            <p className="text-gray-700">
              Les données sont traitées via Python, Power BI et autres outils
              analytiques pour produire des indices fiables.  
              
            </p>

            <h3 className="text-xl font-semibold mt-4">3. Visualisation</h3>
            <p className="text-gray-700">
              Création de cartes interactives, graphiques et rapports pour faciliter
              la compréhension et l’aide à la décision.  
              
            </p>

            <h3 className="text-xl font-semibold mt-4">4. Intelligence Artificielle</h3>
            <p className="text-gray-700">
              L’IA permet de prédire l’évolution de la pollution, de détecter des
              anomalies et de générer des alertes automatiques.
            </p>

            <h3 className="text-xl font-semibold mt-4">Conclusion</h3>
            <p className="text-gray-700">
              Une approche transparente, fiable et orientée vers la santé publique.
            </p>

            {/* Bouton fermer */}
            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
        </div>
      </div>
    </section>
  );
};
export default About;
