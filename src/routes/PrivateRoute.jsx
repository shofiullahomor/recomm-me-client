import React, { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
