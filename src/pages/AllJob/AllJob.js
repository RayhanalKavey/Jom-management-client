import React from "react";
import { toast } from "react-hot-toast";
import JobCard from "../../components/JobCard/JobCard";
import JobCardSkeleton from "../../components/JobCardSkeleton/JobCardSkeleton";
import Spinner from "../../components/Spinner/Spinner";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import { useGetJobsQuery } from "../../features/auth/jobApi";
import useTitle from "../../hooks/useTitle/useTitle";

const AllJob = () => {
  useTitle("All Jobs");

  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();

  // Handle loading states of getting the job...

  let content;
  if (isLoading) {
    content = content = <JobCardSkeleton></JobCardSkeleton>;
  }
  if (isError) {
    toast.success(error, { id: "jobss" });
  }
  if (isSuccess) {
    content = (
      <div className="grid md:grid-cols-2 gap-4 w-full">
        {data
          ?.filter((j) => j)
          ?.reverse()
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
    );
  }

  return (
    <>
      <TitleComponent title={"Find Job"}></TitleComponent>

      <section className="dark:bg-accent py-28 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">{content}</div>
      </section>
    </>
  );
};

export default AllJob;
