import React, { useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const Profile = () => {
  const [textData, settextData] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const id = localStorage.getItem("id");

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/editprofile/${id}`
      );
      reset(response.data);
      settextData(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/saveprofile/${id}`,
        data
      );
      const resulte = response.data;
      localStorage.setItem("email", resulte.user.email);
      localStorage.setItem("phone", resulte.user.phone);
      localStorage.setItem("address", resulte.user.address);
      localStorage.setItem("firstname", resulte.user.firstname);
      localStorage.setItem("lastname", resulte.user.lastname);

      toast.success("save changes");
      settextData(true);
    } catch (error) {
      toast.error(error);
    }
  };

  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const address = localStorage.getItem("address");

  return (
    <>
      {textData ? (
        <div>
          <div className="w-full px-6">
            <h1 className="text-4xl font-bold text-left">My Profile</h1>
          </div>

          <div className="md:grid pt-16 grid-cols-2">
            <div className="m-6">
              <p className="text-sm">Full Name</p>
              <p className="text-md font-semibold">{firstname}</p>
            </div>
            <div className="m-6">
              <p className="text-sm">Last Name</p>
              <p className="text-md font-semibold">{lastname}</p>
            </div>
            <div className="m-6">
              <p className="text-sm">Email</p>
              <p className="text-md font-semibold">{email}</p>
            </div>
            {phone && address && (
              <>
                <div className="m-6">
                  <p className="text-sm">Phone</p>
                  <p className="text-md font-semibold">{phone}</p>
                </div>
                <div className="m-6">
                  <p className="text-sm">Address</p>
                  <p className="text-md font-semibold">{address}</p>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-center mt-6 items-center">
            <button
              onClick={fetchUser}
              className="bg-black text-white text-md px-8 py-2 rounded-lg"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="pt-16 flex justify-between px-20">
          <form
            className=" mt-6 flex-col lg:grid lg:grid-cols-2   gap-6 items-center justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-sm">
              First Name
              <input
                className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
                type="text"
                placeholder="First name"
                {...register("firstname", {
                  required: "First name is required",
                })}
              />
            </label>
            {errors.firstname && (
              <p className="text-red-500 text-sm">First name is required</p>
            )}
            <label className="text-sm">
              Last Name
              <input
                className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
                type="text"
                placeholder="Last name"
                {...register("lastname", { required: "Last name is required" })}
              />
            </label>
            {errors.lastname && (
              <p className="text-red-500 text-sm">Last name is required</p>
            )}
            <label className="text-sm">
              Email
              <input
                className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
                type="text"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
            <label className="text-sm">
              Phone
              <input
                className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
                type="text"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone Number is required",
                  minLength: {
                    value: 10,
                    message: "Phone Number must be at least 10 characters",
                  },
                })}
              />
            </label>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
            <label className="text-sm col-span-2">Address</label>
            <textarea
              className="border-gray-400 col-span-2 p-3 border w-full rounded-lg"
              placeholder="Address"
              {...register("address", {
                required: "Address is required",
              })}
            />

            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
            <div>
            <button
              type="submit"
              className="bg-black text-white text-md py-2  rounded-lg"
            >
              Save Changes
            </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile;
