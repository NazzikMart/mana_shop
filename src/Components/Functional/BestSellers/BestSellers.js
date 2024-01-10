import React, { useState } from "react";
import "./BestSellers.css";
import "../../media.css";
import Card from "../Card/Card";

const BestSellers = (props) => {
  const [toggle, setToggle] = useState(false);


  const addClass = (e) => {
    setToggle(!toggle);
    e.target.style.color = toggle ? "black" : "red";
  };



  return (
    <div className="BestSellersWrapper">
      <div className="BestSellers">
        <Card
          product={props.product}
          addToOrder={props.addToOrder}
          infoProduct={props.infoProduct}
          infoProducts={props.infoProducts}
        />
      </div>
    </div>
  );
};

export default BestSellers;