import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import {
  useRegisterAsEmployerMutation,
  useRegisterEmployerMutation,
} from "../../features/auth/authApi";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  formInput,
  formLabel,
  scaleButtonClass,
  submitButtonClass,
} from "../../components/classes/classes";
import FormSkeleton from "../../components/FormSkeleteon/FormSkeleton";
import useTitle from "../../hooks/useTitle/useTitle";

const EmployerRegistration = () => {
  useTitle("Employer Registraiton");
  const companyCategories = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
  ];

  const employeeCounts = ["1-50", "51-100", "101-500", "501-1000", "1000+"];

  // Get user email from the store

  const { email, user } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Post user to the database and handle its updating state
  // const [registerEmployer, { isSuccess, isLoading, isError, error }] =
  //   useRegisterEmployerMutation();
  const [registerAsEmployer, { isSuccess, isLoading, isError, error }] =
    useRegisterAsEmployerMutation();

  // React hook form submission
  const onSubmit = (data) => {
    const employer = { ...data, _id: user?._id };
    registerAsEmployer(employer);
  };
  // Handle different user update state
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...... Please wait", { id: "addEmployer" });
    }
    if (isSuccess) {
      toast.success("Welcome as  Employer.", { id: "addEmployer" });
      reset();
      navigate("/employer-dashboard");
    }
    if (isError) {
      toast.error(error, { id: "addEmployer" });
    }
  }, [isLoading, isSuccess, isError, error, reset, navigate]);

  // If find user then print form
  let content;
  if (!email) {
    content = <FormSkeleton></FormSkeleton>;
  }
  if (email) {
    content = (
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto  sm:px-6 lg:px-8  flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100"
      >
        <div className="w-full bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <Link to={"/poster-seeker"}>
              <div
                className={`${scaleButtonClass}  absolute -top-10 -left-7  `}
              >
                <IoIosArrowRoundBack style={{ fontSize: "1.8em" }} />
              </div>
            </Link>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={`${formLabel}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName", { required: true })}
                  className={`${formInput}`}
                  placeholder="Rayhan Al Kavey"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className={`${formLabel}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`${formInput}  cursor-not-allowed `}
                  defaultValue={email}
                  readOnly
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {/* ///  company name*/}
              <div className="mt-4">
                <label htmlFor="companyName" className={`${formLabel}`}>
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName", { required: true })}
                  placeholder="XYZ Technology Ltd."
                  className={`${formInput}`}
                />
                {errors.companyName && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
              {/* Role in the Company */}
              <div className="mt-4">
                <label htmlFor="roleInCompany" className={`${formLabel}`}>
                  Job Title
                </label>
                <input
                  type="text"
                  id="roleInCompany"
                  {...register("roleInCompany", { required: true })}
                  placeholder="Front End Developer"
                  className={`${formInput}`}
                />
                {errors.roleInCompany && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {/* Gender */}
              <div className="mt-4">
                <label htmlFor="gender" className={`${formLabel}`}>
                  Gender
                </label>
                <select
                  id="gender"
                  {...register("gender", { required: true })}
                  className={`${formInput}`}
                  placeholder="Select Gender"
                >
                  <option value="">--Select--</option>
                  <option key="male" value="male">
                    Male
                  </option>
                  <option key="female" value="female">
                    Female
                  </option>
                  <option key="other" value="other">
                    Other
                  </option>
                </select>

                {errors.gender && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>

              {/* Company Category */}
              <div className="mt-4">
                <label htmlFor="companyCategory" className={`${formLabel}`}>
                  Company Category
                </label>
                <select
                  id="companyCategory"
                  {...register("companyCategory", { required: true })}
                  className={`${formInput}`}
                >
                  <option value="">--Select--</option>
                  {companyCategories?.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.companyCategory && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
            </div>

            {/* Number of employees */}
            <div className="mt-4">
              <label htmlFor="employeeCount" className={`${formLabel}`}>
                Number of Employees
              </label>
              <select
                id="employeeCount"
                {...register("employeeCount", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">--Select--</option>
                {employeeCounts.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
              {errors.employeeCount && (
                <span className="text-red-500 text-sm">
                  This field is required !
                </span>
              )}

              {/* ==================Company detail================== */}
              <div className="mt-4">
                <label htmlFor="companyDetail" className={`${formLabel}`}>
                  Company Detail
                </label>
                <textarea
                  type="text"
                  id="companyDetail"
                  {...register("companyDetail", { required: true })}
                  className={`${formInput}  h-60`}
                  placeholder="Brief about your company..."
                ></textarea>
                {errors.companyDetail && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
            </div>

            <button type="submit" className={`${submitButtonClass} mt-4`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <TitleComponent title={"Employer Registration"}></TitleComponent>

      <div className="bg-secondary dark:bg-accent">{content}</div>
    </>
  );
};

export default EmployerRegistration;
