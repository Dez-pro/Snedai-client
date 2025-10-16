import React, { useState } from "react";

const PowerBIEmbed = ({ embedUrl, title, pageName }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Construire l'URL avec les paramètres recommandés Power BI
  let finalUrl = embedUrl;
  try {
    const u = new URL(embedUrl);
    u.searchParams.set("filterPaneEnabled", "false");
    u.searchParams.set("navContentPaneEnabled", "false");
    u.searchParams.set("toolbarEnabled", "false");
    u.searchParams.set("chromeless", "true");
    if (!u.searchParams.has("autoAuth")) u.searchParams.set("autoAuth", "true");
    if (pageName) u.searchParams.set("pageName", pageName);
    finalUrl = u.toString();
  } 
  // eslint-disable-next-line no-unused-vars
  catch (_) { /* empty */ }

  // Masquage visuel des barres (desktop), affichage normal sur mobile
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 640px)").matches;

  const TOP_BAR = 88;
  const BOTTOM_BAR = 120;

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-lg bg-gray-100">
      {/* Loader (affiché tant que l'iframe n'a pas fini de charger) */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <iframe
        title={title}
        src={finalUrl}
        className="absolute inset-0 w-full border-0"
        style={
          isMobile
            ? { height: "100%" }
            : {
                height: `calc(100% + ${TOP_BAR + BOTTOM_BAR}px)`,
                transform: `translateY(-${TOP_BAR}px)`,
              }
        }
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)} // ✅ Déclenche quand Power BI est prêt
      ></iframe>
    </div>
  );
};

export default PowerBIEmbed;
