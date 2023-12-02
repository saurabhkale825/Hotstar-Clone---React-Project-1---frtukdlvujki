import React from "react";
import "./Language.css";
import Hindi from "../../../Assets/logo/Hindi.webp";
import English from "../../../Assets/logo/English.webp";
import Tamil from "../../../Assets/logo/Tamil.webp";
import Telugu from "../../../Assets/logo/Telgu.webp";
import Malayalam from "../../../Assets/logo/MAlayalam.webp";
import Bengali from "../../../Assets/logo/Bengali.webp";
import Marathi from "../../../Assets/logo/Marathi.webp";
import Kannada from "../../../Assets/logo/Kannada.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Language() {
  const data = [
    Hindi,
    English,
    Tamil,
    Telugu,
    Malayalam,
    Bengali,
    Marathi,
    Kannada,
  ];

  return (
    <div className="language">
      <Carousel
        className="lanaguage-carousel"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={20}
        emulateTouch={false}
        interval={6000}
        autoPlay={false}
        selectedItem={2}
      >
        {data.map((item) => (
          <Link to={"/deadend"}>
            <div className="individual-card" key={item._id}>
              <img src={item} alt="language" style={{ borderRadius:"5px"}}/>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Language;
