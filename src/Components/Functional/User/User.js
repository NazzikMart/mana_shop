import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user-wrapper">
      <div className="user-left-menu">
        <div className="left-menu-items">
          <ul className="list-group list-group-users">
            <li className="list-group-item list-group-item__user">
              <i className="fa-solid fa-database"></i>
              <Link to="/date" className="link-user">
                Мої дані
              </Link>
            </li>
            <li className="list-group-item list-group-item__user">
              <i className="fa-brands fa-first-order"></i>
              <Link to="purchase" className="link-user">
                Мої замовлення
              </Link>
            </li>
            <li className="list-group-item list-group-item__user">
              <i className="fa-solid fa-gear"></i>
              <Link to="/settings" className="link-user">
                Налаштування
              </Link>
            </li>
            <li className="list-group-item list-group-item__user">
              <i className="fa-solid fa-list"></i>
              <Link to="listlike" className="link-user">
                Список очікування
              </Link>
            </li>
            <li className="list-group-item list-group-item__user">
              <i className="fa-solid fa-check"></i>
              <Link to="like" className="link-user">
                Обрані
              </Link>
            </li>
            <li className="list-group-item list-group-item__user">
              <i className="fa-solid fa-money-bill"></i>
              <Link to="bonuse" className="link-user">
                Бонуси
              </Link>
            </li>
            <li className="list-group-item list-group-item__user">
              <i className="fa-solid fa-question"></i>
              <Link to="infouser" className="link-user">
                Запитання та відповіді
              </Link>
            </li>
            <li className="list-group-item list-group-item__user list-group-item__user-btn-logout">
              Вийти
            </li>
          </ul>
        </div>
      </div>
      <div className="user-information">
        <div className="user-informatio-header">
          <div className="user-informatio-header__img">
            <img
              className="user-informatio-header__images"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rH4ct04iqb8ANeaWu8Sz7Eg4LDSLnL735g&usqp=CAU"
              alt="user-avatar"
            />
          </div>
          <div className="user-informatio-header__name">
            Назар, <br /> вітаємо у магазині Сота
          </div>
        </div>
        <div className="user-information-info-items">
          <span className="user-information-info-item__name">Назар</span>
          <div className="user-information-info-items__number user-information-info-items__item">
            <span className="user-information-info-item__number-name">
              Номер телефону :{" "}
            </span>
            <span className="user-information-info-item__number-desc">
              0974613997
            </span>
          </div>
          <div className="user-information-info-items__sex user-information-info-items__item">
              <span className="user-information-info-item__sex-name">
                Стать :{" "}
              </span>
              <span className="user-information-info-item__sex-desc">
                Чоловіча
              </span>
            </div>
            <div className="user-information-info-items__birthday user-information-info-items__item">
              <span className="user-information-info-item__birthday-name">
                Дата народження:{" "}
              </span>
              <span className="user-information-info-item__birthday-desc">
                17.05.2023
              </span>
            </div>
            <div className="user-information-info-items__email user-information-info-items__item">
              <span className="user-information-info-item__email-name">
                Електрона адреса :{" "}
              </span>
              <span className="user-information-info-item__email-desc">
                nazzikmart@gmail.com
              </span>
            </div>
          </div>
          <div className="user-information-details-items">
        <div className="user-information-details-item__hobby">
              <h1 className="user-information-details-item__hobby-name">
                Хобі
              </h1>
              <span className="user-information-details-item__hobby-desc">
                Вкажіть чим ви цікавитеся і ми будемо пропонувати найкраще та
                найкорисніше саме для вас.
              </span>
              <button className="user-information-details-item__hobby-btn">
                Додати хобі
              </button>
            </div>

            <div className="user-information-details-item__car">
              <h1 className="user-information-details-item__car-name">Авто</h1>
              <span className="user-information-details-item__car-desc">
                Чи маєте авто?
              </span>
              <button className="user-information-details-item__car-btn">
                В мене є авто
              </button>
            </div>
        </div>
        </div>
        </div>
      
  );
};

export default User;