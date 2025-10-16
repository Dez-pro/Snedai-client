import React, { useState } from "react";
import PowerBIContext from "./PowerBIContext";

export const PowerBIProvider = ({ children }) => {
  const [reports, setReports] = useState({
    rapport1: { key: 0, lastUpdate: new Date(), isRefreshing: false },
    rapport2: { key: 0, lastUpdate: new Date(), isRefreshing: false },
  });

  const refreshReport = (id) => {
    // Si déjà en cours d’actualisation, on ne refait pas
    if (reports[id].isRefreshing) return;

    // On active l'état de rafraîchissement
    setReports((prev) => ({
      ...prev,
      [id]: { ...prev[id], isRefreshing: true },
    }));

    // Simule le temps de rechargement de l’iframe
    setTimeout(() => {
      setReports((prev) => ({
        ...prev,
        [id]: {
          key: prev[id].key + 1, // force le re-render de l’iframe
          lastUpdate: new Date(),
          isRefreshing: false, // fin du rafraîchissement
        },
      }));
    }, 3000); // tu peux ajuster la durée si besoin
  };

  return (
    <PowerBIContext.Provider value={{ reports, refreshReport }}>
      {children}
    </PowerBIContext.Provider>
  );
};
