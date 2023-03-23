import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  commonDashboardClass,
  dashboardDrawerButton,
  dashboardLinkStyle,
  scaleButtonClass,
} from "../../components/classes/classes";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbGitPullRequestClosed } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";

const JobSeekerDashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <ul className="menu p-4">
      <li className="mb-4">
        <Link
          to="/job-seeker-dashboard/my-apply"
          className={`${dashboardLinkStyle}`}
        >
          My Apply
        </Link>
      </li>
      <li className="mb-4">
        <Link
          to="/job-seeker-dashboard/shortlisted"
          className={`${dashboardLinkStyle}`}
        >
          Short List
        </Link>
      </li>
      <li className="mb-4">
        <Link
          to="/job-seeker-dashboard/JobSeekerProfileUpdate"
          className={`${dashboardLinkStyle}`}
        >
          My Profile as Candidate
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <Navbar />

      <div className="flex">
        <div
          className={`hidden lg:block  w-64 min-h-screen border-r-[.5px] ${commonDashboardClass}`}
        >
          {links}
        </div>

        <div className="w-full h-full bg-base-100 dark:bg-accent flex-1 relative z-30 ">
          {/* back */}
          <Link to={"/poster-seeker"}>
            <div
              className={`${scaleButtonClass}  absolute top-28 left-3 text-accent dark:text-secondary `}
            >
              <IoIosArrowRoundBack style={{ fontSize: "1.8em" }} />
            </div>
          </Link>
          {/* back end */}
          <Outlet />
          <div className="relative lg:hidden">
            {isOpen && (
              <button
                className={`${dashboardDrawerButton} z-50 `}
                onClick={() => setIsOpen(!isOpen)}
              >
                <TbGitPullRequestClosed style={{ fontSize: "1.6rem" }} />
              </button>
            )}

            {isOpen || (
              <button
                className={`${dashboardDrawerButton} z-30   `}
                onClick={() => setIsOpen(!isOpen)}
              >
                <MdOutlineDashboardCustomize style={{ fontSize: "1.6rem" }} />
              </button>
            )}

            <div
              className={`${commonDashboardClass} border-l-[.5px] fixed top-0 right-0 w-2/5 h-full  z-40 transition-all duration-200 transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {links}
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default JobSeekerDashboardLayout;
