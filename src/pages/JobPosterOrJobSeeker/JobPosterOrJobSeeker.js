import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../../features/auth/authApi";

const JobPosterOrJobSeeker = () => {
  //LoggedIn user email
  const { email } = useSelector((state) => state?.auth);
  // get all users from the database
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery();

  // Find if the user Registered as employer otherwise send to the employer Registration page
  const loggedInEmployer = data?.find(
    (u) => u?.email === email && u?.isEmployer === true
  );
  // Find if the user Registered as job seeker otherwise send to the job seeker Registration page
  const loggedInJobSeeker = data?.find(
    (u) => u?.email === email && u?.isJobSeeker === true
  );

  return (
    <>
      <div className="h-screen flex flex-row">
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
          <p className="text-lg font-medium mb-4">Continue as</p>
          {!loggedInEmployer?.isEmployer && email && !loggedInEmployer?._id && (
            <Link
              to="/employerForm"
              className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Employer
            </Link>
          )}
          {loggedInEmployer?.isEmployer && email && loggedInEmployer?._id && (
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
          {/* 
        1) !loggedInJobSeeker?.isJobSeeker = To check if the user is a job seeker
        2) email = user is logged in firebase
        3) loggedInJobSeeker?._id = Sometimes user information from the database needs some time to reach. In that moment user can access the form though he is already registered. To prevent this this condition check for user data reach from the database
         */}
          {!loggedInJobSeeker?.isJobSeeker &&
            email &&
            !loggedInJobSeeker?._id && (
              <Link
                to="/jobSeekerForm"
                className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Job Seeker
              </Link>
            )}
          {loggedInJobSeeker?.isJobSeeker &&
            email &&
            loggedInJobSeeker?._id && (
              <Link
                to="/job-seeker-dashboard"
                className="text-black hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Job Seeker
              </Link>
            )}
        </div>
      </div>
    </>
  );
};

export default JobPosterOrJobSeeker;
