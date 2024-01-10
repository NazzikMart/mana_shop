import React, { useState } from "react";
import "./ProductCategories.css";

const ProductCategories = () => {
  const [categoryList, setCategoryList] = useState([
    {
      name: "Телевізори",
      key: "tv",
      number: 4,
      class: "fa-solid fa-tv product-categories-ico",
    },
    {
      name: "Телефони",
      key: "phone",
      number: 4,
      class: "fa-solid fa-phone product-categories-ico",
    },
    {
      name: "Планшети",
      key: "tablet",
      number: 4,
      class: "fa-solid fa-tablet product-categories-ico",
    },
    {
      name: "Кавоварки",
      key: "coffeeMaker",
      number: 4,
      class: "fa-solid fa-mug-hot product-categories-ico",
    },
    {
      name: "Ваги",
      key: "coffeeMaker",
      number: 4,
      class: "fa-solid fa-scale-balanced product-categories-ico",
    },
  ]);

  return (
    <div className="product-categories-wrapper">
      {categoryList.map((el) => (
        <div className="product-categories-item" key={el.key}>
          <div className="product-categories-icons">
            <i className={el.class}></i>
          </div>
          <span className="product-categories-name">{el.name}</span>
          <span className="product-categories-desc">Кількість {el.number}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
