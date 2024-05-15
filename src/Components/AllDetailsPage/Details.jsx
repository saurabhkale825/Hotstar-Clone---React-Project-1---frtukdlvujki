import React, { useContext, useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";
import Sidebar from "../NavBar/Sidebar";
import axios from "axios";
import "./Details.css";

function Details() {
  const { mobile } = useContext(AuthContext);
  const { itemId } = useParams();
  const [data, setData] = useState({});
  const [jwtToken, setJwtToken] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const url = `${process.env.REACT_APP_GET_DATA_URL}/${itemId}`;
      const getData = await fetch(url, {
        method: "GET",
        headers: {
          projectID: "knjxpr9vh9wr",
        },
      });
      const json = await getData.json();
      setData(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [itemId]);

  const patchWatchlistLike = useCallback(async () => {
    try {
      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        { showId: itemId },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            projectID: "knjxpr9vh9wr",
          },
        }
      );
      toast(response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  }, [itemId, jwtToken]);

  useEffect(() => {
    const user = localStorage.getItem("user-info");
    if (user) {
      setJwtToken(JSON.parse(user).token);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className={mobile ? "mobile-details-page" : "details-page"}>
        <div
          className={mobile ? "mobile-details-page-bg" : "details-page-bg"}
          style={{
            backgroundImage: `linear-gradient( to top, #000 ${
              mobile ? "0%" : "10%"
            }, transparent ${mobile ? "58%" : "78%"} ),url(${
              data.thumbnail || ""
            })`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="detail-page-contain-mobile">
          <div className={mobile ? "mobile-movie-title" : "movie-title"}>
            {data.title}
          </div>

          <div className={mobile ? "mobile-rigid-content" : "rigid-content"}>
            <div>2018</div>
            <Icon className="dots" name="circle" size="tiny" />
            <div>1h55m</div>
            <Icon name="circle" size="tiny" className="dots" />
            <div>English</div>
            <Icon name="circle" size="tiny" className="dots" />
            <div className="u-a">U/A 13+</div>
          </div>

          <div
            className={mobile ? "mobile-movie-description" : "movie-description"}
          >
            {data.description}
          </div>

          <div className={mobile ? "mobile-keywords" : "keywords"}>
            {data.keywords?.map((keyword, index) => (
              <React.Fragment key={index}>
                <span className="white">{keyword}</span>
                {index !== data.keywords.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={mobile ? "mobile-btn-group": "btn-group"}>
          <div className="link-div">
            <Link to={`/gettingvideo/${encodeURIComponent(data.video_url)}`}>
              <button className={mobile ? "mobile-watch-btn" : "watch-btn"}>
                <ArrowRightIcon sx={{ fontSize: 30 }} />
                <p>Watch Now</p>
              </button>
            </Link>
          </div>

          <button
            className="add-to-watchlist-btn"
            onClick={patchWatchlistLike}
          >
            +
          </button>
        </div>
      </div>

      <Sidebar />
    </>
  );
}
export default Details;
