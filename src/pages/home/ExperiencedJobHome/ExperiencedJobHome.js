import React from "react";
import JobCard from "../../../components/JobCard/JobCard";
import { useGetJobsQuery } from "../../../features/auth/jobApi";

const ExperiencedJobHome = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();

  return (
    <div className="grid md:grid-cols-2 gap-4 w-full">
      {data
        ?.filter((j) => j?.experiencedJob)
        ?.reverse()
        ?.slice(0, 6)
        ?.map((job) => (
          <div
            className="m-2  border-[.08rem] p-6 rounded-lg  bg-secondary"
            key={job?._id}
          >
            <JobCard job={job}></JobCard>
          </div>
        ))}
    </div>
  );
};

export default ExperiencedJobHome;
