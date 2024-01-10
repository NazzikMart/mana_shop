import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "../../UI/About/About.js";
import ProductCatalog from "../../UI/ProductCatalog/ProductCatalog.js";
import Contact from "../../UI/Contact/Contact.js";
import Besket from "../../UI/Besket/Besket.js";
import HomePage from "../../Functional/HomePage/HomePage.js";
import Profile from "../Profile/Profile.js";
import Product from "../Product/Product.js";
import Remont from "../../UI/Remont/Remont.js";
import User from "../User/User.js";
import logo from "../../../img/icons/logo.jpg";
import Purchase from "../../UI/Purchase/Purchase.js";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-wrapper">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          padding: "15px",
        }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Головна
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Контакти
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Каталог товарів
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" tabIndex="-1">
                Про нас
              </Link>
            </li>
            <li
              className=" nav-item account-link"
              style={{
                display: "flex",

                flexDirection: "row",

                alignItems: "center",
                justifyContent: "flex-start",
                color: "rgba(0, 198, 94, 1)",
              }}
            >
              <Link
                to="/profile"
                className="profile-link nav-link"
                style={{
                  color: "rgba(0, 198, 94, 1)",
                }}
              >
                Акунт
              </Link>
              <i class="fa-regular fa-user"></i>
            </li>
            <li
              className="besket-link nav-item"
              style={{
                display: "flex",

                flexDirection: "row",

                alignItems: "center",
                justifyContent: "flex-start",
                color: "rgba(0, 198, 94, 1)",
              }}
            >
              <Link
                to="/besket"
                className="besket-link nav-link"
                style={{
                  color: "rgba(0, 198, 94, 1)",
                }}
              >
                {" "}
                Кошик
              </Link>
              <i class="fa-solid fa-basket-shopping"></i>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-light bg-light padding logotip">
        <div className="Logo">
          <img src={logo} className="logo-img" />
          <div className="logo-items">
            <Link className="logo-item__navbar" to="/">
              Сота - студія техніки
            </Link>
            <span>Електроніка та побутова техніка</span>
          </div>
        </div>
        <span className=" color-blue" to="/number">
          <i className="fa-solid fa-phone"></i> +380-97-46-13-997
        </span>
      </nav>
      <nav className="navbar navbar-dark bg-dark padding">
        <div
          className="form-inline buttons-navbar"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link
            to="/catalog"
            style={{
              marginLeft: "30px",
              borderRadius: "5px",
            }}
            className="product-catalog-btn navbar-btn"
          >
            Каталог товарів <i className="fa-solid fa-bars"></i>
          </Link>
        </div>
        <Link
          to="/remont"
          style={{
            marginLeft: "30px",
            borderRadius: "5px",
          }}
          className="product-remont-btn navbar-btn"
        >
          Ремонт техніки <i class="fa-solid fa-laptop-file"></i>
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              product={props.product}
              addToOrder={props.addToOrder}
              infoProduct={props.infoProduct}
              infoProducts={props.infoProducts}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/remont" element={<Remont />} />
        <Route path="/user" element={<User />} />

        <Route path="/purchase" element={<Purchase />} />
        <Route
          path="/catalog"
          element={
            <ProductCatalog
              addToOrder={props.addToOrder}
              product={props.product}
              orders={props.orders}
              removeProduct={props.removeProduct}
              counter={props.counter}
              totalCost={props.totalCost}
              updateOrders={props.updateOrders}
              infoProduct={props.infoProduct}
              infoProducts={props.infoProducts}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/besket"
          element={
            <Besket
              orders={props.orders}
              removeProduct={props.removeProduct}
              counter={props.counter}
              totalCost={props.totalCost}
              updateOrders={props.updateOrders}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/product"
          element={
            <Product
              infoProducts={props.infoProducts}
              addToOrder={props.addToOrder}
              product={props.product}
              orders={props.orders}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Navbar;
