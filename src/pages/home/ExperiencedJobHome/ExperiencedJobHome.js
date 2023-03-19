import React from "react";
import JobCard from "../../../components/JobCard/JobCard";
import { useGetJobsQuery } from "../../../features/auth/jobApi";

const ExperiencedJobHome = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();
  console.log("ExperiencedJobHome data", data);

  return (
    <div className="bg-yellow-200">
      <h2>Experienced Job</h2>
      {data
        ?.filter((j) => j?.experiencedJob)
        ?.reverse()
        ?.slice(0, 3)
        ?.map((job) => (
          <div className="m-2  border-2 p-2 rounded-lg w-full" key={job?._id}>
            <JobCard job={job}></JobCard>
          </div>
        ))}
    </div>
  );
};

export default ExperiencedJobHome;
