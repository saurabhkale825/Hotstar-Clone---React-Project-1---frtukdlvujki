import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import Cancel from "../../Assets/Images/Login-Cancel.png";
import { toast } from "react-toastify";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function UserSingUp() {
    try {
      let item = {
        name: name,
        email: email,
        password: password,
        appType: "ott",
      };
      const Header = {
        "Content-Type": "application/json",
        projectID: "knjxpr9vh9wr",
      };
      let getData = await fetch(`${process.env.REACT_APP_SINGUP_URL}`, {
        method: "POST",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await getData.json();
      console.log(response);
      if (response.status === "success") {
        toast.success("You SingUp in Successfully");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        toast.warning(response.message);
      }

      localStorage.setItem("user-info", JSON.stringify(response));
    } catch (e) {
      console.log(e);
      toast.error(e)
    }
  }
  return (
    <div className="signup-bg">
      <div className="signup-page">
        <div className="signup-page-left-section"></div>

        <div className="signup-page-right-section">
          <button>
            <Link to={"/user"}>
              <img src={Cancel} alt="cancel" style={{ width: "35px" }} />
            </Link>
          </button>
          <h2>Signup to continue</h2>

          <div className="signup-page-display-text">Enter Name</div>
          <input
            className="signup-page-input"
            type="text"
            autoComplete="false"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>

          <div className="signup-page-display-text">Enter Email</div>
          <input
            className="signup-page-input"
            type="email"
            autoComplete="false"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>

          <div className="signup-page-display-text">Enter Password</div>
          <input
            className="signup-page-input"
            type="password"
            autoComplete="false"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>

          <div className="signup-submit-btn">
            <button onClick={UserSingUp}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
