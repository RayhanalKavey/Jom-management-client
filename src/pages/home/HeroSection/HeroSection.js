import React from "react";
import { Link } from "react-router-dom";
import { homeButton } from "../../../components/classes/classes";

const HeroSection = () => {
  return (
    <div className={`flex justify-center items-center`}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-accent dark:text-secondary mb-4">
          Welcome to our Careers Page!
        </h1>
        <p className="text-lg text-info dark:text-secondary mb-8">
          Explore job opportunities with our company and learn how you can join
          our team.
        </p>
        <Link to="/all-job" className={`${homeButton}`}>
          <span className="text-secondary"> View Openings</span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
