import React from "react";
import axios from "axios";
import "./Shoe.scss";
import { useParams } from "react-router-dom";
import { Link } from "react";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/shoes";
function Shoe({ history }) {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const [shoeId, setShoeId] = useState(null);
  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setShoe(res.data);
        if (id) {
          return setShoeId(id);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [id]);
  return (
    shoe && (
      <div className="container1">
        <div>
          <img src={shoe.img} alt></img>
          <h3>{shoe.shoe}</h3>
        </div>
      </div>
    )
  );
}

export default Shoe;
