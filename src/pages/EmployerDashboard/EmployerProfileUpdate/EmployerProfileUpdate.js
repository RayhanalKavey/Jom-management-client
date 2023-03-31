import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  formInput,
  formLabel,
  submitButtonClass,
} from "../../../components/classes/classes";
import FormSkeleton from "../../../components/FormSkeleteon/FormSkeleton";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import {
  useGetUserQuery,
  useUpdateEmployerOrJobSeekerMutation,
} from "../../../features/auth/authApi";

const EmployerProfileUpdate = () => {
  /* ===============================
  // Get user email from the store
    ================================ */
  const {
    email,
    isLoading: authLoading,
    isError: authError,
  } = useSelector((state) => state?.auth);

  /* ===============================
  // get all users from the database
    ================================ */
  const {
    data,
    isLoading: userLoading,
    isError: userIsError,
  } = useGetUserQuery();

  /* ===============================
    // Find if the user Registered as employer otherwise send to the employer Registration page
      ================================ */
  let loggedInEmployer;
  if (data) {
    loggedInEmployer = data?.find(
      (u) => u?.email === email && u?.isEmployer === true
    );
  }

  /* =================
  // React hook form
     ================*/
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  /* ======================
  // Post user to the database and handle its updating state
  ========================= */
  const [updateEmployerOrJobSeeker, { isSuccess, isLoading, isError, error }] =
    useUpdateEmployerOrJobSeekerMutation();

  const companyCategories = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
  ];
  const employeeCounts = ["1-50", "51-100", "101-500", "501-1000", "1000+"];

  /* ================
  // Submit form data
     ================*/
  const onSubmit = (data) => {
    const employer = { ...data, isJobSeeker: true, _id: loggedInEmployer?._id };
    updateEmployerOrJobSeeker(employer);
  };
  let content;

  if ((userLoading, authLoading)) {
    content = <FormSkeleton />;
  }
  if (!userLoading && !authLoading && !authError & !userIsError) {
    content = (
      <div
        data-aos="fade-up"
        className="flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100"
      >
        <div className="w-full bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
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
                  defaultValue={loggedInEmployer?.fullName}
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
                  Email:
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
                  defaultValue={loggedInEmployer?.companyName}
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
                  defaultValue={loggedInEmployer?.roleInCompany}
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
                  defaultValue={loggedInEmployer?.gender}
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
                  defaultValue={loggedInEmployer?.companyCategory}
                  className={`${formInput}`}
                >
                  <option value="">--Select--</option>
                  {companyCategories.map((category) => (
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
                defaultValue={loggedInEmployer?.employeeCount}
                className={`${formInput}`}
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
                  defaultValue={loggedInEmployer?.companyDetail}
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
  /* ===================================
  // Handle different user update state
     =================================== */
  useEffect(() => {
    if (isLoading) {
      toast.loading("Updating...Please wait...", { id: "updateUser" });
    }
    if (isSuccess) {
      toast.success("Profile Updated Successfully.", { id: "updateUser" });
      // navigate("/employer-dashboard");
    }
    if (isError) {
      toast.error(error, { id: "updateUser" });
    }
  }, [isLoading, isSuccess, isError, error, navigate]);

  /* ------------------------------------------------------------------- */
  return (
    <>
      {/* defaultValue={loggedInEmployer?.firstName} */}
      <TitleComponent title={"My Profile"}></TitleComponent>

      {content}
    </>
  );
};

export default EmployerProfileUpdate;
