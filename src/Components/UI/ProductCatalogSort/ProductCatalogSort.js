import React from "react";
import "./ProductCatalogSort.css";

const ProductCatalogSort = ({ threeCard, twoCard }) => {
  return (
    <React.Fragment>
      <div className="product-sort">
        <div className="product-sort-logo">
          <span className="product-sort-name">Сотрувати</span>
          <i className="fa-solid fa-sort"></i>
        </div>
        <div className="product-sort-orientations">
          <div
            className="product-sort-orientations-one marg-sort"
            onClick={threeCard}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className="product-sort-orientations-two marg-sort"
            onClick={twoCard}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCatalogSort;