import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  buttonClass,
  formInput,
  formLabel,
  submitButtonClass,
} from "../classes/classes";
import { GiTireIronCross } from "react-icons/gi";
import { useGetApplicantJobByIdQuery } from "../../features/job/jobApi";

const ConversationModal = ({ action, applicant }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const { data: job } = useGetApplicantJobByIdQuery(applicant?.jobId);
  // console.log("jobmmmmm ", job);
  //------- React hook form user form and error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //------- From data will come up here....
  const handleOnSubmit = (message) => {
    const messageDate = new Date();
    action({ ...applicant, ...message, messageDate });
    reset();
  };

  return (
    <>
      {/* modal button */}
      <button className={`${buttonClass}`} onClick={toggleModal}>
        message
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
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-secondary dark:bg-accent text-accent dark:text-secondary px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  {/* back button start*/}
                  <button>
                    <div
                      onClick={toggleModal}
                      className={`duration-500 transform  hover:scale-[1.005] transition-all right-5 top-5 absolute bottom-5 text-accent dark:text-secondary `}
                    >
                      <GiTireIronCross style={{ fontSize: "1.2em" }} />
                    </div>
                  </button>
                  {/* back button end */}
                  <div className="mt-3 w text-center sm:mt-0 sm:text-left">
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                      <div className="font-bold text-2xl text-center mb-6">
                        {job?.position}
                      </div>
                      {/* Main conversation start */}
                      <div className="grid gap-5 max-h-[500px] overflow-y-scroll border-b-[.5px]  border-t-[.5px]  border-accent dark:border-gray-600 pb-4">
                        {applicant?.conversation &&
                          applicant?.conversation?.map((obj, i) => {
                            const timestamp = new Date(obj?.time);
                            const now = new Date();
                            const diff = Math.floor(
                              (now - timestamp) / 1000 / 60
                            );

                            return (
                              <div
                                key={i}
                                className=" grid grid-cols-1 gap-10 "
                              >
                                {obj?.employerSender && (
                                  <div className=" text-left p-4 bg-white text-accent  rounded-lg shadow-sm justify-self-start max-w-[60%] ">
                                    <div className="flex flex-col">
                                      {" "}
                                      <div className="font-semibold flex justify-start gap-3 items-center text-lg mb-5">
                                        <span className=" "> Employer </span>
                                        <span className="text-gray-400 text-sm mt-[.09rem]">
                                          {" "}
                                          {diff} minutes ago
                                        </span>
                                      </div>
                                      <div className="text-gray-500 flex flex-wrap">
                                        {obj?.text}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {obj?.jobSeekerSender && (
                                  <div className=" text-right p-4 bg-white text-accent  rounded-lg shadow-sm justify-self-end max-w-[65%] ">
                                    <div className="flex flex-col">
                                      <div className="font-semibold flex justify-end gap-2 items-center text-lg mb-5 ">
                                        <span className=""> Candidate</span>{" "}
                                        <span className="text-gray-400 text-sm">
                                          {" "}
                                          {diff} minutes ago
                                        </span>
                                      </div>
                                      <div className="text-gray-500 ">
                                        {obj?.text}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                      {/* Main conversation end */}

                      <div className="pt-5">
                        <textarea
                          type="text"
                          id="message"
                          {...register("message", { required: true })}
                          className={`${formInput} h-24`}
                          placeholder="Enter your message.."
                        ></textarea>
                        {errors.message && (
                          <span className="text-red-500 text-sm">
                            This field is required !
                          </span>
                        )}
                      </div>

                      {/* ----Submit button----  */}
                      <input
                        className={`${submitButtonClass}`}
                        type="submit"
                        value="Send"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConversationModal;
