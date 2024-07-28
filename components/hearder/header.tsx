"use client";

import axios from "axios";
import { error } from "console";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState(null);
  const email = localStorage.getItem("email");
  const router = useRouter();

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:5000/user/${email}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [email]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    alert("You have been logged out.");
    router.push("/login");
  };

  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-3xl font-semibold">
                Simple Todo
              </Link>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="px-3 btn py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Login
                  </Link>
                )}
                <Link
                  href="/register"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Register
                </Link>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  {user ? (
                    <p className="text-2xl font-bold">{user?.name}</p>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
