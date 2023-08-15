import "./style.css";
const Team = () => {
  return (
    <>
      <div className="team container-fluid mb-5">
        <h5 className="text-center team-h">Team Members</h5>
        <h3 className="text-center fw-bold main-h">
          Our Experienced Team Members
        </h3>
        <div className="d-flex justify-content-center">
          <div className="em-bar-main float-start">
            <div className="em-bar" />
          </div>
        </div>
        <p className="text-center global-text" style={{ fontSize: 15 }}>
          Phasellus vitae velit sit amet diam semper commodo quis quis libero.
          Morbi consequat arcu augue, molestie faucibus.
        </p>
        <div className="row justify-content-center mt-5 gap-5">
          <div className="col-md-2 team-col">
            <img
              src="images/tm-4.jpg"
              className="img-fluid team-img"
              alt="team"
            />
            <div className="team-member-title">
              <h2>Ellen Eyre</h2>
              <p>Admin</p>
            </div>
            <div className="social-icons">
              <a href=".">
                <i className="fab fa-facebook-f" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-instagram" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-twitter" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-linkedin" />
              </a>
            </div>
            <p className="text-center global-text" style={{ fontSize: 14 }}>
              Phasellus vitae velit sit amet diam semper commodo quis quis
              libero.
            </p>
          </div>
          <div className="col-md-2 team-col">
            <img
              src="images/tm-5.jpg"
              className="img-fluid team-img"
              alt="team"
            />
            <div className="team-member-title">
              <h2>Adam Mitchel</h2>
              <p>Director</p>
            </div>
            <div className="social-icons">
              <a href=".">
                <i className="fab fa-facebook-f" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-instagram" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-twitter" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-linkedin" />
              </a>
            </div>
            <p className="text-center global-text" style={{ fontSize: 14 }}>
              Phasellus vitae velit sit amet diam semper commodo quis quis
              libero.
            </p>
          </div>
          <div className="col-md-2 team-col">
            <img
              src="images/tm-6.jpg"
              className="img-fluid team-img"
              alt="team"
            />
            <div className="team-member-title">
              <h2>Angel Zara</h2>
              <p>Designer</p>
            </div>
            <div className="social-icons">
              <a href=".">
                <i className="fab fa-facebook-f" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-instagram" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-twitter" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-linkedin" />
              </a>
            </div>
            <p className="text-center global-text" style={{ fontSize: 14 }}>
              Phasellus vitae velit sit amet diam semper commodo quis quis
              libero.
            </p>
          </div>
          <div className="col-md-2 team-col">
            <img
              src="images/tm-7.jpg"
              className="img-fluid team-img"
              alt="team"
            />
            <div className="team-member-title">
              <h2>Jhone Abraham</h2>
              <p>Founder</p>
            </div>
            <div className="social-icons">
              <a href=".">
                <i className="fab fa-facebook-f" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-instagram" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-twitter" />
              </a>
              <a href=".">
                {" "}
                <i className="fab fa-linkedin" />
              </a>
            </div>
            <p className="text-center global-text" style={{ fontSize: 14 }}>
              Phasellus vitae velit sit amet diam semper commodo quis quis
              libero.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
