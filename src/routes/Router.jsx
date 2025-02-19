import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Layout from "../Layout";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Queries from "../pages/Queries";
import ReccomForMe from "../pages/ReccomForMe";
import MyQueries from "../pages/MyQueries";
import AddQuery from "../pages/AddQuery";
import MyRecommendations from "../pages/MyRecommendations";
import Query from "../pages/Query";
import Update from "../pages/Update";
import Errorpage from "../pages/Errorpage";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/queries" element={<Queries></Queries>}></Route>
          <Route path="/query/:id" element={<Query></Query>}></Route>
          <Route
            path="/recomForMe"
            element={<ReccomForMe></ReccomForMe>}
          ></Route>
          <Route path="/my-queries" element={<MyQueries></MyQueries>}></Route>
          <Route path="/add-query" element={<AddQuery></AddQuery>}></Route>
          <Route path="/update/:id" element={<Update></Update>}></Route>
          <Route
            path="/myRecommendations"
            element={<MyRecommendations></MyRecommendations>}
          ></Route>
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
