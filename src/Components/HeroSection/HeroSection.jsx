import "./HeroSection.css";
import React, { useEffect, useState } from "react";
import Banner1 from "../../Assets/Images/Bg1.webp";
import Banner2 from "../../Assets/Images/Bg2.webp";
import Banner3 from "../../Assets/Images/Bg3.webp";
import Banner4 from "../../Assets/Images/Bg4.webp";
import Banner5 from "../../Assets/Images/Bg5.webp";
import Logo1 from "../../Assets/Images/Logo1.webp";
import Logo2 from "../../Assets/Images/Logo2.webp";
import Logo3 from "../../Assets/Images/Logo3.webp";
import Logo4 from "../../Assets/Images/Logo4.webp";
import Logo5 from "../../Assets/Images/Logo5.webp";
import Icon from "../../Assets/Images/play.png";
import { Link } from "react-router-dom";

function HeroSection() {
  const background = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const logo = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const discription = [
    "Watch live stream of the ICC Men's Cricket World Cup 2023 match between NewZealand and Australia",
    "NEW EPISODE EVERY THURSDAY. Karan Johar brews a heady koffee in Season 8. Hosting glamourous A-listers, the chat digs deeper with more grounded&nbsp;conversations.",
    "Cars on the Road follows Lightning McQueen and his best friend Mater as they head east on a cross-country road trip to meet up with Mater’s sister.",
    "Dug Days is a new collection of shorts that follows the humorous misadventures of Dug, the lovable dog from Disney and Pixar’s Up.",
    "NEW EPISODE EVERY FRIDAY AT 6:30 AM. The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.",
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const [automaticChangeIndex, setAutomaticChangeIndex] = useState(0); // We don't need this always

  // It will run on the first mount and everytime imageIndex state changes
  useEffect(() => {
    setTimeout(() => {
      setImageIndex((prevImageIndex) => {
        if (prevImageIndex < background.length - 1) {
          return prevImageIndex + 1;
        } else {
          return 0; // Start Again
        }
      });
      setAutomaticChangeIndex((prevAutomaticChangeIndex) => {
        return prevAutomaticChangeIndex + 1;
      });
    }, 5000);
  }, [automaticChangeIndex]);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient( to right, #000 10%, transparent 78% ),url(${background[imageIndex]})`,
      }}
    >
      <img src={logo[[imageIndex]]} />
      <p className="discription">{discription[imageIndex]}</p>
      <Link to={"/deadend"}>
        <button className="watch-now">
          <img src={Icon} width="10%" height="10%" />
          Watch Now
        </button>
      </Link>
    </div>
  );
}

export default HeroSection;
