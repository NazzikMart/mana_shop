import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
export default function Profile() {
  function handlerLogin() {
    setIsAcount(!isAccount);
  }
  const { register, handleSubmit } = useForm();
  const [isAccount, setIsAcount] = useState(true);

  const handleRegistration = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleAccount = () => {
    setIsAcount(!isAccount);
  };

  return (
    <div className="forms">
      {isAccount ? (
        <form
          className="profile-register"
          onSubmit={handleSubmit(handleRegistration)}
        >
          <h2 className="register-name">Реєстрація</h2>
          <div className="profile-reg-name">
            <input
              className="reg-name"
              placeholder="Введіть своє ім'я"
              {...register("firstName")}
              type="text"
            />
          </div>
          <div className="profile-reg-number">
            <input
              className="reg-number"
              placeholder="Введіть номер телефону"
              {...register("number")}
              type="phone"
            />
          </div>
          <div className="profile-reg-password">
            <input
              className="reg-password"
              placeholder="Придумайте пароль"
              {...register("password")}
              type="text"
            />
          </div>
          <div className="profile-btn-reg">
            <button className="btn-reg">Реєстрація</button>
          </div>
          <div className="profile-btn-log">
            <button className="btn-log" onClick={handlerLogin}>
              Увійти
            </button>
          </div>
        </form>
      ) : (
        <form className="profile-login" onSubmit={handleSubmit(handleLogin)}>
          <h2 className="login-name">Увійти</h2>
          <div className="profile-log-number">
            <input
              className="log-number"
              placeholder="Введіть номер телефону"
            />
          </div>
          <div className="profile-log-password">
            <input className="log-password" placeholder="Введіть пароль" />
          </div>
          <div className="profile-btn-log">
            <Link
              to="/user"
              className="btn-log log-user"
              onClick={toggleAccount}
            >
              Увійти
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
