import React, {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CallToActionCitizen = () => {
  
  useEffect(() => {
     AOS.init({
       duration: 300,    // durée de l'animation en ms
       easing: "ease-in-out",
       once: true,       // animation une seule fois
     });
   }, []);
  return (
  <div className=" bg-white" data-aos="fade-up">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span className="block text-blue-700 ">Prêt à explorer notre plateforme?</span>
        <span className="block text-slate-500">Inscrivez-vous pour un accès complet.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a href="/login" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
            Créer un compte
          </a>
        </div>
      </div>
    </div>
  </div>
);
};
export default CallToActionCitizen;