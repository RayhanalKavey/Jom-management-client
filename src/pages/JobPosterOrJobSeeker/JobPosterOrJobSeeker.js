import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const JobPosterOrJobSeeker = () => {
  const { email, user } = useSelector((state) => state?.auth);
  console.log("user from jobPoster or seeker page", user);

  return (
    <div>
      Continue ar
      <div>
        {/* {role===  && (
          <Link
            to="/contact"
            className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </Link>
        )} */}
        {!user?.isEmployer && (
          <Link
            to="/dashboard/employerForm"
            className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Employer{" "}
          </Link>
        )}
      </div>
      <div>
        Continue as
        {!user?.isSeeker && (
          <Link
            to="/contact"
            className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Job Seeker
          </Link>
        )}
      </div>
    </div>
  );
};

export default JobPosterOrJobSeeker;
