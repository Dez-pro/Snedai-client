import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAppContext();
  const location = useLocation();
  const hasToken = !!localStorage.getItem("token");

  return isAuthenticated || hasToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;