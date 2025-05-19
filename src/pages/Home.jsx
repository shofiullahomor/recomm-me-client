import FAQ from "../components/FAQ";

import News from "../components/News";
import Newsletter from "../components/Newsletter";
import RecentQueries from "../components/RecentQueries";
import Sliderr from "./../components/Sliderr";

const Home = () => {
  return (
    <>
      <div className="min-h-[100vh-20vh]">
        <Sliderr></Sliderr>
      </div>
      <div className="lg:max-w-6xl mx-5 lg:mx-auto">
        <RecentQueries></RecentQueries>
      </div>
      <div className="lg:max-w-6xl mx-5 lg:mx-auto">
        <FAQ></FAQ>
      </div>
      <div className="lg:max-w-6xl mx-5 lg:mx-auto">
        <News></News>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </>
  );
};

export default Home;
