import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import Toast from "../components/Toast";

// Fournisseur du contexte global
export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem("token"));

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = (opts = {}) => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    if (opts?.expired) navigate("/session-expired", { replace: true });
    else navigate("/", { replace: true });
  };

  // Validate session on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    (async () => {
      try {
        const me = await api.get("/api/user/me");
        if (!me?.success) throw new Error("Invalid session");
        // keep user if already set; otherwise minimal user from backend could be fetched later
        setIsAuthenticated(true);
      } catch (err) {
        if (err?.status === 401) logout({ expired: true });
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [toast, setToast] = useState({ type: "info", message: "" });

  const showError = (msg) => setToast({ type: "error", message: msg });
  const showSuccess = (msg) => setToast({ type: "success", message: msg });
  const clearToast = () => setToast({ type: "info", message: "" });

  return (
    <AppContext.Provider value={{ user, isAuthenticated, login, logout, showError, showSuccess }}>
      {children}
      {toast.message && (
        <Toast type={toast.type} message={toast.message} onClose={clearToast} />
      )}
    </AppContext.Provider>
  );
};