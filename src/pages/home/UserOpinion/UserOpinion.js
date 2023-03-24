import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useGetReviewQuery } from "../../../features/auth/reviewApi";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { iconButton } from "../../../components/classes/classes";
import OpinionCard from "./OpinionCard";

const UserOpinion = () => {
  // get reviews from the database
  const { data: reviews } = useGetReviewQuery();

  // Get the reviews by dynamic index(changed by an interval)
  const [currentIndex, setCurrentIndex] = useState(0);
  const INTERVAL_TIME_MS = 2000;

  // change after a certain interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % reviews?.length);
    }, INTERVAL_TIME_MS);

    return () => clearInterval(interval);
  }, [currentIndex, reviews?.length]);
  // Get previous review by onclick
  const prevImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? reviews?.length - 1 : currentIndex - 1
    );
  };

  // Get next review by onclick
  const nextImage = () => {
    setCurrentIndex(
      currentIndex === reviews?.length - 1 ? 0 : currentIndex + 1
    );
  };
  // current review(Check if the data comes successfully. If undefined then it will provide an error cannot read property of undefined)
  let currentReview;
  if (reviews) {
    currentReview = reviews[currentIndex];
  }
  return (
    <div className="relative">
      {/* card */}
      {/* <div
        className="transition-all duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
      </div> */}
      <OpinionCard currentReview={currentReview}> </OpinionCard>
      {/* <div className="transition-all duration-500 ease-in-out">
      </div> */}
      {/* card */}

      <div className="absolute -bottom-[20%] left-0 transform -translate-y-1/2 flex justify-center w-full gap-2">
        <button onClick={prevImage} className={`p-2 ${iconButton}`}>
          <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
        </button>
        <button onClick={nextImage} className={`p-2 ${iconButton}`}>
          <AiOutlineDoubleRight></AiOutlineDoubleRight>
        </button>
      </div>
    </div>
  );
};

export default UserOpinion;
