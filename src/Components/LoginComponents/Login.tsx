import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const navSprite = "./gen_sprite.png";

const Login = () => {
  return (
    <div className="container login_container">
      <Link to="/" className="navbar_home-link">
        <img src={navSprite} alt="Amazon.com" className="navbar_logo" />
      </Link>
      <div className="login_form_container">
        <h1>Sign-in</h1>
        <form className="login_form">
          <div className="form_field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="user-email" id="email" />
          </div>

          <div className="form_field">
            <label htmlFor="password">Password</label>
            <input type="password" name="user-password" id="password" />
          </div>
          <input className="login_btn" type="submit" value="Sign In" />
        </form>
        <small>
          By signing-in you agree to the FAKE AMAZON CLONE Conditions to Use &
          Sale. Please see our Privacy Notice, Our Cookies Notice and our
          Interest Based Ads Notice
        </small>
      </div>
    </div>
  );
};

export default Login;
