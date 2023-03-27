import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { buttonClass } from "../classes/classes";
import JobApply from "../JobCard/JobApply";

function ApplyModal({ job }) {
  // console.log(job);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* modal button */}
      <button className={`${buttonClass}`} onClick={toggleModal}>
        Proceed to Apply
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto  ">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-secondary dark:bg-accent text-accent dark:text-secondary px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* back button */}
                  <Link to={"/all-job"}>
                    <div
                      onClick={toggleModal}
                      className={`duration-500 transform  hover:scale-[1.005] transition-all left-5 top-5 absolute bottom-5  text-accent dark:text-secondary `}
                    >
                      <IoIosArrowRoundBack style={{ fontSize: "1.8em" }} />
                    </div>
                  </Link>
                  {/* back button */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className=" leading-6 font-medium text-center text-xl my-7"
                      id="modal-headline"
                    >
                      {job?.position}
                    </h3>
                    <JobApply job={job}></JobApply>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ApplyModal;
