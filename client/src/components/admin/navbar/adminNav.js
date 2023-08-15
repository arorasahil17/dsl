import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
            Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Dashboard
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3">
                <li className="nav-item ">
                  <Link
                    className="nav-link admin-navs"
                    aria-current="page"
                    href="/admin"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link admin-navs" to="">
                    Feedbacks
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link admin-navs dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link
                        className="dropdown-item admin-navs"
                        to="/admin/all/products"
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item admin-navs"
                        to="/admin/add/product"
                      >
                        Add New Product
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link admin-navs" href="users.html">
                    Users
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
