import React, { useState, useEffect } from 'react';
import Footercitizen from '../../components/Footercitizen';
import Headercitizen from '../../components/Headercitizen';
import aeration from "../../assets/CO2.jpeg";
import protection from "../../assets/H2S.jpeg";
import interieure from "../../assets/NO2.jpeg";
import detecteur from "../../assets/CO.jpeg";
import filtration from "../../assets/PM2.5.jpeg";
import ffp2 from "../../assets/PM10.jpeg";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Consignes = () => {
  const [polluantActif, setPolluantActif] = useState(null);

  // Initialisation de AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const donneesPolluants = {
    CO2: {
      seuil: 1000,
      unite: "ppm",
      description: "Dioxyde de carbone",
      image: aeration,
      maladies: ["Maux de tête", "Fatigue", "Difficultés de concentration"],
      precautions: ["Aérer régulièrement les pièces", "Utiliser des purificateurs d'air", "Éviter les espaces confinés"],
      definition: "Gaz à effet de serre principal contribuant au changement climatique, résultant principalement de la combustion des énergies fossiles.",
      sources: ["Combustion des énergies fossiles (centrales électriques, industries)", "Transport routier et aérien", "Déforestation et brûlage des forêts", "Activités industrielles (cimenteries, aciéries)"],
      actionsCitoyennes: ["Privilégier les transports en commun et le vélo", "Optimiser l'isolation des logements", "Choisir des énergies renouvelables", "Réduire la consommation d'énergie"]
    },
    H2S: {
      seuil: 10,
      unite: "ppb",
      description: "Sulfure d'hydrogène",
      image: protection,
      maladies: ["Irritation des yeux", "Problèmes respiratoires", "Maux de tête"],
      precautions: ["Porter un masque de protection", "Éviter les zones mal ventilées", "Consulter en cas d'irritation"],
      definition: "Gaz toxique et inflammable, reconnaissable à son odeur d'œuf pourri, particulièrement dangereux à haute concentration.",
      sources: ["Industries pétrochimiques et raffineries", "Stations d'épuration des eaux usées", "Décharges et centres de traitement des déchets", "Activités agricoles (élevage intensif)"],
      actionsCitoyennes: ["Signaler les odeurs suspectes aux autorités", "Réduire les déchets organiques", "Supporter les installations de traitement modernes", "Éviter les zones industrielles non contrôlées"]
    },
    NO2: {
      seuil: 25,
      unite: "μg/m³",
      description: "Dioxyde d'azote",
      image: interieure,
      maladies: ["Asthme", "Bronchite", "Infections pulmonaires"],
      precautions: ["Réduire les activités extérieures", "Utiliser un inhalateur si prescrit", "Éviter les zones de trafic"],
      definition: "Gaz irritant formé lors des processus de combustion à haute température, contribuant à la formation des pluies acides.",
      sources: ["Véhicules à moteur diesel", "Centrales thermiques", "Chauffages urbains", "Procédés industriels"],
      actionsCitoyennes: ["Utiliser les transports doux (vélo, marche)", "Privilégier le télétravail", "Choisir des véhicules moins polluants", "Maintenir ses appareils de chauffage"]
    },
    PM10: {
      seuil: 50,
      unite: "μg/m³",
      description: "Particules fines 10μm",
      image: ffp2,
      maladies: ["Problèmes cardiovasculaires", "Irritation des voies respiratoires"],
      precautions: ["Porter un masque FFP2", "Éviter les activités sportives extérieures", "Utiliser un purificateur d'air"],
      definition: "Particules en suspension dans l'air d'un diamètre inférieur à 10 micromètres, capables de pénétrer profondément dans l'appareil respiratoire.",
      sources: ["Usure des pneus et freins", "Activités de construction", "Combustion du bois", "Érosion des sols"],
      actionsCitoyennes: ["Limiter l'usage de la voiture en ville", "Éviter de brûler des déchets verts", "Utiliser des modes de chauffage propres", "Participer aux journées sans voiture"]
    },
    PM25: {
      seuil: 25,
      unite: "μg/m³",
      description: "Particules fines 2.5μm",
      image: filtration,
      maladies: ["Pénétration alvéolaire", "Inflammation pulmonaire"],
      precautions: ["Privilégier les espaces intérieurs filtrés", "Installer des systèmes de filtration avancée", "Surveiller les symptômes respiratoires"],
      definition: "Particules ultrafines pouvant passer dans la circulation sanguine, considérées comme les plus dangereuses pour la santé humaine.",
      sources: ["Combustion des moteurs", "Centrales électriques au charbon", "Feux de forêt", "Processus industriels"],
      actionsCitoyennes: ["Installer des filtres à air performants", "Vérifier régulièrement la qualité de l'air intérieur", "Soutenir les politiques de réduction des émissions", "Choisir des produits à faible empreinte environnementale"]
    },
    CO: {
      seuil: 10,
      unite: "ppm",
      description: "Monoxyde de carbone",
      image: detecteur,
      maladies: ["Hypoxie", "Nausées", "Perte de conscience"],
      precautions: ["Vérifier les appareils à combustion", "Installer des détecteurs de CO", "Aérer immédiatement en cas de symptômes"],
      definition: "Gaz incolore, inodore et mortel résultant d'une combustion incomplète, empêchant le transport de l'oxygène dans le sang.",
      sources: ["Chauffages défectueux", "Groupes électrogènes", "Gaz d'échappement", "Appareils de cuisson"],
      actionsCitoyennes: ["Faire contrôler annuellement les installations", "Ne jamais utiliser de chauffage d'appoint en continu", "Installer des détecteurs certifiés", "Aérer quotidiennement son logement"]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Headercitizen />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" >
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              Guide Complet de la Qualité de l'Air
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les principaux polluants atmosphériques, leurs impacts sur la santé 
              et les actions concrètes pour contribuer à un air plus pur.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-blue-300" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              Seuils de sécurité recommandés par l'OMS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(donneesPolluants).map(([polluant, data], idx) => (
                <div key={polluant} className="bg-blue-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                     data-aos="fade-up"
                     data-aos-delay={100 + idx * 100}>
                  <span className="font-bold text-blue-700 block">{polluant}</span>
                  <span className="text-sm text-slate-900">{data.seuil} {data.unite}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {Object.entries(donneesPolluants).map(([polluant, data], idx) => (
              <div key={polluant} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                   
                   data-aos-delay={200 + idx * 150}>
                <div className="p-6 cursor-pointer"
                     onClick={() => setPolluantActif(polluantActif === polluant ? null : polluant)}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800">
                        {polluant} - {data.description}
                      </h3>
                      <span className="ml-3 bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                        Seuil OMS: {data.seuil} {data.unite}
                      </span>
                    </div>
                    <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                      {polluantActif === polluant ? 'Réduire' : 'En savoir plus'}
                    </button>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div  data-aos-delay={idx * 150 + 100}>
                      <div className="mb-6">
                        <h4 className="font-semibold text-red-700 mb-3 text-lg">🚨 Risques Sanitaires</h4>
                        <ul className="space-y-2">
                          {data.maladies.map((maladie, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              {maladie}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-700 mb-3 text-lg">🛡️ Précautions Individuelles</h4>
                        <ul className="space-y-2">
                          {data.precautions.map((precaution, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {precaution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay={idx * 150 + 200}>
                      <img src={data.image} alt={`Prévention ${polluant}`} className="rounded-lg w-1/2 h-47 object-cover shadow-md" />
                    </div>
                  </div>

                  {polluantActif === polluant && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200"  data-aos-delay={idx * 150 + 300}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-3 text-lg">🔍 Définition et Origines</h4>
                          <p className="text-gray-700 mb-4">{data.definition}</p>
                          <h5 className="font-medium text-gray-900 mb-2">Sources principales :</h5>
                          <ul className="space-y-1">
                            {data.sources.map((source, index) => (
                              <li key={index} className="text-sm text-gray-600">• {source}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-3 text-lg">🌱 Actions Citoyennes</h4>
                          <p className="text-gray-700 mb-4">Chaque citoyen peut contribuer à réduire ce polluant :</p>
                          <ul className="space-y-2">
                            {data.actionsCitoyennes.map((action, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span className="text-sm">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200" data-aos-delay={idx * 150 + 100}>
                    <p className="text-sm text-slate-900">
                      <strong> Consigne d'urgence :</strong> Au-delà de {data.seuil} {data.unite}, 
                      suivez immédiatement les précautions et consultez un médecin en cas de symptômes.
                    </p>
                  </div>
                </div>
              </div>
            ))}
               {/* Bannière d'information */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <div className="flex items-start">
              <span className="text-2xl mr-4">💡</span>
              <div>
                <h4 className="font-bold text-yellow-700 mb-2">Action citoyenne</h4>
                <p className="text-sm text-yellow-800">
                  <strong>Chaque action compte :</strong> En adoptant ces gestes au quotidien, 
                  chaque citoyen contribue à réduire la pollution atmosphérique de 15 à 30% 
                  à l'échelle locale. La qualité de l'air est l'affaire de tous !
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <Footercitizen />
    </div>
  );
};

export default Consignes;