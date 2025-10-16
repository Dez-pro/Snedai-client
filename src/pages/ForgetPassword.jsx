import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import emailjs from "@emailjs/browser";
import { useAppContext } from "../context/AppContext";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { showError, showSuccess } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await api.post("/api/user/forgetpassword", { email });

      if (!res.success) {
        showError(res.message || "Erreur lors de l'envoi du mail");
        setLoading(false);
        return;
      }

      const token = res.token; // token reçu du backend
      const resetUrl =`${import.meta.env.VITE_FRONTEND_URL}/resetpassword/${token}`;

      // Envoi via EmailJS
      const templateParams = { email, link: resetUrl };
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setMessage("Un lien de réinitialisation a été envoyé à votre email.");
      showSuccess("Email envoyé avec succès !");
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
        <h1 className="text-gray-900 text-2xl font-semibold">Mot de passe oublié</h1>
        <p className="text-gray-500 text-sm mt-2 mb-6">
          Entrez votre adresse e-mail pour recevoir un lien de réinitialisation
        </p>

        <div className="flex items-center w-full bg-white border border-gray-300 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full h-11 rounded-full text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-90 transition duration-200 shadow-md disabled:opacity-50"
        >
          {loading ? "Envoi en cours..." : "Envoyer le lien"}
        </button>

        {message && <p className="text-green-600 text-sm mt-4">{message}</p>}

        <p className="mt-6 text-gray-500 text-sm">
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-500 cursor-pointer hover:underline"
          >
            Retour à la connexion
          </span>
        </p>
      </form>
    </section>
  );
};

export default ForgetPassword;