import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "../../Style/DeadEndPage.css"

function DeadEndPage() {
  return (
    <div className="deadend-page">
      <div className="deadend-page-section">
        <Link to={"/"}>
          <button className="deadend-back-button">
            <Icon name="long arrow alternate left" size="big" color="white"></Icon>
          </button>
        </Link>
      </div>

      <div className="deadend-conntent">
        <span>Check Back Later</span>
        <br/>
        <br/>
        <p>Follow for more info</p>
        </div>
    </div>
  );
}

export default DeadEndPage;
