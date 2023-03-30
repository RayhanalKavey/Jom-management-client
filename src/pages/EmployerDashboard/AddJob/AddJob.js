import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import { usePostAJobMutation } from "../../../features/auth/jobApi";
import {
  formInput,
  formLabel,
  submitButtonClass,
} from "../../../components/classes/classes";

const AddJob = () => {
  /* =============================
  // Get user email from the store
  ================================*/

  const { email } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  /*===========================
  // Redux despatch, and action
   ============================ */
  const [postAJob, { isLoading, isSuccess, isError, error }] =
    usePostAJobMutation();

  /* ================
  // React hook form
     ================*/
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /*=========================  
  React hook form submission
  ===========================*/
  const onSubmit = (data) => {
    const currentDate = new Date();
    const jobInfo = {
      ...data,
      fresherJob: data?.jobCategory === "Fresher" ? true : false,
      experiencedJob: data?.jobCategory === "Experienced" ? true : false,
      currentDate,
    };
    // console.log("JobInfo", jobInfo);
    postAJob(jobInfo);
  };
  /* =================================
  // Handle update a user state 
  =====================================*/
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...Please wait...", { id: "addJob" });
    }
    if (isSuccess) {
      toast.success("Job Posted Successfully.", { id: "addJob" });
      reset();
      navigate("/employer-dashboard/my-posted-job");
    }
    if (isError) {
      toast.error(isError, { id: "addJob" });
    }
  }, [isLoading, isSuccess, isError, error, reset, navigate]);

  const jobCategories = ["Fresher", "Experienced"];

  // ----------------------///--------------------------------//
  return (
    <>
      <TitleComponent title={"Post Job"}></TitleComponent>

      <div
        data-aos="fade-up"
        className="flex justify-stretch items-stretch px-5 py-12 dark:bg-accent bg-base-100"
      >
        <div className="w-full bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-4">
              {/* -----------Job Title ------------ */}
              <div>
                <label htmlFor="position" className={`${formLabel}`}>
                  Job Title
                </label>
                <input
                  type="text"
                  id="position"
                  {...register("position", { required: true })}
                  className={`${formInput}`}
                  placeholder="Front End Developer"
                />
                {errors.position && (
                  <span className="text-red-500 text-sm">
                    This field is required !!
                  </span>
                )}
              </div>
              {/* -------------Company Name ------------*/}
              <div>
                <label htmlFor="company" className={`${formLabel}`}>
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  {...register("company", { required: true })}
                  className={`${formInput}`}
                  placeholder="ABC Company Ltd."
                />
                {errors.company && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* ------------Job Location-------------*/}
              <div className="mt-4">
                <label htmlFor="location" className={`${formLabel}`}>
                  Company Location
                </label>
                <input
                  type="text"
                  id="location"
                  {...register("location", { required: true })}
                  className={`${formInput}`}
                  placeholder="Hasnabad Housing, Dhaka, Bangladesh"
                />
                {errors.location && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
              {/* ===============Company category ============== */}
              <div className="mt-4">
                <label htmlFor="companyCategory" className={`${formLabel}`}>
                  Company Category
                </label>
                <input
                  type="text"
                  id="companyCategory"
                  {...register("companyCategory", { required: true })}
                  className={`${formInput}`}
                  placeholder="Technology/Health Care etc."
                />
                {errors.companyCategory && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* ---------------Job Type-------------- */}
              <div className="mt-4">
                <label htmlFor="jobType" className={`${formLabel}`}>
                  Job Type
                </label>
                <select
                  id="jobType"
                  {...register("jobType", { required: true })}
                  className={`${formInput}`}
                >
                  <option value="">-- Select Job Type --</option>
                  <option key="remote" value="remote">
                    Remote
                  </option>
                  <option key="onSite" value="onSite">
                    On-Site
                  </option>
                  <option key="hybrid" value="hybrid">
                    Hybrid
                  </option>
                </select>

                {errors.jobType && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
              {/* ------------Year of Expert -----------------*/}
              <div className="mt-4">
                <label htmlFor="requiredExp" className={`${formLabel}`}>
                  Year Of Expert
                </label>
                <input
                  type="number"
                  id="requiredExp"
                  {...register("requiredExp", { required: true })}
                  className={`${formInput}`}
                  placeholder="1/2/3/4"
                  min={0}
                  // onWheel={(event) => event.preventDefault()}
                />
                {errors.requiredExp && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* ================ Email ============== */}
              <div className="mt-4">
                <label htmlFor="email" className={`${formLabel}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`${formInput} cursor-not-allowed`}
                  defaultValue={email}
                  readOnly
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    This field is required !!
                  </span>
                )}
              </div>

              {/* ============= Job category =========== */}
              <div className="mt-4">
                <label htmlFor="jobCategory" className={`${formLabel}`}>
                  Job Category
                </label>
                <select
                  id="jobCategory"
                  {...register("jobCategory", { required: true })}
                  className={`${formInput}`}
                >
                  <option value="">-- Select Category --</option>
                  {jobCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.jobCategory && (
                  <span className="text-red-500 text-sm">
                    This field is required !
                  </span>
                )}
              </div>
            </div>

            {/*================ Logo ==================*/}
            <div className="mt-4">
              <label htmlFor="logo" className={`${formLabel}`}>
                {" "}
                Logo Link
              </label>
              <input
                type="text"
                id="logo"
                {...register("logo", { required: true })}
                className={`${formInput}`}
                placeholder="https://www.nike.com/favicon.icos"
              />
              {errors.logo && (
                <span className="text-red-500 text-sm">
                  This field is required !
                </span>
              )}
            </div>
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
            {/* ==================Job Description================== */}
            <div className="mt-4">
              <label htmlFor="jobDetail" className={`${formLabel}`}>
                Job Detail
              </label>
              <textarea
                type="text"
                id="jobDetail"
                {...register("jobDetail", { required: true })}
                className={`${formInput}  h-60`}
                placeholder="Brief about the job..."
              ></textarea>

              {errors.jobDetail && (
                <span className="text-red-500 text-sm">
                  This field is required !
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
