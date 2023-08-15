import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useEffect } from "react";
import { fetchingProducts, paymentInitiate } from "../../actions";
import { useNavigate } from "react-router";

const Payment = () => {
  const products = useSelector((state) => state.product.products);
  console.log(products);
  const user = useSelector((state) => state.user.user);
  const id = user ? user._id : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchingProducts());
  }, []);

  const handlePayment = (product, id) => {
    dispatch(paymentInitiate(product, id, navigate));
  };
  return (
    <>
      <section className="container-fluid price">
        <div className="container">
          <h5 className="text-center pricing-h">Pricing</h5>
          <h3 className="text-center fw-bold main-h">Pricing Plans</h3>
          <div className="d-flex justify-content-center">
            <div className="em-bar-main float-start">
              <div className="em-bar" />
            </div>
          </div>
          <p className="text-center global-text" style={{ fontSize: 16 }}>
            Phasellus vitae velit sit amet diam semper commodo quis quis libero.
            Morbi consequat arcu augue, molestie faucibus.
          </p>
          <div className="row justify-content-around">
            {products.map((product) => {
              return (
                <>
                  <div className="col-md-3 pricing-col" key={product._id}>
                    <div
                      className="pricing-title"
                      style={{ backgroundColor: "#220b4f" }}
                    >
                      <h3>{product.name}</h3>
                    </div>
                    <div className="pricing-body">
                      <div className="feature">
                        <ul className="list-unstyled mt-3">
                          {product.features.map((feature) => {
                            return <li>{feature}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="price-item">
                      {/* <span className="currency">₹</span> */}
                      <span className="tk">₹{product.price}</span>
                    </div>
                    <div className="pricing-btn">
                      <button
                        onClick={() => handlePayment(product, id)}
                        style={{ backgroundColor: "#220b4f" }}
                      >
                        select plan
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
            {/* <div className="col-md-3 pricing-col">
              <div className="pricing-title">
                <h3>Professional</h3>
              </div>
              <div className="pricing-body">
                <div className="feature">
                  <ul className="list-unstyled mt-3">
                    <li>Full Access</li>
                    <li>Proper Report</li>
                    <li>24*7 Hours Support</li>
                    <li>100% Security Assurance</li>
                    <li>unlimited features</li>
                  </ul>
                </div>
              </div>
              <div className="price-item">
                <span className="currency">₹</span>
                <span className="tk">5000</span>
                <span className="month">One Time</span>
              </div>
              <div className="pricing-btn">
                <a href=".">select plan</a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
