import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/default/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authenticateUser } from "./actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const location = useLocation();
  const isOtpPage = location.pathname.includes("/otp");
  const isSuccessPage = location.pathname.includes("/success");

  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  return (
    <>
      {!isOtpPage && !isLoading && !isSuccessPage && <Navbar></Navbar>}
      <Outlet></Outlet>
    </>
  );
}

export default App;
