import React from "react";
import { useGetJobsQuery } from "../../../features/auth/jobApi";

const ExperiencedJobHome = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();

  return (
    <div className="bg-yellow-200">
      <h2>Experienced Job</h2>
      {data
        ?.filter((j) => j?.experiencedJob)
        ?.reverse()
        ?.slice(0, 3)
        ?.map((job) => (
          <div className="m-2  border-2 p-2 rounded-lg w-full" key={job?._id}>
            <p>{job?.position}</p>
            <p className="bg-green-200">{job?.jobCategory}</p>

            <br />
            <p>{job?.companyDetail}</p>
            <br />
            <p>{job?._id}</p>
            <p>{job?.jobType}</p>

            <button className="btn btn-primary btn-sm">Shortlist</button>
            <button className="btn btn-secondary btn-sm">Apply</button>
          </div>
        ))}
    </div>
  );
};

export default ExperiencedJobHome;
