import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/stores";
function Shoes() {
  const [shoe, setShoe] = useState(null);
  // useEffect = () => {
  //   axios
  //     .get(url)
  //     .then((res) => setShoe(res.data))
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // };
  return <div>Shoes page</div>;
}

export default Shoes;
