import React from "react";
import { Link } from "react-router-dom";

import "./SignUp.css";

const navSprite = "./gen_sprite.png";

const SignUp = () => {
  return (
    <div className="container signup_container">
      <Link to="/" className="navbar_home-link">
        <img src={navSprite} alt="Amazon.com" className="navbar_logo" />
      </Link>
      <div className="signup_form_container">
        <h1>Join Us</h1>
        <form className="signup_form">
          <div className="form_field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="user-firstName" id="firstName" />
          </div>

          <div className="form_field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="user-lastName" id="lastName" />
          </div>

          <div className="form_field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="user-email" id="email" />
          </div>

          <div className="form_field">
            <label htmlFor="password">Password</label>
            <input type="password" name="user-password" id="password" />
          </div>
          <input className="signup_btn" type="submit" value="Sign Up" />
        </form>

        <p>
          Have an Account?
          <Link to="/login" className="signup_login_link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
