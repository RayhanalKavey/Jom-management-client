import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";

const Home = () => {
  useTitle("Home");
  const { isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      This is home page
      {/* <div>{isLoading && <Spinner />}</div> */}
    </div>
  );
};

export default Home;
