import React from "react";
import { toast } from "react-hot-toast";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SeekerOrPosterSkeleton from "../../components/SeekerOrPosterSkeleton/SeekerOrPosterSkeleton";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import { useGetUserQuery } from "../../features/auth/authApi";
import useTitle from "../../hooks/useTitle/useTitle";

const JobPosterOrJobSeeker = () => {
  useTitle("Job Poster/Seeker");

  //LoggedIn user email
  const { email } = useSelector((state) => state?.auth);
  // get all users from the database
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery();

  /*CSS Class  */

  const iconClass =
    "flex items-center justify-center w-16 h-16 rounded-full bg-primary text-secondary mb-4";
  const seekerOrEmployerButton =
    " bg-secondary  border-[.08rem] rounded-lg  overflow-hidden  text-2xl duration-500 hover:scale-105  font-semibold  dark:bg-accent ";
  const linkStyle =
    "py-5 w-full inline-block text-center text-accent bg-secondary  ";

  /*================================
  Loading state of logged In user
    ================================*/
  let content;

  if (isLoading) {
    content = (
      <div className={` dark:bg-accent py-28 `}>
        <SeekerOrPosterSkeleton />
      </div>
    );
  }
  if (isError) {
    toast.error(error, { id: "error" });
  }
  if (isSuccess) {
    // Find if the user Registered as employer otherwise send to the employer Registration page
    const loggedInEmployer = data?.find(
      (u) => u?.email === email && u?.isEmployer === true
    );
    // Find if the user Registered as job seeker otherwise send to the job seeker Registration page
    const loggedInJobSeeker = data?.find(
      (u) => u?.email === email && u?.isJobSeeker === true
    );

    content = (
      <section className="dark:bg-accent py-20  text-accent dark:text-secondary">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8   ">
          {/*====== Job poster or seeker content Start =====*/}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full  ">
            {/* ==========================
               Employer content start ///
              ======================== */}
            <div className="flex flex-col flex-1 justify-between ">
              <div
                data-aos="fade-right"
                className={`flex flex-col justify-center items-center p-5`}
              >
                <div className={`${iconClass} mb-8`}>
                  <FaBriefcase className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-5  text-center">
                  Unlock Your Hiring Potential
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-center">
                  As an employer, registering on our platform allows you to
                  easily post job opportunities from your dashboard. Upon
                  registration, you'll be able to manage your job listings,
                  including the ability to edit or delete them when needed.
                </p>
              </div>

              {/* Employer button start */}
              <div className={`${seekerOrEmployerButton} `}>
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
                    <Link
                      to="/employer-dashboard/my-posted-job"
                      className={`${linkStyle}`}
                    >
                      Employer
                    </Link>
                  )}
              </div>
            </div>
            {/* =========Employer content end ========= */}

            {/* ==========================
               Job Seeker Content start ///
            ======================== */}
            <div className="flex flex-col flex-1 justify-between">
              <div
                data-aos="fade-left"
                className={`flex flex-col justify-center items-center p-5`}
              >
                <div className={`${iconClass} mb-8`}>
                  <FaUser className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-5 text-center ">
                  Land Your Next Career Opportunity
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-center">
                  Job seekers can also register on our platform to apply for job
                  openings from their dashboard. You'll be able to view a list
                  of your applied jobs and track their status. Once you've
                  applied for a job, the apply button will change to indicate
                  that you've already applied.
                </p>
              </div>

              {/* Job seeker button start */}
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
                    <Link
                      to="/job-seeker-dashboard/my-apply"
                      className={`${linkStyle}`}
                    >
                      Job Seeker
                    </Link>
                  )}
              </div>
            </div>

            {/* =========Job Seeker content end ========= */}
          </div>
          {/* Job poster or seeker content End */}
        </div>
      </section>
    );
  }
  return (
    <>
      <TitleComponent title={"Continue As"}></TitleComponent>

      {content}
    </>
  );
};

export default JobPosterOrJobSeeker;
