import React, { useEffect } from "react";
import { Activity, ShieldCheck, Database, BarChart3 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureCitizen = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const features = [
    {
      icon: <Activity className="w-10 h-10 text-blue-600" />,
      title: "Suivi en temps réel",
      description:
        "Consultez l’évolution de la qualité de l’air avec des indicateurs mis à jour régulièrement.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Santé & prévention",
      description:
        "Accédez à des conseils personnalisés pour protéger votre santé et réduire les risques liés à la pollution.",
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: "Données ouvertes",
      description:
        "Explorez un espace de transparence où chaque citoyen peut consulter les données environnementales.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      title: "Analyses simplifiées",
      description:
        "Profitez d’analyses claires et accessibles pour comprendre les tendances et leur impact au quotidien.",
    },
  ];

  return (
    <div className="bg-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-blue-700"
            data-aos="fade-down"
          >
            Les fonctionnalités de l’Espace Citoyen
          </h2>
          <p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Une plateforme conçue pour informer, sensibiliser et accompagner les
            citoyens dans la compréhension des données environnementales.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-blue-50 to-white shadow-md hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCitizen;
