import React from "react";
import Skeleton from "react-loading-skeleton";
const FormSkeleton = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative py-10 ">
      {/* 1 */}
      <div className=" border-[.08rem] p-8 rounded-lg bg-secondary min-h-[60vh]">
        <div className="flex items-start gap-10 flex-col   relative">
          <div className=" w-full">
            <div className="flex justify-start items-center gap-5 sm:gap-5 mb-12 flex-wrap text-warning">
              <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-[50%]"></div>
            </div>
            <div className="flex justify-start items-center gap-5 sm:gap-5 mb-12 flex-wrap text-warning">
              <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-[100%]"></div>
            </div>
            <div className="flex justify-start items-center gap-5 sm:gap-5 mb-12 flex-wrap text-warning">
              <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-[100%]"></div>
            </div>
            <div className="flex justify-start items-center gap-5 sm:gap-5 mb-12 flex-wrap text-warning">
              <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-[100%]"></div>
            </div>

            <div className="flex justify-start items-center gap-2 flex-wrap">
              <div className="skeleton-animation bg-gray-300 rounded-full h-7 w-28"></div>
            </div>
          </div>
          <div className="skeleton-animation flex  items-center justify-center h-56 w-full rounded-md p-2 border-[.5px] bg-success">
            <Skeleton circle={true} height={40} width={40} />
          </div>
        </div>
      </div>
      {/*  2*/}
    </div>
  );
};

export default FormSkeleton;
