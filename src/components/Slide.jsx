import { Link } from "react-router";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-blue-500 lg:text-4xl">
            {text}
          </h1>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Slide;
