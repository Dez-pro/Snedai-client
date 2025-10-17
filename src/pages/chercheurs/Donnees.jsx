import React, { useContext } from "react";
import Headercitizen from "../../components/Headercitizen";
import Footercitizen from "../../components/Footercitizen";
import PowerBIEmbed from "../../components/PowerBIEmbed";
import PowerBIContext from "../../context/PowerBIContext";

const Donnees = () => {
  const { reports, refreshReport } = useContext(PowerBIContext);

  return (
    <div className="flex flex-col min-h-screen ">
      <Headercitizen />

      <main className="flex-grow p-6 bg-gradient-to-br from-blue-50 to-green-50 ">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Titre général */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Accédez aux données brutes des capteurs en temps réel
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Visualisation des flux de données collectées et mises à jour dynamiquement
            </p>
          </div>

          {/* Premier rapport */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <button
              onClick={() => refreshReport("rapport1")}
              disabled={reports.rapport1.isRefreshing}
              className={`px-4 py-2 rounded-lg font-medium shadow-md transition
                ${
                  reports.rapport1.isRefreshing
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              {reports.rapport1.isRefreshing ? "Actualisation..." : "Actualiser le rapport"}
            </button>

            <span className="text-gray-600 text-sm text-center sm:text-right">
              Dernière mise à jour :{" "}
              {reports.rapport1.lastUpdate.toLocaleDateString("fr-FR")} à{" "}
              {reports.rapport1.lastUpdate.toLocaleTimeString("fr-FR")}
            </span>
          </div>

          <div className="relative">
            {reports.rapport1.isRefreshing && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              </div>
            )}

            <PowerBIEmbed
              key={reports.rapport1.key}
                
              embedUrl="https://app.powerbi.com/view?r=eyJrIjoiZmU5MTJhNTItYTdhMy00ZjRmLWFiZmUtZjBlNDdhZTcxZmMwIiwidCI6ImIwNGI3ZTQ1LWMyYzgtNGFiNC04M2VlLTE4YmJiNzVlNmZhZSIsImMiOjh9&pageName=61336cd1d38b4d245625"
              pageName="61336cd1d38b4d245625"
              title="Vue d'ensemble des données"
            />
          </div>

          {/* Deuxième rapport */}
          <div className="text-center mb-12 mt-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Vue géographique sur les données de la qualité de l’air
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Mise en relation des données avec les seuils recommandés par l’OMS
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <button
              onClick={() => refreshReport("rapport2")}
              disabled={reports.rapport2.isRefreshing}
              className={`px-4 py-2 rounded-lg font-medium shadow-md transition
                ${
                  reports.rapport2.isRefreshing
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              {reports.rapport2.isRefreshing ? "Actualisation..." : "Actualiser le rapport"}
            </button>

            <span className="text-gray-600 text-sm text-center sm:text-right">
              Dernière mise à jour :{" "}
              {reports.rapport2.lastUpdate.toLocaleDateString("fr-FR")} à{" "}
              {reports.rapport2.lastUpdate.toLocaleTimeString("fr-FR")}
            </span>
          </div>

          <div className="relative">
            {reports.rapport2.isRefreshing && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              </div>
            )}

            <PowerBIEmbed
              key={reports.rapport2.key}
              embedUrl="https://app.powerbi.com/view?r=eyJrIjoiZmU5MTJhNTItYTdhMy00ZjRmLWFiZmUtZjBlNDdhZTcxZmMwIiwidCI6ImIwNGI3ZTQ1LWMyYzgtNGFiNC04M2VlLTE4YmJiNzVlNmZhZSIsImMiOjh9&pageName=994a9e6f23714ece2797"
              pageName="994a9e6f23714ece2797"
              title="analyse géographique des données"
            />
          </div>
        </section>
      </main>

      <Footercitizen />
    </div>
  );
};

export default Donnees;
