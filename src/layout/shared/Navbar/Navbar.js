import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../../features/auth/authSlice";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.config";

const Navbar = () => {
  // Get information from the REDUX store
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // console.log("user in the navbar from the redux store", email);

  // Open and close the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Log out user
  const navigate = useNavigate();
  const handleLogOut = () => {
    // Logout from firebase
    signOut(auth)
      .then(() => {
        // If logged out successfully then clear the user from the store. (Back to the initial state.)
        dispatch(logOut());
      })
      .catch((error) => {
        // An error happened.
      });

    console.log("email state condition after logout", email);
    // If there is no user the redirect user to the login page
    if (!email) {
      navigate("/login");
    }
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
            {email ? (
              <button
                onClick={handleLogOut}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              // <input
              //   onClick={handleLogOut}
              //   className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              //   // type="submit"
              //   value="Logout"
              // />
              <>
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
              </>
            )}
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
          {email ? (
            <Link
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleLogOut}
            >
              Logout
            </Link>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
