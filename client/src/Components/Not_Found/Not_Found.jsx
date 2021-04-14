import React from "react";
import { Link } from "react-router-dom";
import "./Not_Found.scss";
import { useState, useEffect } from "react";
import axios from "axios";
function Not_Found() {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => setDog(res.data))
      .catch(function (err) {
        console.log(err);
      });
  });
  return (
    <>
      {dog.map((dog) => {
        return (
          <div className="not-found">
            <h1>404 - Not Found!</h1>
            <img src={dog.message}></img>
            <Link to="/">Go Home</Link>
          </div>
        );
      })}
    </>
  );
}
export default Not_Found;
