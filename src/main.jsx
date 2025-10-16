import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/AppProvider";
import { PowerBIProvider } from "./context/PowerBIProvider.jsx"; // ← à créer

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <PowerBIProvider>
          <App />
        </PowerBIProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);