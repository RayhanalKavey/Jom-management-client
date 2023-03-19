import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../../features/auth/authSlice";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { setTheme, toggleTheme } from "../../../features/theme/themeSlice";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
const Navbar = () => {
  // Get information from the REDUX store
  const { email, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
    // If there is no user the redirect user to the login page
    if (!email) {
      navigate("/login");
    }
  };
  /* ======================
  Dark mood system start
  ======================*/
  //-------with redux

  const { theme } = useSelector((state) => state.theme);

  // Check the system preference. It will check this once.
  useEffect(() => {
    window.matchMedia("prefers-color-scheme:dark").matches
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));
  }, []);
  // --------normal dark mood
  // const [theme, setTheme] = useState(null);
  // --Check the system preference. It will check this once.
  // useEffect(() => {
  //   window.matchMedia("prefers-color-scheme:dark").matches
  //     ? setTheme("dark")
  //     : setTheme("light");
  // }, []);
  // --Handle Switch theme function called when user want to switch theme
  // const handleSwitchTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  // Set the theme according the handleThemeSwitch functions theme preference
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const links = (
    <>
      <Link
        to="/"
        className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </Link>
      <Link
        to="/poster-seeker"
        className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        Job Poster/Seeker
      </Link>
      <Link
        to="/all-job"
        className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        Find Job
      </Link>
      <Link
        to="/about"
        className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        Contact
      </Link>

      {email ? (
        <>
          <button
            onClick={handleLogOut}
            className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <Link
            to="/registration"
            className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Registration
          </Link>
        </>
      )}
    </>
  );
  /* ======================
       Dark mood system end
       ======================*/
  return (
    <nav className="bg-gray-100 dark:bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between flex-1 ">
            <Link to="#" className="text-black dark:text-white font-bold">
              Logo
            </Link>
            {/* Hamburger button */}
            <button
              className="text-black dark:text-white ml-4 sm:hidden"
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
            <button
              className="text-black dark:text-white hover:bg-gray-300 hover:dark:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => dispatch(toggleTheme())}
              // onClick={handleSwitchTheme}
            >
              {theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
            {links}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        onMouseLeave={toggleMenu}
      >
        <div className="flex flex-col text-center px-2 pt-2 pb-3 space-y-1">
          {links}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
