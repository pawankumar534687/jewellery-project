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
  const token = localStorage.getItem("token")
  try {
    const response = await axios.get(`http://localhost:8000/api/editprofile/${id}`, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    const result = response.data;

    reset({
      firstname: result.firstname,
      lastname: result.lastname,
      email: result.email,
      phone: result.phone,
      address: result.address
    });

    setProfileData({
      firstname: result.firstname,
      lastname: result.lastname,
      email: result.email,
      phone: result.phone,
      address: result.address
    });

    settextData(true);
  } catch (error) {
    console.log(error);
  }
};


  const onSubmit = async (data) => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.put(
        `http://localhost:8000/api/saveprofile/${id}`,
        data, {
          headers:{
            Authorization: `Bearer ${token}`
          }
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
          <div className="w-full px-6">
            <h1 className="text-4xl font-bold text-left">My Profile</h1>
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
                className="bg-black text-white text-md p-2  rounded-lg"
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
