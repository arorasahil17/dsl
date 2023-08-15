import "./style.css";
const Features = () => {
  return (
    <>
      <div className="container-fluid features">
        <div className="container my-5">
          <h5 className="text-center features-h">Web Service</h5>
          <h3 className="text-center fw-bold main-h">Our Best Features</h3>
          <div className="d-flex justify-content-center">
            <div className="em-bar-main float-start">
              <div className="em-bar" />
            </div>
          </div>
          <p className="text-center global-text" style={{ fontSize: 16 }}>
            Phasellus vitae velit sit amet diam semper commodo quis quis libero.
            Morbi consequat arcu augue, molestie faucibus.
          </p>
          <div className="row justify-content-center gap-5">
            <div className="col-md-3 features-col">
              <div className="features-icon">
                <i className="fa fa-cog" />
              </div>
              <h2>Incredible Infrastructure</h2>
              <p className="global-text">
                Donec vulputate urna sed rutrum and venenatis. Cras consequat
                magna as arcu elementum quis congue
              </p>
            </div>
            <div className="col-md-3 features-col">
              <div className="features-icon">
                <i className="fa fa-envelope-open" />
              </div>
              <h2>Email Notifications</h2>
              <p className="global-text">
                Donec vulputate urna sed rutrum and venenatis. Cras consequat
                magna as arcu elementum quis congue
              </p>
            </div>
            <div className="col-md-3 features-col">
              <div className="features-icon">
                <i className="fa fa-chart-line" />
              </div>
              <h2>Best Analytics Audits</h2>
              <p className="global-text">
                Donec vulputate urna sed rutrum and venenatis. Cras consequat
                magna as arcu elementum quis congue
              </p>
            </div>
            <div className="col-md-3 features-col">
              <div className="features-icon">
                <i className="fa fa-th" />
              </div>
              <h2>Simple Dashboard</h2>
              <p className="global-text">
                Donec vulputate urna sed rutrum and venenatis. Cras consequat
                magna as arcu elementum quis congue
              </p>
            </div>
            <div className="col-md-3 features-col">
              <div className="features-icon">
                <i className="fa fa-at" />
              </div>
              <h2>Information Retrieval</h2>
              <p className="global-text">
                Donec vulputate urna sed rutrum and venenatis. Cras consequat
                magna as arcu elementum quis congue
              </p>
            </div>
            <div className="col-md-3 features-col">
              <div className="features-icon">
                <i className="far fa-bell-slash" />
              </div>
              <h2>Deadline Reminders</h2>
              <p className="global-text">
                Donec vulputate urna sed rutrum and venenatis. Cras consequat
                magna as arcu elementum quis congue
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
