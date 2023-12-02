import { useState, useEffect } from "react";
import "./AllContent.css";
import Sidebar from "../NavBar/Sidebar";
import Footer from "../NavBar/Footer";
import { Link } from "react-router-dom";

function AllContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_GET_DATA_URL}?filter={"type":"video song"}`,
          {
            method: "GET",
            headers: {
              projectID: "knjxpr9vh9wr",
            },
          }
        );
        const json = await response.json();
        console.log(json);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="all-content-page">
        <div className="all-content-heading">Movies</div>
        <div className="all-content">
          {data?.length > 0 ? (
            data?.map((item) => (
              <Link to={`/details/${item._id}`}>
              <div className="all-content-shows" key={item._id}>
                
                <div className="all-content-show-visible">
                  <img
                    src={item.thumbnail}
                    width="130px"
                    height="180px"
                    alt="icon"
                  />
                </div>

                <div className="all-content-show-hidden">
                  
                    <div>
                      <img
                        src={item.thumbnail}
                        width="180px"
                        height="120px"
                        alt="icon"
                      />
                    </div>
                 

                  <div className="all-content-button-group">
                    <button className="all-content-button-1">Watch Now</button>

                    <button className="all-content-button-2">+</button>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <h5 style={{ color: "white" }}>Loading....</h5>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AllContent;
