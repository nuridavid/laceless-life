import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/Lace It up.png";
function Navbar() {
  return (
    <div className="nav">
      <img id="nav__logo" src={logo} alt="Lace it up logo" />
      <ul className="nav__list">
        <li>Home</li>

        <li>Demo</li>
        <li>Shoes</li>
        <li>Stores</li>
      </ul>
    </div>
  );
}

export default Navbar;
