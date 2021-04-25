import React from "react";
import axios from "axios";
import ReactMapGL from "react-map-gl";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/stores";

function Stores() {
  const [viewport, setViewport] = useState({
    latitude: 26.372,
    longitude: -80.092,
    zoom: 12,
    height: "100vh",
    width: "100vw",
  });
  // const useEffect = () => {
  //   axios
  //     .get(url)
  //     .then((res) => setStore(res.data))
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // };
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={
        "pk.eyJ1IjoibnVyaWRhdmlkIiwiYSI6ImNrbnhtOGM2aDB0MWUydm95anEzdXZlY2YifQ.3GQlEgjYKYrWYLKaag9Low"
      }
    ></ReactMapGL>
  );
}

export default Stores;
