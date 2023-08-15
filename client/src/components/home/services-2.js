import "./style.css";
const Services2 = () => {
  return (
    <>
      <section
        className="container-fluid service"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="containers service-container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="images/sv-bg-2.png"
                className="img-fluid elementor-img"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-md-8 col-sm-10 service-col">
              <h6>Web Service</h6>
              <h3>UX/UI &amp; Web Development</h3>
              <div className="em-bar-main float-start">
                <div className="em-bar" />
              </div>
              <br />
              <div>
                <br />
                <p style={{ color: "#54595f" }}>
                  Phasellus vitae velit sit amet diam semper commodo quis quis
                  libero. Morbi consequat arcu augue, molestie faucibus.
                </p>
              </div>
              <div className="elementors">
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fas fa-laptop" />
                  </span>
                  <h2>Responsive Design</h2>
                </div>
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fas fa-arrows-alt" />
                  </span>
                  <h2>React Developer</h2>
                </div>
              </div>
              <div className="elementors">
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fab fa-android" />
                  </span>
                  <h2>Android Development</h2>
                </div>
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fab fa-codepen" />
                  </span>
                  <h2>Web Development</h2>
                </div>
              </div>
              <div className="elementors">
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fas fa-globe" />
                  </span>
                  <h2>UX/UI Design</h2>
                </div>
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fas fa-desktop" />
                  </span>
                  <h2>Remote Desktop</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services2;
