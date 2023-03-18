import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import { useGetJobsQuery } from "../../../features/auth/jobApi";
import useTitle from "../../../hooks/useTitle/useTitle";

const HomePage = () => {
  useTitle("Home");
  // Information of the redux store
  const { isLoading: authLoading } = useSelector((state) => state.auth);
  // Fetched data of all jobs
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();
  console.log(data);

  let content;
  if (isLoading) {
    content = <Spinner />;
  }
  if (isSuccess) {
    content = <div>This is home page</div>;
  }
  // useEffect(() => {
  // }, [isLoading]);
  return (
    <>
      {content}
      {/* <div>{isLoading && <Spinner />}</div> */}
    </>
  );
};

export default HomePage;
