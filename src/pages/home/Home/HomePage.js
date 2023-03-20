import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import Tryout from "../../../components/Tryout";
import useTitle from "../../../hooks/useTitle/useTitle";
import ExperiencedJobHome from "../ExperiencedJobHome/ExperiencedJobHome";
import FresherJobHome from "../FresherJobHome/FresherJobHome";
import HeroSection from "../HeroSection/HeroSection";

const HomePage = () => {
  useTitle("Home");
  // Information of the redux store
  const { isLoading, isError } = useSelector((state) => state.auth);
  // Fetched data of all jobs

  let content;

  if (isLoading) {
    content = <Spinner />;
  }
  if (!isError && !isLoading) {
    content = (
      <div>
        <section className="bg-secondary dark:bg-accent py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection></HeroSection>
          </div>
        </section>

        {/* Fresher job */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FresherJobHome></FresherJobHome>
          </div>
        </section>
        {/* Experience job */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ExperiencedJobHome></ExperiencedJobHome>
          </div>
        </section>
      </div>
    );
  }

  return <>{content}</>;
};

export default HomePage;
