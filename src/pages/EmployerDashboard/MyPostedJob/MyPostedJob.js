import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  badgeClass,
  buttonClass,
  dateFormate,
  deleteButtonClass,
  outlinedButton,
  scaleButtonClass,
} from "../../../components/classes/classes";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import {
  useDeleteAJobMutation,
  useGetJobsQuery,
} from "../../../features/auth/jobApi";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkAdded } from "react-icons/md";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { TbCloudDataConnection } from "react-icons/tb";

const MyPostedJob = () => {
  // Get current user email from the store
  const { email } = useSelector((state) => state?.auth);

  //  Get data from the database using redux
  const { data, isLoading } = useGetJobsQuery();
  const loggedInUserPost = data?.filter((job) => job?.email === email);

  // Redux action for deleting a job
  const [deleteAJob, { isLoading: deleteLoading, isSuccess, isError, error }] =
    useDeleteAJobMutation();

  const date = new Date().toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    if (deleteLoading) {
      toast.loading("Loading...... Please wait", { id: "deleteJob" });
    }
    if (isSuccess) {
      toast.success("Job deleted", { id: "deleteJob" });
    }
    if (isError) {
      toast.success(error, { id: "deleteJob" });
    }
  }, [deleteLoading, isSuccess, isError, error]);

  let content;

  if (!isLoading) {
    content = (
      <>
        <TitleComponent title={"My Job Circular"} />

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1  xl:grid-cols-2 gap-4 w-full py-16 px-5 ">
          {loggedInUserPost?.reverse()?.map((job) => (
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
                        {/* <MdOutlineBookmarkAdded
                          style={{ fontSize: "1.5rem" }}
                        /> */}
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
                      <Link
                        to={"/employer-dashboard/update-job"}
                        state={job}
                        className={`${buttonClass}`}
                      >
                        {" "}
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteAJob(job?._id)}
                        className={`${deleteButtonClass} `}
                      >
                        Delete
                      </button>
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

  return <>{content}</>;
};

export default MyPostedJob;
