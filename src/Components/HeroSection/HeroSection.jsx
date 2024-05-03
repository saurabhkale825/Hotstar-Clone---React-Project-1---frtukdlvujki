import "./HeroSection.css";
import React, { useEffect, useState  , useContext} from "react";
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
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext"

function HeroSection() {

  const {mobile} = useContext(AuthContext);
  const background = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const logo = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const description = [
    "Watch live stream of the ICC Men's Cricket World Cup 2023 match between NewZealand and Australia",
    "NEW EPISODE EVERY THURSDAY. Karan Johar brews a heady koffee in Season 8. Hosting glamourous A-listers, the chat digs deeper with more grounded&nbsp;conversations.",
    "Cars on the Road follows Lightning McQueen and his best friend Mater as they head east on a cross-country road trip to meet up with Mater’s sister.",
    "Dug Days is a new collection of shorts that follows the humorous misadventures of Dug, the lovable dog from Disney and Pixar’s Up.",
    "NEW EPISODE EVERY FRIDAY AT 6:30 AM. The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.",
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const [automaticChangeIndex, setAutomaticChangeIndex] = useState(0); 

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
    }, 6000);
  }, [automaticChangeIndex]);

  return (
    <div
      className={mobile ? "hero-section-mobile":"hero-section"}
      style={{
        backgroundImage: `linear-gradient( to ${mobile ? "top" : "right"}, #000 10%, transparent 78% ),url(${background[imageIndex]})`,
      }}
    >
      <img src={logo[[imageIndex]]} className={mobile ? "hero-section-mobile-img":"hero-section-img"}/>
      <p className="description">{mobile ? null : description[imageIndex]}</p>
      <Link to={"/deadend"}>
        <div className={mobile ? "watch-now-mobile":"watch-now"
      }>
          < ArrowRightIcon sx={{fontSize:mobile ? 25 : 35}}/>
          Watch Now
        </div>
      </Link>
    </div>
  );
}

export default HeroSection;
