import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../lib/api";
import { useAppContext } from "../context/AppContext";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { showError, showSuccess } = useAppContext();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      return showError("Les mots de passe ne correspondent pas");
    }

    setLoading(true);
    try {
      const res = await api.post(`/api/user/resetpassword/${token}`, { password });

      if (!res.success) {
        showError(res.message || "Erreur lors de la réinitialisation");
        setLoading(false);
        return;
      }

      showSuccess("Mot de passe réinitialisé avec succès !");
      navigate("/login");
    } catch (err) {
      console.error(err);
      showError("Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-96 w-full text-center border border-gray-200 shadow-2xl rounded-2xl px-8 py-10 bg-white"
      >
        <h1 className="text-gray-900 text-2xl font-semibold">
          Réinitialiser le mot de passe
        </h1>
        <p className="text-gray-500 text-sm mt-2 mb-6">
          Entrez votre nouveau mot de passe ci-dessous
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            className="border border-gray-300 rounded-lg p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            className="border border-gray-300 rounded-lg p-2"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full h-11 rounded-full text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-90 transition duration-200 shadow-md disabled:opacity-50"
        >
          {loading ? "Réinitialisation..." : "Changer le mot de passe"}
        </button>
      </form>
    </section>
  );
};

export default ResetPassword;