import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface Props {
  element: React.ReactElement;
  isLoginPage?: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ element, isLoginPage = false }) => {
  const decodedToken = Cookies.get("jwtToken");

  if (decodedToken) {
    return isLoginPage ? <Navigate to="/home" replace /> : element;
  } else {
    return isLoginPage ? element : <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
