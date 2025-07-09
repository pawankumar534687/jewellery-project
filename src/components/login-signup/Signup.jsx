import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        data
      );
      const result = response.data;

      localStorage.setItem("token", result.token);
      localStorage.setItem("id", result.user.id);

      toast.success(response.data.message, { autoClose: 3000 });
      reset();
      navigate("/");
      window.location.reload();
    } catch (error) {
      const msg = error.response?.data?.message || "Signup failed!";
      toast.error(msg);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="mt-24 px-4">
      <h1 className="text-2xl font-bold flex justify-center mt-10">Signup</h1>

      <form
        className="flex mt-6 flex-col gap-6 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
          type="text"
          placeholder="First name"
          {...register("firstname", { required: true })}
        />
        {errors.firstname && (
          <p className="text-red-500 text-sm">First name is required</p>
        )}

        <input
          className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
          type="text"
          placeholder="Last name"
          {...register("lastname", { required: true })}
        />
        {errors.lastname && (
          <p className="text-red-500 text-sm">Last name is required</p>
        )}

        <input
          className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}

        <input
          className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="bg-black text-white text-md px-8 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
