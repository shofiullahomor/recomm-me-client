import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo/logo.jpg";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    fetchAllQuery();
  }, [user]);
  const fetchAllQuery = async () => {
    const { data } = await axios.get(
      `https://recomm-me-server.vercel.app/queries/${user?.email}`
    );
    setQueries(data);
  };
  console.log(queries);
  const { productImage, queryTitle, productName, date, _id } = queries;
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://recomm-me-server.vercel.app/query/${id}`
      );
      console.log(data);
      toast.success("Data deleted successfully");
      fetchAllQuery();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>Sure</b>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div>
        <section className="bg-black text-green-500">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-500 via-green-500 to-green-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Add queries &
                <span className="sm:block">get recommendations</span>
              </h1>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/add-query"
                  className="block w-full rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                >
                  Add Query
                </Link>

                <a
                  href="#my-queries"
                  className="block w-full rounded border border-green-600 px-12 py-3 text-sm bg-green-400 font-medium text-white hover:bg-green-600 text-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                >
                  see your queries
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="my-queries">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {queries.map((query) => (
              <div key={query._id} className="card my-5 bg-green-300 ">
                <figure className="px-6 pt-6">
                  <img
                    src={query?.productImage}
                    alt=""
                    className="rounded-xl w-40 h-40"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{query?.queryTitle}</h2>
                  <p>Name: {query?.productName}</p>
                  <p>{query?.date}</p>

                  <div className="flex justify-items-center gap-2">
                    <Link to={`/query/${query._id}`}>
                      <button className="btn">View</button>
                    </Link>
                    <Link to={`/update/${query._id}`}>
                      <button className="btn">Update</button>
                    </Link>
                    <button
                      onClick={() => modernDelete(query._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <MyQueryCards /> */}
      </div>
    </div>
  );
};

export default MyQueries;
