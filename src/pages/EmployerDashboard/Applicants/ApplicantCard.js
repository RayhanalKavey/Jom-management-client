import React from "react";
import { useGetApplicantQuery } from "../../../features/auth/authApi";
import Spinner from "../../../components/Spinner/Spinner";
import {
  badgeClass,
  dateFormate,
  scaleButtonClass,
} from "../../../components/classes/classes";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CiLocationOn, CiTimer } from "react-icons/ci";

const ApplicantCard = ({ applicant }) => {
  console.log("Applicant in the applicant card", applicant?.userId);
  const userId = applicant?.userId;
  const { data, isLoading, isError, isSuccess } = useGetApplicantQuery(userId);
  let content;
  if (isLoading) {
    content = <Spinner></Spinner>;
  }
  if (isSuccess) {
    content = <div className=" w-full bg-yellow-300 ">hi</div>;
  }

  console.log("get applicant", data);
  return <>{content}</>;
};

export default ApplicantCard;
