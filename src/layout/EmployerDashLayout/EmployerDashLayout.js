import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const EmployerDashLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      this is empolye dashboard
      <Outlet></Outlet>
    </div>
  );
};

export default EmployerDashLayout;
