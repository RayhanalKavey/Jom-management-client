import React from "react";

const SectionSubHeading = ({ children }) => {
  return (
    <h2 className="text-3xl font-semibold text-center mt-6 mb-16 text-accent dark:text-secondary">
      {" "}
      {children}
    </h2>
  );
};

export default SectionSubHeading;
