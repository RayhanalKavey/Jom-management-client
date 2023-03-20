import React from "react";
import JobCard from "../../../components/JobCard/JobCard";
import { useGetJobsQuery } from "../../../features/auth/jobApi";

const FresherJobHome = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();

  return (
    <div className="bg-purple-200">
      <h2>Fresher Job</h2>
      {data
        ?.filter((j) => j?.fresherJob)
        ?.reverse()
        ?.slice(0, 3)
        ?.map((job) => (
          <div className="m-2  border-2 p-2 rounded-lg " key={job?._id}>
            <JobCard job={job}></JobCard>
          </div>
        ))}
    </div>
  );
};

export default FresherJobHome;
