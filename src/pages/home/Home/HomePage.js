import React from "react";
import { toast } from "react-hot-toast";
import { bottomBorder, topBorder } from "../../../components/classes/classes";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import SectionSubHeading from "../../../components/SectionSubHeading/SectionSubHeading";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";
import BlogCard from "../BlogCard/BlogCard";
import BrandSection from "../BrandSection/BrandSection";
import FresherJobHome from "../FresherJobHome/FresherJobHome";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import Newsletter from "../Newsletter/Newsletter";
import PopularJobCategory from "../PopularJobCategory/PopularJobCategory";
import UserOpinion from "../UserOpinion/UserOpinion";
import { useSelector } from "react-redux";
import ExperiencedJobHome from "../ExperiencedJobHome/ExperiencedJobHome";
import { useGetBlogsQuery } from "../../../features/blog/blogApi";
import PricingCard from "../PricingCard/PricingCard";
import Instruction from "../Instruction/Instruction";

const HomePage = () => {
  useTitle("Home");
  /* ======================
   Getting user information from redux store
  =======================*/
  const { isLoading, isError, error } = useSelector((state) => state.auth);

  /* =========================
     Fetched data of all BLOGs
     =========================*/
  const { data: blogs } = useGetBlogsQuery();

  /*================================
  Loading state of logged In user
    ================================*/
  let content;

  if (isLoading) {
    content = <Spinner />;
  }
  if (isError) {
    toast.error(error, { id: "error" });
  }
  if (!isLoading && !isError) {
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
            <SectionHeading>Fresher Job </SectionHeading>
            <SectionSubHeading>
              {" "}
              Looking for a Fresh Start{" "}
              <span className="inline-block animate-bounce">?</span>
            </SectionSubHeading>
            <FresherJobHome />
          </div>
        </section>
        {/* Experience job */}
        <section className="dark:bg-accent pt-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Experienced Job</SectionHeading>
            <SectionSubHeading>
              Looking for Better Opportunity{" "}
              <span className="inline-block animate-bounce">?</span>
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
        {/*  User opinion */}
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
        {/* Popular job Category */}
        {/* <section className={`  dark:bg-accent pt-28 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Pricing</SectionHeading>
            <SectionSubHeading>
              Choose a plan that’s right for you
            </SectionSubHeading>
            <Instruction></Instruction>
          </div>
        </section> */}
        {/* Popular job Category */}
        <section className={`  dark:bg-accent py-28 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <SectionHeading>Pricing</SectionHeading>
            <SectionSubHeading>
              Choose a plan that’s right for you
            </SectionSubHeading>
            <PricingCard></PricingCard>
          </div>
        </section>
        {/* newsletter Section */}
        <section className={` dark:bg-accent`}>
          <div className="sm:ml-20 mx-aut px-4 sm:px-6 lg:px-8 bg-success  py-20 sm:rounded-l-[2.5rem]">
            <SectionHeading>Newsletter</SectionHeading>
            <div className="text-3xl font-semibold text-center mt-6 mb-16 text-accent ">
              Subscribe to Our Newsletter
            </div>
            <Newsletter></Newsletter>
          </div>
        </section>
        {/* Brand Section */}
        <section className={` dark:bg-accent py-20 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <BrandSection />
          </div>
        </section>
      </>
    );
  }

  return <>{content}</>;
};

export default HomePage;
