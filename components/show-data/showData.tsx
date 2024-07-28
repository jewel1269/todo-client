"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const showData = () => {
  const [user, setUser] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:5000/allData/${email}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [email]);
  console.log(user);

  return (
    <div className="min-h-screen lg:p-16">
      <div className="grid grid-cols-6 gap-2">
        {user.map((item) => (
          <div className="w-68 border   border-gray-500 p-4 md:p-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              title: {item?.username}
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              status: {item?.status}
            </p>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="xs font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                Start Date: {item?.StartDate}
              </h1>
              <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform text-black rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                End Date: {item?.EndDate}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default showData;
