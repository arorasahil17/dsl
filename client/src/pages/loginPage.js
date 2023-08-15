import { useSelector } from "react-redux";

import Login from "../components/login/login";
import Loader from "../components/login/loader";

const LoginPage = () => {
  const isLoading = useSelector((state) => state.user.isLoading);
  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Login></Login>
        </>
      )}
    </>
  );
};
export default LoginPage;
