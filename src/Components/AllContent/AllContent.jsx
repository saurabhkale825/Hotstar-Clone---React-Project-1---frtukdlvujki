import { useState, useEffect, useContext } from "react";
import "./AllContent.css";
import Sidebar from "../NavBar/Sidebar";
import Footer from "../NavBar/Footer";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

function AllContent() {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const{mobile} = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_GET_DATA_URL}?filter={"type":"${type}"}`,
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
        <div className={mobile ? "mobile-all-content-heading" :"all-content-heading"}>{type}</div>
        <div className={mobile ? "mobile-all-content" :"all-content"}>
          {data?.length > 0 ? (
            data?.map((item) => (
              <Link to={`/details/${item._id}`}>
                <div className={mobile ? "mobile-all-content-shows" : "all-content-shows"} key={item._id}>
                  <img
                    src={item.thumbnail}
                    width="130px"
                    height="180px"
                    alt="icon"
                  />
                </div>
              </Link>
            ))
          ) : (
            <h5 className="white">Loading....</h5>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AllContent;
