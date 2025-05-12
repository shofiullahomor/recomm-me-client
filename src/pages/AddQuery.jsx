import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";
const AddQuery = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // const { email, photoURL, displayName } = user;
  // const userInfo = (info) => {
  //   info.email = uemail;
  //   info.photoURL = photoURL;
  //   info.displayName = displayName;
  //   info.date = new Date().toLocaleString();
  //   console.log("info Data", info);
  // };

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
      recommendationCount: 0,
      date: new Date().toLocaleString(),
    };
    const data = await axios.post("http://localhost:5000/queries", formInfo);
    toast.success("query successfully added");
    navigate("/my-queries#my-queries");
    console.log(data);
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
                placeholder="Product name"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Product Brand</span>
              <input
                type="text"
                name="productBrand"
                placeholder="Product Brand"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Product Image</span>
              <input
                type="text"
                name="productImage"
                placeholder="Product Image-URL"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Query TItle</span>
              <input
                type="text"
                name="queryTitle"
                placeholder="Query TItle"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Boycotting Reason Details</span>
              <input
                type="text"
                name="reason"
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

export default AddQuery;
