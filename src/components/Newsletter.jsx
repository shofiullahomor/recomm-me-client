import React from "react";
import Swal from "sweetalert2";

function Newsletter() {
  function handleNewsletter(e) {
    e.preventDefault();
    console.log("Hi");
    Swal.fire({
      title: "Success",
      text: " You have subscribed successfully to Recommendme weekly newsletter",
      icon: "success",
      confirmButtonText: "Cool",
    });
  }
  return (
    <section className="bg-light-bg-3 my-10 rounded-xl">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
            Stay Updated with the Best Recommendations!
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Subscribe to our newsletter and never miss out on top product
            recommendations, expert tips, and community insights. Join now and
            make smarter choices!
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form
            onSubmit={handleNewsletter}
            action="#"
            className="sm:flex sm:gap-4"
          >
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="group mt-4 bg-blue-600 flex w-full items-center justify-center gap-2 rounded-md bg-california-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium text-white "> Sign Up </span>

              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
