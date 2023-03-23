import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
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

  const seekerOrEmployerButton =
    " bg-secondary  border-[.08rem]  rounded-lg w-full h-full text-center text-2xl duration-500 hover:scale-105 hover:bg-warning hover:text-secondary font-semibold";
  const linkStyle = "p-10 block";

  return (
    <>
      <TitleComponent title={"Continue As"}></TitleComponent>
      <section className="dark:bg-accent py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   ">
          {/* Job poster or seeker content Start */}
          <div className="flex flex-row gap-8  ">
            <div className={`${seekerOrEmployerButton}`}>
              {!loggedInEmployer?.isEmployer &&
                email &&
                !loggedInEmployer?._id && (
                  <Link to="/employerForm" className={`${linkStyle}`}>
                    Employer
                  </Link>
                )}
              {loggedInEmployer?.isEmployer &&
                email &&
                loggedInEmployer?._id && (
                  <Link to="/employer-dashboard" className={`${linkStyle}`}>
                    Employer
                  </Link>
                )}
            </div>
            <div className={`${seekerOrEmployerButton}`}>
              {/* 
        1) !loggedInJobSeeker?.isJobSeeker = To check if the user is a job seeker
        2) email = user is logged in firebase
        3) loggedInJobSeeker?._id = Sometimes user information from the database needs some time to reach. In that moment user can access the form though he is already registered. To prevent this this condition check for user data reach from the database
         */}
              {!loggedInJobSeeker?.isJobSeeker &&
                email &&
                !loggedInJobSeeker?._id && (
                  <Link to="/jobSeekerForm" className={`${linkStyle}`}>
                    Job Seeker
                  </Link>
                )}
              {loggedInJobSeeker?.isJobSeeker &&
                email &&
                loggedInJobSeeker?._id && (
                  <Link to="/job-seeker-dashboard" className={`${linkStyle}`}>
                    Job Seeker
                  </Link>
                )}
            </div>
          </div>
          {/* Job poster or seeker content End */}
        </div>
      </section>
    </>
  );
};

export default JobPosterOrJobSeeker;
