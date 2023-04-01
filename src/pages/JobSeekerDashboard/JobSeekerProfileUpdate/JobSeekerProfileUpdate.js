import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  formInput,
  formLabel,
  submitButtonClass,
} from "../../../components/classes/classes";
import FormSkeleton from "../../../components/FormSkeleteon/FormSkeleton";

import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import {
  useGetUserQuery,
  useRegisterAsJobSeekerMutation,
} from "../../../features/auth/authApi";

const JobSeekerProfileUpdate = () => {
  /* ===============================
  // Get user email from the store
    ================================ */
  const {
    user,
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

  /* =================
  // React hook form
     ================*/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  /* ======================
  // Post user to the database and handle its updating state
  ========================= */
  const [registerAsJobSeeker, { isSuccess, isLoading, isError, error }] =
    useRegisterAsJobSeekerMutation();

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
  const employeeCounts = ["1-50", "51-100", "101-500", "501-1000", "1000+"];

  /* ======================
// Submit form data...
======================= */
  const onSubmit = (data) => {
    const jobSeeker = {
      ...data,

      _id: user?._id,
    };
    registerAsJobSeeker(jobSeeker);
  };
  let content;

  if ((userLoading, authLoading)) {
    content = <FormSkeleton />;
  }
  //  defaultValue={loggedInJobSeeker?.firstName}
  if (!userLoading && !authLoading && !authError & !userIsError) {
    content = (
      <div
        data-aos="fade-up"
        className="w-full mx-auto  sm:px-6 lg:px-8  flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100"
      >
        {" "}
        <div className="w-full bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 mt-4">
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
                  defaultValue={user?.regAsJobSeeker?.fullName}
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
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Gender */}
              <div>
                <label htmlFor="gender" className={`${formLabel}`}>
                  Gender
                </label>
                <select
                  id="gender"
                  {...register("gender", { required: true })}
                  className={`${formInput}`}
                  defaultValue={user?.regAsJobSeeker?.gender}
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
              <div>
                <label htmlFor="companyCategory" className={`${formLabel}`}>
                  Company Category
                </label>
                <select
                  id="companyCategory"
                  {...register("companyCategory", { required: true })}
                  className={`${formInput}`}
                  defaultValue={user?.regAsJobSeeker?.companyCategory}
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

            {/* Skills */}
            <div>
              <label htmlFor="skills" className={`${formLabel}`}>
                Skills:
              </label>
              <input
                type="text"
                id="skills"
                {...register("skills", { required: true })}
                className={`${formInput}`}
                defaultValue={user?.regAsJobSeeker?.skills}
              />
              {errors.skills && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/*/// Desire position*/}
            <div className="mt-4">
              <label htmlFor="position" className={`${formLabel}`}>
                Your Position
              </label>
              <select
                id="position"
                {...register("position", { required: true })}
                className={`${formInput}`}
                defaultValue={user?.regAsJobSeeker?.position}
              >
                <option value="">--Select--</option>

                {position.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.position && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/*/// Job type */}
            <div className="mt-4">
              <label htmlFor="jobType" className={`${formLabel}`}>
                Job Type:
              </label>
              <select
                id="jobType"
                {...register("jobType", { required: true })}
                className={`${formInput}`}
                defaultValue={user?.regAsJobSeeker?.jobType}
              >
                <option value="">--Select--</option>

                {jobType.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.jobType && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/*/// Year of Expert*/}
            <div className="mt-4">
              <label htmlFor="yearOfExp" className={`${formLabel}`}>
                Year Of Expert
              </label>{" "}
              <input
                type="number"
                id="yearOfExp"
                {...register("yearOfExp", { required: true })}
                className={`${formInput}`}
                defaultValue={user?.regAsJobSeeker?.yearOfExp}
                min={0}
              />
              {errors.yearOfExp && (
                <span className="text-red-500 text-sm">
                  This field is required !
                </span>
              )}
            </div>

            {/* Number of employees */}
            <div className="mt-4">
              <label htmlFor="employeeCount" className={`${formLabel}`}>
                Desired Number of Employees
              </label>
              <select
                id="employeeCount"
                {...register("employeeCount", { required: true })}
                className={`${formInput}`}
                defaultValue={user?.regAsJobSeeker?.employeeCount}
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

              {/* ================= about me================== */}
              <div className="mt-4">
                <label htmlFor="aboutMe" className={`${formLabel}`}>
                  About Me
                </label>
                <textarea
                  type="text"
                  id="aboutMe"
                  {...register("aboutMe", { required: true })}
                  className={`${formInput}  h-60`}
                  defaultValue={user?.regAsJobSeeker?.aboutMe}
                ></textarea>
                {errors.aboutMe && (
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
      toast.loading("Updating...Please wait...", { id: "updateJobSeeker" });
    }
    if (isSuccess) {
      toast.success("Profile Updated Successfully.", { id: "updateJobSeeker" });
      // navigate("/job-seeker-dashboard");
    }
    if (isError) {
      toast.error(error, { id: "updateJobSeeker" });
    }
  }, [isLoading, isSuccess, isError, error, navigate]);
  /* ----------------------------------------------------- */
  return (
    <>
      <TitleComponent title={"My Profile"}></TitleComponent>

      {content}
    </>
  );
};

export default JobSeekerProfileUpdate;
