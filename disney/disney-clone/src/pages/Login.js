import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="content">
        <div className="innerContainer">
          <div className="loginImg1">
            <img className="test" src="/images/cta-logo-one.svg" />
          </div>
          <div className="loginsignUp">
            <a href="#">GET ALL THERE</a>
          </div>
          <div>
            <p className="description">
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </p>
          </div>
          <div className="loginLogo2">
            <img src="/images/cta-logo-two.png" />
          </div>
        </div >
        <div className="loginBg">
          <img  src="/images/login-background.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
