import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        BillingAndPayment
      </Link>
    </nav>
  </div>
);

export default NavBar;
