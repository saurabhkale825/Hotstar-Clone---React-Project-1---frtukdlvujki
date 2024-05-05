import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { Icon } from "semantic-ui-react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";
import Sidebar from "../NavBar/Sidebar";
import axios from "axios";

function Details() {
  const [data, setData] = useState([]);
  const { itemId } = useParams();
  const [timer, setTimer] = useState(false);
  const [jwtToken, setJwtToken] = useState("");
  const { mobile } = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem("user-info");
    setJwtToken(JSON.parse(user).token);
  }, []);

  const patchWatchlistLike = async (jwtToken, showId) => {
    try {
      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        {
          showId: showId,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            projectID: "knjxpr9vh9wr",
          },
        }
      );

      toast(response.data.message);

      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_GET_DATA_URL}/${itemId}`;
      const getData = await fetch(url, {
        method: "GET",
        headers: {
          projectID: "knjxpr9vh9wr",
        },
      });
      const json = await getData.json();

      setData(json.data);
    }
    fetchData(data);
  }, [itemId]);

  return (
    <>
      <div className={mobile ? "mobile-details-page" : "details-page"}>
        {mobile ? (
          <div
            className="mobile-details-page-bg"
            style={{
              backgroundImage: `linear-gradient( to top, #000 0%, transparent 58% ),url(${data.thumbnail})`,
              backgroundSize: "cover",
              // objectFit: "cover",
            }}
          ></div>
        ) : (
          <div
            className="details-page-bg"
            style={{
              backgroundImage: `linear-gradient( to top, #000 10%, transparent 78% ),url(${data.thumbnail})`,
              backgroundSize: "cover",
            }}
          ></div>
        )}

        <div className="detail-page-contain-mobile">
          <div className={mobile ? "mobile-movie-title" : "movie-title"}>{data.title}</div>

          <div className={mobile ? "mobile-rigid-content" : "rigid-content"}>
            <div>2018</div>
            <div>
              <Icon className="dots" name="circle" size="tiny" />
            </div>
            <div>1h55m</div>
            <div>
              <Icon name="circle" size="tiny" className="dots" />
            </div>
            <div>English</div>
            <div>
              <Icon name="circle" size="tiny" className="dots" />
            </div>
            <div className="u-a">U/A 13+</div>
          </div>

          <div
            className={
              mobile ? "mobile-movie-description" : "movie-description"
            }
          >
            {data.description}
          </div>

          <div className={mobile ? "mobile-keywords" : "keywords"}>
            {data?.keywords?.map((keyword, index) => (
              <React.Fragment key={index}>
                <span className="white">{keyword}</span>
                {index !== data?.keywords.length - 1 && <span>|</span>}
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
            onClick={() => patchWatchlistLike(jwtToken, itemId)}
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
