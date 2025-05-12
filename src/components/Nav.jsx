import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import "../index.css";

import { Link, NavLink } from "react-router";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutMenu = (
    <>
      <li>
        <NavLink to="/" className="text-white font-bold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/queries" className=" text-white font-bold">
          Queries
        </NavLink>
      </li>
    </>
  );
  const loginMenu = (
    <>
      <li>
        <NavLink to="/" className="text-white focus:text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/queries" className="text-white focus:text-white">
          Queries
        </NavLink>
      </li>
      <li>
        <NavLink to="/recomForMe" className="text-white focus:text-white">
          Recommendations For Me
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-queries" className="text-white focus:text-white">
          My Queries
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-white focus:text-white"
          to="/myRecommendations"
        >
          My recommendations
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {user ? loginMenu : logOutMenu}
            </ul>
          </div>
          <Link to="/" className=" ">
            {/* <img className="w-20" src={logo} alt="" /> */}
            <h1 className="text-green-500 text-4xl font-bold font-serif">
              Rec Me
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? loginMenu : logOutMenu}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 justify-center items-center">
              <img
                src={user?.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <Link
                onClick={logOut}
                className="btn bg-california-500 hover:bg-california-800"
              >
                LogOut
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-green-700 text-white hover:bg-california-800"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
