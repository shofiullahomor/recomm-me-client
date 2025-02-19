import React from "react";
import Lottie from "lottie-react";
import pageNotFound from "../assets/sliderimg/404.json";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div class="w-[500px] h-[500px] mx-auto  flex flex-col items-center justify-center">
      <Lottie
        className="w-full"
        width={400}
        height={400}
        animationData={pageNotFound}
        autoplay={true}
        loop={true}
      />
      <Link className="btn btn-secondary" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Errorpage;
