import React from "react";
import SingleQuer from "../components/SingleQuer";
import { Link } from "react-router";

const SingleQuery = ({ query }) => {
  let { _id, recommendationCount } = query;
  return (
    <div className=" bg-blue-900 rounded-2xl flex flex-col items-center">
      <SingleQuer query={query} key={_id} />
      <p className="-mt-5 z-50">Recommendation Count: {recommendationCount}</p>
      <Link to={`/query/${_id}`} className="btn  text-black my-5">
        Recomend
      </Link>
    </div>
  );
};

export default SingleQuery;
