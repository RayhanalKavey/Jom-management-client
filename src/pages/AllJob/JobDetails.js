import React from "react";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { outlinedButton } from "../../components/classes/classes";
import JobApply from "../../components/JobCard/JobApply";

const JobDetails = ({ job }) => {
  // Job details list style
  const jobDetailsListStyle = "ml-4 mb-5 text-sm";

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button onClick={toggleModal} className={`${outlinedButton}`}>
        Job Details
      </button>
      {isOpen && (
        <section className=" bg-base-100 dark:bg-accent text-secondary dark:text-accent fixed z-10 inset-0 overflow-y-auto ">
          <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-accent dark:text-secondary">
            <h1 className="text-3xl font-bold text-center mb-10">
              {job?.position}{" "}
            </h1>
            <button>
              <div
                onClick={toggleModal}
                className={`duration-500 transform  hover:scale-[1.005] transition-all left-24 top-10 absolute bottom-5  text-accent dark:text-secondary `}
              >
                <IoIosArrowRoundBack style={{ fontSize: "1.8em" }} />
              </div>
            </button>
            {/* inner content */}
            <JobApply job={job}></JobApply>
            {/* Job description start */}
            <div className="py-16 ">
              <h4 className="text-xl font-semibold mb-8">Company Details</h4>
              <p className="text-sm mb-10">{job?.companyDetail}</p>
              <h4 className="text-xl font-semibold mb-8">Job description</h4>
              <p className="text-sm mb-10">
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas.
              </p>
              <h4 className="text-xl font-semibold mb-8">Key Responsibility</h4>
              <ul className="list-disc mb-10">
                <li className={`${jobDetailsListStyle}`}>
                  Maintain quality of the design process and ensure that when
                  designs are translated into code they accurately reflect the
                  design specifications.
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Contribute to sketching sessions involving
                  non-designersCreate, iterate and maintain UI deliverables
                  including sketch files, style guides, high fidelity
                  prototypes, micro interaction specifications and pattern
                  libraries.
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Design pixel perfect responsive UI’s and understand that
                  adopting common interface patterns is better for UX than
                  reinventing the wheel
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Ensure design choices are data led by identifying assumptions
                  to test each sprint, and work with the analysts in your team
                  to plan moderated usability test sessions.
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Accurately estimate design tickets during planning sessions.
                </li>
              </ul>
              <h4 className="text-xl font-semibold mb-8">
                Skill and Experience
              </h4>
              <ul className="list-disc mb-10">
                <li className={`${jobDetailsListStyle}`}>
                  You have at least 3 years’ working experience.
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Proficiency in programming languages such as HTML, CSS,
                  JavaScript, and various front-end frameworks like React or
                  Vue.js.
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Understanding of database technologies such as MySQL or
                  MongoDB.
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Familiarity with web development tools and platforms like
                  WordPress, Drupal, or Magento.
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Understanding of responsive design principles and the ability
                  to create responsive web pages.
                </li>
                <li className={`${jobDetailsListStyle}`}>
                  Knowledge of search engine optimization (SEO) techniques to
                  improve the visibility of web pages in search engine results.
                </li>
              </ul>
            </div>
            {/* Job description end */}
          </div>
        </section>
      )}
    </>
  );
};

export default JobDetails;
