import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Besket.css";

const Besket = (props) => {


  const incrementCounter = (productId, price) => {
    const updatedOrders = props.orders.map((order) => {
      if (order.id === productId) {
        const newCounter = order.counter + 1;
        if (newCounter >= 1) {
          return { ...order, counter: newCounter };
        }
      }
      return order;
    });

    const totalCost = updatedOrders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    props.updateOrders(updatedOrders, totalCost);
  };

  const decrementCounter = (productId, price) => {
    const updatedOrders = props.orders.map((order) => {
      if (order.id === productId) {
        const newCounter = order.counter - 1;
        if (newCounter >= 1) {
          return { ...order, counter: newCounter };
        } else {
          return null;
        }
      }
      return order;
    });

    const filteredOrders = updatedOrders.filter((order) => order !== null);

    const totalCost = filteredOrders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    props.updateOrders(filteredOrders, totalCost);
  };

  const handleRemoveProduct = (productId) => {
    props.removeProduct(productId);
  };

 

  return (
    <div className="beskett">
      <span className="besket-name">Кошик з товарами</span>

      <div className="filterr">
        <span className="filter-item">Назва</span>
        <span className="filter-item">Кількість</span>
        <span className="filter-item">Вартість</span>
      </div>

      {props.orders.map((item) => (
        <div className="besket-products" key={item.id}>
          <div className="besket-product">
            <div className="besket-product-names">
              <img src={item.img} className="besket-product-img" alt="" />
              <span className="besket-product-name">{item.name}</span>
            </div>

            <div className="besket-count">
              <span className="besket-count-item">{item.counter}</span>
              <div className="besket-counter">
                <span
                  className="besket-counter-plus"
                  onClick={() => incrementCounter(item.id)}
                >
                  +
                </span>
                <span
                  className="besket-counter-minus"
                  onClick={() => decrementCounter(item.id)}
                >
                  -
                </span>
              </div>
            </div>
            <div className="besket-price">{item.price} грн</div>
            <div
              className="delete-product"
              onClick={() => handleRemoveProduct(item.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      ))}

      <div className="all-price">
        <span className="all-price-text"> Загальна сума : </span>
        <span className="all-price-total">{props.totalCost} грн</span>
      </div>
      <div className="order-product-besket-btn">
        <Link to="/purchase" className="order-product-besket-button">
          Замовити
        </Link>
      </div>
    </div>
  );
};

export default Besket;