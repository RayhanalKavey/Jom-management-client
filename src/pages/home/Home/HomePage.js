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

  const bottomBorder = "border-b-[.5px]  dark:border-gray-600";

  let content;

  if (isLoading) {
    content = <Spinner />;
  }
  if (!isError && !isLoading) {
    content = (
      <div>
        <section
          className={`bg-secondary dark:bg-accent py-32  ${bottomBorder}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection></HeroSection>
          </div>
        </section>
        {/* <section className="py-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          </div>
        </section> */}

        {/* Fresher job */}
        <section className="dark:bg-accent pt-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h3 className="text-md font-bold text-center uppercase text-primary">
              Fresher Job{" "}
            </h3>
            <h2 className="text-3xl font-semibold text-center mt-6 mb-16 text-accent dark:text-secondary">
              {" "}
              Looking for a Fresh Start?
            </h2>

            <FresherJobHome></FresherJobHome>
          </div>
        </section>
        {/* Experience job */}
        <section className="dark:bg-accent py-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h3 className="text-md font-bold text-center uppercase text-primary">
              Experienced Job{" "}
            </h3>
            <h2 className="text-3xl font-semibold text-center mt-6 mb-16 text-accent dark:text-secondary">
              {" "}
              Looking for Better Opportunity?
            </h2>
            <ExperiencedJobHome></ExperiencedJobHome>
          </div>
        </section>
      </div>
    );
  }

  return <>{content}</>;
};

export default HomePage;
