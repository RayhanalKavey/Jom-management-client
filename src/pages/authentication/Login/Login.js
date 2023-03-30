import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { googleLogin, loginUser } from "../../../features/auth/authSlice";
import useTitle from "../../../hooks/useTitle/useTitle";
import TitleComponent from "../../../components/TitleComponent/TitleComponent";
import {
  formInput,
  formLabel,
  googleButton,
  submitButtonClass,
} from "../../../components/classes/classes";
const Login = () => {
  useTitle("Login");

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
    formState: { errors },
  } = useForm();

  //------- From data will come up here....
  const handleOnSubmit = (data) => {
    const { email, password } = data;
    dispatch(loginUser({ email, password }));
  };

  //-------- Google login
  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  // If loading false and email arrived then redirect user
  useEffect(() => {
    if (!isLoading && email) {
      //Navigate user to the desired path (It basically works when user forcefully send to the login page. when user login/register the he will redirect to the page from where user if forced)
      navigate(from, { replace: true });
      reset();
    }
  }, [isLoading, email, reset, from, navigate]);
  // Shoe error message with toast if failed to login
  useEffect(() => {
    if (isError) {
      toast.error(error, { id: "login" });
    }
  }, [isError, error]);

  return (
    <>
      <TitleComponent title={"Login"}></TitleComponent>
      <div className="flex items-center justify-center px-5 py-12 dark:bg-accent bg-base-100">
        <div className="w-96 bg-secondary  p-10  border-[.08rem]  rounded-lg  ">
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="form-control w-full max-w-xs">
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
              <label className="block mb-1 font-bold text-gray-500">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required !",
                })}
                className={`${formInput}`}
                placeholder="*********"
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password?.message}
                </p>
              )}
            </div>
            {/* ----Submit button----  */}
            <input
              className={`${submitButtonClass}`}
              type="submit"
              value="Login"
            />
            {/* {isError && (
            <label className="block mt-2 text-sm font-bold text-red-600">
              {error}
            </label>
          )} */}
          </form>
          {/* ---Link to the login page--- */}
          <p className="text-center mt-2">
            Not registered yet?{" "}
            <Link
              className="text-primary hover:text-warning"
              to={"/registration"}
            >
              Registration
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
        </div>
      </div>
    </>
  );
};

export default Login;
