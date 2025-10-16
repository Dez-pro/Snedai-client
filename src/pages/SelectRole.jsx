import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { api } from "../lib/api";

const SelectRole = () => {
  const { login, showError, showSuccess } = useAppContext();
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const validRoles = ["citoyen", "chercheur", "décideur", "autorité"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validRoles.includes(role)) {
      showError("Veuillez choisir un rôle valide.");
      return;
    }

    setLoading(true);

    try {
      // Appel API pour mettre à jour le rôle en DB
      const data = await api.post("/api/user/update-role", { role });

      if (data.success) {
        localStorage.setItem("role", role);

        // Mettre à jour le contexte utilisateur
        login({
          ...data.user,
          role,
          avatar: data.user?.avatar || "https://i.pravatar.cc/100",
        });

        showSuccess("Rôle mis à jour avec succès !");
        navigate("/loading", { replace: true });
      } else {
        showError(data.message || "Erreur lors de la mise à jour du rôle.");
      }
    } catch (err) {
      console.error(err);
      showError("Impossible de mettre à jour le rôle.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-6 border border-gray-200 shadow-2xl rounded-2xl bg-white"
      >
        <h1 className="text-gray-900 text-2xl font-semibold text-center">
          Choisissez votre rôle
        </h1>
        <p className="text-gray-500 text-sm mt-2 text-center">
          Vous devez sélectionner un rôle pour continuer.
        </p>

        <div className="flex items-center w-full mt-6 border border-gray-300 h-12 rounded-full pl-4">
          <select
            className="bg-transparent text-gray-700 outline-none text-sm w-full h-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">-- Sélectionnez votre rôle --</option>
            <option value="citoyen">Citoyen</option>
            <option value="chercheur">Chercheur</option>
            <option value="décideur">Décideur</option>
            <option value="autorité">Autorité</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full h-11 rounded-full text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Mise à jour..." : "Valider le rôle"}
        </button>
      </form>
    </section>
  );
};

export default SelectRole;