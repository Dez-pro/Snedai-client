import React from "react";

const Recherche = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 text-center px-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
        alt="Maintenance"
        className="w-28 mb-6 opacity-90"
      />

      <h1 className="text-3xl font-semibold mb-3">Page en maintenance</h1>

      <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
        Notre équipe technique procède actuellement à une mise à jour afin
        d’améliorer la performance et la fiabilité de nos services.  
        <br />
        Merci de votre patience et de votre confiance.
      </p>

      <div className="mt-10 animate-pulse text-sm text-gray-500">
        — L’équipe technique SNEDAI
      </div>
    </div>
  );
};

export default Recherche;