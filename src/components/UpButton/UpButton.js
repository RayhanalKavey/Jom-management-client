import React from "react";
import { AiOutlineToTop } from "react-icons/ai";
import { Link } from "react-router-dom";

const UpButton = () => {
  return (
    <>
      <a href="#up" className=" fixed right-4  bottom-10 z-[999] p-4 ">
        <button
          data-aos="zoom-in"
          className="duration-500 border border-accent rounded-lg bg-primary dark:border-secondary p-1 hover:scale-110 text-secondary hover:bg-warning"
        >
          <AiOutlineToTop></AiOutlineToTop>
        </button>
      </a>
    </>
  );
};

export default UpButton;
