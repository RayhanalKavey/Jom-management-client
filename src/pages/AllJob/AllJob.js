import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/JobCard/JobCard";
import JobCardSkeleton from "../../components/JobCardSkeleton/JobCardSkeleton";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import { useGetJobsForQueryPaginationQuery } from "../../features/job/jobApi";
import {
  setFilteredJob,
  setPage,
  setSize,
} from "../../features/pagination/paginationSlice";
import useTitle from "../../hooks/useTitle/useTitle";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Spinner from "../../components/Spinner/Spinner";

const AllJob = () => {
  useTitle("All Jobs");

  /* ====================================
     Get information from the REDUX store
     ====================================*/
  const { size, page, jobTypes } = useSelector((state) => state?.pagination);
  const dispatch = useDispatch();
  // ==================
  //Pagination states
  // ==================

  const { data, isLoading, isError, error, isSuccess } =
    useGetJobsForQueryPaginationQuery({ page, size, jobTypes });
  // Handle loading states of getting the job...
  if (isError) {
    toast.success(error, { id: "jobss" });
  }
  let pages;
  if (!isLoading && !isError) {
    /* =======================
    Pagination start
  ========================= */
    // total number of pages
    pages = Math.ceil(data?.count / size);

    /* =======================
Pagination end
========================= */
  }
  let content;
  // useEffect(() => {}, [isSuccess, isSuccess]);
  if (isLoading) {
    content = <Spinner />;
  }
  // if (isSuccess) {
  //   content = <Spinner />;
  // }

  return (
    <>
      <TitleComponent title={"Find Job"}></TitleComponent>

      {/* {data?.jobs?.length ? ( */}
      {!isLoading && !isError ? (
        <section className="dark:bg-accent text-accent dark:text-secondary py-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {isSuccess && !isError && data?.jobs?.length ? (
              <>
                {" "}
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  {data?.jobs
                    ?.filter((j) => j)
                    ?.reverse()
                    ?.map((job) => (
                      <div
                        data-aos="fade-up"
                        className="m-2  border-[.08rem] p-6 rounded-lg  bg-secondary"
                        key={job?._id}
                      >
                        <JobCard job={job}></JobCard>
                      </div>
                    ))}
                </div>
                {/* Pagination buttons start */}
                <div className="mt-16 text-center flex gap-2 justify-center items-center ">
                  {/* Previous button */}
                  <button
                    className={`  text-accent dark:text-secondary hover:bg-success hover:dark:bg-gray-600 px-3 py-2 rounded-full text-lg font-medium border-[.5px] border-accent dark:border-info secondary `}
                    onClick={() =>
                      dispatch(setPage(page === 0 ? pages - 1 : page - 1))
                    }
                  >
                    <BiChevronLeft />
                  </button>
                  {/* Page Numbers button */}
                  {[...Array(pages).keys()]?.map((num) => (
                    <button
                      key={num}
                      className={`  px-3  py-1 rounded border border-accent dark:border-secondary text-secondary ${
                        page === num ? "bg-warning" : "bg-primary"
                      }`}
                      onClick={() => dispatch(setPage(num))}
                    >
                      {num}
                    </button>
                  ))}
                  {/* Next button */}
                  <button
                    className={`  text-accent dark:text-secondary hover:bg-success hover:dark:bg-gray-600 px-3 py-2 rounded-full text-lg font-medium border-[.5px] border-accent dark:border-info secondary `}
                    onClick={() =>
                      dispatch(setPage(page < pages - 1 ? page + 1 : 0))
                    }
                  >
                    <BiChevronRight />
                  </button>
                  {/* Pagination buttons end */}
                </div>
                <div className="mt-6 text-center flex flex-col gap-2 justify-center items-center ">
                  <select
                    className="  bg-secondary text-gray-700 border border-gray-300 rounded py-1 px-3   focus:outline-none focus:border-primary "
                    name=""
                    id=""
                    onChange={(event) => dispatch(setSize(event.target.value))}
                  >
                    <option value="">Items Per Page: {size}</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8 </option>
                  </select>
                  <select
                    className="  bg-secondary text-gray-700 border border-gray-300 rounded py-1 px-3   focus:outline-none focus:border-primary "
                    name=""
                    id=""
                    onChange={(event) =>
                      dispatch(setFilteredJob(event.target.value))
                    }
                  >
                    <option value="">Job Type: {jobTypes}</option>
                    <option value="All Jobs">All Jobs</option>
                    <option value="Fresher Jobs">Fresher Jobs</option>
                    <option value="Experienced Jobs">Experienced Jobs</option>
                  </select>
                </div>
              </>
            ) : (
              <div className="text-center font-semibold text-2xl">
                No Job Posted Yet!!
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="dark:bg-accent text-accent dark:text-secondary py-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-2xl font-bold">
            <JobCardSkeleton></JobCardSkeleton>
          </div>
        </section>
      )}
    </>
  );
};

export default AllJob;
