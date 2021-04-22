import React from "react";
import axios from "axios";
import "./Shoes.scss";
import shoe from "../../Assets/adidas shoes.webp";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/shoes";
function Shoes() {
  const [shoe, setShoe] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setShoe(res.data);
        console.log(shoe);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  console.log(shoe);
  return (
    <div className="container1">
      {shoe?.map((shoe) => {
        return (
          <div className="container1__card" key={shoe.id}>
            <h4>{shoe.shoe}</h4>
            <img src={shoe.img}></img>
            <p>Info about shoe</p>
          </div>
        );
      })}
    </div>
  );
}

export default Shoes;
