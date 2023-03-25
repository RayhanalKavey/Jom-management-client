import React from "react";
import brand1 from "../../../assets/images/brands/netflix-logo.png";

const BrandSection = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-12">
      <img className="h-12" src={brand1} alt="Sponsored Brand 1" />
      <img className="h-12" src={brand1} alt="Sponsored Brand 2" />
      <img className="h-12" src={brand1} alt="Sponsored Brand 3" />
      <img className="h-12" src={brand1} alt="Sponsored Brand 4" />
      <img className="h-12" src={brand1} alt="Sponsored Brand 5" />
      <img className="h-12" src={brand1} alt="Sponsored Brand 6" />
    </div>
  );
};

export default BrandSection;
