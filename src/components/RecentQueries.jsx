import React from "react";
import logo from "../assets/logo/logo.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleQuer from "./SingleQuer";
import Divider from "./Divider";
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
      <div className="py-20">
        <h1 className="font-bold text-blue-900 text-3xl text-center pt-10     ">
          Recent Queries
        </h1>
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {queries.map((query) => (
            <SingleQuer query={query} key={query._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentQueries;
