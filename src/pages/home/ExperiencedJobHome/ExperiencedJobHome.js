import React from "react";
import { Link } from "react-router-dom";
import JobCard from "../../../components/JobCard/JobCard";
import JobCardSkeleton from "../../../components/JobCardSkeleton/JobCardSkeleton";
import { useGetJobsQuery } from "../../../features/auth/jobApi";

const ExperiencedJobHome = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();

  let content;
  if (isLoading) {
    content = <JobCardSkeleton></JobCardSkeleton>;
  }
  if (isError) {
    content = <p>{error}</p>;
  }

  if (isSuccess) {
    content = (
      <>
        {" "}
        <div className="grid md:grid-cols-2 gap-4 w-full">
          {data
            ?.filter((j) => j?.experiencedJob)
            ?.reverse()
            ?.slice(0, 6)
            ?.map((job) => (
              <div
                data-aos="fade-up"
                className="m-2  border-[.08rem] p-6 rounded-lg  bg-secondary"
                key={job?._id}
              >
                <JobCard job={job}></JobCard>
              </div>
            ))}
        </div>
        {/* View more button */}
        <div className="py-12  flex justify-center items-center">
          <Link
            to={"/all-job"}
            data-aos="fade-up"
            className={`flex text-center text-secondary  duration-500 bg-primary py-2 px-4 rounded-lg font-bold shadow-md uppercase tracking-wider hover:bg-warning`}
          >
            View More
          </Link>
        </div>
      </>
    );
  }

  return <>{content}</>;
};

export default ExperiencedJobHome;
