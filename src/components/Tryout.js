import React from "react";

const Tryout = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-accent dark:text-secondary mb-4">
          Welcome to our Careers Page!
        </h1>
        <p className="text-lg text-info dark:text-secondary mb-8">
          Explore job opportunities with our company and learn how you can join
          our team.
        </p>
        <button className="bg-primary py-3 px-6 rounded-full text-accent font-bold shadow-lg uppercase tracking-wider">
          <span className="text-secondary"> View Openings</span>
        </button>
      </div>
    </div>
  );
};

export default Tryout;
