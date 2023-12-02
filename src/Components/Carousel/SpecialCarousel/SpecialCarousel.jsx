import React, { useState, useEffect } from "react";
import "./SpecialCarousel.css";
import DisneyLogo from "../../../Assets/logo/Disney.webp";
import Pixar from "../../../Assets/logo/Pixar.webp";
import Marvel from "../../../Assets/logo/Mavel.webp";
import StarWars from "../../../Assets/logo/StarWars.webp";
import NationalGeographic from "../../../Assets/logo/NationalGeographic.webp";
import HotstarSpecial from "../../../Assets/logo/Hotstar Special.webp";
import DisneyVideo from "../../../Assets/Video/DisneyVideo.mp4";
import PixarVideo from "../../../Assets/Video/PixarVideo.mp4";
import MarvelVideo from "../../../Assets/Video/MarvelVideo.mp4";
import StarWarVideo from "../../../Assets/Video/StarWarsVideo.mp4";
import NationalGeographicVideo from "../../../Assets/Video/NationalGeographicVideo.mp4";
import HotstarSpecialVideo from "../../../Assets/Video/HotstarSpecialVideo.mp4";

function SpecialCarousel() {
  const [isHover, setIsHover] = useState(false);
  const [divId, setDivId] = useState("");

  const handleMouseOver = (id) => {
    setIsHover(true);
    setDivId({ id });
  };

  const handleMouseOut = () => {
    setIsHover(false);
    setDivId("");
  };

  // useEffect(() => {
  //   console.log(divId);
  //   console.log("isHover", isHover);
  // }, [(divId && isHover)]);

  return (
    <div className="special-carousel">
      <div className="individual-category">
        <div
          onMouseOver={() => handleMouseOver("image1")}
          onMouseOut={handleMouseOut}
        >
          {(isHover === true && divId.id === "image1") ? (
            <video
              src={DisneyVideo}
              autoPlay
            />
          ) : (
            <img src={DisneyLogo} alt="disney" />
          )}
        </div>
      </div>
      
      <div className="individual-category">
        <div
          onMouseOver={() => handleMouseOver("image2")}
          onMouseOut={handleMouseOut}
        >
          {(isHover === true && divId.id === "image2") ? (
            <video
              src={PixarVideo}
              autoPlay
            />
          ) : (
            <img src={Pixar} alt="disney" />
          )}
        </div>
      </div>

      <div className="individual-category">
        <div
          onMouseOver={() => handleMouseOver("image3")}
          onMouseOut={handleMouseOut}
        >
          {(isHover === true && divId.id === "image3") ? (
            <video
              src={MarvelVideo}
              autoPlay
            />
          ) : (
            <img src={Marvel} alt="disney" />
          )}
        </div>
      </div>

      <div className="individual-category">
        <div
          onMouseOver={() => handleMouseOver("image4")}
          onMouseOut={handleMouseOut}
        >
          {(isHover === true && divId.id === "image4") ? (
            <video
              src={StarWarVideo}
              autoPlay
            />
          ) : (
            <img src={StarWars} alt="disney" />
          )}
        </div>
      </div>

      <div className="individual-category">
        <div
          onMouseOver={() => handleMouseOver("image5")}
          onMouseOut={handleMouseOut}
        >
          {(isHover === true && divId.id === "image5") ? (
            <video
              src={NationalGeographicVideo}
              autoPlay
            />
          ) : (
            <img src={NationalGeographic} alt="disney" />
          )}
        </div>
      </div>

      <div className="individual-category">
        <div
          onMouseOver={() => handleMouseOver("image6")}
          onMouseOut={handleMouseOut}
        >
          {(isHover === true && divId.id === "image6") ? (
            <video
              src={HotstarSpecialVideo}
              autoPlay
            />
          ) : (
            <img src={HotstarSpecial} alt="disney" />
          )}
        </div>
      </div>
    </div>
  );
}

export default SpecialCarousel;
