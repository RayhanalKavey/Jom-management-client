import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import Spinner from "../../components/Spinner/Spinner";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import { useGetJobsQuery } from "../../features/auth/jobApi";

const AllJob = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery();

  // const reversed = data?.filter((j) => j)?.reverse();
  // console.log("reversed", reversed);
  let content;
  if (isLoading) {
    content = <Spinner></Spinner>;
  }
  if (isSuccess) {
    content = (
      <div className="grid md:grid-cols-2 gap-4 w-full">
        {data
          ?.filter((j) => j)
          ?.reverse()
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
