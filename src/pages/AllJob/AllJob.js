import React from "react";
import JobCardHorizontal from "../../components/JobCard/JobCardHorizontal";
import Spinner from "../../components/Spinner/Spinner";
import { useGetJobsQuery } from "../../features/auth/jobApi";

const AllJob = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();
  console.log("dat", data);
  console.log(
    "data?.filter((j) => j)",
    data?.filter((j) => j)
  );

  const reversed = data?.filter((j) => j)?.reverse();
  console.log("reversed", reversed);
  let content;
  if (isLoading) {
    content = <Spinner></Spinner>;
  }
  if (isSuccess) {
    content = (
      <div className="bg-yellow-200">
        <h2>All Job</h2>
        {data
          ?.filter((j) => j)
          ?.reverse()
          ?.map((job) => (
            <div className="m-2  border-2 p-2 rounded-lg w-full" key={job?._id}>
              <JobCardHorizontal job={job}></JobCardHorizontal>
            </div>
          ))}
      </div>
    );
  }
  return <>{content}</>;
};

export default AllJob;
