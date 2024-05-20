import React, { useContext } from "react";
// import "./VideoSong.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import AuthContext from "../../../Context/AuthContext";

function ShortFlimCarousel() {
  const filterType = "video song";
  const [data] = useFetch(filterType);
  const { mobile } = useContext(AuthContext);

  return (
    <div className={mobile ? "letest-mobile-release" : "letest-release"}>
      <div className="heading">
        <p className="heading-title">{filterType}</p>
        <Link to={`/allcontent/${filterType}`}>
          <div className="heading-button">
            <p>View All {">"}</p>
          </div>
        </Link>
      </div>

      {mobile ? (
        <Carousel
          className="mobile-portraitcarousel"
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={25}
          emulateTouch={false}
          interval={3000}
          autoPlay={false}
          selectedItem={6}
        >
          {data?.length > 0 ? (
            data?.map((item) => (
              <Link to={`/details/${item._id}`} key={item._id}>
                <div className="mobile-individual-show">
                  <img
                    src={item.thumbnail}
                    alt={item.id}
                  />
                </div>
              </Link>
            ))
          ) : (
            <h5>Loading....</h5>
          )}
        </Carousel>
      ) : (
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
              <Link to={`/details/${item._id}`} key={item._id}>
                <div className="individual-show">
                  {console.log("item=>",item)}
                  <img
                    src={item.thumbnail}
                    alt={item.id}
                    className="indi-img"
                  />

                  <div className="indi-text-content">
                    <div>
                      <button className="indi-show-home-watch-now">Watch Now</button>
                    </div>
                    <div className="indi-show-home-keywords">
                    {
                      item.keywords.map((item) => 
                        <span>{item}</span>
                      )
                    }
                    </div>
                    <p className="indi-show-home-text">{item.description}</p>
                  </div>


                </div>

                
              </Link>
            ))
          ) : (
            <h5 style={{ color: "white" }}>Loading....</h5>
          )}
        </Carousel>
      )}
    </div>
  );
}

export default ShortFlimCarousel;

