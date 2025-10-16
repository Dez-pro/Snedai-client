import React, { useContext } from "react";
import Headercitizen from "../../components/Headercitizen";
import Footercitizen from "../../components/Footercitizen";
import PowerBIEmbed from "../../components/PowerBIEmbed";
import PowerBIContext from "../../context/PowerBIContext";

const Analyse = () => {
  const { reports, refreshReport } = useContext(PowerBIContext);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Headercitizen />

      <main className="flex-grow p-6 bg-gradient-to-br from-blue-50 to-green-50">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Titre général */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Analyse approfondie
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Graphes avancés pour comprendre les tendances et corrélations
            </p>
          </div>

          {/* Premier rapport */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => refreshReport("rapport1")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md"
            >
              Actualiser le rapport
            </button>
            <span className="text-gray-600 text-sm">
              Dernière mise à jour :{" "}
              {reports.rapport1.lastUpdate.toLocaleDateString("fr-FR")} à{" "}
              {reports.rapport1.lastUpdate.toLocaleTimeString("fr-FR")}
            </span>
          </div>

          <PowerBIEmbed
            key={reports.rapport1.key}
            embedUrl="https://app.powerbi.com/view?r=eyJrIjoiZmU5MTJhNTItYTdhMy00ZjRmLWFiZmUtZjBlNDdhZTcxZmMwIiwidCI6ImIwNGI3ZTQ1LWMyYzgtNGFiNC04M2VlLTE4YmJiNzVlNmZhZSIsImMiOjh9&pageName=db64411f06e45cd74408"
            pageName="db64411f06e45cd74408"
            title="Analyse ciblée"
          />

          {/* Deuxième rapport */}
          <div className="text-center mb-12 mt-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comparaison des données de la qualité de l'air
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Mise en relation des données de la qualité de l'air en comparatif au seuil de l'OMS
            </p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => refreshReport("rapport2")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md"
            >
              Actualiser le rapport
            </button>
            <span className="text-gray-600 text-sm">
              Dernière mise à jour :{" "}
              {reports.rapport2.lastUpdate.toLocaleDateString("fr-FR")} à{" "}
              {reports.rapport2.lastUpdate.toLocaleTimeString("fr-FR")}
            </span>
          </div>

          <PowerBIEmbed
            key={reports.rapport2.key}
            embedUrl="https://app.powerbi.com/view?r=eyJrIjoiZmU5MTJhNTItYTdhMy00ZjRmLWFiZmUtZjBlNDdhZTcxZmMwIiwidCI6ImIwNGI3ZTQ1LWMyYzgtNGFiNC04M2VlLTE4YmJiNzVlNmZhZSIsImMiOjh9&pageName=326fcc8581532779c1b0"
            pageName="326fcc8581532779c1b0"
            title="Comparaison"
          />
        </section>
      </main>

      {/* FOOTER */}
      <Footercitizen />
    </div>
  );
};

export default Analyse;