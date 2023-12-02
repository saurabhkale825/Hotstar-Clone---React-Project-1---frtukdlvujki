import { useEffect, useState } from "react";
import "./WatchList.css";
import {Link} from "react-router-dom";
import Sidebar from "../NavBar/Sidebar"

function WatchList() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.REACT_APP_WATCHLIST_URL}`, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWM2YmZmNmM5ZTFlZWExMDgxYWZlMCIsImlhdCI6MTcwMDU4MTQyNCwiZXhwIjoxNzMyMTE3NDI0fQ.TXw4AoyOmBK5bB3lzxb2FKsnF9l6p_D2Kh8jWed7DX0",
            projectID: "knjxpr9vh9wr",
          },
        });
        const json = await response.json();
        setData(json.data.shows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(data);
  }, []);

  return (
  <div className="watchlist">
    <Sidebar/>
    <div className="watchlist-heading">WatchList</div>

    {data.length>0? (data?.map((item) => (
      <div key={item._id} className="watchList-content">
        
       <div className="watchlist-indivodual-show">
       <Link to={`/details/${item._id}`}>
        <img src={item.thumbnail} width= "120px" height="150px" alt="shows"/>
        </Link>
        </div>
        
      </div>
    ))):<div style={{color:"white" , textAlign:"center"}}>WatchList is Empty</div>} 
  </div>
  )
} 

export default WatchList;
