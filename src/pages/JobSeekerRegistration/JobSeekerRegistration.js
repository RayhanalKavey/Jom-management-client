import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import {
  useRegisterAsJobSeekerMutation,
  useRegisterJobSeekerMutation,
} from "../../features/auth/authApi";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  formInput,
  formLabel,
  scaleButtonClass,
  submitButtonClass,
} from "../../components/classes/classes";
import FormSkeleton from "../../components/FormSkeleteon/FormSkeleton";
const JobSeekerRegistration = () => {
  /* ===============================
  // Get user email from the store
    ================================ */
  const {
    user,
    email,
    isLoading: authLoading,
    isError: authError,
  } = useSelector((state) => state?.auth);
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

  // Post user to the database and handle its updating state
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
    const jobSeeker = { ...data, _id: user?._id };
    registerAsJobSeeker(jobSeeker);
  };

  // Handle different user update state
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...... Please wait", { id: "addUser" });
    }
    if (isSuccess) {
      toast.success("Wellcome as a Job Seeker.", { id: "addUser" });
      reset();
      navigate("/job-seeker-dashboard");
    }
    if (isError) {
      toast.error(error, { id: "addUser" });
    }
  }, [isLoading, isSuccess, isError, error, reset, navigate]);

  // If find user then print form
  let content;
  if (authLoading) {
    content = <FormSkeleton></FormSkeleton>;
  }
  if (!authLoading && !authError) {
    content = (
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto  sm:px-6 lg:px-8  flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100"
      >
        {" "}
        <div className="w-full bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <Link to={"/poster-seeker"}>
              <div className={`${scaleButtonClass}  absolute -top-7 -left-7  `}>
                {/* <h2 className="text-3xl font-bold flex justify-center h-full items-center"> */}
                <IoIosArrowRoundBack style={{ fontSize: "1.8em" }} />
                {/* </h2> */}
              </div>
            </Link>

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
              <div>
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
                placeholder="HTML, CSS, JavaScript, React etc."
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
                placeholder="1/2/3/4"
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
                  Company Detail
                </label>
                <textarea
                  type="text"
                  id="aboutMe"
                  {...register("aboutMe", { required: true })}
                  className={`${formInput}  h-60`}
                  placeholder="Brief about yourself..."
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
  return (
    <>
      <TitleComponent title={"Job Seeker Registration"}></TitleComponent>

      {content}
    </>
  );
};

export default JobSeekerRegistration;
