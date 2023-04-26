import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import {
  badgeClass,
  bottomBorder,
  buttonApplied,
  buttonClass,
  dateFormate,
  jobDetailsListStyle,
  scaleButtonClass,
} from "../classes/classes";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import {
  useApplyAJobMutation,
  useJobSeekerMessageMutation,
} from "../../features/job/jobApi";
import ConversationModal from "../ConversationModal/ConversationModal";

const JobApply = ({ job }) => {
  //LoggedIn user email
  const { user, email } = useSelector((state) => state?.auth);

  // Post apply information. If the user is logged in and register as job seeker
  const [applyAJobs, { isLoading, isSuccess, isError, error }] =
    useApplyAJobMutation();

  // If the jobSeeker apply this job
  let isJobApplied;
  let isTheUserIsTheCreatorOfThisJob;
  if (job) {
    isJobApplied = job?.applicants?.some((app) => app?.userId === user?._id);
    isTheUserIsTheCreatorOfThisJob = email === job?.email;
  }
  let applyInformation;

  const currentDate = new Date();
  if (job?._id && user?.isJobSeeker) {
    applyInformation = {
      applyUserId: user?._id,
      applyUserEmail: user?.userEmail,
      applyJobId: job?._id,
      currentDate,
    };
  }
  // Handle job posting loading, success and error
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...... Please wait", { id: "japply" });
    }
    if (isSuccess) {
      toast.success("Job applied successfully", { id: "japply" });
    }
    if (isError) {
      toast.success(error, { id: "japply" });
    }
  }, [isLoading, isSuccess, isError, error]);

  let applyButton;
  /* 
   1/ If the not logged in then send user  to  the login page 
   2/ If user logged in but not a job seeker then sent user to the job seeker registration form
   3/ If user logged in and registered as job seeker and applied in this job then button will be applied
   4/ If user logged in su and registered an job seeker but not applied yet
   */
  //  1
  const location = useLocation();
  if (!email) {
    applyButton = (
      <Link
        className={`${buttonClass}`}
        to={"/login"}
        state={{ from: location }}
        replace
      >
        Apply
      </Link>
    );
  }

  // 2
  if (!user?.isJobSeeker) {
    applyButton = (
      <Link
        className={`${buttonClass}`}
        to={"/jobSeekerForm"}
        state={{ from: location }}
        replace
      >
        Apply
      </Link>
    );
  }
  // 3
  //send job Seeker  message to the database
  const [jobSeekerMessage] = useJobSeekerMessageMutation();
  // Current applicant
  const currentApplicant = job?.applicants?.find(
    (ap) => ap?.userEmail === email
  );
  if (email && user?.isJobSeeker && isJobApplied) {
    applyButton = (
      <>
        <button className={`${buttonApplied}`}> Applied</button>
        <ConversationModal
          name={user?.fullName}
          action={jobSeekerMessage}
          applicant={currentApplicant}
        />
      </>
    );
  }
  // 4
  if (email && user?.isJobSeeker && !isJobApplied) {
    applyButton = (
      <Link
        className={`${buttonClass}`}
        onClick={() => applyAJobs(applyInformation)}
      >
        {" "}
        Apply
      </Link>
    );
  }
  //  5

  if (job?.isApplied === true) {
    applyButton = <button className={`${buttonApplied}`}>Closed</button>;
  }

  //  5

  if (isTheUserIsTheCreatorOfThisJob) {
    applyButton = (
      <button className={`${buttonApplied}`}>
        You are the creator of this job.
      </button>
    );
  }
  /*--------------------------------------------
   Check if the current user applied in this job, and Buttons class end
   -------------------------------------------- */
  return (
    <div>
      <div
        className={`${bottomBorder} pb-10 flex  items-center justify-center  gap-5   flex-col relative `}
      >
        {/* logo */}
        <div className="  flex items-center justify-center h-20 w-20 rounded-md p-2 border-[.5px] bg-success">
          <img src={job?.logo} alt="" />
        </div>

        {/* content */}
        <div className="flex-1 w-full flex items-center flex-col ">
          {/* heading(position)  */}
          <div className="flex justify-between items-center mb-3 ">
            {/*  */}
            <div className="group ">
              <div className=" group">
                <div
                  className={`${scaleButtonClass} tooltip-secondary  absolute top-0 right-10  `}
                >
                  <MdOutlineBookmarkAdd style={{ fontSize: "1.5rem" }} />
                  {/* <MdOutlineBookmarkAdded style={{ fontSize: "1.5rem" }} /> */}
                </div>

                <div className=" opacity-0 group-hover:opacity-100 pointer-events-none absolute bottom-full right-0 transform -translate-x-1/2 -translate-y-1/2  text-xs bg-warning  rounded-sm pl-1 pr-16 py-0.5">
                  Bookmark
                </div>
              </div>
            </div>
            {/*  */}
          </div>

          {/* ------INFO----- */}
          <div>
            {/*---- Badge-- */}
            <div className="flex justify-start items-center gap-3 sm:gap-5 mb-5 flex-wrap text-warning">
              {/* Company Name */}
              <div className={`${badgeClass} `}>
                <p> {job?.company}</p>
              </div>
              {/* Job type */}
              <div className={`${badgeClass} `}>
                <p>{job?.jobType}</p>
              </div>
              {/* Job category */}
              <div className={`${badgeClass} `}>
                <p>{job?.jobCategory}</p>
              </div>
            </div>
          </div>
          {/* ---badge end--- */}
          {/* --- job info--- */}
          <div className="flex justify-start items-center gap-4 sm:gap-6 mb-5 flex-wrap text-md">
            {/* Company Location */}
            <div className="flex justify-center items-center gap-2">
              <p>
                <CiLocationOn style={{ fontSize: "1.4rem" }} />
              </p>
              <p className="">{job?.location}</p>
            </div>
            {/* Posted time */}
            <div className="flex justify-center items-center gap-2">
              <p>
                <CiTimer style={{ fontSize: "1.4rem" }} />
              </p>
              <p>
                {" "}
                {new Date(job?.currentDate).toLocaleDateString(
                  "en-US",
                  dateFormate
                )}
              </p>
            </div>
            {/* ---job  info end--- */}
          </div>

          {/* All buttons  start*/}
          <div className="flex justify-start items-center gap-2 flex-wrap">
            {applyButton}
          </div>
          {/* All buttons end */}
        </div>
        {/* content end*/}
      </div>
      {/* Job description start */}
      <div className="py-5 ">
        <h4 className="text-xl font-semibold mb-8">Company Details</h4>
        <p className="text-sm mb-10">{job?.companyDetail}</p>
        <h4 className="text-xl font-semibold mb-8">Job description</h4>
        <p className="text-sm mb-10">
          As a Product Designer, you will work within a Product Delivery Team
          fused with UX, engineering, product and data talent. You will help the
          team design beautiful interfaces that solve business challenges for
          our clients. We work with a number of Tier 1 banks on building
          web-based applications for AML, KYC and Sanctions List management
          workflows. This role is ideal if you are looking to segue your career
          into the FinTech or Big Data arenas.
        </p>
        <h4 className="text-xl font-semibold mb-8">Key Responsibility</h4>
        <ul className="list-disc mb-10">
          <li className={`${jobDetailsListStyle}`}>
            Maintain quality of the design process and ensure that when designs
            are translated into code they accurately reflect the design
            specifications.
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Contribute to sketching sessions involving non-designersCreate,
            iterate and maintain UI deliverables including sketch files, style
            guides, high fidelity prototypes, micro interaction specifications
            and pattern libraries.
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Design pixel perfect responsive UI’s and understand that adopting
            common interface patterns is better for UX than reinventing the
            wheel
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Ensure design choices are data led by identifying assumptions to
            test each sprint, and work with the analysts in your team to plan
            moderated usability test sessions.
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Accurately estimate design tickets during planning sessions.
          </li>
        </ul>
        <h4 className="text-xl font-semibold mb-8">Skill and Experience</h4>
        <ul className="list-disc mb-10">
          <li className={`${jobDetailsListStyle}`}>
            You have at least 3 years’ working experience.
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Proficiency in programming languages such as HTML, CSS, JavaScript,
            and various front-end frameworks like React or Vue.js.
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Understanding of database technologies such as MySQL or MongoDB.
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Familiarity with web development tools and platforms like WordPress,
            Drupal, or Magento.
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Understanding of responsive design principles and the ability to
            create responsive web pages.
          </li>
          <li className={`${jobDetailsListStyle}`}>
            Knowledge of search engine optimization (SEO) techniques to improve
            the visibility of web pages in search engine results.
          </li>
        </ul>
      </div>
      {/* Job description end */}
    </div>
  );
};

export default JobApply;
