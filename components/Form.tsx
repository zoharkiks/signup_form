import React, { useState } from "react";
import { images } from "../constants";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="px-6 py-10  ">
      <div className="bg-white rounded-[26px] px-6 pt-[26px] pb-3 relative z-10 ">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="flex justify-between">
            <h1 className="font-hum text-2xl ">Create Account</h1>
            <select className="font-poppins text-xs">
              <option value="">English (UK)</option>
            </select>
          </div>
          {/* Form Inputs */}
          <div className="flex flex-col mt-4 space-y-4">
            <input className="input-text" type="text" placeholder="Full Name" />
            <input className="input-text" type="text" placeholder="Email" />
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
          <div className="flex justify-between space-x-2 mt-6 ">
            <input className="" type="checkbox" name="" id="" />
            <span className="text-gray-text text-xs font-poppins font-medium ">
              I have read and agreed to the Terms of Service and Privacy Policy
            </span>
          </div>
          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-blue font-poppins font-extrabold text-white text-xs w-[149px] h-[35px] rounded-[5px] mt-5">
              {" "}
              Create Account
            </button>
          </div>
          {/* Signup buttons */}
          <div className="flex flex-col justify-center items-center space-y-2 mt-4" >
            <div className="flex justify-center items-center space-x-3">
              <Icon icon="bi:google" />
              <button className="font-poppins text-sm font-light">Signup with Google</button>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <Icon icon="bi:facebook" />
              <button className="font-poppins text-sm font-light" >Signup with Facebook</button>
            </div>
          </div>
          {/* Existing Account */}
          <div className="flex justify-center font-poppins font-medium text-[14px] text-gray-text mt-4 ">
          <p>
            Already have an account? <button className="text-blue">Log In</button>
          </p>

          </div>
        </form>
      </div>
      {/* Branding */}
      <div className=" space-y-3 relative bottom-[1.25rem] font-hum  text-white text-3xl text-center bg-green rounded-[26px]  flex flex-col justify-center items-center pt-12 pb-9">
        <img className="h-11 w-[63px]" src={images.logo.src} alt="" />
        <h1>Defy the Past Step into the Future</h1>
      </div>
    </div>
  );
};

export default Form;
