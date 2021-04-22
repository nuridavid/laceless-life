import React from "react";
import axios from "axios";
import "./Shoes.scss";
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
      {shoe?.map((shoe) => {
        return (
          <div className="shoe" key={shoe.id}>
            <h1>{shoe.shoe}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Shoes;
