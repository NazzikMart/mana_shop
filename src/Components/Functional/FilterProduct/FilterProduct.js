import React, { useState } from "react";
import "./FilterProduct.css";


const FilterProduct = (props) => {
  const categories = [
    { key: "all", name: "Все" },
    { key: "Kettle", name: "Чайник" },
    { key: "telephone", name: "Телефон" },
    { key: "Grill", name: "Гриль" },
    { key: "Microwave", name: "Мікрохвильовка" },
    { key: "VacuumCleaner", name: "Пилосос" },
    { key: "ThermalMug", name: "Термокружка" },
  ];

  return (
    <div className="FilterProduct">
      {categories.map((item) => (
        <span
          className="category-item"
          key={item.key}
          onClick={() => props.choseCategory(item.key)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default FilterProduct;
