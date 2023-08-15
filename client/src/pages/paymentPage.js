import { useEffect, useState } from "react";
import Footer from "../components/default/footer";
import Payment from "../components/payment/payment";
import Loader from "../components/login/loader";

const PaymentPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Payment></Payment>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default PaymentPage;
