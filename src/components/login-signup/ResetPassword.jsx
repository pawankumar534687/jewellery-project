import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/reset-password/${token}`,
        { password: data.password }
      );
      toast.success(response.data.message);
      reset();
      Navigate("/")
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="mt-24 px-4 flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold">Reset Password</h1>

        <input
          className="border-gray-400 p-3 border rounded-lg"
          type="password"
          placeholder="Enter new password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            }
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="bg-black text-white text-sm px-4 py-2 rounded-md mx-auto"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
