import React from "react";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import JobCardHorizontal from "../../../components/JobCard/JobCardHorizontal";
import { useGetApplicantJobByIdQuery } from "../../../features/job/jobApi";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import ApplicantCard from "./ApplicantCard";

const Applicants = () => {
  const { id } = useParams();
  const { data: job } = useGetApplicantJobByIdQuery(id, {
    pollingInterval: 500,
  });
  const { applicants } = job || {};

  return (
    <>
      <TitleComponent title={"Applicants"} />
      <section className="relative bg-base-100 dark:bg-accent text-secondary dark:text-accent ">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-accent dark:text-secondary">
          {/* back button */}
          <Link to="/employer-dashboard/my-posted-job">
            {/* <Link to={"/all-job"}> */}
            <div
              className={`duration-500 transform   transition-all left-3 -top-10 absolute bottom-5  text-accent dark:text-secondary `}
            >
              <IoIosArrowRoundBack style={{ fontSize: "1.8em" }} />
            </div>
            {/* </Link> */}
          </Link>
          {/* back button */}
          {/* inner content */}
          <JobCardHorizontal job={job} />
          <div className="py-16">
            <div className=" text-center text-2xl font-semibold mb-5 ">
              Number of applicants:
              <span className="text-2xl font-bold"> {applicants?.length}</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 grid-cols-1 relative text-accent">
              {applicants?.length &&
                applicants?.map((applicant) => (
                  <ApplicantCard
                    key={applicant?.userId}
                    applicant={applicant}
                  ></ApplicantCard>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Applicants;
