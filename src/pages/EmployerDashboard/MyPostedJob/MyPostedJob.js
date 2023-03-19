import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  useDeleteAJobMutation,
  useGetJobsQuery,
  useUpdateAJobMutation,
} from "../../../features/auth/jobApi";

const MyPostedJob = () => {
  // Get current user email from the store
  const { email } = useSelector((state) => state?.auth);
  console.log("From my posted job email", email);
  //  Get data from the database using redux
  const { data, isLoading } = useGetJobsQuery();
  const loggedInUserPost = data?.filter((job) => job?.email === email);
  console.log("From my posted job", data);
  console.log("From my posted job", loggedInUserPost);

  // Redux action for deleting a job
  const [deleteAJob, { isLoading: deleteLoading, isSuccess, isError, error }] =
    useDeleteAJobMutation();

  // Redux action for updating a job (updated job)
  const [updateAJob] = useUpdateAJobMutation();

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
      {loggedInUserPost?.map((job) => (
        <div className="m-2 border border-2 p-2 rounded-lg" key={job?._id}>
          <p>{job?.position}</p>
          <button>Update</button>
          <br />
          <p>{job?._id}</p>

          <button onClick={() => deleteAJob(job?._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJob;
