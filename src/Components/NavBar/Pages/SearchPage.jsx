import { useState, useEffect, useContext } from "react";
import "../../Style/SearchPage.css";
import Sidebar from "../../NavBar/Sidebar";
import SearchIcon from "../../../Assets/Images/search-interface-symbol.png";
import LatestRelease from "../../Carousel/LetestRelease/LatestRelease";
import SearchPageNotFoundContent from "../../SearchPageNotFoundContent";
import Footer from "../../NavBar/Footer";
import Cancel from "../../../Assets/Images/Search-page-cancel.png";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";

function SearchPage() {
  const{mobile} = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchPageCancel = () => {
    var inputValue = document.getElementById("searchpage-input");
    if (inputValue) {
      inputValue.value = "";
    }
  };
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${process.env.REACT_APP_GET_DATA_URL}?search={"title":"${searchValue}"}`;
        console.log(url);
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
    if (searchValue.trim() !== "") {
      fetchData();
    }
  }, [searchValue]);

  return (
    <>
      <Sidebar />
      <div className={mobile ? "mobile-searchpage" : "searchpage"}>
        <div className={mobile ? "mobile-searchpage-content": "searchpage-content"}>
          <div className="searchpage-icon">
            {" "}
            <img src={SearchIcon} alt="search-icon" width="30px" />
          </div>

          <div className="searchpage-input">
            <input
              type="text"
              placeholder="Movies, shows and more"
              autoComplete="off"
              id="searchpage-input"
              value={searchValue}
              onChange={handleSearchChange}
            ></input>
          </div>

          <div className="search-page-remove-text-button">
            {" "}
            <img
              src={Cancel}
              alt="cancel"
              width="20px"
              onClick={handleSearchPageCancel}
            />
          </div>
        </div>

        <div className={mobile ? "mobile-movie-container" : "movie-container"}>
          {searchValue === "" ? (
            <LatestRelease />
          ) : data?.length > 0 ? (
            <div className={mobile ? "search-page-mobile-content" : "search-page-content" }>
              {data?.map((item) => (
                <Link to={`/details/${item._id}`} key={item._id}>
                  <div className={mobile ?"search-page-mobile-individual-show" :"search-page-individual-show"}>
                    <img
                      src={item.thumbnail}
                      alt={item.id}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <SearchPageNotFoundContent />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
