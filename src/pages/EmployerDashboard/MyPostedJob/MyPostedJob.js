import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    <div>
      {loggedInUserPost?.reverse()?.map((job) => (
        <div className="m-2 border border-2 p-2 rounded-lg" key={job?._id}>
          <p>{job?.position}</p>

          <Link
            to={"/employer-dashboard/update-job"}
            state={job}
            className="btn btn-xs btn-success"
          >
            {" "}
            Edit
          </Link>

          <br />
          <p>{job?.position}</p>
          <p className="bg-green-200">{job?.jobCategory}</p>

          <br />
          <p>{job?.companyDetail}</p>
          <br />
          <p>{job?._id}</p>
          <p>{job?.jobType}</p>

          <button onClick={() => deleteAJob(job?._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJob;
