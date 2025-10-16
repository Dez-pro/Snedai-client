import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { publicRoutes, protectedRoutes } from "../src/Routes/Routes";

const App = () => {
  return (
    <Routes>
      {/* Routes publiques */}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}


      {/* Routes protégées */}
      {protectedRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<PrivateRoute>{element}</PrivateRoute>}
        />
      ))}

      {/* Catch-all pour rediriger les URL inconnues */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;