import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import { toast } from "react-toastify";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token")
    try {
       await axios.post("http://localhost:8000/api/message", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
       })
       reset()
       toast.success("send to message")
    } catch (error) {
      console.log(error)
      
    }
  


  };

  return (
    <div className="pt-16 px-6 md:px-12 mb-12">
      <div className="flex justify-center flex-col pb-12 items-center border-b border-b-neutral-300">
        <p className="text-gray-600 text-sm">Contact With Us</p>
        <h1 className="text-5xl font-bold p-2 text-center">
          You can ask us questions
        </h1>
        <p className="text-gray-600 text-md text-center max-w-2xl">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start pt-12 gap-8">
      
        <div className="w-full md:w-[45%] space-y-4 flex flex-col max-md:justify-center max-md:items-center">
          <h1 className="font-bold text-2xl">Our Offices</h1>
          <p>We are here to serve you across multiple locations.</p>

          <div className="flex flex-col gap-8">
           
            <div className="flex flex-col">
              <h2 className="font-bold text-lg">United States Office</h2>
              <p className="text-gray-700">
                205 Middle Road, 2nd Floor, New York
              </p>
              <p className="text-gray-700">+02 1234 567 88</p>
              <p className="text-gray-700">info@example.com</p>
            </div>

          
            <div className="flex flex-col">
              <h2 className="font-bold text-lg">New Delhi Office</h2>
              <p className="text-gray-700">
                C-18, 2nd Floor, Vasant Vihar, New Delhi - 110057
              </p>
              <p className="text-gray-700">+02 1234 567 88</p>
              <p className="text-gray-700">contact@example.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] mt-8 md:mt-0">
          <p className="text-center mb-6 font-bold text-xl">
            Fill out the form and our team will contact you soon.
          </p>

          <form
            className="flex flex-col gap-6 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="md:flex  gap-8 ">
              <input
                className="border-gray-400 max-md:mb-6 p-3 border w-full max-w-md rounded-lg"
                type="text"
                placeholder="Your name"
                {...register("yourname", { required: "Your name is required" })}
              />
              {errors.yourname && (
                <p className="text-red-500 text-sm">Your name is required</p>
              )}

              <input
                className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
                type="text"
                placeholder="Your Email"
                {...register("email", { required: "Your email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Your Email is required</p>
              )}
            </div>

            <input
              className="border-gray-400 p-3 border w-full max-w-md rounded-lg"
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">Subject is required</p>
            )}

            <textarea
              className="border-gray-400 p-4 border w-full max-w-md rounded-lg"
              placeholder="Your message"
              {...register("message", {
                required: " Message is required",
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}

            <button
              type="submit"
              className="bg-black text-white text-md px-8 py-2 rounded-lg"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
