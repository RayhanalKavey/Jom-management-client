import React from "react";

const JobCard = ({ job }) => {
  return (
    <>
      <p>{job?.position}</p>
      <p className="bg-green-200">{job?.jobCategory}</p>

      <br />
      <p>{job?.companyDetail}</p>
      <br />
      <p>{job?._id}</p>
      <p>{job?.jobType}</p>

      <button className="btn btn-primary btn-sm">Shortlist</button>
      <button className="btn btn-secondary btn-sm">Apply</button>
      <button className="btn btn-secondary btn-sm">Job Details</button>
    </>
  );
};

export default JobCard;
