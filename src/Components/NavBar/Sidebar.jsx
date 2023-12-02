import React from "react";
import "../Style/Sidebar.css";
import { Link } from "react-router-dom";
import SearchIcon from "../../Assets/Images/search-interface-symbol.png";
import HomeIcon from "../../Assets/Images/home.png";
import TvIcon from "../../Assets/Images/tv.png";
import CinemaIcon from "../../Assets/Images/cinema.png";
import SportsIcon from "../../Assets/Images/tennis.png";

function Sidebar() {
  return (
    <>
      

      <div className="sidebar">
        <div >
          <Link to="/user">
            <div className="individual-icon">
              <span>
                <img
                  src="https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png"
                  alt="logo"
                  style={{ width: "20px", height: "20px" }}
                ></img>
              </span>
              <span className="sidebar-option-name"> MySpace</span>
            </div>
          </Link>
        </div>

        <div >
          <Link to="/search">
            <div className="individual-icon">
              <span>
                <img
                  src={SearchIcon}
                  alt="logo"
                  style={{ width: "20px", height: "20px" }}
                ></img>
              </span>
              <span className="sidebar-option-name"> Search</span>
            </div>
          </Link>
        </div>

        <div >
          <Link to="/">
            <div className="individual-icon">
              <span>
                <img
                  src={HomeIcon}
                  alt="logo"
                  style={{ width: "20px", height: "20px" }}
                ></img>
              </span>
              <span className="sidebar-option-name"> Home</span>
            </div>
          </Link>
        </div>

        <div >
          <Link to="/tvshows">
            <div className="individual-icon">
              <span>
                <img
                  src={TvIcon}
                  alt="logo"
                  style={{ width: "20px", height: "20px" }}
                ></img>
              </span>
              <span className="sidebar-option-name"> TV</span>
            </div>
          </Link>
        </div>

        <div >
          <Link to="/movies">
            <div className="individual-icon" >
              <span>
                <img
                  src={CinemaIcon}
                  alt="logo"
                  style={{ width: "20px", height: "20px" }}
                ></img>
              </span>
              <span className="sidebar-option-name"> Movies</span>
            </div>
          </Link>
        </div>

        <div >
          <Link to="/deadend">
            <div className="individual-icon">
              <span>
                <img
                  src={SportsIcon}
                  alt="logo"
                  style={{ width: "20px", height: "20px" }}
                ></img>
              </span>
              <span className="sidebar-option-name"> Sports</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
