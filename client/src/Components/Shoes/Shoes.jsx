import React from "react";
import axios from "axios";
import "./Shoes.scss";
import { Link } from "react";

import shoepic from "../../Assets/adidas shoes.webp";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/shoes";
function Shoes({ props, match, history }) {
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setShoe(res.data);
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
            <div
              className="container1__card"
              key={shoe.id}
              onClick={() => {
                history.push(`/shoes/${shoe.id}`);
              }}
            >
              <img
                src={shoe.img}
                id={shoe.class}
                alt={shoe.shoe}
                className="example"
              ></img>
              <div className="shoe__name">
                <h3>{shoe.company}</h3>

                <h5 className="shoe__name-shoe">{shoe.shoe}</h5>
                <h6>{shoe.price}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Shoes;
