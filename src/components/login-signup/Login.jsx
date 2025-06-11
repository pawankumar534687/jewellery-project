import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div  className="flex mt-6  flex-col gap-6  items-center justify-center">
      <h1 className="items-center   text-2xl font-bold flex justify-center mt-10">
        Login
      </h1>
      <form
        className="flex mt-6  flex-col gap-6  items-center justify-center"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-gray-400 p-3 border  sm:w-[70vh] md:w-[80vh] lg:w-[75vh] rounded-lg"
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}
        <input
          className="border-gray-400 p-3 border  sm:w-[70vh] md:w-[80vh] lg:w-[75vh] rounded-lg"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">Password is required</p>
        )}
        <button
          type="submit"
          className="bg-black mt- text-white text-md px-8 py-2 rounded-lg"
        >
          Signup
        </button>
      </form>
      <Link to="/signup" >Create Account</Link>



    </div>
  );
};

export default Login;
