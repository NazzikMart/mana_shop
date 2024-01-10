import React from "react";
import "./Product.css";

const Product = ({ infoProducts, addToOrder }) => {
  return (
    <div>
      {infoProducts.map((el) => (
        <div className="element-product-wrapper" key={el.id}>
          <div className="element-product-imgs">
            <img className="product-img" src={el.img} alt={el.name} />
            <div className="product-imgs">
              {[1, 2, 3, 4].map((index) => (
                <img key={index} className="img-product" src={el.img} alt={el.name} />
              ))}
            </div>
          </div>
          <div className="element-product-details">
            <div className="element-product-details-name">{el.name}</div>
            <div className="element-product-details-article">
              Артикль: <span>{el.id}</span>
            </div>
            <div className="element-product-details-price">
              Ціна:<span>{el.price} грн </span>
            </div>
            <div className="element-product-details-number">
              Залишилось <span>4 товари</span>
            </div>
            <div className="element-product-details-btn">
              <button
                className="element-product-details-button"
                onClick={() => addToOrder(el)}
              >
                <i className="fa-sharp fa-solid fa-cart-shopping"></i> В кошик
              </button>
              <button className="item-shop-btn product-one-click-btn">
                Купити в 1 клік
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="list-details"></div>
    </div>
  );
};

export default Product;