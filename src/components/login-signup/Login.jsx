import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
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
        "http://localhost:8000/api/login",
        data
      );
      const result = response.data;

      localStorage.setItem("token", result.token);
      localStorage.setItem("id", result.user.id);

      reset();

      navigate("/");

      toast.success("Login successful!");
    } catch (error) {
      const msg = error.response?.data?.message || "Login failed!";
      toast.error(msg);
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mt-24 px-4">
      <h1 className="text-2xl font-bold flex justify-center mt-10">Login</h1>
      <form
        className="flex mt-6 flex-col gap-6 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
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

        {/* Wrapper div for link */}
        <div className="w-full max-w-md flex justify-start">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot Password
          </Link>
        </div>

        <button
          type="submit"
          className="bg-black text-white text-md px-8 cursor-pointer py-2 rounded-lg "
        >
          Submit
        </button>
      </form>

      <Link to="/signup" className="mt-4 text-blue-600 hover:underline text-sm">
        Create Account
      </Link>
    </div>
  );
};

export default Login;
