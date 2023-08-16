import { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMessage } from "../../actions";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(null);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const success = useSelector((state) => state.message.sent);
  const error = useSelector((state) => state.message.error);

  useEffect(() => {
    if (success) {
      toast.success("Message Sent Successfully!");
    } else if (error) {
      toast.error(error);
    }
  }, [success, error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      contact,
      message,
    };
    dispatch(sendMessage(formData));
  };
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <div className="container">
        <div className="row contact-row gap-5 justify-content-center">
          <div className="col-md-4">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact-input"
                placeholder="Your Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact-input"
                placeholder="Your Email"
              />
              <input
                type="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="contact-input"
                placeholder="Your Contact Number"
              />
              <textarea
                className="text-area"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows={6}
              ></textarea>
              <button className="send-msg" type="submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-7">
            <div className="contact-content">
              <h5>Contact Us</h5>
              <h2>Let's Keep in touch</h2>
              <p>
                Post your questions in our given forum, and get answers and
                advice from the Data Shield Labs Community Experts.
              </p>
              <div className="row gap-3 mt-4">
                <div className="col-md-5">
                  <i className="fa fa-phone-alt contact-icon"></i>
                  <span style={{ fontSize: "14px" }}> 010-020-0560</span>
                </div>
                <div className="col-md-5">
                  <i className="fa fa-headset contact-icon"></i>
                  <span style={{ fontSize: "14px" }}>
                    {" "}
                    support@datashieldlabs.com
                  </span>
                </div>
              </div>
              <div className="row gap-3 mt-4">
                <div className="col-md-5">
                  <i className="fa fa-envelope contact-icon"></i>
                  <span style={{ fontSize: "14px" }}>
                    {" "}
                    contact@datashieldlabs.com
                  </span>
                </div>
                <div className="col-md-5">
                  <i className="fa fa-globe contact-icon"></i>
                  <span style={{ fontSize: "14px" }}>
                    {" "}
                    www.datashieldlabs.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
