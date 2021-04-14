import React from "react";
import "./Navbar.scss";
import logo from "../../Assets/lace it up Logo.jpg";
function Navbar() {
  return (
    <div className="nav">
      <img id="nav__logo" src={logo} alt="Lace it up logo" />
    </div>
  );
}

export default Navbar;
