import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
