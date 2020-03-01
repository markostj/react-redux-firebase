import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="SignIn__list">
      <li className="SignIn__link">
        <NavLink to="/" className="SignIn__item">
          SignUp
        </NavLink>
      </li>
      <li className="SignIn__link">
        <NavLink to="/" className="SignIn__item">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
