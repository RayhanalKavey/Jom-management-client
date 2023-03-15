import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Get information from the REDUX store
  const { user } = useSelector((state) => state.auth);
  console.log("user in the navbar from the redux store", user);

  // Open and close the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between flex-1 ">
            <Link to="#" className="text-white font-bold">
              Logo
            </Link>
            {/* Hamburger button */}
            <button
              className="text-white ml-4 sm:hidden"
              onClick={toggleMenu}
              onMouseEnter={toggleMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* Menu Link for large screen */}
          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Logout
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/registration"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Registration
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        onMouseLeave={toggleMenu}
      >
        <div className="flex flex-col text-center px-2 pt-2 pb-3 space-y-1">
          <Link
            to="#"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Link 1
          </Link>
          <Link
            to="#"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Link 2
          </Link>
          <Link
            to="#"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Link 3
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
