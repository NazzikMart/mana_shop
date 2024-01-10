import React, { useState } from "react";
import "./ProductCatalogFilter.css";

const ProductCatalogFilter = (props) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div>
      <div className="filter-div">
        <ul className=" list-group list-top">
          {props.categories.map((el) => (
            <div key={el.key}>
              <li
                className="list-group-item list-item-filter-product hoverefect-category"
                onClick={() => props.choseCategory(el.key)}
              >
                {el.name}
              </li>
            </div>
          ))}
        </ul>
        <ul
          className=" list-group "
          style={{
            marginTop: "20px",
          }}
        >
          <div className="list-group-item list-item-filter-product list-item-filter">
            <span className="list-item-filter-name">Фільтр товарів</span>
            <input
              className="search-input-filterproduct"
              type="search"
              placeholder="пошук товару..."
              aria-label="Search"
              style={{
                width: "250px",
                marginTop: "20px",
              }}
              value={props.searchTerm}
              onChange={props.handleSearch}
            />
            <div className="list-item-filter-prices">
              <span className="list-item-filter-price">Ціна грн</span>
              <div className="filter-price">
                <label className="filter-price-label">
                  <input
                    className="filter-price-input"
                    placeholder="ВІД"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </label>
                <label className="filter-price-label">
                  <input
                    className="filter-price-input"
                    placeholder="ДО"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="list-item-producer">
              <span className="list-item-producer-name">Виробник</span>
              {props.producers.map((el) => (
                <div className="list-producer-filter" key={el.id}>
                  <input
                    type="checkbox"
                    className="list-producer-filter-checkbox"
                    checked={props.selectedProducers.includes(el.name)}
                    onChange={() => props.choseProducer(el.name)}
                  />
                  <span className="list-producer-filter__producer">
                    {el.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="list-item-novelty">
              <span className="list-item-novelty-name">Нові товари</span>
              <select className="list-item-novelty-select">
                {props.categories.map((el) => (
                  <option
                    key={el.key}
                    onClick={() => props.choseCategory(el.key)}
                  >
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="list-item-show">
              <button
                className="list-item-show-btn"
                onClick={props.showFunction}
              >
                Показати
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProductCatalogFilter;