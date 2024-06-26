import { useEffect, useState, useContext } from "react";
import "./WatchList.css";
import Footer from "../NavBar/Footer";
import { Link } from "react-router-dom";
import Sidebar from "../NavBar/Sidebar";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";

function WatchList() {
  const [data, setData] = useState([]);
  const { mobile } = useContext(AuthContext);

  const user = localStorage.getItem("user-info");
  const token = JSON.parse(user)?.token;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.REACT_APP_WATCHLIST_URL}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: "knjxpr9vh9wr",
          },
        });
        const data = await response.json();
        setData(data?.data?.shows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(data);
  }, [data]);


  const removeShow = async (id) => {
    try {
      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        { showId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: "knjxpr9vh9wr",
          },
        }
      );
    console.log(response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const EmptyWatchList = () => {
    data.map((item) => removeShow(item._id));
  };

  return (
    <>
      <Sidebar />
      <div className={mobile ? "mobile-watchlist" : "watchlist"}>
        <h1>Watchlist</h1>
        <div className="empty-watchlist" onClick={() => EmptyWatchList()}>
          Empty the watchList
        </div>
        <div className={mobile ? "mobile-show-container" : "show-container"}>
          {data && data.length > 0 ? (
            data?.map((item) => (
              <Link to={`/details/${item._id}`} key={item._id}>
                <div
                  key={item._id}
                  className={
                    mobile
                      ? "mobile-watchlist-individual-show "
                      : "watchlist-individual-show "
                  }
                >
                  <img
                    src={item.thumbnail}
                    alt="logo"
                    width="15%"
                    height="15%"
                  />
                </div>
              </Link>
            ))
          ) : (
            <div className="empty-watchlist-text">Watchlist is empty.</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WatchList;
