import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-5">
      <div className="max-w-lg py-10 space-y-4 w-full hover:shadow-xl duration-200 border border-gray-50 text-gray-600 shadow-[rgba(17,_17,_26,_0.1)_0px_4px_12px] rounded-md p-5">
        <div className="text-center">
          <img
            src={logo}
            width={50}
            className="mx-auto"
          />
          <div className=" mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
           
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
          <label className="font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-500 hover:text-indigo-600"
              >
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
              </button>
            </div>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign in
          </button>
          {/* <div className="text-center">
            <Link to=""  className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div> */}
        </form>
      <div className="py-2 text-center">
      <p className="">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
      </div>
      </div>

    </div>
  );
};

export default Login;
