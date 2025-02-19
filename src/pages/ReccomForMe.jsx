import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import axios from "axios";
const ReccomForMe = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://recomm-me-server.vercel.app/recommendedForMe/${user?.email}`
      )
      .then((res) => setRecommendations(res.data || []))
      .catch((err) => console.log(err));
  }, [user]);
  console.log(recommendations);
  if (recommendations.length === 0) {
    return (
      <h2 className="text-center font-bold text-2xl py-5">
        There is no recommendatinos for you
      </h2>
    );
  }
  return (
    <div>
      <h1 className="text-center  lg:text-4xl font-bold">
        Recommondations For Me
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product Name</th>
              <th>Query Title</th>
              <th>Reason</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((recommendation) => {
              return (
                <tr key={recommendation._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={recommendation.productImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{recommendation.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {recommendation.queryTitle}
                    <br />
                  </td>
                  <td>{recommendation.reason} </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {recommendation.date}
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReccomForMe;
