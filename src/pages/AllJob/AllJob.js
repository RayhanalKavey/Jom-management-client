import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/JobCard/JobCard";
import JobCardSkeleton from "../../components/JobCardSkeleton/JobCardSkeleton";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import { useGetJobsForQueryPaginationQuery } from "../../features/job/jobApi";
import { setPage, setSize } from "../../features/pagination/paginationSlice";
import useTitle from "../../hooks/useTitle/useTitle";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const AllJob = () => {
  useTitle("All Jobs");

  /* ====================================
     Get information from the REDUX store
     ====================================*/
  const { size, page } = useSelector((state) => state?.pagination);
  const dispatch = useDispatch();

  // ==================
  //Pagination states
  // ==================

  const { data, isLoading, isError, error } = useGetJobsForQueryPaginationQuery(
    { page, size }
  );

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
    console.log("pages", pages);

    /* =======================
Pagination end
========================= */
  }

  return (
    <>
      <TitleComponent title={"Find Job"}></TitleComponent>

      <section className="dark:bg-accent text-accent dark:text-secondary py-28 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {!isLoading && !isError ? (
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
                <select
                  className="  bg-secondary text-gray-700 border border-gray-300 rounded py-1 px-3   focus:outline-none focus:border-primary "
                  name=""
                  id=""
                  onChange={(event) => dispatch(setSize(event.target.value))}
                >
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8 </option>
                </select>
              </div>
            </>
          ) : (
            <>
              <JobCardSkeleton></JobCardSkeleton>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default AllJob;
