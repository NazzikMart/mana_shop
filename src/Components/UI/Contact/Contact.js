import React, { useState } from "react";
import "./Contact.css";
import ServiceCenter from "../ServiceCenter/ServiceCenter";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    comment: "",
    errors: {
      name: "",
      phone: "",
    },
    hasError: false,
  });

  const validateForm = () => {
    const { name, phone, comment } = state;
    const errors = {};

    if (!name) {
      errors.name = "Будь ласка, введіть ім'я";
    } else if (name.length < 3) {
      errors.name = "Ім'я має містити принаймні 3 літер";
    }

    if (!phone) {
      errors.phone = "Будь ласка, введіть номер телефону";
    } else if (phone.replace(/\D/g, "").length < 12) {
      errors.phone = "Номер телефону має містити принаймні 12 цифр";
    }

    if (!comment || comment.length < 5) {
      errors.comment = "Коментар має містити принаймні 5 символів";
    }

    setState({ ...state, errors });

    return Object.values(errors).every((error) => !error);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const phone = input.replace(/\D/g, "");

    setState({ ...state, phone });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission logic here
    } else {
      // Handle form validation errors here
    }
  };

  if (state.hasError) {
    return <div>Щось пішло не так із компонентом Contact.</div>;
  }

  const { name, phone, comment, errors } = state;

  return (
    <div className="contact">
      <ServiceCenter />
      <div className="contact-name">Зв'язатися з нами</div>

      <div className="contact-info">
      <div className="contact-info-item">
            <i class="fa-solid fa-map-location-dot contact-icons"></i>
            <span className="contact-info-item__name">Адреса</span>
            <span className="contact-info-item__desc">
              <a href="#" className="contact-info-item__desc">
                м . Тернопіль , вул. Бродівська 14
              </a>
            </span>
          </div>
          <div className="contact-info-item">
            <i class="fa-solid fa-phone contact-icons"></i>
            <span className="contact-info-item__name">Номер телефону</span>
            <span className="contact-info-item__desc">
              <a href="#" className="contact-info-item__desc">
                +380974613997
              </a>
            </span>
          </div>
          <div className="contact-info-item">
            <i class="fa-brands fa-telegram contact-icons"></i>
            <span className="contact-info-item__name">Телеграм</span>
            <span className="contact-info-item__desc">
              <a
                href="https://t.me/sotatern"
                className="contact-info-item__desc"
              >
                Сота - студія техніки
              </a>
            </span>
          </div>
          <div className="contact-info-item">
            <i className="fa-solid fa-envelope contact-icons"></i>
            <span className="contact-info-item__name">Пошта</span>
            <span className="contact-info-item__desc">
              <a href="#" className="contact-info-item__desc">
                studiatehnikisota@gmail.com
              </a>
            </span>
          </div>
      </div>

      <div className="contact-form__map">
        <div className="contact-form">
        <span className="contact-form-name">
            Отримайте консультацію по товарах прямо зараз!
          </span>
          <span className="contact-form-desc">Доступно 24 години на добу!</span>
          <form className="form-contact" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Введіть своє ім'я"
              className="form-contact-name"
              value={name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}

            <input
              type="tel"
              placeholder="Введіть свій номер телефону"
              className="form-contact-phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}

            <textarea
              placeholder="Напишіть, який саме товар вас цікавить"
              className="form-contact-comment"
              value={comment}
              onChange={(e) => setState({ ...state, comment: e.target.value })}
            />
            {errors.comment && (
              <p className="error-message">{errors.comment}</p>
            )}

            <button type="submit" className="form-contact-button">
              Отримати консультацію
            </button>
          </form>
        </div>
        <div className="contact-map">
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.950281034536!2d25.59385478839354!3d49.56096127736908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47303148fe27cebf%3A0xfdd6c5000b9c1397!2z0JHRgNC-0LTRltCy0YHRjNC60LAg0LLRg9C70LjRhtGPLCAxNCwg0KLQtdGA0L3QvtC_0ZbQu9GMLCDQotC10YDQvdC-0L_RltC70YzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDYwMDI!5e0!3m2!1suk!2sua!4v1699084802486!5m2!1suk!2sua"
              width="600"
              height="450"
              style={{
                border: "0",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;