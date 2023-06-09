import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  badgeClass,
  buttonClass,
  dateFormate,
  outlinedButton,
  scaleButtonClass,
} from "../../../components/classes/classes";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";

import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import DeleteModal from "../../../components/DeleteModal/DeleteModal";
import JobCardSkeleton from "../../../components/JobCardSkeleton/JobCardSkeleton";
import {
  useCloseAJobMutation,
  useDeleteAJobMutation,
  useGetPostedJobsQuery,
  useReopenAJobMutation,
} from "../../../features/job/jobApi";

const MyPostedJob = () => {
  const navigate = useNavigate();

  // Get current user email from the store
  const { email } = useSelector((state) => state?.auth);

  const [closeAJob, closeJobResult] = useCloseAJobMutation();
  const [reopenAJob, reopenJobResult] = useReopenAJobMutation();
  /* ===============================
  //  Get data of All posted jobs from the database using redux for the current user (as job poster)
     ===============================*/
  const {
    data: loggedInUserPost,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostedJobsQuery({ email });

  /* ===============================
  // Redux action for deleting a job
     ===============================*/
  const [deleteAJob, { deleteResult }] = useDeleteAJobMutation();

  /* ===============================
    Loading States for deleting a job
    ===============================*/
  useEffect(() => {
    if (deleteResult?.isLoading) {
      toast.loading("Deleting...Please wait...", { id: "deleteJob" });
    }
    if (deleteResult?.isSuccess) {
      toast.success("Job deleted Successfully", { id: "deleteJob" });
    }
    if (deleteResult?.isError) {
      toast.success(deleteResult?.error, { id: "deleteJob" });
    }
  }, [
    deleteResult?.isLoading,
    deleteResult?.isSuccess,
    deleteResult?.isError,
    deleteResult?.error,
  ]);

  // Handle job closing loading, success and error
  useEffect(() => {
    if (closeJobResult?.isLoading) {
      toast.loading("Loading...... Please wait", { id: "closeJob" });
    }
    if (closeJobResult?.isSuccess) {
      toast.success("Job closed successfully", { id: "closeJob" });
    }
    if (closeJobResult?.isError) {
      toast.success(closeJobResult?.error, { id: "closeJob" });
    }
  }, [
    closeJobResult?.isLoading,
    closeJobResult?.isSuccess,
    closeJobResult?.isError,
    closeJobResult?.error,
  ]);
  // Handle job reopen loading, success and error
  useEffect(() => {
    if (reopenJobResult?.isLoading) {
      toast.loading("Loading...... Please wait", { id: "reopenJob" });
    }
    if (reopenJobResult?.isSuccess) {
      toast.success("Job reopened successfully", { id: "reopenJob" });
    }
    if (reopenJobResult?.isError) {
      toast.success(reopenJobResult?.error, { id: "reopenJob" });
    }
  }, [
    reopenJobResult?.isLoading,
    reopenJobResult?.isSuccess,
    reopenJobResult?.isError,
    reopenJobResult?.error,
  ]);

  /* ===============================
  Loading state of Getting all jobs
  =================================*/
  let content;
  if (isLoading) {
    content = content = <JobCardSkeleton></JobCardSkeleton>;
  }
  if (isError) {
    toast.error(error, { id: "jobAPost" });
  }
  if (isSuccess) {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1  xl:grid-cols-2 gap-4 w-full py-16 px-5 ">
          {loggedInUserPost?.map((job) => {
            return (
              <div
                data-aos="fade-up"
                className="border-[.08rem] p-6 rounded-lg  bg-secondary relative"
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
                        <p className="text-lg font-semibold ">
                          {job?.position}
                        </p>

                        <div
                          className={`${scaleButtonClass}  absolute top-6 right-6 text-accent dark:text-secondary `}
                        >
                          <MdOutlineBookmarkAdd
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
                        {/* ---badge end--- */}
                      </div>
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

                      {/*  buttons  start*/}
                      <div className="flex flex-col   gap-2 ">
                        <div className="flex gap-2 flex-wrap">
                          <button
                            onClick={() =>
                              navigate(
                                `/employer-dashboard/applicant-job/${job?._id}`
                              )
                            }
                            className={`${outlinedButton} flex items-center gap-2`}
                          >
                            <span className="font-bold">
                              {job?.applicants?.length}
                            </span>
                            Person Applied
                          </button>
                          <Link
                            to="/employer-dashboard/my-posted-job/details"
                            state={job}
                            className={`${outlinedButton}`}
                          >
                            Job Details
                          </Link>
                        </div>
                        <div className="flex gap-2 flex-wrap ">
                          <Link
                            to={"/employer-dashboard/update-job"}
                            state={job}
                            className={`${buttonClass}`}
                          >
                            {" "}
                            Edit
                          </Link>

                          {/* close the job */}
                          {job?.isClosed === true ? (
                            <>
                              <button className={`${buttonClass} bg-warning`}>
                                {" "}
                                Closed
                              </button>
                              <div className="flex justify-start items-center gap-2 flex-wrap">
                                <Link
                                  className={`${buttonClass}`}
                                  onClick={() => reopenAJob(job?._id)}
                                >
                                  {" "}
                                  Reopen
                                </Link>
                              </div>
                            </>
                          ) : (
                            <div className="flex justify-start items-center gap-2 flex-wrap">
                              <Link
                                className={`${buttonClass}`}
                                onClick={() => closeAJob(job?._id)}
                              >
                                {" "}
                                Close the job
                              </Link>
                            </div>
                          )}
                          {/* Delete modal */}
                          <DeleteModal
                            mainObj={job}
                            action={deleteAJob}
                            actionKey={job?._id}
                          ></DeleteModal>
                        </div>
                      </div>
                      {/*  buttons end */}
                    </div>
                    {/* content end*/}
                  </div>
                </div>

                {/* ----*/}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <TitleComponent title={"Latest Posted Job"} />

      {content}
    </>
  );
};

export default MyPostedJob;
