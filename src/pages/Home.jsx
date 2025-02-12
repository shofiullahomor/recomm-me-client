import React from "react";

import Footer from "../components/Footer";
import Slider from "../components/Slider";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <News></News>
      </div>
    </>
  );
};

export default Home;
