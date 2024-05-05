import React, { useContext } from "react";
import "./ComingSoon.css"; // Import CSS file for styling
import Sidebar from "../NavBar/Sidebar";
import AuthContext from "../../Context/AuthContext";
import Logo from "../NavBar/Logo";
import progresbar from "../../Assets/Images/progress-bar-png.png";

function ComingSoonPage() {
  const { mobile } = useContext(AuthContext);
  return (
    <>
      <Sidebar />
      <div className={mobile ? "mobile-coming-soon-page" : "coming-soon-page"}>
        <Logo />
        <div className="coming-soon-bg">
          <div className={mobile ? "mobile-coming-soon-text" : "coming-soon-text"}>Site under construction.</div>

          <section className="loading-data">
            <h2 className={mobile ? "mobile-loading-text" : "loading-text"}>
              <span className="char">C</span>
              <span className="char">O</span>
              <span className="char">M</span>
              <span className="char">I</span>
              <span className="char">N</span>
              <span className="char">G</span>
              <span className="char">S</span>
              <span className="char">O</span>
              <span className="char">O</span>
              <span className="char">N</span>
              <span className="char">.</span>
              <span className="char">.</span>
              <span className="char">.</span>
            </h2>
          </section>

          {/* <section className="loading-bar">
            <img src={progresbar}
            alt="progress-bar"
            />
          </section> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default ComingSoonPage;
