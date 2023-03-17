import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import { useGetJobsQuery } from "../../../features/auth/authApi";
import useTitle from "../../../hooks/useTitle/useTitle";

const Home = () => {
  useTitle("Home");
  const { isLoading: authLoading } = useSelector((state) => state.auth);
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();
  console.log(data);
  if (authLoading) {
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
