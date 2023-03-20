import React from "react";
import { useGetApplyQuery } from "../../../features/auth/applyApi";

const MyApply = () => {
  // get apply jobs information
  const { data: applyInfo, isLoading: getApplyInfoLoading } =
    useGetApplyQuery();
  console.log("applyInfo of all apply", applyInfo);
  console.log("getApplyInfoLoading", getApplyInfoLoading);
  return <div>This is my apply</div>;
};

export default MyApply;
