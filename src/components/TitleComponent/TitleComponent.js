import React from "react";

const TitleComponent = ({ title }) => {
  const bottomBorder = "border-b-[.5px]  dark:border-gray-600";

  return (
    <section className={`bg-secondary dark:bg-accent py-12  ${bottomBorder}`}>
      <div className={`flex justify-center items-center`}>
        <div className="text-center">
          <h1 className="uppercase text-4xl font-bold text-accent dark:text-secondary mb-4">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TitleComponent;
