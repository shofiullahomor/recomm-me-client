import React from "react";
import RecommendationCard from "../components/RecommendationCard";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Authentication/AuthProvider";
import { toast } from "react-hot-toast";

const Query = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [queryData, setQueryData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  let {
    productImage,
    email,
    displayName,
    queryTitle,
    productBrand,
    productName,
    reason,
  } = queryData;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/queries/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {queryTitle}
              </h2>

              <p className="mt-4 text-gray-700">Name: {productName}</p>
              <p className="mt-4 text-gray-700">Brand: {productBrand}</p>
              <p className="mt-4 text-gray-700">Reason for Boycott: {reason}</p>
              <p className="mt-4 text-gray-700">User name: {displayName}</p>
              <p className="mt-4 text-gray-700">Email: {email}</p>
            </div>
          </div>

          <div>
            <img src={productImage} className="rounded-xl" alt="" />
          </div>
        </div>

        {/* start of recommendation section */}
        <div className="grid grid-cols-12 mt-20 gap-5">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl pb-5">
              Recommend Product
            </h2>
            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                name="title"
                placeholder="Recommendation Title"
                className="input input-bordered input-accent w-full"
              />
              <input
                type="text"
                name="productImage"
                placeholder="Recommended Product Image"
                className="input input-bordered input-accent w-full"
              />
              <textarea
                name="reason"
                placeholder="Recommendation reason"
                className="input input-bordered input-accent row w-full h-24"
              ></textarea>
              <input
                type="submit"
                value="Add recommendation"
                className="bg-california-600 w-full py-2"
              />
            </form>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl pb-5">
              All Recommendations
            </h2>
            <div>
              {recommendations.map((recommendation) => (
                <RecommendationCard
                  recommendation={recommendation}
                  key={recommendation._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Query;
