import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import {
//   scaleButtonClass,
//   submitButtonClass,
// } from "../../../components/classes/classes";

// import TitleComponent from "../../../components/TitleComponent/TitleComponent";
// import {
//   useGetUserQuery,
//   useRegisterJobSeekerMutation,
// } from "../../../features/auth/authApi";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  scaleButtonClass,
  submitButtonClass,
} from "../../../components/classes/classes";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import {
  useGetUserQuery,
  useRegisterJobSeekerMutation,
} from "../../../features/auth/authApi";

const EmployerProfileUpdate = () => {
  // Get user email from the store
  const { email } = useSelector((state) => state?.auth);

  // get all users from the database
  const { data } = useGetUserQuery();
  // Find if the user Registered as employer otherwise send to the employer Registration page
  const loggedInEmployer = data?.find(
    (u) => u?.email === email && u?.isEmployer === true
  );

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Post user to the database and handle its updating state
  const [registerJobSeeker, { isSuccess, isLoading, isError, error }] =
    useRegisterJobSeekerMutation();

  // Variables used in the form
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind Css",
    "Bootstrap",
    "MongoDB",
    "Express",
    "Node.js",
    "Git",
    "GitHub",
    "TypeScript",
    "Redux toolkit",
  ];
  const position = [
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer",
    "Junior Accountant",
    "MERN Stack Developer",
  ];
  const jobType = ["Fresher", "Experienced"];

  const companyCategories = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
  ];
  const yearOfExp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const employeeCounts = ["1-50", "51-100", "101-500", "501-1000", "1000+"];

  // Submit form data...
  const onSubmit = (data) => {
    const employer = { ...data, isJobSeeker: true };
    registerJobSeeker(employer);
  };

  // Handle different user update state
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...... Please wait", { id: "updateUser" });
    }
    if (isSuccess) {
      toast.success("Save changes.", { id: "updateUser" });
      // reset();
      // navigate("/job-seeker-dashboard");
    }
    if (isError) {
      toast.success(error, { id: "updateUser" });
    }
  }, [isLoading, isSuccess, isError, error, reset, navigate]);
  return (
    <>
      <TitleComponent title={"My Profile"}></TitleComponent>

      <div className="flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100">
        <div className="w-[35rem] bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            {/* First Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1 font-medium">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", { required: true })}
                  defaultValue={loggedInEmployer?.firstName}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block mb-1 font-medium">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", { required: true })}
                  defaultValue={loggedInEmployer?.lastName}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            {/* Gender */}
            <div className="mt-4">
              <label className="block mb-1 font-medium">Gender:</label>
              <div>
                <label htmlFor="male" className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    id="male"
                    {...register("gender", { required: true })}
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label
                  htmlFor="female"
                  className="inline-flex items-center mr-4"
                >
                  <input
                    type="radio"
                    id="female"
                    {...register("gender", { required: true })}
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
                <label
                  htmlFor="other"
                  className="inline-flex items-center mr-4"
                >
                  <input
                    type="radio"
                    id="other"
                    {...register("gender", { required: true })}
                    value="other"
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
              {errors.gender && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
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
                className=" cursor-not-allowed w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* ///  company name*/}
            <div className="mt-4">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                {...register("companyName", { required: true })}
                defaultValue={loggedInEmployer?.companyName}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.companyName && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Company Category */}
            <div className="mt-4">
              <label htmlFor="companyCategory">Company Category:</label>
              <select
                id="companyCategory"
                {...register("companyCategory", { required: true })}
                defaultValue={loggedInEmployer?.companyCategory}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {companyCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* Role in the Company */}
            <div className="mt-4">
              <label htmlFor="roleInCompany">Role in Company:</label>
              <input
                type="text"
                id="roleInCompany"
                {...register("roleInCompany", { required: true })}
                defaultValue={loggedInEmployer?.roleInCompany}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.roleInCompany && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Number of employees */}
            <div className="mt-4">
              <label htmlFor="employeeCount">Number of Employees:</label>
              <select
                id="employeeCount"
                {...register("employeeCount", { required: true })}
                defaultValue={loggedInEmployer?.employeeCount}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {employeeCounts.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className={`${submitButtonClass} mt-4`}>
              Save changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployerProfileUpdate;
