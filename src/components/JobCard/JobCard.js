import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  useApplyJobsMutation,
  useGetApplyQuery,
} from "../../features/auth/applyApi";
import { useGetUserQuery } from "../../features/auth/authApi";

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

  /*--------------------------------------------
   Check if the current user applied in this job, and Buttons class
   -------------------------------------------- */
  const outlinedButton =
    "text-xs uppercase font-semibold px-2 py-1 text-accent hover:text-secondary bg-base-100 border  rounded-lg hover:bg-primary";

  const buttonClass =
    "text-xs uppercase font-semibold  px-2 py-1 text-secondary bg-primary border rounded-lg hover:bg-[#2a78a5]";

  let applyButton;
  /* 
  1/ If the not logged in then send user  to  the login page 
  2/ If user logged in but not a job seeker then sent user to the job seeker registration form
  3/ If user logged in and registered as job seeker and applied in this job then button will be applied
  */
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
  if (email && loggedInJobSeeker?.isJobSeeker && isJobApplied) {
    applyButton = <Link className={`${buttonClass}`}> Applied</Link>;
  }
  return (
    <div>
      {/* inner content */}
      <div className="flex  items-start  gap-5   flex-col sm:flex-row md:flex-col lg:flex-row ">
        {/* logo */}
        <div className=" sm:mt-1.5  flex items-center justify-center h-12 w-12 rounded-md p-2 border-[.5px] bg-success">
          <img src={job?.logo} alt="" />
        </div>

        {/* content */}
        <div className="flex-1 w-full ">
          <p className="text-lg font-semibold mb-1">{job?.position}</p>
          <div className="flex gap-3 sm:gap-5 mb-5 flex-wrap">
            <p>location</p>
            <p>time</p>
            <p>remote/onSite/hybrid</p>
          </div>

          {/* All buttons  start*/}
          <div className="flex justify-start items-center gap-2 flex-wrap">
            <button className={`${buttonClass}`}>Shortlist</button>
            {applyButton}
            <button className={`${outlinedButton}`}>Job Details</button>
          </div>
          {/* All buttons end */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
