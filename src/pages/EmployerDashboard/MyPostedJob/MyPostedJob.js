import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  buttonClass,
  deleteButtonClass,
  outlinedButton,
} from "../../../components/classes/classes";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import {
  useDeleteAJobMutation,
  useGetJobsQuery,
} from "../../../features/auth/jobApi";

const MyPostedJob = () => {
  // Get current user email from the store
  const { email } = useSelector((state) => state?.auth);

  //  Get data from the database using redux
  const { data, isLoading } = useGetJobsQuery();
  const loggedInUserPost = data?.filter((job) => job?.email === email);

  // Redux action for deleting a job
  const [deleteAJob, { isLoading: deleteLoading, isSuccess, isError, error }] =
    useDeleteAJobMutation();

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
  return (
    <>
      <TitleComponent title={"My Job Circular"} />

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1  xl:grid-cols-2 gap-4 w-full py-16 px-5 ">
        {loggedInUserPost?.reverse()?.map((job) => (
          <div
            className="  border-[.08rem] p-4 rounded-lg  bg-secondary relative"
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
                  <p className="text-lg font-semibold mb-1">{job?.position}</p>
                  <div className="flex gap-3 sm:gap-5 mb-5 flex-wrap">
                    <p>location</p>
                    <p>time</p>
                    <p>remote/onSite/hybrid</p>
                  </div>

                  {/* All buttons  start*/}
                  <div className="flex justify-start items-center gap-2 flex-wrap">
                    <button className={`${buttonClass}`}>Shortlist</button>

                    <button className={`${outlinedButton}`}>Job Details</button>
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
              </div>
            </div>

            {/* ----*/}
          </div>
        ))}
      </div>
    </>
  );
};

export default MyPostedJob;
