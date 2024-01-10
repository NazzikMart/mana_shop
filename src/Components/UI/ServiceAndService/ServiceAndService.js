import React from "react";
import "./ServiceAndService.css";

const ServiceAndService = ({ services }) => {
  return (
    <div>
      <div className="services-product">
        <div className="services-product-name">Сервіси та послуги</div>
        <div className="services-product-items">
          {services.map((el) => (
            <div className="services-product-item" key={el.iconClass}>
              <i className={el.iconClass}></i>
              <p>{el.name}</p>
              <span>{el.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAndService;