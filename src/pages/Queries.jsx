import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/logo/logo.jpg";
import SingleQuery from "./SingleQuery";
import axios from "axios";
const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [column, setColumn] = useState(3);

  useEffect(() => {
    axios
      .get("http://localhost:5000/queries")
      .then((res) => setQueries(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    let query = e.target.search.value;
    console.log(query);
    axios
      .get(`http://localhost:5000/search?q=${query}`)
      .then((res) => setQueries(res.data))
      .catch((err) => console.log(err));
  };

  if (queries.length === 0) {
    return (
      <h2 className="font-bold text-red-600 text-center py-5">
        No queries available
      </h2>
    );
  }
  return (
    <div className="lg:max-w-6xl mx-5 lg:mx-auto mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center text-blue-600 rounded-2xl">
        <h2 className="text-center font-bold text-3xl my-10">Queries</h2>
        <div className="pb-2 ">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              className="border border-blue-400 rounded-lg py-2 "
            />
            <input
              type="submit"
              value="Search"
              className="bg-blue-500 text-white font-bold btn py-2 px-5 rounded-lg ml-2"
            />
          </form>
        </div>
        <div className="hidden md:flex gap-3 items-center justify-center">
          <h4 className="font-bold">Change layout</h4>
          <form>
            <select
              value={column}
              onChange={(e) => setColumn(e.target.value)}
              name="col"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-${column} lg:grid-cols-${column} gap-4`}
      >
        {queries.map((query) => (
          <SingleQuery query={query} key={query._id} />
        ))}
        {/* card start */}
        {/* <Link to={`/queries/${_id}`}> */}
        {/* <div className="card bg-california-300 ">
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
        </div> */}

        {/* </Link> */}
        {/* card end */}
      </div>
    </div>
  );
};

export default Queries;
