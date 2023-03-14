import React from "react";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      This is home page
      <Spinner></Spinner>
    </div>
  );
};

export default Home;
