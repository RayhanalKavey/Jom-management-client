import React from "react";
import { buttonClass } from "../../../components/classes/classes";

const Newsletter = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <form data-aos="zoom-in" className="w-full max-w-md">
          <div className="flex items-center  border-b border-gray-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your email address"
            />
            <button className={`${buttonClass} flex-shrink-0 `} type="button">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
