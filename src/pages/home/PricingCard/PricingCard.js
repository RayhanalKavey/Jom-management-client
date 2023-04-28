import React from "react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const PricingCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 1 */}
        <div className="border-[.5px]  dark:border-gray-600 rounded-xl p-10 flex flex-col bg-secondary">
          <div className="flex flex-col justify-center items-center mb-10">
            <h4 className="text-lg font-semibold mb-4">Start Up</h4>
            <h3 className="text-3xl font-bold mb-2">Free</h3>
            <p className="text-sm">per month</p>
          </div>
          <p className="text-sm mb-7">
            Standard listing submission, active for 30 days
          </p>
          <ul className="mb-8 flex flex-col gap-5">
            <li>1 job posting</li>
            <li>0 featured job</li>
            <li>Job displayed for 20 days</li>
            <li>Premium Support 24/7</li>
          </ul>
          <button
            className={`justify-self-center self-center lg:self-stretch text-sm text-accent hover:text-secondary  duration-500 bg-secondary py-3 px-6 rounded-full  font-bold shadow-m uppercase tracking-wider hover:bg-warning border-[.5px] border-primary hover:border-warning`}
          >
            {" "}
            Purchase{" "}
          </button>
        </div>
        {/* 2 */}
        <div className="border-[.5px]  dark:border-gray-600 rounded-xl p-10 flex flex-col bg-secondary">
          <div className="flex flex-col justify-center items-center mb-10">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <h3 className="text-3xl font-bold mb-2">299</h3>
            <p className="text-sm">per month</p>
          </div>
          <p className="text-sm mb-7">
            Standard listing submission, active for 30 days
          </p>
          <ul className="mb-8 flex flex-col gap-5">
            <li>1 job posting</li>
            <li>0 featured job</li>
            <li>Job displayed for 20 days</li>
            <li>Premium Support 24/7</li>
          </ul>
          <button
            className={`justify-self-center self-center lg:self-stretch text-sm text-accent hover:text-secondary  duration-500 bg-secondary py-3 px-6 rounded-full  font-bold shadow-m uppercase tracking-wider hover:bg-warning border-[.5px] border-primary hover:border-warning`}
          >
            {" "}
            Purchase{" "}
          </button>
        </div>
        {/* 3 */}
        <div className="border-[.5px]  dark:border-gray-600 rounded-xl p-10 flex flex-col bg-secondary">
          <div className="flex flex-col justify-center items-center mb-10">
            <h4 className="text-lg font-semibold mb-4">Enterprise</h4>
            <h3 className="text-3xl font-bold mb-2">499</h3>
            <p className="text-sm">per month</p>
          </div>
          <p className="text-sm mb-7">
            Standard listing submission, active for 30 days
          </p>
          <ul className="mb-8 flex flex-col gap-5">
            <li>1 job posting</li>
            <li>0 featured job</li>
            <li>Job displayed for 20 days</li>
            <li>Premium Support 24/7</li>
          </ul>
          <button
            className={`justify-self-center self-center lg:self-stretch text-sm text-accent hover:text-secondary  duration-500 bg-secondary py-3 px-6 rounded-full  font-bold shadow-m uppercase tracking-wider hover:bg-warning border-[.5px] border-primary hover:border-warning`}
          >
            {" "}
            Purchase{" "}
          </button>
        </div>
        {/* 4 */}
        <div className="border-[.5px]  dark:border-gray-600 rounded-xl p-10 flex flex-col bg-secondary ">
          <div className="flex flex-col justify-center items-center mb-10">
            <h4 className="text-lg font-semibold mb-4">Business</h4>
            <h3 className="text-3xl font-bold mb-2">899</h3>
            <p className="text-sm">per month</p>
          </div>
          <p className="text-sm mb-7">
            Standard listing submission, active for 30 days
          </p>
          <ul className="mb-8 flex flex-col gap-5">
            <li>1 job posting</li>
            <li>0 featured job</li>
            <li>Job displayed for 20 days</li>
            <li>Premium Support 24/7</li>
          </ul>
          <button
            className={`justify-self-center self-center lg:self-stretch text-sm text-accent hover:text-secondary  duration-500 bg-secondary py-3 px-6 rounded-full  font-bold shadow-m uppercase tracking-wider hover:bg-warning border-[.5px] border-primary hover:border-warning`}
          >
            {" "}
            Purchase{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
