import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AddJob = () => {
  // Get user email from the store

  const { email } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // React hook form submission
  const onSubmit = (data) => {
    const jobInfo = {
      ...data,
      fresherJob: data?.jobCategory === "Fresher Job" ? true : false,
      experiencedJob: data?.jobCategory === "Experienced" ? true : false,
    };
    console.log("From add job form", jobInfo);
  };
  // Handle different user update state
  // useEffect(() => {
  //   if (isLoading) {
  //     toast.loading("Loading...... Please wait", { id: "addJob" });
  //   }
  //   if (isSuccess) {
  //     toast.success("Welcome as a Employer.", { id: "addJob" });
  //     reset();
  //     navigate("/employer-dashboard/my-posted-job");
  //   }
  //   if (isError) {
  //     toast.success({ id: "addJob" });
  //   }
  // }, [isLoading, isSuccess, isError, error, reset, navigate]);

  const companyCategories = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
  ];
  const jobCategories = ["Fresher Job", "Experienced"];

  const employeeCounts = ["1-50", "51-100", "101-500", "501-1000", "1000+"];

  return (
    <div className=" min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative max-w-xl mx-auto mt-20 bg-gray-300 p-16  shadow-xl rounded-tr-[50px] rounded-bl-[50px] "
      >
        <Link to={"/poster-seeker"}>
          <div className="duration-500  absolute -top-9 -left-9 bg-gray-600 text-white hover:text-gray-600  shadow-xl rounded-tr-[15px] rounded-bl-[15px] p-6 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-105 transition-all  px-10">
            <h2 className="text-3xl font-bold flex justify-center h-full items-center">
              Go back
            </h2>
          </div>
        </Link>
        <h1 className="text-gray-800 text-3xl text-center mb-5 text-semibold">
          {" "}
          Job Posting
        </h1>
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
            <label htmlFor="remote" className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="remote"
                {...register("jobType", { required: true })}
                value="remote"
                className="mr-2"
              />
              Remote
            </label>
            <label htmlFor="onSite" className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="onSite"
                {...register("jobType", { required: true })}
                value="onSite"
                className="mr-2"
              />
              On-Site
            </label>
            <label htmlFor="hybrid" className="inline-flex items-center mr-4">
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
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
            <span className="text-red-500 text-sm">This field is required</span>
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        {/* Company category */}
        <div className="mt-4">
          <label htmlFor="companyCategory">Company Category:</label>
          <select
            id="companyCategory"
            {...register("companyCategory")}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {companyCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
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
            <span className="text-red-500 text-sm">This field is required</span>
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
            <span className="text-red-500 text-sm">This field is required</span>
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <button type="submit" className="btn btn-md mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJob;
