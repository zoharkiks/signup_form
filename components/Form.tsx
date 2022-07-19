import React, { useState } from "react";
import { images } from "../constants";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="px-6 py-10 sm:flex justify-center lg:px-[143px] lg:py-[80px]">
      <div className="bg-white rounded-[26px] px-6 pt-[26px] pb-3 relative z-10 lg:pl-[90px]   ">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="flex justify-end">
            <select
              {...register("language")}
              className="font-poppins text-xs sm:text-sm "
            >
              <option value="">English (UK)</option>
              <option value="chinese">Chinese</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
          <div className="flex justify-between">
            <h1 className="font-hum text-2xl sm:text-3xl lg:text-[34px] lg:mt-[52px] ">
              Create Account
            </h1>
          </div>
          {/* Form Inputs */}
          <div className="flex flex-col mt-4 lg:mt-[31px] space-y-4  ">
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
                type="password"
                placeholder="Password"
              />
              <Icon className="text-gray-text" icon="zondicons:view-show" />
            </div>
            <div className="flex">
              <input
                className="input-text"
                type="password"
                placeholder="Confirm Password"
              />
              <Icon className="text-gray-text" icon="zondicons:view-show" />
            </div>
          </div>

          {/* Agreement */}
          <div className="flex  space-x-4 mt-6 items-center  ">
            <input className="" type="checkbox" id="" />
            <span className="text-gray-text text-xs font-poppins font-medium lg:w-[20rem]  ">
              I have read and agreed to the Terms of Service and Privacy Policy
            </span>
          </div>
          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue font-poppins font-extrabold text-white text-xs w-[149px] h-[35px] rounded-[5px] mt-5 lg:w-full"
            >
              Create Account
            </button>
          </div>
          <div className="flex justify-center items-center mt-3">Or</div>
          {/* Signup buttons */}
          <div className="flex flex-col justify-center items-center space-y-2  mt-4 lg:flex-row lg:space-y-0 lg:px-[100px] lg:space-x-10 lg:mt-4  ">
            <div className="flex justify-center items-center space-x-3 ">
              <Icon icon="bi:google" />
              <button className="font-poppins text-sm font-light ">
                Signup with Google
              </button>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <Icon icon="bi:facebook" />
              <button className="font-poppins text-sm font-light lg:w-max">
                Signup with Facebook
              </button>
            </div>
          </div>
        </form>
        {/* Existing Account */}
        <div className="flex justify-center font-poppins font-medium text-[14px] text-gray-text mt-4 lg:mt-8 ">
          <p>
            Already have an account?
            <span className="text-blue"> Log In</span>
          </p>
        </div>
      </div>
      {/* Branding */}
      <div className="hidden sm:w-1/4 md:left-6 space-y-3 sm:order-first sm:bottom-0  relative bottom-[1.25rem] font-hum  text-white text-3xl text-center bg-green rounded-[26px]  md:flex flex-col justify-center items-center sm:items-start sm:justify-start sm:p-6  pt-12 pb-9">
        <img className="sm:mb-12 h-11 w-[63px]" src={images.logo.src} alt="" />
        <h1>Defy the Past Step into the Future</h1>
        <img className="hidden xl:block  z-[12] bottom-[2rem] w-[520px] max-w-none	 h-[320px] relative right-[7rem]" src={images.vr.src} alt="" />
        
      </div>
    </div>
  );
};

export default Form;
