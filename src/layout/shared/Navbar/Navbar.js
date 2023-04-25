import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../../features/auth/authSlice";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { setTheme, toggleTheme } from "../../../features/theme/themeSlice";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
// import { FaUser } from "react-icons/fa";

import {
  activeButtonClass,
  commonLinkClass,
} from "../../../components/classes/classes";
const Navbar = () => {
  /* ====================================
     Get information from the REDUX store
     ====================================*/
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /* ====================================
     Open and close the hamburger menu
     ====================================*/
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  /* ============
     Log out user
     ============*/
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

  // Set the theme according the handleThemeSwitch functions theme preference
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const darkModeButton = (
    <button
      className=" md:hidden text-accent dark:text-secondary hover:bg-success hover:dark:bg-gray-600 px-3 py-2 rounded-full text-sm font-medium border-[.5px] border-accent dark:border-info "
      onClick={() => dispatch(toggleTheme())}
      // onClick={handleSwitchTheme}
    >
      {theme === "dark" ? (
        <MdOutlineLightMode style={{ fontSize: "1.5em" }} />
      ) : (
        <MdDarkMode style={{ fontSize: "1.5em" }} />
      )}
    </button>
  );
  /* ====================
     Dark mood system end
     ====================*/
  /*================
    COMMON CSS CLASS
    ================*/
  const bottomBorder = "border-b-[.5px] border-accent dark:border-gray-600";
  /*============
    COMMON LINK 
    ===========*/
  const links = (
    <>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? `${activeButtonClass}` : `${commonLinkClass}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/poster-seeker"
        className={({ isActive }) =>
          isActive ? `${activeButtonClass}` : `${commonLinkClass}`
        }
      >
        Job Poster/Seeker
      </NavLink>
      <NavLink
        to="/all-job"
        className={({ isActive }) =>
          isActive ? `${activeButtonClass}` : `${commonLinkClass}`
        }
      >
        Find Job
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? `${activeButtonClass} ` : `${commonLinkClass}`
        }
      >
        Blogs
      </NavLink>
      {/* <Link to="/contact" className={`${commonLinkClass}`}>
        Contact
      </Link> */}

      {email ? (
        <>
          <Link onClick={handleLogOut} className={`${commonLinkClass} `}>
            Logout
          </Link>
          {/* <Link
            className={`border-[.5px] border-gray-600 overflow-hidden rounded-full duration-300 justify-center items-center flex bg-secondary hover:scale-105 text-sm font-semibold`}
          >
            {user?.photoURL && user?.displayName ? (
              <img
                className="block w-14 h-14 "
                src={user?.photoURL}
                alt=""
                title={user?.displayName}
              />
            ) : (
              <div title={user?.displayName}>
                <FaUser size="1.5rem" />
              </div>
            )}
          </Link> */}
        </>
      ) : (
        <>
          {/* /// /// /// */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${activeButtonClass}` : `${commonLinkClass}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              isActive ? `${activeButtonClass}` : `${commonLinkClass}`
            }
          >
            Registration
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-secondary dark:bg-accent  top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-16 ${bottomBorder}`}
        >
          <div className="flex items-center  justify-between flex-1 ">
            <Link to="/home" className="text-black dark:text-white font-bold">
              Job Management
            </Link>
            {/* ===== Hamburger button ===== */}
            <div className="flex items-center justify-center">
              <div>{darkModeButton}</div>
              <button
                className="text-accent dark:text-secondary ml-4 md:hidden"
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
          </div>
          {/* ==== Menu Link for large screen ==== */}
          <div className="hidden md:flex md:items-center ">
            <button
              className="animate-pulse inline-block duration-500 text-accent dark:text-secondary hover:bg-success hover:dark:bg-gray-600 px-3 py-2 rounded-full text-sm font-medium border-[.5px] border-accent dark:border-info  mr-1"
              onClick={() => dispatch(toggleTheme())}
              // onClick={handleSwitchTheme}
            >
              {theme === "dark" ? (
                <MdOutlineLightMode style={{ fontSize: "1.5em" }} />
              ) : (
                <MdDarkMode style={{ fontSize: "1.5em" }} />
              )}
            </button>

            {links}
          </div>
        </div>
      </div>

      {/* ==== Mobile menu, show/hide based on menu state ==== */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} `}
        onMouseLeave={toggleMenu}
      >
        <div className={`flex flex-col text-center px-2 pt-2 pb-3  space-y-1 `}>
          {links}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
