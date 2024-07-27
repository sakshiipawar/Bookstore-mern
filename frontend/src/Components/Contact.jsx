import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const contactInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    console.log("Contact Info:", contactInfo);
    toast.success("Message sent successfully!");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Button */}
          <div className="flex justify-around mt-6">
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
