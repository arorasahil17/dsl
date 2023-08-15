import { useSelector } from "react-redux";
import Otp from "../components/otp/otp";
import Loader from "../components/login/loader";

const OtpPage = () => {
  const isLoading = useSelector((state) => state.user.isLoading);
  return <>{isLoading ? <Loader></Loader> : <Otp></Otp>}</>;
};

export default OtpPage;
