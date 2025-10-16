import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";

const Login = () => {
  const { login, showError } = useAppContext();
  const navigate = useNavigate();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [city, setCity] = React.useState("");
  const [role, setRole] = React.useState("");
  const [showRole, setShowRole] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const validRoles = ["citoyen", "chercheur", "décideur", "autorité"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const path = state === "login" ? "/api/user/login" : "/api/user/register";
      const body =
        state === "login"
          ? { email, password }
          : { name, email, password, city, role };

      const data = await api.post(path, body);

      if (data.success) {
        localStorage.setItem("token", data.token);

        const userRole = data.user?.role || "";

        if (state === "register") {
          // inscription → rôle choisi obligatoirement
          localStorage.setItem("role", role);
          login({
            name: data.user?.name ?? name,
            email: data.user?.email ?? email,
            role,
            avatar: "https://i.pravatar.cc/100",
          });
          navigate("/loading", { replace: true });
          return;
        }

        // connexion → vérifier si le rôle est valide
        if (!userRole || !validRoles.includes(userRole)) {
          setError("Veuillez sélectionner un rôle valide.");
          navigate("/select-role", { replace: true });
          return;
        }

        // rôle valide → affichage temporaire
        setRole(userRole);
        setShowRole(true);

        login({
          name: data.user?.name ?? name,
          email: data.user?.email ?? email,
          role: userRole,
          avatar: "https://i.pravatar.cc/100",
        });

        setTimeout(() => {
          navigate("/loading", { replace: true });
        }, 1500);
      } else {
        const msg = data.message || "Identifiants invalides";
        setError(msg);
        showError(msg);
      }
    } catch (err) {
      console.error(err);
      const msg = err?.message || "Erreur de connexion au serveur";
      setError(msg);
      showError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-96 w-full text-center border border-gray-200 shadow-2xl rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-semibold">
          {state === "login" ? "Connexion" : "Créer un compte"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          {state === "login"
            ? "Veuillez vous connecter pour continuer"
            : "Veuillez remplir les informations pour créer un compte"}
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {state === "register" && (
          <>
            <div className="flex items-center w-full mt-10 border border-gray-300 h-12 rounded-full pl-6">
              <input
                type="text"
                placeholder="Nom complet"
                className="bg-transparent text-gray-700 outline-none text-sm w-full h-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center w-full mt-4 border border-gray-300 h-12 rounded-full pl-6">
              <input
                type="text"
                placeholder="Ville"
                className="bg-transparent text-gray-700 outline-none text-sm w-full h-full"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center w-full mt-4 border border-gray-300 h-12 rounded-full pl-4">
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
          </>
        )}

        <div className="flex items-center w-full mt-10 border border-gray-300 h-12 rounded-full pl-6">
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="bg-transparent text-gray-700 outline-none text-sm w-full h-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="group flex items-center mt-4 w-full border border-gray-300 h-12 rounded-full pl-6 pr-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            className="bg-transparent text-gray-700 outline-none text-sm w-full h-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Mot de passe oublié */}
        {state === "login" && (
          <div className="w-full flex justify-start mt-2 mb-4">
            <span
              onClick={() => navigate("/forgetpassword")}
              className="text-sm text-indigo-500 cursor-pointer hover:underline"
            >
              Mot de passe oublié ?
            </span>
          </div>
        )}

        {/* Affichage temporaire du rôle */}
        {showRole && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            Votre rôle : <strong>{role}</strong>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full h-11 rounded-full text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-90 transition disabled:opacity-50"
        >
          {loading
            ? "Chargement..."
            : state === "register"
            ? "Créer un compte"
            : "Connexion"}
        </button>

        <p className="text-gray-500 text-sm mt-4 mb-10">
          {state === "login" ? (
            <>
              Pas encore de compte ?{" "}
              <span
                onClick={() => setState("register")}
                className="text-indigo-500 cursor-pointer hover:underline"
              >
                S’inscrire
              </span>
            </>
          ) : (
            <>
              Déjà un compte ?{" "}
              <span
                onClick={() => setState("login")}
                className="text-indigo-500 cursor-pointer hover:underline"
              >
                Cliquez ici
              </span>
            </>
          )}
        </p>
      </form>
    </section>
  );
};

export default Login;