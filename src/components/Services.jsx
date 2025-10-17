import React,{ useEffect} from 'react';
import bgservice from "../assets/service1.jpg"; // adapte le chemin si besoin
import bgservice1 from "../assets/service1.jpeg"; // adapte le chemin si besoin
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () =>  {
  useEffect(() => {
     AOS.init({
       duration: 800,    // durée de l'animation en ms
       easing: "ease-in-out",
       once: true,       // animation une seule fois
     });
   }, []);

  return (
    <section id="service" data-aos="fade-up" className=" bg-white" >
      <h1 className="text-4xl mt-10 font-semibold text-blue-700 text-center mx-auto">Services</h1>
      <p className="text-xl md:text-lg mx-auto max-w-2xl text-center mt-6 max-md:px-2">
       Découvrez comment AirData utilise la technologie pour collecter, visualiser et protéger les données environnementales.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12">
        {/* Partie 1 : Capteurs et données réelles */}
        <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src={bgservice}
          />
          <h3 className="text-base text-slate-900 font-medium mt-3">
             Détection sur le terrain
          </h3>
          <p className="text-sm md:text-base mx-auto   max-md:px-2  text-slate-500  mt-1 max-w-lg ">
            Nous utilisons des capteurs de pointe pour collecter des données réelles 
            et fiables directement depuis le terrain.
          </p>
        </div>

        {/* Partie 2 : Visualisation des données */}
        <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src={bgservice1}
          />
          <h3 className="text-base text-slate-900 font-medium mt-3">
             Visualisation simplifiée
          </h3>
          <p className="text-sm md:text-base mx-auto   max-md:px-2  text-slate-500  mt-1 max-w-lg ">
             Notre plateforme permet de visualiser les données de manière claire, afin de prendre des décisions éclairées 
             et améliorer la qualité des informations.
          </p>
        </div>

        {/* Partie 3 : Technologie de pointe */}
        <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="UI Color Psychology"
          />
          <h3 className="text-base text-slate-900 font-medium mt-3">
            Environnement protégé
          </h3>
          <p className="text-sm md:text-base mx-auto   max-md:px-2  text-slate-500  mt-1 max-w-lg ">
            AirData contribue à un environnement sain, en aidant à lutter contre les effets de la dégradation naturelle 
            grâce à une gestion rigoureuse des données.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Services;