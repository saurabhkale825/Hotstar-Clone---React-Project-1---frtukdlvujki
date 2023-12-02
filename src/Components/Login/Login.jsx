import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
/*import ReactDOM from "react-dom";*/
import "./Login.css";
import Cancel from "../../Assets/Images/Login-Cancel.png";
import AuthContext from "../../Context/AuthContext";


function Login() {

  const {setLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  async function Login() {
    try {
      let item = { "email": email, "password": password, "appType": "ott" };
      const Header = {
        'Content-Type': "application/json",
        projectID: "knjxpr9vh9wr",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTFmZjViNDI5Y2M3NGZkMmI3ZDIzMiIsImlhdCI6MTY5OTg3MjYwMywiZXhwIjoxNzMxNDA4NjAzfQ.V9vD7a8HAB0BKuFYBcSbjx7T5HKecc3iKSuIrU81uqE"
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
        alert("You are Logging in Successfully");
        setLogin(true);
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

 

  return (
    <div className="login-page-bg">
      <div className="login-page">
        <div className="login-page-left-section">
          <div></div>
        </div>

        <div className="login-page-right-section">
          <Link to={"/subscription"}>
            <img
              className="login-page-right-section-back-button"
              src={Cancel}
              alt="back"
            />
          </Link>

          <div className="login-page-text-content">
            <h3>Log in or sign up to continue</h3>
           
           
            <div className="login-page-password-display">Enter Email</div>
            <div className="login-page-password">
              <input
                type="email"
                className="login-page-password-input"
                autoComplete="false"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
            </div>

            <div className="login-page-password-display">Enter Password</div>
            <div className="login-page-password">
              <input
                type="password"
                className="login-page-password-input"
                autoComplete="false"
                onChange={(e) => setPassword(e.target.value)}
                value={password}


              ></input>
            </div>

            <div className="login-page-fix-content">
              By proceeding you confirm that you are above 18 years of age and
              agree to the & Privacy Policy & Terms of Use.
            </div>
          </div>

          <div className="login-submit-btn">
      <button onClick={Login}>Login
      </button>
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
