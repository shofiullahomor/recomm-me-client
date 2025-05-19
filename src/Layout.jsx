import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <>
      <div className="bg-[#18184d]">
        <Nav></Nav>
      </div>
      <div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
