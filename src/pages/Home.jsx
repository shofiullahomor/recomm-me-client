import React from "react";

import Footer from "../components/Footer";
import Slider from "../components/Slider";
import News from "../components/News";
import RecentQueries from "../components/RecentQueries";

const Home = () => {
  return (
    <>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <RecentQueries></RecentQueries>
      </div>
      <div>
        <News></News>
      </div>
    </>
  );
};

export default Home;
