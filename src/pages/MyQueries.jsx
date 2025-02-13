import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo/logo.jpg";

const MyQueries = () => {
  return (
    <div>
      <div>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Add your queries &
                <span className="sm:block">
                  get amazing recommendations from our community
                </span>
              </h1>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/add-query"
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                >
                  Add Query
                </Link>

                <a
                  href="#my-queries"
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                >
                  see your queries
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="my-queries">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-california-300 ">
              <figure className="px-10 pt-10">
                <img src={logo} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Is there a better product with natural ingredient
                </h2>
                <p>Name: EcoFress shampoo</p>
                <p>Posted on: 07 january 2025</p>
              </div>
            </div>
            <div className="card bg-california-300 ">
              <figure className="px-10 pt-10">
                <img src={logo} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Is there a better product with natural ingredient
                </h2>
                <p>Name: EcoFress shampoo</p>
                <p>Posted on: 07 january 2025</p>
              </div>
            </div>
            <div className="card bg-california-300 ">
              <figure className="px-10 pt-10">
                <img src={logo} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Is there a better product with natural ingredient
                </h2>
                <p>Name: EcoFress shampoo</p>
                <p>Posted on: 07 january 2025</p>
              </div>
            </div>
            <div className="card bg-california-300 ">
              <figure className="px-10 pt-10">
                <img src={logo} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Is there a better product with natural ingredient
                </h2>
                <p>Name: EcoFress shampoo</p>
                <p>Posted on: 07 january 2025</p>
              </div>
            </div>
            <div className="card bg-california-300 ">
              <figure className="px-10 pt-10">
                <img src={logo} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Is there a better product with natural ingredient
                </h2>
                <p>Name: EcoFress shampoo</p>
                <p>Posted on: 07 january 2025</p>
              </div>
            </div>
            <div className="card bg-california-300 ">
              <figure className="px-10 pt-10">
                <img src={logo} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Is there a better product with natural ingredient
                </h2>
                <p>Name: EcoFress shampoo</p>
                <p>Posted on: 07 january 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* <MyQueryCards /> */}
      </div>
    </div>
  );
};

export default MyQueries;
