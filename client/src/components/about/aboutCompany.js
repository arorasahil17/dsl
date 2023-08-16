import { useState } from "react";
import "./style.css";
const AboutCompany = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <section className="container-fluid abt-company">
        <div className="container">
          <div className="row justify-content-center gap-5">
            <div className="col-md-4">
              <img src="images/about-1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-5 abt-col">
              <h5>About Our company</h5>
              <h1>We Focus On</h1>
              <div className="em-bar float-start" />
              <br />
              <br />
              <p className="global-text">
                In the era of technology, we need to focus on security also - as
                we can able to see the heavy/serious attacks going on, in daily
                news. Here our company provides you full protection security
                from attackes and provide you some tools that will help you to
                test your server by yourself and get secured.
              </p>
              <div className="tab-btns">
                <button
                  className="tab-btn"
                  style={activeTab === 1 ? { color: "#7744d9" } : null}
                  onClick={() => handleTabClick(1)}
                >
                  Tools
                </button>
                <button
                  className="tab-btn"
                  style={activeTab === 2 ? { color: "#7744d9" } : null}
                  onClick={() => handleTabClick(2)}
                >
                  Consultancy
                </button>
                <button
                  className="tab-btn"
                  style={activeTab === 3 ? { color: "#7744d9" } : null}
                  onClick={() => handleTabClick(3)}
                >
                  Academic
                </button>
              </div>
              <div className="tab-content">
                {activeTab === 1 && (
                  <div className="description d-flex gap-3 mt-4">
                    <div className="icon-box mt-3">
                      <i className="fas fa-tools" />
                    </div>
                    <div className="content mx-1">
                      <h2>Tools</h2>
                      <p className="global-text" style={{ fontSize: "13px" }}>
                        First of all our company/startup provides you best
                        affordable hacking/testing tools, that will helps you to
                        preform the assessment by your self with the help of
                        guidance and provided roadmap. For now we provide you
                        three different tools for network testing, red teaming,
                        and data breach check. That is availabe free with
                        community addition - you can use and experiences it by
                        your self but with limited permissions only, till you
                        have professional addition.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="description d-flex gap-3 mt-4">
                    <div className="icon-box mt-3">
                      <i className="fas fa-building consultancy-icon" />
                    </div>
                    <div className="content mx-1">
                      <h2>Consultancy</h2>
                      <p className="global-text" style={{ fontSize: "13px" }}>
                        This is our other domain which is related to proper
                        assessment and guidance under consulting, in which we
                        provides you the proper report of assessment over your
                        network, web application, and mobile application. In
                        report we also provides you the redemption to solve of
                        make your server secure against the found vulnerability.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="description d-flex gap-3 mt-4">
                    <div className="icon-box mt-3">
                      <i className="fas fa-graduation-cap" />
                    </div>
                    <div className="content mx-1">
                      <h2>Academic</h2>
                      <p className="global-text" style={{ fontSize: "13px" }}>
                        This is our other domain which is related to proper
                        assessment and guidance under consulting, in which we
                        provides you the proper report of assessment over your
                        network, web application, and mobile application. In
                        report we also provides you the redemption to solve of
                        make your server secure against the found vulnerability.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
