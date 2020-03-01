import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="SignIn__list">
      <li className="SignIn__link">
        <NavLink to="/" className="SignIn__item">
          New Project
        </NavLink>
      </li>
      <li className="SignIn__link">
        <NavLink to="/" className="SignIn__item">
          Log Out
        </NavLink>
      </li>
      <li className="SignIn__link">
        <NavLink to="/" className="SignIn__item">
          <button className="SignIn__item__btn">MS</button>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
