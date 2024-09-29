import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<Props> = ({ element }) => {
  //   const decodedToken = Cookies.get("jwtToken");
  const decodedToken = true;

  return decodedToken ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
