import React from "react";
import { Link } from "react-router-dom";
import "./Not_Found.scss";
import shoe from "../../Assets/untied shoes.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
function Not_Found() {
  return (
    <>
      <div className="not-found">
        <h1>404 - Not Found!</h1>
        <img className="not-found__img" src={shoe} alt=""></img>
        <Link to="/">Take Me Home</Link>
      </div>
    </>
  );
}
export default Not_Found;
