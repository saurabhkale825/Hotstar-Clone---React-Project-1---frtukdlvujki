import React, { useContext } from "react";
import "../Style/Footer.css";
import { Icon } from "semantic-ui-react";
import AuthContext from "../../Context/AuthContext"; 

function Footer() {

  const {mobile} = useContext(AuthContext);

  return (
    <div className={mobile ?"main-mobile-footer" : "main-footer"}>
      <div className={mobile ? "mobile-footer" : "footer"}>
        <div className={mobile ? "mobile-company" : "company"}>
          {mobile ? <h5>Company</h5> : <h4>Company</h4>}
          <p>About us</p>
          <p>Careers</p>
        </div>

        <div className={mobile ? "mobile-view-website-in" : "view-website-in"}>
          {mobile  ? <h5>View-Website-in</h5> : <h4>View-Website-in</h4>}
          <p>English</p>
        </div>

        <div className={mobile ? "mobile-need-help": "need-help"}>
          {mobile ? <h5>Need Help</h5> : <h4>Need Help</h4>}
          <p>Visit Help Center</p>
          <p>Share Feedback</p>
        </div>

        <div className={mobile ? "mobile-connect-with-us" : "connect-with-us"}>
          {mobile ? <h5>Connect With Us</h5> : <h4>Connect With Us</h4>}
          <Icon name="facebook f"></Icon>
          <Icon name="twitter"></Icon>
        </div>
      </div>
      {mobile ? null :
      <div className="footer-support">
        
        <div className="left">
          <p>2023 STAR. All Rights Reversed</p>
          <div className="left-bottom">
            <p>Terms of us</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </div>
        </div>

        <div className="right">
          <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="logo" />
          <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="logo"/>
        </div>
      </div>
}
    </div>
  );
}

export default Footer;
