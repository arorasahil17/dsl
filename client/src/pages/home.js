import Blog from "../components/home/blog";
import Features from "../components/home/features";
import Footer from "../components/default/footer";
// import Pricing from "../components/home/pricing";
import Services from "../components/home/service";
import Services2 from "../components/home/services-2";
import Slider from "../components/home/slider";
// import Team from "../components/home/team";
import WhatWeDo from "../components/home/what-we-do";
import { useEffect, useState } from "react";
import Loader from "../components/login/loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      {loading ? (
        <>
          <Loader />
          <Footer />
        </>
      ) : (
        <>
          <Slider></Slider>
          <WhatWeDo></WhatWeDo>
          <Services></Services>
          <Services2></Services2>
          <Features></Features>
          {/* <Team></Team>
          <Pricing></Pricing> */}
          <Blog></Blog>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default Home;
