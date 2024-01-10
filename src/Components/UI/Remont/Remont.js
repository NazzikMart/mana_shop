import React from "react";
import "./Remont.css";

const Remont = () => {
  return (
    <div className="remont">
      <div className="remont-name">
        <h1 className="repair-service-name">Сервіс ремонту техніки</h1>
      </div>

      <section>
        <h2 className="repair-service-name">Наші послуги</h2>
        <div className="repair-services">
          <div className="repair-service">
            <i className="fa-solid fa-computer repair-icons"></i>
            <h3>Ремонт комп'ютерів</h3>
            <p>Швидкий та надійний ремонт комп'ютерів та ноутбуків.</p>
          </div>
          <div className="repair-service">
            <i className="fa-solid fa-phone repair-icons"></i>
            <h3>Ремонт смартфонів</h3>
            <p>Професійний ремонт смартфонів та планшетів.</p>
          </div>
          <div className="repair-service">
            <i className="fa-solid fa-blender repair-icons"></i>
            <h3>Ремонт побутової техніки</h3>
            <p>
              Сервісний ремонт побутової техніки (холодильники, пральні
              машини, тощо).
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="repair-service-name">Зв'яжіться з нами</h2>
        <div className="contact-form-remont">
          <form>
            <label htmlFor="name">Ім'я:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Електронна пошта:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Повідомлення:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Надіслати</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Remont;