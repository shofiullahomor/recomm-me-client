import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Layout from "../Layout";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
