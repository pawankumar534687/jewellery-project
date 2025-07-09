import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const Profile = () => {
  const [textData, settextData] = useState(true);
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const id = localStorage.getItem("id");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:8000/api/editprofile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = response.data;

      localStorage.setItem("names", `${result.firstname} ${result.lastname}`);
      localStorage.setItem("email", result.email);

      reset({
        firstname: result.firstname,
        lastname: result.lastname,
        email: result.email,
        phone: result.phone,
        address: result.address,
      });

      setProfileData({
        firstname: result.firstname,
        lastname: result.lastname,
        email: result.email,
        phone: result.phone,
        address: result.address,
      });

      settextData(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://localhost:8000/api/saveprofile/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resulte = response.data;

      setProfileData({
        email: resulte.user.email,
        firstname: resulte.user.firstname,
        lastname: resulte.user.lastname,
        phone: resulte.user.phone,
        address: resulte.user.address,
      });

      toast.success("save changes");
      settextData(true);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      {textData ? (
        <div>
          <div className="w-full p-2  border-b border-gray-300">
            <h1 className="text-3xl font-bold text-left">My Profile</h1>
            <p className="text-sm text-gray-500">
              Manage your personal information
            </p>
          </div>

          <div className="md:grid pt-16 grid-cols-2">
            <div className="m-6">
              <p className="text-sm">Full Name</p>
              <p className="text-md font-semibold">{profileData.firstname}</p>
            </div>
            <div className="m-6">
              <p className="text-sm">Last Name</p>
              <p className="text-md font-semibold">{profileData.lastname}</p>
            </div>
            <div className="m-6">
              <p className="text-sm">Email</p>
              <p className="text-md font-semibold">{profileData.email}</p>
            </div>
            {profileData.phone && profileData.address && (
              <>
                <div className="m-6">
                  <p className="text-sm">Phone</p>
                  <p className="text-md font-semibold">{profileData.phone}</p>
                </div>
                <div className="m-6">
                  <p className="text-sm">Address</p>
                  <p className="text-md font-semibold">{profileData.address}</p>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-center mt-6 items-center">
            <button
              onClick={() => settextData(false)}
              className="bg-black text-white text-md px-8 py-2 rounded-lg"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="pt-6 px-4 lg:px-20">
          <h1 className="text-3xl font-bold mb-6">Edit Your Profile</h1>

          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <label className="text-sm mb-1">First Name</label>
              <input
                className="border-gray-400 p-3 border rounded-lg"
                type="text"
                placeholder="First name"
                {...register("firstname", {
                  required: "First name is required",
                })}
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Last Name</label>
              <input
                className="border-gray-400 p-3 border rounded-lg"
                type="text"
                placeholder="Last name"
                {...register("lastname", {
                  required: "Last name is required",
                })}
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastname.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Email</label>
              <input
                className="border-gray-400 p-3 border rounded-lg"
                type="text"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Phone</label>
              <input
                className="border-gray-400 p-3 border rounded-lg"
                type="text"
                placeholder="Phone"
                maxLength={10}
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be exactly 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="flex flex-col lg:col-span-2">
              <label className="text-sm mb-1">Address</label>
              <textarea
                className="border-gray-400 p-3 border rounded-lg"
                placeholder="Address"
                {...register("address", {
                  required: "Address is required",
                })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="lg:col-span-2">
              <button
                type="submit"
                className="bg-black text-white text-md p-3 rounded-lg w-full lg:w-auto"
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
