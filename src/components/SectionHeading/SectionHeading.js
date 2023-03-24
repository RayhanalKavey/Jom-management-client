import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <h3 className={`text-md font-bold text-center uppercase text-primary`}>
      {children}
    </h3>
  );
};

export default SectionHeading;
