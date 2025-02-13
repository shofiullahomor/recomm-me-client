import React from "react";

const AddQuery = () => {
  return (
    <div className="bg-blue-200 py-5">
      <h1 className="text-3xl text-center font-bold ">Add Query</h1>
      <div className="flex items-center justify-center ">
        <form className="w-full max-w-md">
          <div className="flex flex-col gap-4">
            <label className="floating-label">
              <span>Product name</span>
              <input
                type="text"
                placeholder="Product name"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Product Brand</span>
              <input
                type="text"
                placeholder="Product Brand"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Product Image</span>
              <input
                type="text"
                placeholder="Product Image-URL"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Query TItle</span>
              <input
                type="text"
                placeholder="Query TItle"
                className="input input-md w-full"
              />
            </label>
            <label className="floating-label">
              <span>Boycotting Reason Details</span>
              <input
                type="text"
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
