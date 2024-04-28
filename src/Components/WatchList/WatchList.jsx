import { useEffect, useState } from "react";
import "./WatchList.css";
import Footer from "../NavBar/Footer"
import { Link } from "react-router-dom";
import Sidebar from "../NavBar/Sidebar";

function WatchList() {
  const [data, setData] = useState([]);

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
        // console.log(data.data.shows);
        setData(data?.data?.shows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(data);
  }, []);

  console.log(data);

  return (
    <div className="watchlist">
      <h1 >Watchlist</h1>
      <Sidebar />
      <div className="show-container">
        {data ? data?.map((item) =>
        <div key={item._id} className="watchlist-individual-show " >
          <img src={item.thumbnail} alt="logo" width="150px" height="150px"/>
          </div>):<div className="empty-watchlist-text">Watchlist is empty.</div>}
        </div>
      <Footer />
    </div>
  );
}

export default WatchList;
