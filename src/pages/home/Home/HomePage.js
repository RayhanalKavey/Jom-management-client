import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { bottomBorder, topBorder } from "../../../components/classes/classes";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import SectionSubHeading from "../../../components/SectionSubHeading/SectionSubHeading";
import Spinner from "../../../components/Spinner/Spinner";
import Tryout from "../../../components/Tryout";
import { useGetBlogsQuery } from "../../../features/auth/blogApi";
import useTitle from "../../../hooks/useTitle/useTitle";
import BlogCard from "../BlogCard/BlogCard";
import BrandSection from "../BrandSection/BrandSection";
import ExperiencedJobHome from "../ExperiencedJobHome/ExperiencedJobHome";
import FresherJobHome from "../FresherJobHome/FresherJobHome";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import Newsletter from "../Newsletter/Newsletter";
import PopularJobCategory from "../PopularJobCategory/PopularJobCategory";
import UserOpinion from "../UserOpinion/UserOpinion";

const HomePage = () => {
  useTitle("Home");
  // Information of the redux store
  const { isLoading, isError } = useSelector((state) => state.auth);
  // Fetched data of all jobs

  const { data: blogs } = useGetBlogsQuery();

  let content;

  if (isLoading) {
    content = <Spinner />;
  }
  if (!isError && !isLoading) {
    content = (
      <>
        <section
          className={`bg-secondary dark:bg-accent py-32  ${bottomBorder}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection></HeroSection>
          </div>
        </section>
        {/* Fresher job */}
        <section className="dark:bg-accent pt-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Fresher Job</SectionHeading>
            <SectionSubHeading> Looking for a Fresh Start?</SectionSubHeading>
            <FresherJobHome />
          </div>
        </section>
        {/* Experience job */}
        <section className="dark:bg-accent pt-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Experienced Job</SectionHeading>
            <SectionSubHeading>
              Looking for Better Opportunity?
            </SectionSubHeading>
            <ExperiencedJobHome />
          </div>
        </section>
        {/* How it works  */}
        <section className="dark:bg-accent py-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Career Quest</SectionHeading>
            <SectionSubHeading>
              {" "}
              Simplify Your Job Search or Hiring Process
            </SectionSubHeading>
            <HowItWorks />
          </div>
        </section>
        {/* Popular job Category */}
        <section
          className={`${bottomBorder} ${topBorder} bg-secondary dark:bg-accent py-28 `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Job Category</SectionHeading>
            <SectionSubHeading>Popular Job Categories</SectionSubHeading>
            <PopularJobCategory />
          </div>
        </section>
        {/*  User openion */}
        <section className={` dark:bg-accent py-28 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>User Opinion</SectionHeading>
            <SectionSubHeading>Let's See What User Says </SectionSubHeading>
            <UserOpinion />
          </div>
        </section>
        {/* Popular job Category */}
        <section
          className={`${bottomBorder} ${topBorder} bg-secondary dark:bg-accent py-28 `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Blogs</SectionHeading>
            <SectionSubHeading>Recent Blogs</SectionSubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs?.slice(0, 3)?.map((blog) => (
                <BlogCard blog={blog} key={blog?._id}></BlogCard>
              ))}
            </div>
          </div>
        </section>
        {/* Brand Section */}
        <section className={` dark:bg-accent py-20 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <BrandSection />
          </div>
        </section>
        {/* newsletter Section */}
        <section className={` ${topBorder} bg-success dark:bg-accent py-20 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Newsletter</SectionHeading>
            <SectionSubHeading>Subscribe to Our Newsletter</SectionSubHeading>
            <Newsletter></Newsletter>
          </div>
        </section>
      </>
    );
  }

  return <>{content}</>;
};

export default HomePage;
