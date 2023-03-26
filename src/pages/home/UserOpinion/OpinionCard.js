import React from "react";
import userImg from "../../../assets/images/rayhan-al-kavey.png";

const OpinionCard = ({ currentReview }) => {
  return (
    <div className=" border-[.08rem] p-10 rounded-lg  bg-secondary transition-all w-full lg:w-2/3  mx-auto">
      <div className="text-warning font-bold text-2xl mb-7">
        {" "}
        {currentReview?.commentTitle}
      </div>
      <div className="mb-10"> {currentReview?.description}</div>
      {/* user info */}
      <div className="flex sm:items-center gap-5 flex-col sm:flex-row">
        {/* img */}
        <div className="w-20 h-20 border-[0.08rem] border-accent rounded-full">
          <img
            src={userImg}
            alt=""
            className=" rounded-full object-cover w-full h-full"
          />
        </div>
        {/* info */}
        <div className="flex flex-col ">
          <div className="text-2xl font-semibold text-accent">
            {currentReview?.userName}
          </div>
          <div className="text-lg">{currentReview?.userTitle}</div>
        </div>
      </div>
      {/* user info */}
    </div>
  );
};

export default OpinionCard;
