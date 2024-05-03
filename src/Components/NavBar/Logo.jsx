import { useContext } from "react"
import "./Logo.css"
import { Link } from 'react-router-dom'
import AuthContext from "../../Context/AuthContext";



function Logo() {

  const {mobile} = useContext(AuthContext);
  return (
    <div className={mobile ? "mobile-logo" : "logo"}>
        <Link to={"/subscription"}>
        <img
          src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
          alt="logo"
        />
        </Link>
      </div>
  )
}

export default Logo