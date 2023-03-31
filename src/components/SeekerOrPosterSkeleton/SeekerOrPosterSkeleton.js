import React from "react";
import Skeleton from "react-loading-skeleton";

const SeekerOrPosterSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   ">
      <div className="grid md:grid-cols-2 gap-4 my-10 ">
        {" "}
        {/* Div-1 */}
        <div className="  m-2 border-[.08rem] p-6 rounded-lg bg-secondary">
          <div className="flex items-center gap-5 flex-col sm:flex-row md:flex-col  relative">
            <div className="skeleton-animation flex items-center justify-center h-12 w-12 rounded-full p-2 border-[.5px] bg-success">
              <Skeleton circle={true} height={40} width={40} />
            </div>
            <div className="flex-1 w-full">
              <div className="flex justify-center items-center gap-3 sm:gap-5 mb-5 flex-wrap text-warning">
                <div className="skeleton-animation  bg-gray-300 rounded-full h-6 w-32"></div>
                <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-24"></div>
                <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-28"></div>{" "}
              </div>
              <div>
                <div className="flex justify-center items-center gap-3 sm:gap-5 mb-5 flex-wrap text-warning">
                  <div className="skeleton-animation  bg-gray-300 rounded-full h-6 w-32"></div>
                  <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-24"></div>
                  <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-28"></div>
                </div>
              </div>

              <div className="flex  justify-center items-center gap-2 flex-wrap">
                <div className="skeleton-animation bg-gray-300 rounded-full h-7 w-[80%]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Div-2 */}
        <div className="skeleton-animatio  m-2 border-[.08rem] p-6 rounded-lg bg-secondary">
          <div className="flex items-center gap-5 flex-col sm:flex-row md:flex-col  relative">
            <div className="skeleton-animation flex items-center justify-center h-12 w-12 rounded-full p-2 border-[.5px] bg-success">
              <Skeleton circle={true} height={40} width={40} />
            </div>
            <div className="flex-1 w-full">
              <div className="flex justify-center items-center gap-3 sm:gap-5 mb-5 flex-wrap text-warning">
                <div className="skeleton-animation  bg-gray-300 rounded-full h-6 w-32"></div>
                <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-24"></div>
                <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-28"></div>{" "}
              </div>
              <div>
                <div className="flex justify-center items-center gap-3 sm:gap-5 mb-5 flex-wrap text-warning">
                  <div className="skeleton-animation  bg-gray-300 rounded-full h-6 w-32"></div>
                  <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-24"></div>
                  <div className="skeleton-animation bg-gray-300 rounded-full h-6 w-28"></div>
                </div>
              </div>

              <div className="flex  justify-center items-center gap-2 flex-wrap">
                <div className="skeleton-animation bg-gray-300 rounded-full h-7 w-[80%]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default SeekerOrPosterSkeleton;
