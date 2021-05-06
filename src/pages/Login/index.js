import React from "react";
import "./style.css";

import HeroImg from "../../assets/images/hero-img.svg";

export default function Login() {
  return (
    <div className="wrapper-login">
      <div className="login">
        <div className="hero-img">
          <img src={HeroImg} />

          <h1>lorem ipsum</h1>
          <p>lorem ipsum dolor sit amet consectetur adipiscing elit</p>
        </div>
        <form className="form-login"></form>
      </div>
    </div>
  );
}
