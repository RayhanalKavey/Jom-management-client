import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterEmployerMutation } from "../../features/auth/authApi";

const EmployerRegistration = () => {
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

  // Post user to the database and handle its updating state
  const [registerEmployer, { isSuccess, isLoading, isError, error }] =
    useRegisterEmployerMutation();

  // React hook form submission
  const onSubmit = (data) => {
    const employer = { ...data, isEmployer: true };
    registerEmployer(employer);
  };
  // Handle different user update state
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...... Please wait", { id: "addUser" });
    }
    if (isSuccess) {
      toast.success("Welcome as a Employer.", { id: "addUser" });
      reset();
      navigate("/employer-dashboard");
    }
    if (isError) {
      toast.success(error, { id: "addUser" });
    }
  }, [isLoading, isSuccess, isError, error, reset, navigate]);

  const companyCategories = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
  ];

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
          Employer Information
        </h1>
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <label htmlFor="female" className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="female"
                {...register("gender", { required: true })}
                value="female"
                className="mr-2"
              />
              Female
            </label>
            <label htmlFor="other" className="inline-flex items-center mr-4">
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
        {/* ///  company name*/}
        <div className="mt-4">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            {...register("companyName", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        {/* Company Category */}
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
        {/* Role in the Company */}
        <div className="mt-4">
          <label htmlFor="roleInCompany">Role in Company:</label>
          <input
            type="text"
            id="roleInCompany"
            {...register("roleInCompany", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.roleInCompany && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Number of employees */}
        <div className="mt-4">
          <label htmlFor="employeeCount">Number of Employees:</label>
          <select
            id="employeeCount"
            {...register("employeeCount")}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {employeeCounts.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-md mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployerRegistration;
