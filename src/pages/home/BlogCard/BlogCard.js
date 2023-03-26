import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  console.log("blog from blog card", blog);
  return (
    <>
      {/* card */}
      <div className="bg-secondary rounded-lg p-5">
        {/* image */}
        <div className="mb-5">
          <img className="rounded-lg" src={blog?.imgSrc} alt="" />
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
          <Link className="text-primary text-xl font-semibold flex gap-2 items-center ">
            <span>Read More</span>
            <div className="transform-gpu transition-transform mt-[2px]">
              <AiOutlineRight className="hover:scale-110" />
            </div>
          </Link>
        </div>
        {/* content end */}
      </div>
    </>
  );
};

export default BlogCard;
