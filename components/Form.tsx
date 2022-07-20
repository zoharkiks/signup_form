import React, { useState } from "react";
import { images } from "../constants";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");


// Show/Hide Password

  const [passwordShown, setPasswordShown] = useState(false)
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true)
  }
  const toggleConfirmPasswordVisibility = () => {
  setConfirmPasswordShown(confirmPasswordShown ? false : true)

  }

  return (
    <div className="justify-center px-6 py-10 sm:flex    ">
      <div className="relative z-10 rounded-[26px] bg-white px-6 pt-[26px] pb-3 lg:pl-[90px]   ">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="flex justify-end">
            <select
              {...register("language")}
              className="font-poppins text-xs outline-none sm:text-sm "
            >
              <option value="">English (UK)</option>
              <option value="chinese">Chinese</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
          <div className="flex justify-between">
            <h1 className="font-hum text-2xl sm:text-3xl lg:mt-[52px] lg:text-[34px] ">
              Create Account
            </h1>
          </div>
          {/* Form Inputs */}
          <div className="mt-4 flex flex-col space-y-4 lg:mt-[31px]  ">
            <input
              {...register("fullName")}
              className="input-text"
              type="text"
              placeholder="Full Name"
            />
            <input
              {...register("email")}
              className="input-text"
              type="email"
              placeholder="Email"
            />
            <div className="flex ">
              <input
                className="input-text"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
              />
              <Icon onClick={togglePasswordVisibility} className="text-gray-text" icon="zondicons:view-show" />
            </div>
            <div className="flex">
              <input
                className="input-text"
                type={confirmPasswordShown ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <Icon onClick={toggleConfirmPasswordVisibility} className="text-gray-text" icon="zondicons:view-show" />
            </div>
          </div>

          {/* Agreement */}
          <div className="mt-6  flex items-center space-x-4  ">
            <input className="" type="checkbox" id="" />
            <span className="font-poppins text-xs font-medium text-gray-text lg:w-[20rem]  ">
              I have read and agreed to the Terms of Service and Privacy Policy
            </span>
          </div>
          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-5 h-[35px] w-[149px] rounded-[5px] bg-blue font-poppins text-xs font-extrabold text-white lg:w-full"
            >
              Create Account
            </button>
          </div>
          <div className="mt-3 flex items-center justify-center">Or</div>
          {/* Signup buttons */}
          <div className="mt-4 flex flex-col items-center justify-center  space-y-2 lg:mt-4 lg:flex-row lg:space-y-0 lg:space-x-10 lg:px-[100px]  ">
            <div className="flex items-center justify-center space-x-3 ">
              <Icon icon="bi:google" />
              <button className="font-poppins text-sm font-light ">
                Signup with Google
              </button>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Icon icon="bi:facebook" />
              <button className="font-poppins text-sm font-light lg:w-max">
                Signup with Facebook
              </button>
            </div>
          </div>
        </form>
        {/* Existing Account */}
        <div className="mt-4 flex justify-center font-poppins text-[14px] font-medium text-gray-text lg:mt-8 ">
          <p>
            Already have an account?
            <span className="text-blue cursor-pointer"> Log In</span>
          </p>
        </div>
      </div>
      {/* Branding */}
      <div className="relative bottom-[1.25rem] hidden flex-col items-center justify-center  space-y-3 rounded-[26px] bg-green  pt-12 pb-9 text-center font-hum text-3xl  text-white sm:bottom-0 sm:order-first sm:w-1/4 sm:items-start sm:justify-start sm:p-6  md:left-6 md:flex">
        <img className="h-11 w-[63px] sm:mb-12" src={images.logo.src} alt="" />
        <h1>Defy the Past Step into the Future</h1>
        <img
          className="relative bottom-[2rem] right-[3rem]  z-[12] hidden h-[330px] w-[520px]	 max-w-none object-contain xl:flex"
          src={images.vr.src}
          alt=""
        />
      </div>
    </div>
  );
};

export default Form;
