import React, { useContext } from "react";
import "./TvShows.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import AuthContext from "../../../Context/AuthContext";

function TvShows() {
  const filterType = "tv show";
  const [data] = useFetch(filterType);
  const {mobile} = useContext(AuthContext);


  return (
    <div className={mobile ? "letest-mobile-release" : "letest-release"}>
      <div className="heading">
        <p className="heading-title">Tv Shows</p>
        <Link to={`/allcontent/${filterType}`}>
        <div className="heading-button">
        <p>View All {">"}</p>
        </div>
        </Link>
      </div>

      <Carousel
        className="portraitcarousel"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={15}
        emulateTouch={false}
        interval={3000}
        autoPlay={false}
        selectedItem={6}
      >
        {data?.length > 0 ? (
          data?.map((item) => (
            <Link to={`/details/${item._id}`}  key={item._id}>
            <div className={mobile ? "individual-mobile-show" :"individual-show"}>
             
              <img src={item.thumbnail} 
              alt={item.id} 
              width="100px"
              height="100px"
              style={{ borderRadius:"5px"}}
              />
            </div>
            </Link>
          ))
        ) : (
          <h5 style={{ color: "white" }}>Loading....</h5>
        )}
      </Carousel>
    </div>
  );
}

export default TvShows;
