import React from "react";
import { Outlet } from "react-router";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
