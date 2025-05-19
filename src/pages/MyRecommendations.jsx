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
      .get(
        `https://recomm-me-server.vercel.app/recommended-by-me/${user?.email}`
      )
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

  const handleDelete = (id) => {
    let remainingData = recommendations.filter(
      (recommendation) => recommendation._id != id
    );

    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this query!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://recomm-me-server.vercel.app/recommendations/${id}`)
          .then((res) => {
            console.log(res.data);
            setRecommendations(remainingData);
          })
          .catch((err) => console.log(err));
        Swal.fire("Deleted!");
      }
    });
  };
  console.log(recommendations);
  return (
    <div className="my-10">
      <h1 className="text-center lg:text-4xl font-bold">My Recommondations </h1>
      <div className="overflow-y-auto ">
        <table className="table ">
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
                    <button
                      onClick={() => handleDelete(recommendation._id)}
                      className="btn btn-info btn-md"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
