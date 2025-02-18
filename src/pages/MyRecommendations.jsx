import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/recommended-by-me/${user?.email}`)
      .then((res) => setRecommendations(res.data || []))
      .catch((err) => console.log(err));
  }, [user]);
  if (recommendations.length === 0) {
    return (
      <h2 className="text-center font-bold text-2xl py-5">
        You haven't recommended yet
      </h2>
    );
  }
  console.log(recommendations);
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold">My Recommondations </h1>
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
              <th></th>
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
                        <div className="font-bold">
                          {recommendation.productName}
                        </div>
                        <div className="text-sm opacity-50">
                          {recommendation.date}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {recommendation.queryTitle}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {recommendation.title}
                    </span>
                  </td>
                  <td>{recommendation.reason}</td>
                  <th>
                    <button className="btn btn-info btn-md">Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
