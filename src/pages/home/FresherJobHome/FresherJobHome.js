import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import JobCard from "../../../components/JobCard/JobCard";
import JobCardSkeleton from "../../../components/JobCardSkeleton/JobCardSkeleton";
import { useGetFresherJobsQuery } from "../../../features/job/jobApi";

const FresherJobHome = () => {
  let jobType = "fresher";
  const { data, isLoading, isSuccess, isError, error } = useGetFresherJobsQuery(
    {
      jobType,
    }
  );

  let content;
  if (isLoading) {
    content = content = <JobCardSkeleton></JobCardSkeleton>;
  }
  if (isError) {
    toast.error(error, { id: "jobske" });
  }

  if (isSuccess) {
    content = (
      <div className=" grid md:grid-cols-2 gap-4 w-full">
        {data?.map((job) => (
          <div
            data-aos="fade-up"
            className="m-2  border-[.08rem] p-6 rounded-lg  bg-secondary  "
            key={job?._id}
          >
            <JobCard job={job}></JobCard>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {content}
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
};

export default FresherJobHome;
