import React from "react";
import logo from "../assets/logo/logo.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleQuer from "./SingleQuer";
const RecentQueries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("https://recomm-me-server.vercel.app/queries")
      .then((res) => setQueries(res.data.slice(0, 6)))
      .catch((err) => console.log(err));
  }, []);
  // const limitedQueries = queries.slice(0, 6);
  return (
    <>
      <h1 className="text-5xl my-5 text-blue-600 font-bold text-center">
        Recent Queries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {queries.map((query) => (
          <SingleQuer query={query} key={query._id} />
        ))}
      </div>
    </>
  );
};

export default RecentQueries;
