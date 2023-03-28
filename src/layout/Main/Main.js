import React from "react";
import { Outlet } from "react-router-dom";
import UpButton from "../../components/UpButton/UpButton";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="" id="up">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <UpButton></UpButton>
    </div>
  );
};

export default Main;
