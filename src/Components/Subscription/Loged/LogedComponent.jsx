import React from "react";
import "./LogedComponent.css";
import { Icon } from "semantic-ui-react";
import Footer from "../../NavBar/Footer";
import Check from "../../../Assets/Images/check.png";
import { Link } from "react-router-dom";

function LogedComponent() {
  return (
    <>
      <div className="login-component">
        <div className="login-left-section">
          <h4>You're subscribed to the Premium plan. Keep streaming!</h4>

          <div className="login-left-section-content">
            <ul>
              <li>
                <Icon name="check" size="large" color="white"></Icon>
                <p>
                  The streaming home of Disney, Pixar, Marvel, Star Wars,
                  National Geographic &amp; Star
                </p>
              </li>

              <li>
                <Icon name="check" size="large" color="white"></Icon>
                <p>
                  Thousands of hours of TV series, movies and documentaries for
                  the whole family
                </p>
              </li>

              <li>
                <Icon name="check" size="large" color="white"></Icon>
                <p>
                  Cancel anytime (effective at the end of your billing period)
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="login-right-section">
          <div className="login-right-section-content">
            <div className="login-right-section-content-toprow">
              <div className="grid">
                <img
                  src="https://secure-media.hotstar.com/web-assets/prod/images/usp-imgs/originals@2x.png"
                  alt="disney-logo"
                  style={{ width: "100px" }}
                ></img>
                <p>Exclusive originals</p>
              </div>
              <div className="grid">
                <img
                  src="https://secure-media.hotstar.com/web-assets/prod/unlimited-downloads-v2.png"
                  alt="infinte"
                  style={{ width: "100px" }}
                ></img>
                <p>Download and watch on-the-go</p>
              </div>
              <div className="grid">
                <img
                  src="https://secure-media.hotstar.com/web-assets/prod/images/usp-imgs/ads-free@2x.png"
                  alt="add free"
                  style={{ width: "100px" }}
                />
                <p>Ads Free movies and shows (except sports)</p>
              </div>
            </div>

            <div className="login-right-section-content-bottomrow">
              <div className="grid">
                <img
                  src="https://secure-media.hotstar.com/web-assets/prod/devices-v2.png"
                  alt="tablet"
                  style={{ width: "100px" }}
                />
                <p>atch on TV, tablet, mobile &amp; laptop</p>
              </div>
              <div className="grid">
                <img
                  src="	https://secure-media.hotstar.com/web-assets/prod/4-devices-v2.png"
                  alt="four"
                  style={{ width: "100px" }}
                />
                <p>Stream on up to 4 devices at once</p>
              </div>
              <div className="grid">
                <img
                  src="https://secure-media.hotstar.com/web-assets/prod/HD-v2.png"
                  alt="hd"
                  style={{ width: "100px" }}
                />
                <p>A selection of titles in 4K UHD</p>
              </div>
            </div>
          </div>

          <div className="premium-btn">
            <button>
              <div className="current-plan">CURRENT PLAN</div>
              <div className="premium">Premium</div>
              <div>
                <span className="rupee-icon">
                  <Icon
                    name="rupee sign"
                    size="small"
                    className="rupee-icon"
                  ></Icon>
                </span>
                <span className="price">1499</span>
                <span className="year">/Year</span>
              </div>
              <div className="blue-tick">
                <img src={Check}></img>
              </div>
            </button>
          </div>

          <div className="continue-watching">
            <Link to={"/"}>
              <button>
                <span className="continue-watching-text">
                  Continue Watching
                </span>
                <span>
                  <Icon name="angle right" size="large" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogedComponent;
