import { useEffect } from "react";
import "./style.css";
const Slider = () => {
  useEffect(() => {
    // Add your circle animation logic here
    const movingCircles = document.querySelector(".moving-circles");
    const numCircles = 5;
    const colors = ["red", "green", "orange", "#ffc64c", "purple"];

    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement("div");
      circle.classList.add("moving-circle");
      circle.style.top = Math.random() * 100 + "%";
      circle.style.left = Math.random() * 100 + "%";
      circle.style.backgroundColor = colors[i % colors.length];
      movingCircles.appendChild(circle);
    }
  }, []);
  return (
    <>
      <div className="container hero-container">
        <div className="row gap-5 justify-content-center hero-row mt-5">
          <div className="col-md-5 hero-col">
            <p className="hero-subtitle mt-3">Modern. Professional. Realable</p>
            <h1 className="hero-title">
              <b style={{ letterSpacing: 1 }}>Get Enhance Security of </b>{" "}
              <br />
              Data Protection
            </h1>
            <p className="hero-description global-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              corrupti quaerat itaque inventore perferendis in, eos ex
              repellendus debitis pariatur aliquid vero, optio assumenda. Itaque
              minus rerum reiciendis atque maxime.
            </p>
            <button className="hero-btn">Get Started</button>
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-column">
              <div className="row">
                <img
                  src="images/hero2.svg"
                  className="col-sm-2 col-4 image-animation d-none d-sm-block"
                  alt=""
                />
                <img
                  src="images/hm1.png"
                  className="col-sm-7 responsive-img col-4 image-animation"
                  alt=""
                />
                <img
                  src="images/hero3.svg"
                  className="col-sm-2 col-4 image-animation d-none d-sm-block"
                  alt=""
                />
              </div>
            </div>
            <div className="moving-circles" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
