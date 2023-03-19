import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";
import ExperiencedJobHome from "../ExperiencedJobHome/ExperiencedJobHome";
import FresherJobHome from "../FresherJobHome/FresherJobHome";

const HomePage = () => {
  useTitle("Home");
  // Information of the redux store
  const { isLoading, isSuccess } = useSelector((state) => state.auth);
  // Fetched data of all jobs

  let content;
  if (isLoading) {
    content = <Spinner />;
  }
  if (isSuccess) {
    content = (
      <div>
        <h1>This is home page</h1>
        {/* Fresher job */}
        <FresherJobHome></FresherJobHome>
        {/* Experience job */}
        <ExperiencedJobHome></ExperiencedJobHome>
      </div>
    );
  }
  return <>{content}</>;
};

export default HomePage;
