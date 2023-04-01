import React from "react";

import {
  badgeClass,
  bottomBorder,
  dateFormate,
  scaleButtonClass,
} from "../classes/classes";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CiLocationOn, CiTimer } from "react-icons/ci";

const JobCardHorizontal = ({ job }) => {
  return (
    <div
      className={`${bottomBorder} pb-10 flex  items-center justify-center  gap-5   flex-col relative `}
    >
      {/* logo */}
      <div className="  flex items-center justify-center h-20 w-20 rounded-md p-2 border-[.5px] bg-success">
        <img src={job?.logo} alt="" />
      </div>

      {/* content */}
      <div className="flex-1 w-full flex items-center flex-col ">
        {/* heading(position)  */}
        <div className="flex justify-between items-center mb-3 ">
          {/*  */}
          <div className="group ">
            <div className=" group">
              <div
                className={`${scaleButtonClass} tooltip-secondary  absolute top-0 right-20  `}
              >
                <MdOutlineBookmarkAdd style={{ fontSize: "1.5rem" }} />
                {/* <MdOutlineBookmarkAdded style={{ fontSize: "1.5rem" }} /> */}
              </div>

              <div className=" opacity-0 group-hover:opacity-100 pointer-events-none absolute bottom-full right-0 transform -translate-x-1/2 -translate-y-1/2  text-xs bg-warning  rounded-sm pl-1 pr-16 py-0.5">
                Bookmark
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        {/* ------INFO----- */}
        <div>
          {/*---- Badge-- */}
          <div className="flex justify-start items-center gap-3 sm:gap-5 mb-5 flex-wrap text-warning">
            {/* Company Name */}
            <div className={`${badgeClass} `}>
              <p> {job?.company}</p>
            </div>
            {/* Job type */}
            <div className={`${badgeClass} `}>
              <p>{job?.jobType}</p>
            </div>
            {/* Job category */}
            <div className={`${badgeClass} `}>
              <p>{job?.jobCategory}</p>
            </div>
          </div>
        </div>
        {/* ---badge end--- */}
        {/* --- job info--- */}
        <div className="flex justify-start items-center gap-4 sm:gap-6 mb-5 flex-wrap text-md">
          {/* Company Location */}
          <div className="flex justify-center items-center gap-2">
            <p>
              <CiLocationOn style={{ fontSize: "1.4rem" }} />
            </p>
            <p className="">{job?.location}</p>
          </div>
          {/* Posted time */}
          <div className="flex justify-center items-center gap-2">
            <p>
              <CiTimer style={{ fontSize: "1.4rem" }} />
            </p>
            <p>
              {" "}
              {new Date(job?.currentDate).toLocaleDateString(
                "en-US",
                dateFormate
              )}
            </p>
          </div>
          {/* ---job  info end--- */}
        </div>

        {/* All buttons  start*/}
        <div className="flex justify-start items-center gap-2 flex-wrap">
          {/* {applyButton} */}
        </div>
        {/* All buttons end */}
      </div>
      {/* content end*/}
    </div>
  );
};

export default JobCardHorizontal;
