import React from "react";

const Header = ({ titulo }) => {
  return (
    <>
      <header>
        <nav class="dark:bg-neutral-700 py-2 md:py-4">
          <div class="container px-4 mx-auto md:flex md:items-center">
            <div class="flex justify-between items-center">
              <a href="/" class="font-bold text-xl text-blue-400">
                TiendAutos
              </a>
              <button
                class="border border-solid  px-3 py-1 rounded opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>

            <div
              class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <a
                href="/"
                class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
              >
                Home
              </a>
              <a
                href="/"
                class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="/"
                class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="/"
                class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="/"
                class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </a>
              <a
                href="/"
                class="p-2 lg:px-4 md:mx-2 text-blue-400 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-blue-700 transition-colors duration-300"
              >
                Login
              </a>
              <a
                href="/"
                class="p-2 lg:px-4 md:mx-2 text-blue-400 text-center border border-solid border-blue-400 rounded hover:bg-blue-400 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Signup
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
