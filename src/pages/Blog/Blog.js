import React from "react";
import { Link } from "react-router-dom";
import { scaleButtonClass } from "../../components/classes/classes";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import { useGetBlogsQuery } from "../../features/auth/blogApi";
import BlogCard from "../home/BlogCard/BlogCard";
import { IoIosArrowRoundBack } from "react-icons/io";

const Blog = () => {
  const { data: blogs } = useGetBlogsQuery();
  console.log("blogs:-", blogs);
  return (
    <div>
      <TitleComponent title="Blogs" />
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
    </div>
  );
};

export default Blog;
