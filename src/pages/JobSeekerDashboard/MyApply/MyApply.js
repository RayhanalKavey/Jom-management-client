import React from "react";
import { useGetApplyQuery } from "../../../features/auth/applyApi";

const MyApply = () => {
  // get apply jobs information
  const { data: applyInfo, isLoading: getApplyInfoLoading } =
    useGetApplyQuery();
  console.log("applyInfo of all apply", applyInfo);
  console.log("getApplyInfoLoading", getApplyInfoLoading);
  return (
    <div>
      <h1>My Apply</h1>
      {applyInfo?.map((job) => (
        <p key={job?._id}>
          <span>Appid job Id :-- </span>
          {job?.applyJobId}
        </p>
      ))}
    </div>
  );
};

export default MyApply;
