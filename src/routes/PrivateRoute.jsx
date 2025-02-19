import React from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
