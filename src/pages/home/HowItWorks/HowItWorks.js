import React from "react";
import { FaBriefcase, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { buttonClass } from "../../../components/classes/classes";

const cardClass =
  "bg-base-100 dark:bg-secondary rounded-lg p-6 flex flex-col justify-center items-center text-center";
const iconClass =
  "flex items-center justify-center w-16 h-16 rounded-full bg-primary text-secondary mb-4";
const HowItWorks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 ">
      {/* Employer */}
      <div data-aos="fade-right" className={`${cardClass}`}>
        <div className={`${iconClass} mb-8`}>
          <FaBriefcase className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold mb-5 ">
          Unlock Your Hiring Potential
        </h3>
        <p className="text-md leading-relaxed mb-8">
          As an employer, registering on our platform allows you to easily post
          job opportunities from your dashboard. Upon registration, you'll be
          able to manage your job listings, including the ability to edit or
          delete them when needed.
        </p>
        <Link to={"/poster-seeker"} className={`${buttonClass}`}>
          Register Now
        </Link>
      </div>
      {/* Job Seeker */}
      <div data-aos="fade-left" className={`${cardClass}`}>
        <div className={`${iconClass} mb-8`}>
          <FaUser className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold mb-5 ">
          Land Your Next Career Opportunity
        </h3>
        <p className="text-md leading-relaxed mb-8">
          Job seekers can also register on our platform to apply for job
          openings from their dashboard. You'll be able to view a list of your
          applied jobs and track their status. Once you've applied for a job,
          the apply button will change to indicate that you've already applied.
        </p>
        <Link to={"/poster-seeker"} className={`${buttonClass}`}>
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
