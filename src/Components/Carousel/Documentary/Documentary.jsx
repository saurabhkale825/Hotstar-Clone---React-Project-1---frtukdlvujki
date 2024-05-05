import "./Documentary.css";
import { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import AuthContext from "../../../Context/AuthContext"

function Documentary() {
  const filterType = "documentary";
  const {mobile} = useContext(AuthContext);
  const [data] = useFetch(filterType);

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
                    style={{ borderRadius: "5px" }}
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
                <div
                  className={
                    mobile ? "individual-mobile-show" : "individual-show"
                  }
                >
                  <img
                    src={item.thumbnail}
                    alt={item.id}
                    style={{ borderRadius: "5px" }}
                  />
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

export default Documentary ;
