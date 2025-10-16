// client/src/routes/Routes.jsx
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Loading from "../pages/login/loading";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import Consignes from "../pages/chercheurs/Consignes";
import Predictions from "../pages/chercheurs/Predictions";
import SelectRole from "../pages/SelectRole";
import Citizenhome from "../pages/Citizenhome";
import Donnees from "../pages/chercheurs/Donnees";
import Analyse from "../pages/chercheurs/Analyses";


import { PowerBIProvider } from "../context/PowerBIProvider";

// Routes publiques
export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/selectrole", element: <SelectRole /> },
  { path: "/loading", element: <Loading /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },
  { path: "/resetpassword/:token", element: <ResetPassword /> },
  { path: "/consignes", element: <Consignes /> },
  { path: "/predictions", element: <Predictions /> },
];

// Routes protégées
export const protectedRoutes = [
  { path: "/citizen", element: <Citizenhome /> },
  {
    path: "/donnees",
    element: (
      <PowerBIProvider>
        <Donnees />
      </PowerBIProvider>
    ),
  },
  {
    path: "/analyse",
    element: (
      <PowerBIProvider>
        <Analyse />
      </PowerBIProvider>
    ),
  },
];