import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div>
      <h1 className="items-center   text-2xl font-bold flex justify-center mt-10">
        Signup
      </h1>
      <form
        className="flex mt-6  flex-col gap-6  items-center justify-center"
       
        onSubmit={handleSubmit(onSubmit)}
      >
         <input
          className="border-gray-400 p-3 border  sm:w-[70vh] md:w-[80vh] lg:w-[75vh] rounded-lg"
          type="text"
          placeholder="First name"
          {...register("firstname", { required: true })}
        />
        {errors.firstname && (
          <p className="text-red-500 text-sm">First name is required</p>
        )}
        <input
          className="border-gray-400 p-3 border  sm:w-[70vh] md:w-[80vh] lg:w-[75vh] rounded-lg"
          type="text"
          placeholder="Last name"
          {...register("lastname", { required: true })}
        />
        {errors.lastname && (
          <p className="text-red-500 text-sm">Last name is required</p>
        )}
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
    </div>
  );
};

export default Signup;
