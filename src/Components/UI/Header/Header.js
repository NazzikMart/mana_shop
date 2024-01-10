import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={
                "https://content1.rozetka.com.ua/goods/images/original/22364760.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Робот-пилосос SILVERCREST SSRA1 (7258)</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={
                "https://wookie.com.ua/content/uploads/images/news/2021/10/xiaomi-11t-11tpro/xiaomi-11t-11tpro-1.png"
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Galaxy A04s</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={
                "https://mini-io-api.tm.uz/content/RichContent/2023-08-10/ycNyRF9mvpHuB47diHaIeeUYOXCYx1kybOO5BK60.webp"
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>POCO C40 4/64GB Power Black</h5>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Header;