import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Силки</h3>
                <ul>
                  <li>
                    <Link to="/catalog">Товари</Link>
                  </li>
                  <li>
                    <Link to="/contact">Контакти</Link>
                  </li>
                  <li>
                    <Link to="/about">Про нас</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Сота - студія техніки</h3>
                <p>
                  Ласкаво просимо до магазину "Сота" – вашого надійного партнера
                  у світі сучасної техніки! У магазині "Сота" ми пропонуємо
                  широкий асортимент сучасної техніки та гаджетів для ваших
                  потреб. Наша компанія присвячена наданню найкращих рішень для
                  вашого повсякденного та робочого життя. Ви знайдете у нас
                  найновіші моделі смартфонів, планшетів, ноутбуків, побутових
                  приладів та багато іншого.
                </p>
              </div>
              <div className="col item social">
                <Link to="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-telegram"></i>
                </Link>
                <Link to="https://www.instagram.com/sota.ternopil/">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
            </div>
            <p className="copyright">Сота - студія техніки © 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;