import React, { useEffect, useRef, useState } from "react";
import { api } from "../lib/api";
import * as powerbi from "powerbi-client";
import { models } from "powerbi-client";

const ReportEmbed = ({ groupId, reportId, datasetId }) => {
  const containerRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let report;
    (async () => {
      try {
        const query = groupId && reportId && datasetId ? `?groupId=${groupId}&reportId=${reportId}&datasetId=${datasetId}` : "";
        const cfg = await api.get(`/api/user/powerbi/embed-config${query}`);
        if (!cfg?.success) throw new Error(cfg?.message || "Embed config error");

        const config = {
          type: "report",
          id: cfg.reportId,
          embedUrl: cfg.embedUrl,
          accessToken: cfg.accessToken,
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: { visible: false },
              pageNavigation: { visible: false },
            },
            layoutType: models.LayoutType.MobilePortrait,
            background: models.BackgroundType.Transparent,
          },
        };

        const pbi = new powerbi.service.Service(powerbi.factories.hpmFactory, powerbi.factories.wpmpFactory, powerbi.factories.routerFactory);
        report = pbi.embed(containerRef.current, config);
      } catch (e) {
        setError(e.message);
      }
    })();

    return () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (containerRef.current) powerbi.powerbi.reset(containerRef.current);
      // eslint-disable-next-line no-unused-vars
      } catch (_) { /* empty */ }
    };
  }, [groupId, reportId, datasetId]);

  if (error) return <div className="text-red-600 p-4">{error}</div>;

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100dvh" }} />
  );
};

export default ReportEmbed;


