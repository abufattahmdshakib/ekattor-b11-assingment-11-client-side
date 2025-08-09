import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading/Loading";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user)
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/auth/signIn"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
