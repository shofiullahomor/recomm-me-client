import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Layout from "../Layout";
import Login from "../Authentication/Login";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
