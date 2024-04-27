import React from 'react'
import Romance from "../../../Assets/logo/Romance.webp"
import Drama from "../../../Assets/logo/Drama.webp"
import Family from "../../../Assets/logo/Family.webp"
import Reality from "../../../Assets/logo/Reality.webp"
import Comedy from "../../../Assets/logo/Comedy.webp"
import Mythology from "../../../Assets/logo/Mythology.webp"
import Crime from "../../../Assets/logo/Crime.webp"
import Food from "../../../Assets/logo/Food.webp"
import Action from "../../../Assets/logo/Action.webp"
import TalkShow from "../../../Assets/logo/TalkShow.webp"
import LifeStyle from "../../../Assets/logo/LifeStyle.webp"
import Biopic from "../../../Assets/logo/Biopic.webp"
import Science from "../../../Assets/logo/Science & Technology.webp"
import Travel from "../../../Assets/logo/Travel.webp"
import "./Genres.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Genres() {
  
    const data= [Drama ,Family ,Reality ,Comedy , Mythology , Crime, Food , Action , TalkShow, LifeStyle ,Biopic, Science , Travel,Romance ];

    return (
        <div className="genres">
          <Carousel
            className="genres-carousel"
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={20}
            emulateTouch={true}
            interval={6000}
            autoPlay={false}
            selectedItem={1}
          >
            {data && data.map((item , index) => (
              <Link to={"/deadend"} key={index}>
                <div className="individual-card"
                >
                 <img src={item} alt="language" style={{ borderRadius:"5px", width:"100%"}}/>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      );
    }

export default Genres