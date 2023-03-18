import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../../features/auth/authApi";

const JobPosterOrJobSeeker = () => {
  const { email } = useSelector((state) => state?.auth);
  console.log("user from jobPoster or seeker page", email);
  // get all users from the database
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery();
  // console.log("From poster  or register", data);

  // Find if the user Registered as employer otherwise send to the employer Registration page
  const loggedInEmployer = data?.find(
    (u) => u?.email === email && u?.isEmployer === true
  );
  // Find if the user Registered as job seeker otherwise send to the job seeker Registration page
  const loggedInJobSeeker = data?.find(
    (u) => u?.email === email && u?.isJobSeeker === true
  );
  console.log("logged in loggedInEmployer", loggedInEmployer);

  console.log("logged in loggedInJobSeeker", loggedInJobSeeker);

  return (
    <div className="h-screen flex flex-row">
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <p className="text-lg font-medium mb-4">Continue as</p>
        {!loggedInEmployer?.isEmployer && email && (
          <Link
            to="/employerForm"
            className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Employer
          </Link>
        )}
        {loggedInEmployer?.isEmployer && email && (
          <Link
            to="/employer-dashboard"
            className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Employer
          </Link>
        )}
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-200">
        <p className="text-lg font-medium mb-4">Continue as</p>
        {!loggedInJobSeeker?.isJobSeeker && email && (
          <Link
            to="/jobSeekerForm"
            className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Job Seeker
          </Link>
        )}
        {loggedInJobSeeker?.isJobSeeker && email && (
          <Link
            to="/job-seeker-dashboard"
            className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            Job Seeker
          </Link>
        )}
      </div>
    </div>
  );
};

export default JobPosterOrJobSeeker;
