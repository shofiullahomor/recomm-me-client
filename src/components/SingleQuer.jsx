import React from "react";
import { Link } from "react-router";

const SingleQuer = ({ query }) => {
  let { _id, productImage, queryTitle, productBrand, date, productName } =
    query;
  let dateOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  };

  let dateFormatted = new Date(date).toLocaleString("en-GB", dateOptions);
  return (
    <Link to={`/query/${_id}`}>
      <div className=" flex flex-col bg-blue-300 gap-2">
        <figure className="px-10 pt-10">
          <img src={productImage} alt={queryTitle} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{queryTitle}</h2>
          <p>Name: {productName}</p>
          <p>Posted on: {dateFormatted}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleQuer;
