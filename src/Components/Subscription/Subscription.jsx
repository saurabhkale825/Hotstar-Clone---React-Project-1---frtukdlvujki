import { useContext, useState } from "react";
import "./Subscription.css";
import { Link } from "react-router-dom";
import UnlogedComponent from "./UnLoged/UnlogedComponent";
import LogedComponent from "./Loged/LogedComponent";
import AuthContext from "../../Context/AuthContext";
import CloseIcon from "@mui/icons-material/Close";

function Subscription() {
  const { login, setLogin, mobile , subscribe } = useContext(AuthContext);

  return (
    <>
      <div className="subscription">
        <div className="subscription-heading">
          <div className="left-section">
            <div className="back-button">
              <Link to={"/"}>
                <CloseIcon sx={{ fontSize: mobile ? 25 : 35 }} />
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
            className={login ? "right-section-loged" : "right-section-unloged"}
          >
            {!mobile ? (
              <div className="language-dropdown">
                <select name="languages" className="languages">
                  <option value="English" id="languages">
                    English
                  </option>
                  <option value="Hindi" id="languages">
                    Hindi
                  </option>
                  <option value="Tamil" id="languages">
                    Tamil
                  </option>
                  <option value="Telugu" id="languages">
                    Telugu
                  </option>
                  <option value="Marathi" id="languages">
                    Marathi
                  </option>
                </select>
              </div>
            ) : null}

            {login ? null
            :<Link to={"/login"}>
              <div className={mobile ? "mobile-Login-btn" : "Login-btn"}>
                Login
              </div>
            </Link>}
          </div>
        </div>

        <div>{(login && subscribe) ? <LogedComponent /> : <UnlogedComponent />}</div>
      </div>
    </>
  );
}

export default Subscription;
