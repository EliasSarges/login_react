import React from "react";

import HeroImg from "../../assets/images/hero-img.svg";
import Input from "../../components/Input";
import "./style.css";

export default function Login() {
  return (
    <div className="wrapper-login">
      <div className="login">
        <div className="hero-img">
          <img src={HeroImg} />

          <h2>lorem ipsum</h2>
          <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
        </div>

        <form className="form-login">
          <h1>Login</h1>
          <Input label="e-mail" type="email" placeholder="email@adress.com" />
          <Input label="senha" password placeholder="senha" />

          <a href="">esqueceu sua senha?</a>
          <button>entrar</button>
          <a href="">novo por aqui? cadastre-se</a>
        </form>
      </div>
    </div>
  );
}
