import { useEffect, useState } from "react";
import AboutCompany from "../components/about/aboutCompany";
import Client from "../components/about/client";
import Slider from "../components/about/slider";
import WhyChoose from "../components/about/why-choose-us";
import Footer from "../components/default/footer";
import Loader from "../components/login/loader";

const About = () => {
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
          <AboutCompany></AboutCompany>
          <Client></Client>
          <WhyChoose></WhyChoose>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default About;
