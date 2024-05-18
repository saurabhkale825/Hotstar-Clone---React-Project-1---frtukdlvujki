import {useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";
import CloseIcon from '@mui/icons-material/Close';


function SignUp() {
  const { setLogin , mobile} = useContext(AuthContext);
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
      <div className={mobile  ? "mobile-signup-page" : "signup-page"}>
        <div className={mobile ? null : "signup-page-left-section"}></div>

        <div className={mobile ? "mobile-signup-page-right-section": "signup-page-right-section"}>
          <button >
            <Link to={"/user"}>
              <CloseIcon sx={{fontSize : 35}} />
            </Link>
          </button>
          <h2>Signup to continue</h2>

          <div className={mobile? "mobile-signup-page-display-text" : "signup-page-display-text"}>Enter Name</div>
          <input
            className={mobile ? "mobile-signup-page-input" : "signup-page-input"}
            type="text"
            autoComplete="false"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>

          <div className={mobile? "mobile-signup-page-display-text" : "signup-page-display-text"}>Enter Email</div>
          <input
            className={mobile ? "mobile-signup-page-input" : "signup-page-input"}
            type="email"
            autoComplete="false"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>

          <div className={mobile? "mobile-signup-page-display-text" : "signup-page-display-text"}>Enter Password</div>
          <input
            className={mobile ? "mobile-signup-page-input" : "signup-page-input"}
            type="password"
            autoComplete="false"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            minLength="5"
          ></input>

          <div className={mobile ? "mobile-signup-submit-btn" : "signup-submit-btn"}>
            <button onClick={UserSingUp}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
