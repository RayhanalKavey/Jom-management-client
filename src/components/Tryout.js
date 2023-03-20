import React from "react";

const Tryout = () => {
  return (
    <div className="bg-white border-2  p-6 flex">
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Job Title</h2>
        <p className="text-gray-700 text-sm mb-4">Company Name</p>
        <p className="text-gray-700 text-sm mb-4">Location</p>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
          est non augue iaculis eleifend. Duis lobortis ligula vitae augue
          fermentum, sed lobortis nulla dictum. Aenean sit amet aliquet elit.
          Nulla eget lacus sed lorem pretium varius a ac ex. Sed cursus, velit
          vitae gravida convallis, justo eros semper tellus, ut iaculis ante
          tortor vel leo.
        </p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2">
          Apply
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2">
          Save
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2">
          Share
        </button>
      </div>
    </div>
  );
};

export default Tryout;
{
  /* <div className="flex flex-col justify-between w-96 h-96 bg-white shadow-md rounded-lg">
  <img
    className="w-full h-3/5 object-cover rounded-t-lg"
    src="/images/stock/job-post2.jpg"
    alt="Job Post"
  />
  <div className="flex flex-col justify-between h-2/5 p-4">
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Full Stack Developer
      </h2>
      <div className="bg-blue-500 text-white font-bold py-1 px-2 rounded-md inline-block mr-2">
        Featured
      </div>
      <p className="text-gray-700 text-base">
        We are looking for an experienced Full Stack Developer to join our team
        and help build amazing web applications.
      </p>
    </div>
    <div className="flex justify-between items-center mt-4">
      <div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Technology
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Development
        </span>
      </div>
      <div className="flex">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mr-2">
          Apply Now
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2">
          Save Job
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md mr-2">
          Share
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
          Report
        </button>
      </div>
    </div>
  </div>
</div>; */
}
