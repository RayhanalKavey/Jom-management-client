import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const JobSeekerDashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      This is jobseeker dashboard
      <Outlet></Outlet>
    </div>
  );
};

export default JobSeekerDashboard;
