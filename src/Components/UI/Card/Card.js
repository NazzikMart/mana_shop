import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="product-catalog-items">
        {props.searchTerm !== ""
          ? props.searchResults.map((item) => (
              <div className="BestCard newBestCard" key={item.id}>
                <div className="cardItems">
                  <img src={item.img} className="img-card" />
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
                        onClick={props.addClass}
                      ></i>
                    </div>
                  </div>
                  <div className="prices">
                    <span className="item-price">{item.price} &#8372; </span>
                    <span className="item-availability">В наявності 4</span>
                  </div>
                  <div className="buttons">
                    <button
                      className="item-besket-btn"
                      onClick={() => props.addToOrder(item)}
                    >
                      <span>
                        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                        В корзину
                      </span>
                    </button>
                    <button className="item-shop-btn">Купити в 1 клік</button>
                  </div>
                  <Link
                    to="/product"
                    className="product-details-btn"
                    onClick={() => props.infoProduct(item)}
                  >
                    Більш про товар
                  </Link>
                </div>
              </div>
            ))
          : props.currentItems.map((item) => (
              <div className="BestCard" key={item.id}>
                <div className="cardItems">
                  <img src={item.img} className="img-card" />
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
                        onClick={props.addClass}
                      ></i>
                    </div>
                  </div>
                  <div className="prices">
                    <span className="item-price">{item.price} &#8372; </span>
                    <span className="item-availability">В наявності 4</span>
                  </div>
                  <div className="buttons">
                    <button
                      className="item-besket-btn"
                      onClick={() => props.addToOrder(item)}
                    >
                      <span>
                        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                        В корзину
                      </span>
                    </button>
                    <button className="item-shop-btn">Купити в 1 клік</button>
                  </div>
                  <Link
                    to="/product"
                    className="product-details-btn"
                    onClick={() => props.infoProduct(item)}
                  >
                    Більш про товар
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </React.Fragment>
  );
};

export default Card;