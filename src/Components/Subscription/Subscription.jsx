import { useContext, useState } from "react";
import "./Subscription.css";
import Cancel from "../../Assets/Images/cancel.png";
import { Link } from "react-router-dom";
import UnlogedComponent from "./UnLoged/UnlogedComponent";
import LogedComponent from "./Loged/LogedComponent";
import Footer from "../NavBar/Footer";
import AuthContext from "../../Context/AuthContext";

function Subscription() {
  const {login, setLogin} = useContext(AuthContext);

  return (
    <>
      <div className="subscription">
        <div className="left-section">
          <div className="back-button">
            <Link to={"/"}>
              <img src={Cancel} alt="cancel"></img>
            </Link>
          </div>

          <div className="logo-section">
            <img
              src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
              alt="logo"
            />
          </div>
        </div>

        <div
          className={
            login  ? "right-section-loged" : "right-section-unloged"
          }
        >
          <div className="language-dropdown">
            <select name="languages" id="languages">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Marathi">Marathi</option>
            </select>
          </div>
          
          <Link to={"/login"}>
            <div className="Login-btn">
              <button >Login</button>
            </div>
          </Link>
        </div>
      </div>

      <div>{login ? <LogedComponent /> : <UnlogedComponent />}</div>
      <Footer />
    
    </>
  );
}

export default Subscription;
