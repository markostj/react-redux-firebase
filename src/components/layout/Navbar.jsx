import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        Kuharica
      </Link>
      <div className="signing">
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;
