import React, { useEffect } from "react";
import { CheckCircle, AlertCircle, Info } from "lucide-react";

const Toast = ({ type = "info", message, onClose, duration = 3500 }) => {
  if (!message) return null;
  const styleMap = {
    error: {
      container: "bg-red-600",
      Icon: AlertCircle,
      label: "Erreur",
    },
    success: {
      container: "bg-green-600",
      Icon: CheckCircle,
      label: "Succès",
    },
    info: {
      container: "bg-indigo-600",
      Icon: Info,
      label: "Information",
    },
  };
  const { container, Icon, label } = styleMap[type] ?? styleMap.info;
  useEffect(() => {
    if (!message) return;
    const id = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(id);
  }, [message, duration, onClose]);
  return (
    <div
      className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-md shadow-lg text-white ${container}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} aria-hidden="true" />
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
          aria-label="Fermer la notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;


