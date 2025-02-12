import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Layout from "../Layout";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Queries from "../pages/Queries";
import ReccomForMe from "../pages/ReccomForMe";
import MyQueries from "../pages/MyQueries";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/queries" element={<Queries></Queries>}></Route>
          <Route
            path="/recomForMe"
            element={<ReccomForMe></ReccomForMe>}
          ></Route>
          <Route path="/my-queries" element={<MyQueries></MyQueries>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
