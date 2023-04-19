import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import { createUser, googleLogin } from "../../../features/auth/authSlice";
import useTitle from "../../../hooks/useTitle/useTitle";
import logInImg from "../../../assets/images/sign_up.png";
import {
  formInput,
  formLabel,
  googleButton,
  rightBorder,
  submitButtonClass,
} from "../../../components/classes/classes";

const Registration = () => {
  // Title of the page
  useTitle("Registration");

  // This state is used for password confirmation
  const [disabled, setDisabled] = useState(true);
  // Redirect user where from they comes to login
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //------ Take isError , Errors from useSelector of REDUX
  const { isError, error, isLoading, email } = useSelector(
    (state) => state?.auth
  );
  const dispatch = useDispatch();

  //------- React hook form user form and error
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  //------- Check for confirm password
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  //------- From data will come up here....
  const handleOnSubmit = (data) => {
    const { email, password } = data;
    // Create user with email and password in the firebase
    dispatch(createUser({ email, password }));
  };

  //-------- Google login
  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  useEffect(() => {
    if (!isLoading && email) {
      //Navigate user to the desired path (It basically works when user forcefully send to the login page. when user login/register the he will redirect to the page from where user if forced)
      navigate(from, { replace: true });
      reset();
    }
  }, [isLoading, email]);

  // If failed to register then error message
  useEffect(() => {
    if (isError) {
      toast.error(error, { id: "registration" });
    }
  }, [isError, error]);

  // ----------------------------///--------------------------------//
  return (
    <>
      <TitleComponent title={"Registration"}></TitleComponent>

      <div className="flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100">
        <div className="w-[80%] bg-secondary  p-8 border-[.08rem]  rounded-lg  grid  justify-center items-center grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Introduction start */}

          <div className="flex flex-col   ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Join Our Job Portal Today
            </h2>
            <div className="flex flex-col gap-4 text-center  text-sm md:text-lg  ">
              <p>
                Welcome!! We connect job seekers with their dream jobs and
                employers with the appropriate candidate. Our platform is home
                to thousands of companies offering a wide range of job
                opportunities in various industries.
              </p>
              <p>
                By creating an account, you can register both as employer and
                job seeker, access exclusive job listings, chat between job
                seeker and employer, job searches and blog reading, and show new
                positions at the top.
              </p>
              <p>
                Join our community of job seekers and employers today, and take
                the first step towards either landing your dream job! or finding
                the appropriate candidate!
              </p>
            </div>
          </div>

          {/* Introduction end */}
          <form
            className="w-full pt-8 xl:pt-0 xl:pl-8 border-t-[.5px] xl:border-t-0  xl:border-l-[.5px]  border-gray-600  "
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <div className="form-control w-full">
              <label htmlFor="fullName" className={`${formLabel}`}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                {...register("fullName", { required: true })}
                className={`${formInput}`}
                placeholder="Rayhan Al Kavey"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  This field is required !
                </span>
              )}
              {/* -----Email--- */}
              <label className={`${formLabel}`}>Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email address is required !",
                })}
                className={`${formInput}`}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email?.message}</p>
              )}
              {/* ----Password--- */}
              <label className={`${formLabel}`}>Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required !",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be 6 character, two uppercase and one special case letter.",
                  },
                  pattern: {
                    value: /(?=.*[A-Z].*[A-Z])(?=.*[!#@$%&? "])/,
                    message:
                      "Ensure password has two uppercase and one special case letter.",
                  },
                })}
                className={`${formInput}`}
                placeholder="*********"
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password?.message}
                </p>
              )}
              {/* ----Confirm Password---- */}

              <label className={`${formLabel}`}>Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Password confirmation is required !",
                })}
                className={`${formInput}`}
                placeholder="*********"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-600">
                  {errors.confirmPassword?.message}
                </p>
              )}

              {/* ----Submit button----  */}
            </div>
            <input
              className={`${submitButtonClass}`}
              // className="w-full px-4 py-2 mt-5 mb-1 text-white bg-blue-500 rounded cursor-pointer"
              type="submit"
              value="Register"
              disabled={disabled}
            />
            {/* {isError && (
            <label className="block mt-2 text-sm font-bold text-red-600">
              {error}
            </label>
          )} */}

            {/* ---Link to the login page--- */}
            <p className="text-center mt-2">
              Already have an account?{" "}
              <Link className="text-primary hover:text-warning" to={"/login"}>
                Login
              </Link>{" "}
            </p>
            {/* ----Divider--- */}
            <div className="flex items-center mt-5">
              <hr className="flex-1 border-t border-gray-500" />
              <div className="mx-3 text-gray-500">OR</div>
              <hr className="flex-1 border-t border-gray-500" />
            </div>
            {/* ---Google login button--- */}
            <button
              onClick={handleGoogleLogin}
              className={`${googleButton}`}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 mr-2"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
              </svg>
              <span>Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
