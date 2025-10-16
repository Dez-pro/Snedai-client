import { createContext, useContext } from "react";

// Création du contexte
export const AppContext = createContext();

// Hook personnalisé pour accéder facilement au contexte
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext doit être utilisé à l'intérieur d'un AppProvider");
  }
  return context;
};