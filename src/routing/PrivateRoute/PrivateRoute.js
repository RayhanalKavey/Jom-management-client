import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { isLoading, email } = useSelector((state) => state.auth);
  // console.log(isLoading);
  const location = useLocation();
  console.log("Private router catch location", location);
  if (isLoading) {
    return <Spinner />;
  }
  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
