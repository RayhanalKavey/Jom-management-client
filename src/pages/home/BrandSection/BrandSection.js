import React from "react";
import brand1 from "../../../assets/images/brands/netflix-logo.png";
import brand2 from "../../../assets/images/brands/ibm-logo.png";
import brand3 from "../../../assets/images/brands/unity-logo.jpeg";
import brand4 from "../../../assets/images/brands/youtube-logo.png";

const BrandSection = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-12">
      <img className="h-10" src={brand1} alt="Sponsored Brand 1" />
      <img className="h-10" src={brand2} alt="Sponsored Brand 3" />
      <img className="h-10" src={brand3} alt="Sponsored Brand 4" />
      <img className="h-10" src={brand4} alt="Sponsored Brand 5" />
      <img className="h-10" src={brand1} alt="Sponsored Brand 6" />
      <img className="h-10" src={brand2} alt="Sponsored Brand 6" />
      <img className="h-10" src={brand3} alt="Sponsored Brand 6" />
      <img className="h-10" src={brand4} alt="Sponsored Brand 6" />
    </div>
  );
};

export default BrandSection;
