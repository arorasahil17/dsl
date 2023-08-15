import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Navbar from "../navbar/adminNav";

const Layout = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("/admin/login");

  return (
    <>
      {!isLogin && <Navbar></Navbar>}
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
