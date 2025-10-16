import React from "react";
import { Link } from "react-router-dom";

const SessionExpired = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full text-center border border-gray-200 shadow-2xl rounded-2xl px-8 py-10 bg-white">
        <h1 className="text-gray-900 text-3xl font-semibold">Session expirée</h1>
        <p className="text-gray-600 mt-3">
          Votre session a expiré. Veuillez vous reconnecter pour continuer.
        </p>
        <Link
          to="/login"
          className="inline-block mt-6 px-6 h-11 leading-[44px] rounded-full text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-90 transition duration-200 shadow-md"
        >
          Se reconnecter
        </Link>
      </div>
    </section>
  );
};

export default SessionExpired;



