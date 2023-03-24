import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import { usePostAJobMutation } from "../../../features/auth/jobApi";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  scaleButtonClass,
  submitButtonClass,
} from "../../../components/classes/classes";

const AddJob = () => {
  // Get user email from the store

  const { email } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  // Redux despatch, and action
  const [postAJob, { isLoading, isSuccess, isError, error }] =
    usePostAJobMutation();

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // React hook form submission
  const onSubmit = (data) => {
    const currentDate = new Date();
    const jobInfo = {
      ...data,
      fresherJob: data?.jobCategory === "Fresher" ? true : false,
      experiencedJob: data?.jobCategory === "Experienced" ? true : false,
      currentDate,
    };
    postAJob(jobInfo);
  };
  // Handle different user update state
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...... Please wait", { id: "addJob" });
    }
    if (isSuccess) {
      toast.success("Welcome as a Employer.", { id: "addJob" });
      // reset();
      navigate("/employer-dashboard/my-posted-job");
    }
    if (isError) {
      toast.success({ id: "addJob" });
    }
  }, [isLoading, isSuccess, isError, error, reset, navigate]);

  const jobCategories = ["Fresher", "Experienced"];
  const requiredExp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <TitleComponent title={"Post Job"}></TitleComponent>

      <div className="flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100">
        <div className="w-[35rem] bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="position" className="block mb-1 font-medium">
                  Position Name:
                </label>
                <input
                  type="text"
                  id="position"
                  {...register("position", { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.position && (
                  <span className="text-red-500 text-sm">
                    This field is required!
                  </span>
                )}
              </div>
              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block mb-1 font-medium">
                  Company Name:
                </label>
                <input
                  type="text"
                  id="company"
                  {...register("company", { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.company && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            {/* Job Type */}
            <div className="mt-4">
              <label className="block mb-1 font-medium">Job Type:</label>
              <div>
                <label
                  htmlFor="remote"
                  className="inline-flex items-center mr-4"
                >
                  <input
                    type="radio"
                    id="remote"
                    {...register("jobType", { required: true })}
                    value="remote"
                    className="mr-2"
                  />
                  Remote
                </label>
                <label
                  htmlFor="onSite"
                  className="inline-flex items-center mr-4"
                >
                  <input
                    type="radio"
                    id="onSite"
                    {...register("jobType", { required: true })}
                    value="onSite"
                    className="mr-2"
                  />
                  On-Site
                </label>
                <label
                  htmlFor="hybrid"
                  className="inline-flex items-center mr-4"
                >
                  <input
                    type="radio"
                    id="hybrid"
                    {...register("jobType", { required: true })}
                    value="hybrid"
                    className="mr-2"
                  />
                  Hybrid
                </label>
              </div>
              {errors.jobType && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/*/// Year of Expert*/}
            <div className="mt-4">
              <label htmlFor="jobType">Year Of Expert:</label>
              <select
                id="requiredExp"
                {...register("requiredExp")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {requiredExp.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* Email */}
            <div className="mt-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                defaultValue={email}
                readOnly
                className=" cursor-not-allowed w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* /// Job Location*/}
            <div className="mt-4">
              <label htmlFor="location">Company Location:</label>
              <input
                type="text"
                id="location"
                {...register("location", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.location && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Company category */}
            <div className="mt-4">
              <label htmlFor="companyCategory">Company Category:</label>
              <input
                type="text"
                id="companyCategory"
                {...register("companyCategory", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.companyCategory && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Job category /// */}
            <div className="mt-4">
              <label htmlFor="jobCategory">Job Category:</label>
              <select
                id="jobCategory"
                {...register("jobCategory")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {jobCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* Logo */}
            <div className="mt-4">
              <label htmlFor="logo">Logo Link:</label>
              <input
                type="text"
                id="logo"
                {...register("logo", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.logo && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Company detail */}
            <div className="mt-4">
              <label htmlFor="companyDetail">Company Detail:</label>
              <textarea
                type="text"
                id="companyDetail"
                {...register("companyDetail", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-60"
              ></textarea>
              {errors.companyDetail && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Job Description */}
            <div className="mt-4">
              <label htmlFor="jobDetail">Job Detail:</label>
              <textarea
                type="text"
                id="jobDetail"
                {...register("jobDetail", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none
            focus:ring-2 focus:ring-blue-500  h-60"
              ></textarea>

              {errors.jobDetail && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <button type="submit" className={`${submitButtonClass} mt-4`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJob;
