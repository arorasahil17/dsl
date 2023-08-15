import "./style.css";
const AboutCompany = () => {
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
              <h1>Make Your Dream Come True &amp; Grow With Us</h1>
              <div className="em-bar float-start" />
              <br />
              <br />
              <p className="global-text">
                Donec pulvinar magna id leoersi pellentesque impered dignissim
                rhoncus euismod euismod eros vitae accumsan lacinia. Fusce
                auctor consectur dapibus vestibulum ac ex nec turpis moles.
              </p>
              <div className="description d-flex gap-3 mt-4">
                <div className="icon-box mt-3">
                  <i className="fas fa-chart-bar" />
                </div>
                <div className="content mx-1">
                  <h2>Our Mission</h2>
                  <p className="global-text ">
                    Our Mision Molitia modi quae laboriosam nemo minima
                    molestiasi vitae rerulla eosipnid explicabo optio acusan
                    provident nisi repellend atione iustovoi uaerat tenetur
                    veniam uravbitur non erat ut orci.
                  </p>
                </div>
              </div>
              <div className="description d-flex gap-3 mt-4">
                <div className="icon-box mt-3">
                  <i className="fa fa-globe" />
                </div>
                <div className="content mx-1">
                  <h2>Our Vision</h2>
                  <p className="global-text">
                    Our Mision Molitia modi quae laboriosam nemo minima
                    molestiasi vitae rerulla eosipnid explicabo optio acusan
                    provident nisi repellend atione iustovoi uaerat tenetur
                    veniam uravbitur non erat ut orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
