import React from "react";
import { useGetBlogsQuery } from "../../features/auth/blogApi";
import { AiOutlineRight } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import BlogCard from "../home/BlogCard/BlogCard";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import userImg from "../../assets/images/rayhan-al-kavey.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { scaleButtonClass } from "../../components/classes/classes";

const BlogDetails = () => {
  let { state: blog } = useLocation();
  return (
    <section className="bg-secondary dark:bg-accent">
      {/* heading */}
      <div className="relative flex justify-center items-center flex-col  pt-16 pb-10 text-accent dark:text-secondary">
        <Link to={"/blog"}>
          <div
            className={`${scaleButtonClass}  absolute bottom-5 left-[22%] text-accent dark:text-secondary `}
          >
            <IoIosArrowRoundBack style={{ fontSize: "1.8em" }} />
          </div>
        </Link>
        <h3 className="text-3xl font-semibold mb-7">{blog?.title}</h3>
        {/* author start*/}
        <div className="flex justify-center items-center gap-4">
          {/* img */}
          <div className="w-10 h-10 border-[0.08rem] border-accent dark:border-secondary rounded-full overflow-hidden dark:bg-secondary">
            <img
              src={userImg}
              alt=""
              className=" rounded-full object-cover w-full h-full hover:scale-[1.1] duration-500"
            />
          </div>
          <div>Rayhan Al Kavey</div>
          <p className="text-5xl fond-bold"> &middot;</p>
          <div>{blog?.date}</div>
        </div>
        {/* author end */}
      </div>
      {/* Heading End */}
      {/* <TitleComponent title={blog?.title}></TitleComponent> */}
      <div className={` pb-24 text-accent dark:text-secondary  `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col justify-center items-center w-full gap-4 dark:bg-accent">
            {/* image */}
            <div className="my-5">
              <img className="rounded-lg " src={blog?.imgSrc} alt="" />
            </div>
            {/* content start */}

            <div className="mb-8">
              <p className="text-md">{blog?.content}</p>
            </div>

            {/* content end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
