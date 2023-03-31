import React from "react";
import { Link } from "react-router-dom";
import { scaleButtonClass } from "../../components/classes/classes";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import { useGetBlogsQuery } from "../../features/auth/blogApi";
import BlogCard from "../home/BlogCard/BlogCard";
import { IoIosArrowRoundBack } from "react-icons/io";
import Spinner from "../../components/Spinner/Spinner";
import useTitle from "../../hooks/useTitle/useTitle";
import BlogCardSkeleton from "../../components/BlogCardSkeleton/BlogCardSkeleton";

const Blog = () => {
  useTitle("Blogs");

  const {
    data: blogs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBlogsQuery();
  let content;

  if (isLoading) {
    content = (
      <div className={` dark:bg-accent py-28 `}>
        <BlogCardSkeleton></BlogCardSkeleton>;
      </div>
    );
  }

  if (!isLoading) {
    content = (
      <>
        <section className="dark:bg-accent py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link to={"/home"}>
              <div
                className={`${scaleButtonClass}  absolute -top-32 left-8 text-accent dark:text-secondary `}
              >
                <IoIosArrowRoundBack style={{ fontSize: "1.8em" }} />
              </div>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs?.map((blog) => (
                <BlogCard blog={blog} key={blog?._id}></BlogCard>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <TitleComponent title="Blogs" />
      {content}
    </>
  );
};

export default Blog;
