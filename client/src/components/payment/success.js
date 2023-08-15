import { Link } from "react-router-dom";
import "./style.css";
const Success = () => {
  return (
    <>
      <div className="success-container">
        <div className="card">
          <button className="dismiss" type="button">
            ×
          </button>
          <div className="header">
            <div className="image">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 7L9.00004 18L3.99994 13"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
            </div>
            <div className="content">
              <span className="title">Order validated</span>
              <p className="message">
                Thank you for your purchase. you package will be delivered
                within 2 days of your purchase
              </p>
            </div>
            <div className="actions">
              <button className="history" type="button">
                History
              </button>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="track"
                type="button"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
