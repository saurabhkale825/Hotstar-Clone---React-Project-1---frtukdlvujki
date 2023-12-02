import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { Icon } from "semantic-ui-react";
import PlayIcon from "../../Assets/Images/play.png";

function Details() {
  const [data, setData] = useState([]);
  const { itemId } = useParams();

  
  // console.log("ItemId =>",itemId);
  async function addToWatchlist() {
    try {
     
      const Header = {
        Authorization:
          "Bearerey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWM2YmZmNmM5ZTFlZWExMDgxYWZlMCIsImlhdCI6MTcwMDU3ODkzNywiZXhwIjoxNzMyMTE0OTM3fQ.4596MRE3V_S0dezYWWcPj4eh_P9zMGTeRCCxqITfxBA",
        projectID: "knjxpr9vh9wr",
      };
      let addData = await fetch(`${process.env.REACT_APP_WATCHLIST_URL}`, {
        method: "PATCH",
        headers: Header,
        body: JSON.stringify(itemId),
      });

      let response = await addData.json();
      console.log(response);
      if (response.status === "success") {
        alert(response.message);
         console.log(response.data);
      } else {
        alert(response.message);
      }
    } catch (e) {
      // console.log(e);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${process.env.REACT_APP_GET_DATA_URL}/${itemId}`;
        const getData = await fetch(url, {
          method: "GET",
          headers: {
            projectID: "knjxpr9vh9wr",
          },
        });
        const json = await getData.json();
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
            <span>{keyword}</span>
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

        <button className="add-to-watchlist-btn" onClick={addToWatchlist}>
          +
        </button>
      </div>
    </div>
  );
}
export default Details;
