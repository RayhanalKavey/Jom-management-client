import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  badgeClass,
  buttonApplied,
  buttonClass,
  dateFormate,
  scaleButtonClass,
} from "../classes/classes";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import ApplyModal from "../ApplyModal/ApplyModal";
import JobDetails from "../../pages/AllJob/JobDetails";

const JobCard = ({ job }) => {
  //LoggedIn user email
  const { user, email } = useSelector((state) => state?.auth);

  // If the jobSeeker apply this job
  let isJobApplied;
  let isClosed;
  if (job) {
    isJobApplied = job?.applicants?.some((app) => app?.userId === user?._id);
    isClosed = job?.isClosed;
    console.log("isclosed", isClosed);
  }
  // /*--------------------------------------------
  //  Check if the current user applied in this job, and Buttons class start
  //  -------------------------------------------- */
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
  if (user?.isJobSeeker && isJobApplied) {
    applyButton = <button className={`${buttonApplied} `}> Applied</button>;
  }
  // 4

  if (user?.isJobSeeker && !isJobApplied) {
    applyButton = <ApplyModal job={job} />;
  }
  // 5
  if (isClosed) {
    applyButton = <button className={`${buttonApplied} `}> Closed</button>;
  }
  /*--------------------------------------------
   Check if the current user applied in this job, and Buttons class end
   -------------------------------------------- */

  return (
    <div>
      {/* inner content */}
      <div className="flex  items-start  gap-5   flex-col sm:flex-row md:flex-col lg:flex-row relative text-accent ">
        {/* logo */}
        <div className=" sm:mt-1.5  flex items-center justify-center h-12 w-12 rounded-md p-2 border-[.5px] bg-success">
          <img src={job?.logo} alt="" />
        </div>

        {/* content */}
        <div className="flex-1 w-full ">
          {/* heading(position)  */}
          <div className="flex justify-between items-center mb-3">
            <p className="text-lg font-semibold  ">{job?.position}</p>
            {/*  */}
            <div className="group relative">
              <div className="relative group">
                <div
                  className={`${scaleButtonClass} tooltip-secondary  absolute -top-1 right-0 text-accent `}
                >
                  <MdOutlineBookmarkAdd style={{ fontSize: "1.5rem" }} />
                  {/* <MdOutlineBookmarkAdded style={{ fontSize: "1.5rem" }} /> */}
                </div>
                <div className=" opacity-0 group-hover:opacity-100 pointer-events-none absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-xs bg-warning text-secondary rounded-sm pl-1 pr-16 py-0.5">
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
          <div className="flex justify-start items-center gap-4 sm:gap-6 mb-5 flex-wrap text-info text-md">
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

            <JobDetails job={job}></JobDetails>

            {/* <ApplyModal job={job} /> */}
          </div>
          {/* All buttons end */}
        </div>
        {/* content end*/}
      </div>
    </div>
  );
};

export default JobCard;
