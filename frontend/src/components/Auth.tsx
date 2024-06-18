import { SignupInput } from "medium-zod2.0";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequests() {
    try {
      
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate('/blogs');
    } catch (e) {
      // Handle error - alert the user, etc.
      console.error("Error:", e);
    }
  }
  
  

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-center">
        <div className="pl-10 pr-10 text-center font-bold text-4xl">Create an account</div>
        <div className="text-center font-medium text-slate-400 text-medium mt-1">
          {type==="signin"?"Dont have an account ?":"Already have an account ?"}
          <Link className="underline ml-1" to={type==="signin"?'/signup':'/signin'}>
            {type==="signin"?"Sign up":"Sign in"}
          </Link>
        </div>
        <div className="mt-6">
          {type=="signup"?<LabelledInput
            label="Username"
            type="text"
            placeholder="Enter your username"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />:null}
          <LabelledInput
            label="Email"
            placeholder="abc@example.com"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                username: e.target.value,
              });
            }}
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button onClick={sendRequests}type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            {type==="signup"?"Sign up":"Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  

  return (
    <div className="mx-auto max-w-md relative">
      <label className="pl-1 font-semibold text-l block mb-2 text-sm  text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          onChange={onChange}
          type={type === "password" && !showPassword ? "password" : "text"}

          
          className="mt-2 mb-4 font-semibold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
          placeholder={placeholder}
          required
        />
        {type === "password" && (
          <button
            type="button" 
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center mr-3 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default Auth;
