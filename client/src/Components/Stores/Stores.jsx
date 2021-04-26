import React from "react";
import "./Stores.scss";
import axios from "axios";
import ReactMapGL, { Marker } from "react-map-gl";
import Shoe from "../../Assets/toms shoes.jpeg";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/stores";

function Stores() {
  const [viewport, setViewport] = useState({
    latitude: 26.146,
    longitude: -80.315,
    zoom: 15,
    height: "100vh",
    width: "100vw",
  });
  const [store, setStore] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setStore(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibnVyaWRhdmlkIiwiYSI6ImNrbnhtOGM2aDB0MWUydm95anEzdXZlY2YifQ.3GQlEgjYKYrWYLKaag9Low"
        }
        mapStyle="mapbox://styles/nuridavid/ckny3gab03ori17pasqb4ydks"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {store?.map((store) => {
          <Marker
            key={store.id}
            latitude={store.coordinates[1]}
            latitude={store.coordinates[0]}
          >
            <button>
              <img src={Shoe} alt="shoe" />
            </button>
          </Marker>;
        })}
      </ReactMapGL>
    </div>
  );
}

export default Stores;
