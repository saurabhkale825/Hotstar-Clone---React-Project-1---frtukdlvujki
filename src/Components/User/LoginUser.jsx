import {useContext} from "react";
import "./LoginUser.css";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

function LoginUser() {

  const {mobile} = useContext(AuthContext);
  return (
    <div className={mobile ? "mobile-loginuser" : "loginuser"}>
      <div className={mobile ? "mobile-help-and-support-btn": "help-and-support-btn"}>
        <button>
          <span>
            <Icon name="question circle outline" size="large"></Icon>
          </span>
          <span>Help & Support</span>
        </button>
      </div>

      <img
        src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_640/feature/myspace/my_space_login_in.png"
        alt="logo"
      />

      <div className={mobile ? "mobile-loginuser-login-section" :"loginuser-login-section"}>
        <h6>Login to Disney+ Hotstar</h6>

        <p>
          Start watching from where you left off, personalise for kids and more
        </p>

        <Link to={"/login"}>
          <button>Log In</button>
        </Link>

        <div className="mt-2">Don't have account?</div>

        <div className="mt-3">
          <Link to={"/signup"}>
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
