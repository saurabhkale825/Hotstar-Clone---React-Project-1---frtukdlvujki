import React, { useContext } from "react";
import "./ToUnlogUser.css";
import { Icon } from "semantic-ui-react";
import AuthContext from "../../Context/AuthContext";

import { Link } from "react-router-dom";

function ToUnlogUser() {
  const { setLogin, mobile } = useContext(AuthContext);

  const handleLogOut = () => {
    setLogin(false);
    localStorage.removeItem("user-info");
  };

  const user = localStorage.getItem("user-info");
  const userName = user ? JSON.parse(user)?.data?.user?.name : "";
  console.log(userName);

  return (
    <div className="unloged-user">
      <div className="unloged-user-header">
        <div className={mobile ? "mobile-unloged-user-header-left" : "unloged-user-header-left"}>
         <div>
          <span>Disney+ Hotstar Premium</span>
          <span>
            <Icon name="angle right" size="small" />
          </span>
          </div>

          <p>+91 9********0</p>
        </div>

        <button onClick={handleLogOut}>
          <span>Log Out</span>
        </button>
      </div>

      <div className="sinle-line"></div>
      <div className={mobile ? "mobile-userlogin-profile" : "userlogin-profile"}>
        <h3>Profiles</h3>
        <div className="user-profile-section">
          <div>
            <Link to={"/"}>
              <img
                src="https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png"
                alt="logo"
              />
              <p className="text-white capitalize">{userName}</p>
            </Link>
          </div>

          <div>
            <img
              src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/19.png"
              alt="kids-logo"
            />

            <p>Kids</p>
          </div>

          <div>
            <img
              src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-vector-add-icon-png-image_998225.jpg"
              alt="add"
              className="add-image"
            ></img>
            <p>Add</p>
          </div>
        </div>
      </div>

      <Link to={"/watchlist"}>
        <div className="watchlist-link">WatchList</div>
      </Link>
    </div>
  );
}

export default ToUnlogUser;
