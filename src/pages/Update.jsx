import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const Update = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState({});

  useEffect(() => {
    fetchQuery();
  }, [id]);

  const fetchQuery = async () => {
    const { data } = await axios.get(
      `https://recomm-me-server.vercel.app/query/${id}`
    );
    setQuery(data);
  };
  console.log(query);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImage = form.productImage.value;
    const queryTitle = form.queryTitle.value;
    const reason = form.reason.value;
    // const form = new FormData(e.target);
    // const formInfo = Object.fromEntries(form.entries());
    // userInfo(formInfo);
    const formInfo = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      reason,
      buyer: {
        name: user?.displayName,
        photo: user?.photoURL,
        email: user?.email,
      },
      recommendationCount: query.recommendationCount,
      date: new Date().toLocaleString(),
    };

    try {
      await axios.put(
        `https://recomm-me-server.vercel.app/update-query/${id}`,
        formInfo
      );
      toast.success("query update successfully");
      navigate("/my-queries#my-queries");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="bg-blue-200 py-5">
      <h1 className="text-3xl text-center font-bold ">Add Query</h1>
      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-4">
            <label className="floating-label">
              <span>Product name</span>
              <input
                type="text"
                name="productName"
                defaultValue={query.productName}
                placeholder="Product name"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Product Brand</span>
              <input
                type="text"
                name="productBrand"
                defaultValue={query.productBrand}
                placeholder="Product Brand"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Product Image</span>
              <input
                type="text"
                name="productImage"
                defaultValue={query.productImage}
                placeholder="Product Image-URL"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Query TItle</span>
              <input
                type="text"
                name="queryTitle"
                defaultValue={query.queryTitle}
                placeholder="Query TItle"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Boycotting Reason Details</span>
              <input
                type="text"
                name="reason"
                defaultValue={query.reason}
                placeholder="Boycotting Reason Details"
                className="input input-md w-full"
              />
            </label>
            <input
              type="submit"
              value="Submit"
              className=" w-full btn btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
