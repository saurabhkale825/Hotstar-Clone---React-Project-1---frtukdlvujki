import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { Icon } from "semantic-ui-react";
import PlayIcon from "../../Assets/Images/play.png";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";
import axios from 'axios';

function Details() {
  // const {login} = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { itemId } = useParams();
  const [timer, setTimer] = useState(false);
  const [jwtToken, setJwtToken] = useState("");

  const handleTimer = () => {
    setInterval(() => setTimer((x) => !x), 1000);
  };

  useEffect(() => {
    const user = localStorage.getItem("user-info");
    setJwtToken(JSON.parse(user).token);
  }, []);

  // useEffect(() => {
  //   handleTimer();
  // }, [timer]);

  // console.log("Token =>",jwtToken);
  

  const patchWatchlistLike = async (jwtToken, showId) => {
    try {
      const response = await axios.patch(
        'https://academics.newtonschool.co/api/v1/ott/watchlist/like',
        {
          showId: showId
        },
        {
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'projectID': "knjxpr9vh9wr"
          }
        }
      );
      
      // Handle response
      // console.log('Response:', response.data);
      toast(response.data.message);
      
      // Return response if needed
      return response.data;
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      
      // Return null or handle error as needed
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
    <div
      className="details-page"
      style={{
        backgroundImage: `linear-gradient( to right, #000 10%, transparent 78% ),url(${data.thumbnail})`,
        backgroundSize: "cover",
      }}
    >
      <div className="movie-title">{data.title}</div>

      <div className="rigid-content">
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

      <div className="movie-description">{data.description}</div>

      <div className="keywords">
        {data?.keywords?.map((keyword, index) => (
          <React.Fragment key={index}>
            <span className={timer === true ? "red" : "white"}>{keyword}</span>
            {index !== data?.keywords.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="btn-group">
        <div className="link-div">
          <Link to={`/gettingvideo/${encodeURIComponent(data.video_url)}`}>
            <button className="watch-btn">
              <img src={PlayIcon} alt="logo" width="8%" height="40%" />
              <p>Watch Now</p>
            </button>
          </Link>
        </div>

        <button className="add-to-watchlist-btn" onClick={() => 
          patchWatchlistLike(jwtToken , itemId)}>
          +
        </button>
      </div>
    </div>
  );
}
export default Details;
