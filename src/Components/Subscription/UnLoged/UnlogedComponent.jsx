import React, { useState } from "react";
import "./UnlogedComponent.css";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function UnlogedComponent() {
  const [selectedPlan, setSelectedPlan] = useState("Super");

  return (
    <div className="unloged-component">
      <div className="unloged-component-left-section">
        <h4>Subscribe now and start streaming</h4>
      </div>

      <div className="unloged-component-right-section">
        <table>
          <thead>
            <th className="header"></th>

            <th
              className={
                selectedPlan === "Super" ? "header-selected" : "header"
              }
            >
              <div>Super</div>
            </th>

            <th
              className={
                selectedPlan === ("Premium" || "Premium-2") ? "header-selected" : "header"
              }
            >
              <div>Premium</div>
            </th>
          </thead>

          <tbody>
            {/* 2st row of the table*/}
            <tr>
              <td className="column-1">
                <p>All content</p>
                <p className="paragraph-with-lower-font">
                  Movies, Live sports, TV, Specials
                </p>
              </td>
              {/* {selectedPlan==="Premium"?"coulmn-3-selected":"coumn-3"}*/}
              <td className={
                selectedPlan === "Super" ? "column-2-selected" : "column-2"
              }>
                <Icon name="check" color="white" size="large" />
              </td>

              <td className={
               ((selectedPlan === "Premium") || (selectedPlan === "Premium-2")) ? "column-3-selected" : "column-3"
              }>
                <Icon name="check" color="white" size="large" />
              </td>
            </tr>

            {/* 3st row of the table*/}
            <tr>
              <td className="column-1">
                <p>Watch on TV or Laptop</p>
              </td>

              <td className={
                selectedPlan === "Super" ? "column-2-selected" : "column-2"
              }>
                <Icon name="check" color="white" size="large" />
              </td>

              <td className={
                ((selectedPlan === "Premium") || (selectedPlan === "Premium-2")) ? "column-3-selected" : "column-3"
              }>
                <Icon name="check" color="white" size="large" />
              </td>
            </tr>

            {/* 4st row of the table*/}
            <tr>
              <td className="column-1">
                <p>Ads free movies and shows (except sports)</p>
              </td>

              <td className={
                selectedPlan === "Super" ? "column-2-selected" : "column-2"
              }>
                <Icon name="cancel" size="large" color="white" />
              </td>

              <td className={
               ((selectedPlan === "Premium") || (selectedPlan === "Premium-2")) ? "column-3-selected" : "column-3"
              }>
                <Icon name="check" size="large" color="white" />
              </td>
            </tr>

            {/* 5st row of the table*/}
            <tr>
              <td className="column-1">
                <p>Number of devices that can be logged </p>
              </td>

              <td className={
                selectedPlan === "Super" ? "column-2-selected" : "column-2"
              }>
                <p>2</p>
              </td>

              <td className={
               ((selectedPlan === "Premium") || (selectedPlan === "Premium-2")) ? "column-3-selected" : "column-3"
              }>
                <p>4</p>
              </td>
            </tr>

            {/* 6st row of the table*/}
            <tr>
              <td className="column-1">
                <p>Max video quality</p>
              </td>

              <td className={
                selectedPlan === "Super" ? "column-2-selected" : "column-2"
              }>
                <p>Full HD</p>
                <p>1080p</p>
              </td>

              <td className={
                ((selectedPlan === "Premium") || (selectedPlan === "Premium-2")) ? "column-3-selected" : "column-3"
              }>
                <p>4K</p>
                <p>2160p</p>
              </td>
            </tr>

            {/* 7st row of the table*/}
            <tr>
              <td className="column-1">
                <p>Max audio quality</p>
                <p className="paragraph-with-lower-font">
                  Atmos available on select titles only
                </p>
              </td>

              <td className={
                selectedPlan === "Super" ? "column-2-selected" : "column-2"
              }>
                <p>Dolby Atmos</p>
              </td>

              <td className={
                ((selectedPlan === "Premium") || (selectedPlan === "Premium-2")) ? "column-3-selected" : "column-3"
              }>
                <p>Dolby Atmos</p>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="plans-btn-section" >
          <button className={selectedPlan==="Super"?"plans-btn-selected":"plans-btn"} 
           onClick={()=> {setSelectedPlan("Super")}}
          >
            <div className="plan-name">Super</div>
            <div className="plans-price">
              <Icon name="rupee" size="small" color="white"></Icon>
              <span className="plans-price-peryear">899</span>
              <span className="plans-price-expire">/Year</span>
            </div>
          </button>

          <button className={selectedPlan==="Premium"?"plans-btn-selected":"plans-btn"} 
          onClick={()=> {setSelectedPlan("Premium")}}
          >
            <div className="plan-name">Premium</div>
            <div className="plans-price">
              <Icon name="rupee" size="small" color="white"></Icon>
              <span className="plans-price-peryear">1499</span>
              <span className="plans-price-expire">/Year</span>
            </div>
          </button>

          <button className={selectedPlan==="Premium-2"?"plans-btn-selected":"plans-btn"}
          onClick={()=> {setSelectedPlan("Premium-2")}}
          >
            <div className="plan-name">Premium</div>
            <div className="plans-price">
              <Icon name="rupee" size="small" color="white"></Icon>
              <span className="plans-price-peryear">299</span>
              <span className="plans-price-expire">/Month</span>
            </div>
          </button>
        </div>
         <Link to={"/payment"}>     
        <button className="continue-btn">Continue with {(selectedPlan==="Super")? "Super":"Premium"}</button>
        </Link>
      </div>
    </div>
  );
}

export default UnlogedComponent;
