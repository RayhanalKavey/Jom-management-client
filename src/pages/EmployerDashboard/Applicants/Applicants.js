import React from "react";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import JobCardHorizontal from "../../../components/JobCard/JobCardHorizontal";
import { useGetApplicantJobByIdQuery } from "../../../features/job/jobApi";
import { useParams } from "react-router-dom";

const Applicants = () => {
  const { id } = useParams();
  const { data } = useGetApplicantJobByIdQuery(id);
  const { position } = data || {};

  return (
    <>
      <TitleComponent title={"Applicants"} />
      {/* inner content */}
      {/* <JobCardHorizontal job={job} /> */}
      Position: {position}
    </>
  );
};

export default Applicants;
