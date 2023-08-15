import "./style.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center gap-5">
            <div className="col-md-3">
              <img
                src="images/logo-1.png"
                className="img-thumbnail footer-logo"
                alt=""
              />
              <p
                className="global-text footer-p"
                style={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                Data Shield Labs, the world of pentesting tools, that give you
                next level access on Internet in affordable price.
              </p>
            </div>
            <div className="col-md-2">
              <h2 className="footer-title">Helpful Links</h2>
              <div className="links">
                <ul className="list-unstyled">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="products.html">Products</a>
                  </li>
                  <li>
                    <a href=".">Coustomer Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <h2 className="footer-title">Supports</h2>
              <div className="links">
                <ul className="list-unstyled">
                  <li>Privacy Policy</li>
                  <li>Terms &amp; Use</li>
                  <li>Support Center</li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <h2 className="footer-title">Company Address</h2>
              <div className="links">
                <ul className="list-unstyled">
                  <li>
                    <strong>Address:</strong> 58 Howard Street #2 San Francisco,
                    CA 941
                  </li>
                  <li>
                    <strong>Telephone:</strong> +880 215 365 789
                  </li>
                  <li>
                    <strong>Email:</strong> example@gmail.com
                  </li>
                  <li>
                    <strong className="me-2">Follow Us: </strong>
                    <a href="." className="footer-icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="/" className="footer-icon">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="." className="footer-icon">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="." className="footer-icon">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
