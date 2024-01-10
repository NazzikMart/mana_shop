import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const addClass = () => {
    // Your addClass logic here
  };

  return (
    <React.Fragment>
      {props.product.map((item) => (
        <div className="BestCard" key={item.id}>
          <div className="cardItems">
            <img src={item.img} className="img-card" alt={item.name} />
            <span className="item-name">{item.name}</span>
            <span className="item-model">{item.model}</span>
            <div className="rating">
              <div className="stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
              </div>
              <div className="heart">
                <i
                  className="fa-sharp fa-solid fa-heart"
                  onClick={addClass}
                ></i>
              </div>
            </div>
            <div className="prices">
              <span className="item-price">{item.price} &#8372; </span>
              <span className="item-availability">В наявності 4</span>
            </div>
            <div className="buttons">
              <button className="item-besket-btn">
                <span onClick={() => props.addToOrder(item)}>
                  <i className="fa-sharp fa-solid fa-cart-shopping"></i>В кошик
                </span>
              </button>
              <button className="item-shop-btn">Купити в 1 клік</button>
            </div>
            <Link
              to="/product"
              className="product-details-btn"
              onClick={() => props.infoProduct(item)}
            >
              Більше про товар
            </Link>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Card;
