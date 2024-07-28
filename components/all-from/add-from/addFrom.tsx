"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = ({ register, handleSubmit, errors, ToastContainer }) => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Add Todo
      </h2>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Title
            </label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "Title is required" })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Status
            </label>
            <input
              id="status"
              type="text"
              {...register("status", { required: "Status is required" })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            {errors.emailAddress && (
              <p className="text-red-500">{errors.emailAddress.message}</p>
            )}
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Start Date
            </label>
            <input
              id="StartDate"
              type="date"
              {...register("StartDate", { required: "Start Date is required" })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            {errors.StartDate && (
              <p className="text-red-500">{errors.StartDate.message}</p>
            )}
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="passwordConfirmation"
            ></label>
            <input
              id="EndDate"
              type="date"
              {...register("EndDate", {
                required: "End Date is required",
              })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            {errors.EndDate && (
              <p className="text-red-500">{errors.EndDate.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddForm;
