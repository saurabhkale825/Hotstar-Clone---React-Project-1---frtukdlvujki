import React, { useState, useEffect, useContext } from "react";
import "./PaymentPage.css";
import QRcode from "../../Assets/logo/apps.45636.14177013144315603.a8104893-cc8d-42c3-a3a3-47afada8e1a7.png";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AuthContext from "../../Context/AuthContext";

function PaymentPage() {
  const [upi, setUpi] = useState("");
  const [validUPI, setValidUPI] = useState(false);
  const Navigate = useNavigate();
  const { mobile, login ,subscribe , setSubscribe} = useContext(AuthContext);

  const userSubscribe = sessionStorage.getItem("subscribe");
  useEffect(() => {
    setSubscribe(userSubscribe);
    console.log(userSubscribe);
  },[]);

  const handleUpiChange = (e) => {
    setUpi(e.target.value);
  };

  useEffect(() => {
    const isValidUPI = () => {
      const upiRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+$/;
      setValidUPI(upiRegex.test(upi) && upi.length === 14);
    };
    isValidUPI();
  }, [upi]);

  useEffect(() => {
     if(login && subscribe){
      Navigate("/")
    }
  }, [])
  
  const handleSubmit = () => { 
    toast.success("Subscription successfully pursched");
    setSubscribe(true);
    Navigate("/");
  };

  

  return (
    <div className="payment-page">
      <div
        className={mobile ? "mobile-payment-container" : "payment-container"}
      >
        <div
          className={mobile ? "mobile-payment-page-left" : "payment-page-left"}
        >
          <div>
            <Link to={"/subscription"}>
              <ArrowBackIcon />
            </Link>
          </div>

          {mobile ? null: (
            <img
              src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/v1656431456/web-images/logo-d-plus.svg"
              alt="disney-logo"
              width="100px"
            />
          )}
          <div className="payment-page-left-text">
            Get access to all content - Live Sports, Movies, TV
          </div>
          <div className="payment-page-left-text">
            Watch on 1 mobile only at HD (720p) resolution
          </div>
        </div>

        <div
          className={
            mobile ? "mobile-payment-page-right" : "payment-page-right"
          }
        >
          <div className="payment-option-container">
            <h3 className="upi-heading">UPI</h3>
            <div className="upi-payment-container">
              <div className="QR-code">
                <img src={QRcode} alt="logo" width="100%" />
              </div>

              <div className="upi-id-input">
                <div>
                  <div>
                    <img
                      src="https://secure-media.hotstarext.com/web-assets/pp/images/upi-network-icons/upi_feature_web.png"
                      alt="logo"
                      width={"100%"}
                    />
                  </div>
                  <div className="upi-id-text">
                    Open any UPI app on your phone to scan and pay
                  </div>
                  <div className="or-text">
                    <span>OR</span>
                  </div>
                </div>
                <input
                  type="text"
                  minLength="14"
                  maxLength="14"
                  placeholder="UPI ID"
                  value={upi}
                  onChange={(e) => handleUpiChange(e)}
                />

                <button
                  className={
                    validUPI
                      ? "payment-page-verify-btn"
                      : "payment-page-verify-btn disabled"
                  }
                  disabled={validUPI === true ? false : true}
                  onClick={handleSubmit}
                >
                  Verify and Pay
                </button>
              </div>
            </div>
          </div>

          <div className="payment-footer">
            <div className="flex">
              <GppGoodIcon fontSize="large" />
              <div>
                <div className="payment-footer-text">100% Safe</div>
                <div>& Secure Payment</div>
              </div>
            </div>

            <div>
              By Proceeding , I confirm that I am over 18 , and I agree to the
              subscriber agreement and privacy policy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
