import React from "react";

import { useGetApplicantQuery } from "../../../features/auth/authApi";
import Spinner from "../../../components/Spinner/Spinner";
import { badgeClass } from "../../../components/classes/classes";
import {
  useEmployerMessageMutation,
  useJobSeekerMessageMutation,
} from "../../../features/job/jobApi";
import ConversationModal from "../../../components/ConversationModal/ConversationModal";
import { useSelector } from "react-redux";

const ApplicantCard = ({ applicant }) => {
  //LoggedIn user email
  const { user, email } = useSelector((state) => state?.auth);

  const userId = applicant?.userId;
  const { data, isLoading, isSuccess } = useGetApplicantQuery(userId);
  // const {
  //   aboutMe,
  //   companyCategory,
  //   email,
  //   employeeCount,
  //   fullName,
  //   gender,
  //   jobType,
  //   position,
  //   skills,
  //   yearOfExp,
  // } = data;

  // send employer message(employer-applicant) to the database

  const [employerMessage] = useEmployerMessageMutation();

  let content;
  if (isLoading) {
    content = <Spinner></Spinner>;
  }
  if (isSuccess) {
    content = (
      <div
        // data-aos="fade-up"
        className="flex flex-col gap-3 border-[.08rem] p-6 rounded-lg  bg-secondary relative "
      >
        <div>
          <p className="text-lg font-semibold ">{data?.fullName}</p>
        </div>

        {/*---- Badge-- */}
        <div className="flex justify-start items-center gap-3 sm:gap-5 mb-5 flex-wrap text-warning">
          {/* Year of exp */}
          <div className={`${badgeClass} `}>
            <p>Year Of Exp: {data?.yearOfExp}</p>
          </div>
          {/* Email*/}
          <div className={`${badgeClass} lowercase `}>
            <p>{data?.email}</p>
          </div>
        </div>
        {/* ---badge end--- */}
        <ConversationModal action={employerMessage} applicant={applicant} />
      </div>
    );
  }

  return <>{content}</>;
};

export default ApplicantCard;
