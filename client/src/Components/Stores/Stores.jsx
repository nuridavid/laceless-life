import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/stores";

function Stores() {
  const [store, setStore] = useState(null);
  const useEffect = () => {
    axios
      .get(url)
      .then((res) => setStore(res.data))
      .catch(function (err) {
        console.log(err);
      });
  };
  return <div>Stores page</div>;
}

export default Stores;
