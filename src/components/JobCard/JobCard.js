import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  return (
    <>
      <p className="text-lg font-semibold text-center">{job?.position}</p>
      <p className="">{job?.jobCategory}</p>
      <br />

      <p>{job?.jobType}</p>
      {/* <button className="btn btn-darkPrimary btn-sm">Shortlist</button> */}

      <div className="flex gap-2">
        {/* Check if the current user applied in this job */}
        {isJobApplied ? (
          <>
            <Link className="btn btn-accent  btn-sm ">
              {" "}
              <span className="text-secondary">Applied</span>
            </Link>
          </>
        ) : (
          <>
            {/* This logic is for if the user logged in properly */}
            {!email ? (
              <Link className="btn btn-primary btn-sm" to={"/login"}>
                <span className="text-secondary">Apply</span>
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-sm"
                onClick={() => applyJobs(applyInformation)}
              >
                <span className="text-secondary">
                  <span className="text-secondary">Apply</span>
                </span>
              </Link>
            )}
          </>
        )}

        <button className="btn btn-primary  btn-outline btn-sm">
          Job Details
        </button>
      </div>
    </>
  );
};

export default JobCard;
