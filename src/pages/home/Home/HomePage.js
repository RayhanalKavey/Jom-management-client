import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { bottomBorder, topBorder } from "../../../components/classes/classes";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import SectionSubHeading from "../../../components/SectionSubHeading/SectionSubHeading";
import Spinner from "../../../components/Spinner/Spinner";
import Tryout from "../../../components/Tryout";
import useTitle from "../../../hooks/useTitle/useTitle";
import ExperiencedJobHome from "../ExperiencedJobHome/ExperiencedJobHome";
import FresherJobHome from "../FresherJobHome/FresherJobHome";
import HeroSection from "../HeroSection/HeroSection";
import PopularJobCategory from "../PopularJobCategory/PopularJobCategory";
import UserOpinion from "../UserOpinion/UserOpinion";

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
            <SectionHeading>Fresher Job</SectionHeading>
            <SectionSubHeading> Looking for a Fresh Start?</SectionSubHeading>
            <FresherJobHome></FresherJobHome>
          </div>
        </section>
        {/* Experience job */}
        <section className="dark:bg-accent py-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Experienced Job</SectionHeading>
            <SectionSubHeading>
              Looking for Better Opportunity?
            </SectionSubHeading>
            <ExperiencedJobHome></ExperiencedJobHome>
          </div>
        </section>
        {/* Popular job Category */}
        <section
          className={`${bottomBorder} ${topBorder} bg-secondary dark:bg-accent py-28 `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Job Category</SectionHeading>
            <SectionSubHeading>Popular Job Categories</SectionSubHeading>
            <PopularJobCategory></PopularJobCategory>
          </div>
        </section>
        {/*  */}
        <section className={` dark:bg-accent py-28 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>User Opinion</SectionHeading>
            <SectionSubHeading>Let's See What User Says </SectionSubHeading>
            <UserOpinion></UserOpinion>
          </div>
        </section>
      </div>
    );
  }

  return <>{content}</>;
};

export default HomePage;
