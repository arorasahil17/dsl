import { useState, useRef, useEffect } from "react";
import "./otp.css";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../actions";
import { useNavigate } from "react-router";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const email = user ? user.email : null;
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const handleInputChange = (event, inputIndex) => {
    event.preventDefault();
    const value = event.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = otp.split("");
      newOtp[inputIndex] = value;
      setOtp(newOtp.join(""));
      if (inputIndex < 3 && value !== "") {
        inputRefs.current[inputIndex + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpData = { otp: otp, email: email };
    dispatch(verifyOtp(otpData, navigate));
  };

  return (
    <>
      <div className="otp">
        <form className="otp-Form">
          <span className="mainHeading">Enter OTP</span>
          <p className="otpSubheading">
            We have sent a verification code to your email
          </p>
          <div className="inputContainer">
            {/* <input
              required="required"
              maxLength={1}
              type="text"
              className="otp-input"
              value={otp[0] || ""}
              onChange={(e) => handleInputChange(e, 0)}
              id="otp-input1"
            />
            <input
              required="required"
              maxLength={1}
              type="text"
              className="otp-input"
              value={otp[1] || ""}
              onChange={(e) => handleInputChange(e, 1)}
              id="otp-input2"
            />
            <input
              required="required"
              maxLength={1}
              type="text"
              className="otp-input"
              value={otp[2] || ""}
              onChange={(e) => handleInputChange(e, 2)}
              id="otp-input3"
            />
            <input
              required="required"
              maxLength={1}
              type="text"
              className="otp-input"
              value={otp[3] || ""}
              onChange={(e) => handleInputChange(e, 3)}
              id="otp-input4"
            /> */}
            {Array.from({ length: 4 }, (_, index) => (
              <input
                key={index}
                required
                maxLength={1}
                type="text"
                className="otp-input"
                value={otp[index]}
                onChange={(e) => handleInputChange(e, index)}
                ref={(input) => (inputRefs.current[index] = input)}
              />
            ))}
          </div>
          <button className="verifyButton" type="submit" onClick={handleSubmit}>
            Verify
          </button>
          <p className="resendNote">
            Didn't receive the code?{" "}
            <button className="resendBtn">Resend Code</button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Otp;
