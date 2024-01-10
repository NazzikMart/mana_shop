import React from "react";
import "./Purchase.css";

const Purchase = () => {
  return (
    <div className="purchase-wrapper">
      <div className="contacts-datails-items">
        <div className="contacts-date-items">
          <span className="contacts-date-item-name ">Контактні дані</span>
          <form className="contacts-date-item-form">
            <input
              className="contacts-date-item-form-name"
              placeholder="Введіть ім'я"
            />
            <input
              className="contacts-date-item-form-number"
              placeholder="Введіть номер телефону"
            />
          </form>
        </div>

        <div className="delivery-date-items">
          <span className="delivery-date-item-name">Спосіб доставки</span>
          <form className="delivery-date-item-form">
            <input
              className="delivery-date-item-form-name"
              placeholder="Введіть ім'я"
            />
            <input
              className="delivery-date-item-form-surname-one"
              placeholder="Введіть прізвище"
            />
            <input
              className="delivery-date-item-form-surname-two"
              placeholder="Введіть по батькові"
            />
            <select className="delivery-date-item-form-select">
              <option className="delivery-date-item-form-option">
                Оберіть відділення
              </option>
              <option className="delivery-date-item-form-option">
                Відділення НП номер 7
              </option>
            </select>
          </form>
        </div>
        <div className="payment-date-items">
          <span className="payment-date-item-name">Оплата</span>
          <div className="payment-date-item payment-date-item-post">
            <input type="radio" />
            <span>
              Оплата під час отримання <br />
            </span>
          </div>
          <div className="payment-date-item payment-date-item-privatpay">
            <input type="radio" />
            <span>PrivatPay</span>
          </div>
          <div className="payment-date-item payment-date-item-googlepay">
            <input type="radio" />
            <span>GooglePay</span>
          </div>
          <div className="payment-date-item payment-date-item-mastercard">
            <input type="radio" />
            <span>Visa / MasterCard</span>
          </div>
          <div className="payment-date-item payment-date-item-portmone">
            <input type="radio" />
            <span>Portmone.com</span>
          </div>
        </div>
      </div>

      <div className="purchase-product-details-items">
        <div className="purchase-product-details-item">
          <div className="purchase-product-details-item-img">
            <img
              className="purchase-product-details-item-images"
              src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/m/7/m7-black-back.jpg/w_600"
            />
          </div>
          <div className="purchase-product-details-item-name">Телефон</div>
          <div className="purchase-product-details-item-counter">2 шт</div>
          <div className="purchase-product-details-item-price">
            <span className="purchase-product-details-item-price__summa">
              Сума замовлення :
            </span>{" "}
            10000 грн
          </div>
          <div className="purchase-product-details-item-btn">
            <button className="purchase-product-details-item-button">
              Замовити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;