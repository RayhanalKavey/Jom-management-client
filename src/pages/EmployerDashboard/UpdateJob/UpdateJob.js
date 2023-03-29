import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { submitButtonClass } from "../../../components/classes/classes";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import { useUpdateAJobMutation } from "../../../features/auth/jobApi";

const UpdateJob = () => {
  let { state } = useLocation();

  // Get user email from the store

  const { email } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  // Redux despatch, and action
  const [updateAJob, { isLoading, isSuccess, isError, error }] =
    useUpdateAJobMutation();

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
    // Destructure the new information
    const {
      company,
      companyCategory,
      companyDetail,
      email,
      jobCategory,
      jobDetail,
      jobType,
      location,
      logo,
      position,
      requiredExp,
    } = data;
    // Create new blog information by some parameter like currentDate, fresherJob, experiencedJob manually
    const jobInfo = {
      _id: state?._id,
      company,
      companyCategory,
      companyDetail,
      email,
      jobCategory,
      jobDetail,
      jobType,
      location,
      logo,
      position,
      requiredExp,
      // current these are newly added, fresher job and experienced job will be set on the basis of new jobCategory selection
      currentDate,
      fresherJob: data?.jobCategory === "Fresher" ? true : false,
      experiencedJob: data?.jobCategory === "Experienced" ? true : false,
    };
    updateAJob(jobInfo);
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
      toast.error({ id: "addJob" });
    }
  }, [isLoading, isSuccess, isError, error, reset, navigate]);

  const jobCategories = ["Fresher", "Experienced"];
  const requiredExp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <TitleComponent title={"Update Posted Job"}></TitleComponent>

      <div
        data-aos="fade-up"
        className="flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100"
      >
        <div className="w-[35rem] bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Job position */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="position" className="block mb-1 font-medium">
                  Position Name:
                </label>
                <input
                  type="text"
                  id="position"
                  {...register("position", { required: true })}
                  defaultValue={state?.position}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                  defaultValue={state?.company}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                defaultValue={state?.requiredExp}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                className=" cursor-not-allowed w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                defaultValue={state?.location}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                defaultValue={state?.companyCategory}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                defaultValue={state?.jobCategory}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                defaultValue={state?.logo}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                defaultValue={state?.companyDetail}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-60"
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
                defaultValue={state?.jobDetail}
                className="w-full px-4 py-2 border rounded-md focus:outline-none
            focus:ring-2 focus:ring-primary  h-60"
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

export default UpdateJob;
