import React, { useState } from "react";
import { images } from "../constants";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="px-6 py-10  ">
      <div className="bg-white rounded-[26px] pl-6 ">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="flex">
            <h1>Create Account</h1>
            <select>
              <option value="">English UK</option>
            </select>
          </div>
          <div className="flex flex-col">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <div className="flex">
              <input type="text" placeholder="Password" />
              <Icon icon="zondicons:view-show" />
            </div>
            <div className="flex">
              <input type="text" placeholder="Confirm Password" />
              <Icon icon="zondicons:view-show" />
            </div>
          </div>

          {/* Agreement */}
          <div className="flex ">
            <input type="checkbox" name="" id="" />
            <span>
              I have read and agreed to the Terms of Service and Privacy Policy
            </span>
            z
          </div>
          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-blue-500"> Create Account</button>
          </div>
          {/* Signup buttons */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex">
              <Icon icon="bi:google" />
              <span>Signup with Google</span>
            </div>
            <div className="flex">
              <Icon icon="bi:facebook" />
              <span>Signup with Facebook</span>
            </div>
          </div>
          {/* Existing Account */}
          <p>
            Already have an account? <span>Log In</span>{" "}
          </p>
        </form>
      </div>
      <div className="bg-green-500 rounded-[26px] pl-6 flex flex-col justify-center items-center">
        <img className="h-11 w-[63px]" src={images.logo.src} alt="" />
        <h1>Defy the Past Step into the Future</h1>
      </div>
    </div>
  );
};

export default Form;
