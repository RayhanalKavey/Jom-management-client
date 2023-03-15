import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const DashLayout = () => {
  return (
    <div>
      <Navbar />
      This is dash
      <Outlet></Outlet>
    </div>
  );
};

export default DashLayout;
