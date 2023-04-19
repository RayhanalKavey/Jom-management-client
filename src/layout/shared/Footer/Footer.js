import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const commonLinkClass =
    "text-accent dark:text-secondary hover:bg-blue-100 hover:dark:bg-gray-700  rounded text-md  p-2";
  const topBorder = "border-t-[.5px] dark:border-gray-600";
  return (
    <footer
      className={`bg-secondary dark:bg-accent text-accent dark:secondary ${topBorder}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-4">
          {/* Location */}
          <div className="mb-8 sm:mb-0">
            <h2 className="font-bold text-xl mb-4 text:accent dark:text-secondary">
              Location
            </h2>
            <div className="text:accent dark:text-secondary">
              <h3>Hasnabad Housing,</h3>
              <p>Dream Memorial Road-5,</p>
              <p>South Keraniganj,</p>
              <p>Dhaka.</p>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-8 sm:mb-0 justify-self-center text-end">
            <h2 className="font-bold text-xl mb-4 text:accent dark:text-secondary">
              Resources
            </h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link to="/home" className={`${commonLinkClass} pr-0`}>
                  Home{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className={`${commonLinkClass} pr-0`}>
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/poster-seeker" className={`${commonLinkClass} pr-0`}>
                  Job Poster/Seeker{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/all-job" className={`${commonLinkClass} pr-0`}>
                  Find Job
                </Link>
              </li>
            </ul>
          </div>
          {/* Connect */}
          <div className=" justify-self-end text-end ">
            <h2 className="font-bold text-xl mb-4 text:accent dark:text-secondary">
              Connect
            </h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link
                  to="https://www.facebook.com/rayhan.kavey"
                  target="blank"
                  className={`${commonLinkClass} pr-0`}
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="https://www.linkedin.com/in/rayhanalkavey/"
                  target="blank"
                  className={`${commonLinkClass} pr-0`}
                >
                  LinkedIn
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="https://github.com/RayhanalKavey"
                  target="blank"
                  className={`${commonLinkClass} pr-0`}
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`flex justify-between mt-8 ${topBorder} pt-8`}>
          <p className="text:accent dark:text-secondary">
            &copy; 2023 Job Management. All rights reserved.
          </p>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className={`${commonLinkClass} pr-0`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-job" className={`${commonLinkClass} pr-0`}>
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/blog" className={`${commonLinkClass} pr-0`}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
