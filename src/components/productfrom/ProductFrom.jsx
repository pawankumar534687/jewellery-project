import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
toast;
const ProductFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Submit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);

    for (let i = 0; i < data.images.length; i++) {
      formData.append("image", data.images[i]);
    }
    try {
      await axios.post("http://localhost:8000/api/createproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      reset();
      toast.success("Product Created Successful!");
    } catch (error) {

    }
  };

  return (
    <div className="pt-16 flex justify-center px-4 items-center">
      <form onSubmit={handleSubmit(Submit)} className=" w-full max-w-md">
        <div className="flex justify-center items-center p-6">
          <h1 className="text-2xl font-semibold">Create Prodcuts</h1>
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Product Title</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-lg"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">Title is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Description</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-lg"
            type="text"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">Description is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Product Price</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-lg"
            type="text"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">Price is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Product Image</label>

          <input
            type="file"
            accept="image/*"
            multiple
            {...register("images", { required: true })}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />

          {errors.images && (
            <p className="text-red-500 text-sm mt-1">Image is required</p>
          )}
        </div>

        <div className="flex justify-center items-center pt-4">
          <button
            type="submit"
            className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium py-1.5 px-4 rounded transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFrom;
