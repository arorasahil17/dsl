import "./style.css";
const Services = () => {
  return (
    <>
      <section className="container-fluid service">
        <div className="containers service-container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8 col-sm-10 service-col">
              <h6>CLOUD STORAGE</h6>
              <h3>Best Cloud Storage</h3>
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
                    <i className="fas fa-cloud-upload-alt" />
                  </span>
                  <h2>Cloud Storage</h2>
                </div>
                <div className="elementor-box">
                  <span className="icon">
                    {" "}
                    <i className="fas fa-server" />{" "}
                  </span>
                  <h2>Web Hosting</h2>
                </div>
              </div>
              <div className="elementors">
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fas fa-file-archive" />
                  </span>
                  <h2>File Storage</h2>
                </div>
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fas fa-chart-line" />
                  </span>
                  <h2>Forex Trade</h2>
                </div>
              </div>
              <div className="elementors">
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fas fa-database" />
                  </span>
                  <h2>Cloud Database</h2>
                </div>
                <div className="elementor-box">
                  <span className="icon">
                    <i className="fas fa-desktop" />
                  </span>
                  <h2>Remote Desktop</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <img
                src="images/sv-bg-1.png"
                className="img-fluid elementor-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
