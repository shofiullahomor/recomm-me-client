import React from "react";
import blog3 from "../assets/blog/blog3.jpg";
import blog4 from "../assets/blog/blog4.jpg";
import blog5 from "../assets/blog/blog5.jpg";

const News = () => {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center mt-10 ">
        <h2 className="text-3xl font-bold  sm:text-4xl">Our Latest News</h2>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-10 py-10 mx-5 lg:mx-10 pb-10 ">
        <article className="overflow-hidden rounded-lg border border-gray-100  shadow-sm">
          <img alt="" src={blog3} className="h-56 w-full object-cover" />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium ">
                How to Outsmart Your Peers on Sport And Talking About
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed ">
              Discover the best cricket bats offering unmatched power,
              precision, and durability for players of all levels. Learn what
              makes these bats stand out and how to choose the right one for
              your style.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg border border-gray-100  shadow-sm">
          <img alt="" src={blog4} className="h-56 w-full object-cover" />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium ">
                Essential Gear Every Football Player Should Invest In
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed ">
              Upgrade your football kit with high-quality essentials, from
              durable cleats to protective gear. Enhance your game with
              equipment designed to boost performance and ensure safety on the
              field.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg border border-gray-100  shadow-sm">
          <img alt="" src={blog5} className="h-56 w-full object-cover" />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium ">
                Best Yoga Mats for Comfort and Grip in 2024
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed ">
              Explore yoga mats that provide excellent cushioning, stability,
              and non-slip surfaces. Perfect for all levels, these mats combine
              comfort with eco-friendly materials for a mindful practice.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default News;
