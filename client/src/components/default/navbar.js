import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser(navigate));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="images/dsl-logo-purple.png"
              alt="Bootstrap"
              width={120}
              height={55}
              style={{ objectFit: "contain" }}
            />
            <h3 style={{ fontSize: "20px", marginLeft: "-20px" }}>
              Data Shields Labs
            </h3>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="navbarSupportedContent"
            aria-labelledby="navbarSupportedContentLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="navbarSupportedContentLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto me-auto">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="." className="nav-link">
                    Training
                  </a>
                </li>
                <li className="nav-item">
                  <a href="." className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>

                {/* {user === null ? (
                  <li>
                    <Link to="/login" className="btn nav-btn">
                      Get started
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/" className="btn nav-btn" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                )} */}
              </ul>
              <div className="profile-section me-2">
                {user === null ? (
                  <Link to="/login" className="btn nav-btn">
                    Get started
                  </Link>
                ) : (
                  <div>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://us.123rf.com/450wm/kuzzie/kuzzie1510/kuzzie151000012/47859524-modern-male-avatar.jpg?ver=6"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </a>
                      <ul
                        class="dropdown-menu"
                        style={{
                          border: "none",
                          fontSize: "14px",
                          boxShadow: " 0px 8px 24px rgba(149, 157, 165, 0.2)",
                        }}
                      >
                        <li className="dropdown-item text-capitalize">
                          {user.firstName} {user.lastName}
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/my/account">
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <button class="dropdown-item" onClick={handleLogout}>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
