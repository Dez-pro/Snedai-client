import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Loading = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Vérifier si l’utilisateur est bien connecté
      const role = user?.role || localStorage.getItem("role");

      if (!role) {
        // Aucun rôle → forcer la sélection
        navigate("/selectrole", { replace: true });
        return;
      }

      // Redirection selon le rôle
      switch (role) {
        case "citoyen":
          navigate("/citizen", { replace: true });
          break;
        case "chercheur":
          navigate("/chercheur", { replace: true });
          break;
        case "décideur":
          navigate("/decideur", { replace: true });
          break;
        case "autorité":
          navigate("/admin", { replace: true });
          break;
        default:
          // rôle invalide → forcer la sélection
          navigate("/selectrole", { replace: true });
          break;
      }
    }, 2000); // petit délai pour afficher "loading"

    return () => clearTimeout(timer);
  }, [navigate, user]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-6 text-gray-600 text-lg font-medium">
        Chargement en cours...
      </p>
    </section>
  );
};

export default Loading;