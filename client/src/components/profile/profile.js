import { useState, useEffect } from "react";
import "./profile.css";
import { updateUser } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../login/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [paymentMade, setPaymentMade] = useState(false);
  const contact = contactNumber && contactNumber.split("+91")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate fetching user data from an API
    setTimeout(() => {
      setFirstName(user ? user.firstName : "");
      setLastName(user ? user.lastName : "");
      setEmail(user ? user.email : "");
      setContactNumber(user ? user.contactNumber : "");
      setLoading(false); //! Set loading to false once data is fetched
      const { isPaymentMade } = user || {};
      setPaymentMade(isPaymentMade);
    }, 2000); //* Simulated loading delay of 2 seconds (you can replace this with your actual API call)
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userContact = `+91${contactNumber}`;
    const formData = {
      firstName,
      lastName,
      email,
      contactNumber: userContact,
    };
    dispatch(updateUser(formData, user._id)).then(() => {
      setSuccessMessage("Profile updated Successfully!");
      console.log(successMessage);
      toast.success(successMessage);
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row  justify-content-center gap-5">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://us.123rf.com/450wm/kuzzie/kuzzie1510/kuzzie151000012/47859524-modern-male-avatar.jpg?ver=6"
                    alt=""
                  />
                  <span className="font-weight-bold text-capitalize">
                    {user.firstName}
                  </span>
                  <span className="text-black-50">{user.email}</span>
                  <span> </span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <form onSubmit={handleSubmit}>
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label className="labels">Name</label>
                        <input
                          type="text"
                          className="form-control text-capitalize"
                          placeholder="first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Surname</label>
                        <input
                          type="text"
                          className="form-control text-capitalize"
                          value={lastName}
                          placeholder="surname"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="labels">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter phone number"
                          value={contact}
                          onChange={(e) => setContactNumber(e.target.value)}
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="labels">Email ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="enter email id"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <h6>
                        Payment Status:{" "}
                        {paymentMade ? (
                          <span class="badge text-bg-success">Paid</span>
                        ) : (
                          <span class="badge text-bg-danger">Not Paid</span>
                        )}
                      </h6>
                    </div>

                    <div className="mt-5 text-center">
                      <button
                        className="btn btn-primary profile-button"
                        type="submit"
                      >
                        Save Profile
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
