import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  useApplyJobsMutation,
  useGetApplyQuery,
} from "../../features/auth/applyApi";
import { useGetUserQuery } from "../../features/auth/authApi";
import {
  badgeClass,
  buttonApplied,
  buttonClass,
  dateFormate,
  outlinedButton,
  scaleButtonClass,
} from "../classes/classes";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkAdded } from "react-icons/md";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { TbCloudDataConnection } from "react-icons/tb";

const JobCard = ({ job }) => {
  //LoggedIn user email
  const { email } = useSelector((state) => state?.auth);

  // get all users from the database
  const { data } = useGetUserQuery();

  // Post apply information. If the user is logged in and register as job seeker
  const [applyJobs, { isLoading, isSuccess, isError, error }] =
    useApplyJobsMutation();
  // Find if the user Registered as job seeker otherwise send to the job seeker Registration page
  const loggedInJobSeeker = data?.find(
    (u) => u?.email === email && u?.isJobSeeker === true
  );

  // get apply jobs information
  const { data: applyJobInfo, isLoading: getApplyInfoLoading } =
    useGetApplyQuery();

  // If the jobSeeker apply this job
  const isJobApplied = applyJobInfo?.some(
    (ji) =>
      ji?.applyJobId === job?._id && ji?.applyUserId === loggedInJobSeeker?._id
  );

  let applyInformation;
  if (
    loggedInJobSeeker?._id &&
    job?._id &&
    loggedInJobSeeker?.email &&
    loggedInJobSeeker?.isJobSeeker
  ) {
    applyInformation = {
      applyUserId: loggedInJobSeeker?._id,
      applyUserEmail: loggedInJobSeeker?.email,
      applyJobId: job?._id,
    };
  }
  // Handle job posting loading, success and error
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...... Please wait", { id: "apply" });
    }
    if (isSuccess) {
      toast.success("Job applied successfully", { id: "apply" });
    }
    if (isError) {
      toast.success(error, { id: "apply" });
    }
  }, [isLoading, isSuccess, isError, error]);

  // /*--------------------------------------------
  //  Check if the current user applied in this job, and Buttons class start
  //  -------------------------------------------- */
  // const outlinedButton =
  //   "text-xs uppercase font-semibold px-2 py-1 text-accent hover:text-secondary bg-base-100 border  rounded-lg hover:bg-primary";

  // const buttonClass =
  //   "text-xs uppercase font-semibold  px-2 py-1 text-secondary bg-primary border rounded-lg hover:bg-[#2a78a5]";

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
  if (email && !loggedInJobSeeker?.isJobSeeker) {
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
  if (email && loggedInJobSeeker?.isJobSeeker && isJobApplied) {
    applyButton = <Link className={`${buttonApplied} `}> Applied</Link>;
  }
  // 4
  if (email && loggedInJobSeeker?.isJobSeeker && !isJobApplied) {
    applyButton = (
      <Link
        className={`${buttonClass}`}
        onClick={() => applyJobs(applyInformation)}
      >
        {" "}
        Apply
      </Link>
    );
  }
  /*--------------------------------------------
   Check if the current user applied in this job, and Buttons class end
   -------------------------------------------- */
  return (
    <div>
      {/* inner content */}
      <div className="flex  items-start  gap-5   flex-col sm:flex-row md:flex-col lg:flex-row relative">
        {/* logo */}
        <div className=" sm:mt-1.5  flex items-center justify-center h-12 w-12 rounded-md p-2 border-[.5px] bg-success">
          <img src={job?.logo} alt="" />
        </div>

        {/* content */}
        <div className="flex-1 w-full ">
          {/* heading(position)  */}
          <div className="flex justify-between items-center mb-3">
            <p className="text-lg font-semibold ">{job?.position}</p>
            {/*  */}
            <div className="group relative">
              <div className="relative group">
                <div
                  className={`${scaleButtonClass} tooltip-secondary  absolute -top-1 right-0 text-accent `}
                >
                  <MdOutlineBookmarkAdd style={{ fontSize: "1.5rem" }} />
                  <MdOutlineBookmarkAdded style={{ fontSize: "1.5rem" }} />
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
            <Link to="/job-details" state={job} className={`${outlinedButton}`}>
              Job Details
            </Link>
          </div>
          {/* All buttons end */}
        </div>
        {/* content end*/}
      </div>
    </div>
  );
};

export default JobCard;
