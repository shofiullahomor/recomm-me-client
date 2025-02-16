import React from "react";
import logo from "../assets/logo/logo.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
const RecentQueries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/queries")
      .then((res) => setQueries(res.data.slice(0, 6)))
      .catch((err) => console.log(err));
  }, []);
  // const limitedQueries = queries.slice(0, 6);
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Recent Queries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {queries.map((query) => (
          <div key={query._id} className="card bg-california-300 ">
            <figure className="px-10 pt-10">
              <img src={query.productImage} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Is there a better product with natural ingredient
              </h2>
              <p>Name: EcoFress shampoo</p>
              <p>Posted on: 07 january 2025</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentQueries;
