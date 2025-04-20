import React from "react";
import { Link } from "react-router-dom";
import "./Stylessignin.css";
const SignInPage = () => {
  return (
    <div className="containers">
      <div className="logo">
        <h1>
          <span>ShopNow.com</span>
        </h1>
      </div>
      <div className="sign-in-form">
        <h2>Sign in or create account</h2>
        <form>
          <label htmlFor="email">Enter mobile number or email</label>
          <input type="text" id="email" name="email" required />
          <button type="submit" className="continue-btn">
            Continue
          </button>
          <p>
            By continuing, you agree to ShopNow's{" "}
            <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>
            .
          </p>
          <a href="#" className="work-link">
            Buying for work? Shop on ShopNow Business
          </a>
        </form>
      </div>
      <footer>
        <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a> |{" "}
        <a href="#">Help</a>
        <p>© 2025 www.ShopNow.com. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default SignInPage;
