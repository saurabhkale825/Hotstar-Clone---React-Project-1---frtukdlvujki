import { useState, useEffect } from "react";
import "../../Style/SearchPage.css";
import Sidebar from "../../NavBar/Sidebar";
import SearchIcon from "../../../Assets/Images/search-interface-symbol.png";
import LatestRelease from "../../Carousel/LetestRelease/LatestRelease";
import SearchPageNotFoundContent from "../../SearchPageNotFoundContent";
import Footer from "../../NavBar/Footer";
import Cancel from "../../../Assets/Images/Search-page-cancel.png";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function SearchPage() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchPageCancel = () => {
    var inputValue = document.getElementById("searchpage-input");

    // Check if the element exists before accessing its value
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
        console.log(url)
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
  console.log(searchValue);
  // console.log("data--> ", data);

  return (
    <>
      <div className="searchpage">
        <Sidebar />

        <div className="searchpage-content">
          <img src={SearchIcon} alt="search-icon" className="searchpage-icon" />
          <div>
            <input
              type="text"
              placeholder="Movies, shows and more"
              autoComplete="off"
              id="searchpage-input"
              value={searchValue}
              onChange={handleSearchChange}
            ></input>
          </div>
        </div>

        <img
          src={Cancel}
          alt="cancel"
          width="20px"
          className="search-page-remove-text-button"
          onClick={handleSearchPageCancel}
        />

        {searchValue === "" ? (
          <LatestRelease />
        ) : data?.length > 0 ? (
          <div className="search-page-content">
            
              {data?.map((item) => (
                <Link to={`/details/${item._id}`} key={item._id}>
                  <div className="search-page-individual-show">
                    <img src={item.thumbnail} alt={item.id}  width="150px" height="200px"/>

                  </div>
                </Link>
              ))}
            
          </div>
        ) : (
          <SearchPageNotFoundContent />
        )}
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
