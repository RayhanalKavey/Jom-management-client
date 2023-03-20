import React from "react";
import JobCard from "../../../components/JobCard/JobCard";
import { useGetJobsQuery } from "../../../features/auth/jobApi";

const ExperiencedJobHome = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();
  console.log("ExperiencedJobHome data", data);

  return (
    <div className=" grid grid-cols-2 gap-4 ">
      {data
        ?.filter((j) => j?.experiencedJob)
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
};

export default ExperiencedJobHome;
