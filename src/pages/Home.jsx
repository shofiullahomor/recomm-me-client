import Footer from "../components/Footer";

import News from "../components/News";
import RecentQueries from "../components/RecentQueries";
import Sliderr from "./../components/Sliderr";

const Home = () => {
  return (
    <>
      <div className="min-h-[100vh-20vh]">
        <Sliderr></Sliderr>
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
