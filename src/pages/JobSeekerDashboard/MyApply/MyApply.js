import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  badgeClass,
  buttonClass,
  dateFormate,
  deleteButtonClass,
  outlinedButton,
  scaleButtonClass,
} from "../../../components/classes/classes";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import { useGetApplyQuery } from "../../../features/auth/applyApi";
import { useGetUserQuery } from "../../../features/auth/authApi";
import {
  useDeleteAJobMutation,
  useGetJobsQuery,
} from "../../../features/auth/jobApi";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkAdded } from "react-icons/md";
import { toast } from "react-hot-toast";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";

const MyApply = () => {
  //LoggedIn user email
  const { email } = useSelector((state) => state?.auth);
  // get all users from the database
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery();

  //
  const { data: allJob } = useGetJobsQuery();

  // Find if the user Registered as job seeker otherwise send to the job seeker Registration page
  const loggedInJobSeeker = data?.find(
    (u) => u?.email === email && u?.isJobSeeker === true
  );

  // get apply jobs information
  const {
    data: applyInfo,
    isLoading: getApplyInfoLoading,
    isSuccess: isSeccessLoading,
  } = useGetApplyQuery();
  // find the applied jobs
  const currentJobSeekersApplied = applyInfo?.filter(
    (job) => job?.applyUserId === loggedInJobSeeker?._id
  );
  // find the applied jobs information from the jobs array

  const currentJobSeekersAppliedJobs = allJob?.filter((job) =>
    currentJobSeekersApplied?.some((jobObj) => job?._id === jobObj?.applyJobId)
  );

  let content;
  //  useEffect(() => {
  // }, [deleteLoading, isSuccess, isError, error]);

  if (isSuccess && isSeccessLoading) {
    content = (
      <>
        <TitleComponent title={"My Apply"}></TitleComponent>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1  xl:grid-cols-2 gap-4 w-full py-16 px-5 ">
          {currentJobSeekersAppliedJobs?.reverse()?.map((job) => (
            <div
              className="  border-[.08rem] p-6 rounded-lg  bg-secondary relative"
              key={job?._id}
            >
              {/* ----*/}
              <div>
                {/* inner content */}
                <div className="flex  items-start  gap-5   flex-col sm:flex-row md:flex-col lg:flex-row ">
                  {/* logo */}
                  <div className=" sm:mt-1.5  flex items-center justify-center h-12 w-12 rounded-md p-2 border-[.5px] bg-success">
                    <img src={job?.logo} alt="" />
                  </div>

                  {/* content */}
                  <div className="flex-1 w-full ">
                    {/* heading(position)  */}
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-lg font-semibold ">{job?.position}</p>

                      <div
                        className={`${scaleButtonClass}  absolute top-6 right-6 text-accent dark:text-secondary `}
                      >
                        <MdOutlineBookmarkAdd style={{ fontSize: "1.5rem" }} />
                        <MdOutlineBookmarkAdded
                          style={{ fontSize: "1.5rem" }}
                        />
                      </div>
                    </div>
                    {/* ------INFO----- */}
                    <div className="">
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
                      <Link
                        to="/job-details"
                        state={job}
                        className={`${outlinedButton}`}
                      >
                        Job Details
                      </Link>
                    </div>
                    {/* All buttons end */}
                  </div>
                  {/* content end*/}
                </div>
              </div>

              {/* ----*/}
            </div>
          ))}
        </div>
      </>
    );
  }
  if (isError) {
    toast.success(error, { id: "deleteJob" });
  }
  return <>{content}</>;
};

export default MyApply;
