import "./Documentary.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

function Documentary() {
  const filterType = "documentary";
  const [data] = useFetch(filterType);

  return (
    <div className="letest-release">
      <div className="heading">
        <p className="heading-title">Documentory</p>
        <Link to={"/allcontent"}>
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
            <Link to={`/details/${item._id}`}>
            <div className="individual-show" key={item._id}>
             
              <img src={item.thumbnail} 
              alt={item.id} 
              width="150px"
              height="300px"
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

export default Documentary ;
