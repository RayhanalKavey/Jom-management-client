import React from "react";
import JobCard from "../../../components/JobCard/JobCard";
import { useGetJobsQuery } from "../../../features/auth/jobApi";

const FresherJobHome = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();

  let content;
  if (isLoading) {
    content = <p>loading......</p>;
  }
  if (isError) {
    content = <p>{error}</p>;
  }

  if (isSuccess) {
    content = (
      <div className=" grid grid-cols-2 gap-4 ">
        {data
          ?.filter((j) => j?.fresherJob)
          ?.reverse()
          ?.slice(0, 6)
          ?.map((job) => (
            <div
              className="m-2  border-2 p-4 rounded-lg  bg-secondary "
              key={job?._id}
            >
              <JobCard job={job}></JobCard>
            </div>
          ))}
      </div>
    );
  }

  return <>{content}</>;
};

export default FresherJobHome;
