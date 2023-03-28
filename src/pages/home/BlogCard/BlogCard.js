import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <>
      {/* card */}
      <div
        data-aos="flip-left"
        className="bg-secondary rounded-lg p-5 transition-all"
      >
        {/* image */}
        <div className="mb-5 overflow-hidden  rounded-lg   ">
          <img
            className="rounded-lg object-cover hover:scale-[1.1] duration-500"
            src={blog?.imgSrc}
            alt=""
          />
        </div>
        {/* content start */}
        <div>
          <div className="mb-8">
            <div>{blog?.date}</div>
            {/* <div>8 comment</div> */}
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-5">{blog?.title}</h3>
            <p className="text-md">{blog?.content.slice(0, 99)}....</p>
          </div>
          <Link
            to={"/blog-details"}
            state={blog}
            className="duration-500 text-primary text-xl font-semibold flex gap-2 items-center hover:translate-x-1"
          >
            <span className="hover:translate-x-0 ">Read More</span>
            <div className="transform-gpu transition-transform mt-[2px]">
              <AiOutlineRight className="" />
            </div>
          </Link>
        </div>
        {/* content end */}
      </div>
    </>
  );
};

export default BlogCard;
