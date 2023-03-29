import React from "react";
import { useRouteError } from "react-router-dom";
import useTitle from "../../../hooks/useTitle/useTitle";

const ErrorPage = ({ errorCode, errorMessage }) => {
  useTitle("Error Page");
  const { status, statusText } = useRouteError();
  return (
    <div className="min-h-screen bg-secondary dark:bg-accent flex flex-col justify-center items-center">
      <div className="bg-white w-96 h-96 rounded-lg shadow-md p-8 flex flex-col justify-center items-center animate-pulse">
        <svg
          className="w-16 h-16 text-red-500 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          <span className="inline-block animate-bounce mr-1">Oops! </span>
          <span className="inline-block animate-spin-slow">
            E<span className="inline-block animate-spin-fast">rr</span>or
          </span>
        </h2>
        <div className="mt-6">
          <h3 className="text-xl font-bold ">
            Status: <span className="text-error">{status}</span>
          </h3>
          <p className="text-gray-600">
            Status Message: <span className="text-error"> {statusText}</span>
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/home"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
