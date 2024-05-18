import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";



function Login() {
  const { setLogin , mobile} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function Login() {
    try {
      let item = { email: email, password: password, appType: "ott" };
      const Header = {
        "Content-Type": "application/json",
        projectID: "knjxpr9vh9wr",
      };

      let getData = await fetch(`${process.env.REACT_APP_LOGIN_URL}`, {
        method: "POST",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await getData.json();
      console.log(response);
      if (response.status === "success") {
        localStorage.setItem("user-info", JSON.stringify(response));
        toast.success("You are Logging in Successfully");
        setLogin(true);
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        toast.warning(response.message);
      }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  }

  return (
    <div className="login-page-bg">
      <div className={mobile ? "mobile-login-page" : "login-page"}>
        {mobile ? null : <div className="login-page-left-section">
        </div>}

        <div className={mobile ? "mobile-login-page-right-section" : "login-page-right-section"}>
          <Link to={"/user"}>
            <CloseIcon className={mobile ? "mobile-login-page-right-section-back-button"  : "login-page-right-section-back-button" }/>
          </Link>

          <div className={mobile  ? "mobile-login-page-text-content" : "login-page-text-content"}>
            <h3>Log in to continue</h3>

            <div className={mobile ? "mobile-login-page-password-display" : "login-page-password-display"}>Enter Email</div>
            <div className={mobile ? "mobile-login-page-password" : "login-page-password"}>
              <input
                type="email"
                className={mobile ? "mobile-login-page-password-input" : "login-page-password-input"}
                autoComplete="false"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
            </div>

           
            <div className={mobile ? "mobile-login-page-password-display" : "login-page-password-display"}>Enter Password</div>
            <div className={mobile ? "mobile-login-page-password" : "login-page-password"}>
              <input
                type="password"
                className={mobile ? "mobile-login-page-password-input" : "login-page-password-input"}
                autoComplete="false"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>

            <div className={mobile ? "mobile-login-page-fix-content" : "login-page-fix-content"}>
              By proceeding you confirm that you are above 18 years of age and
              agree to the & Privacy Policy & Terms of Use.
            </div>
          </div>

          <div className={mobile ? "mobile-login-submit-btn" : "login-submit-btn"}>
            <button onClick={Login}>Login</button>
          </div>

          <div className="login-page-right-section-footer">
            <span>Having trouble logging in? </span>
            <Link to={"/deadend"}>
              <span>Get Help</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
