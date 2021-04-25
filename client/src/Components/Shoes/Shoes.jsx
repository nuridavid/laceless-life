import React from "react";
import axios from "axios";
import "./Shoes.scss";
import { Link } from "react";
import shoepic from "../../Assets/adidas shoes.webp";
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
    <>
      <h3 className="container1__header">
        For Every Shoe with Laces Sold, Another Person Trips.
      </h3>
      <div className="container1">
        {shoe?.map((shoe) => {
          return (
            <div className="container1__card" key={shoe.id}>
              <h4>{shoe.shoe}</h4>
              <img src={shoe.img} id={shoe.class} alt="shoe"></img>

              <button className="glow-on-hover">
                <p>Take me to {shoe.shoe}'s website</p>
              </button>

              <button className="glow-on-hover">
                <p>Show me {shoe.shoe} on the map</p>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Shoes;
