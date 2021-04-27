import React from "react";
import "./Stores.scss";
import axios from "axios";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Shoe from "../../Assets/toms shoes.jpeg";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/stores";

function Stores() {
  const [viewport, setViewport] = useState({
    latitude: 26.146,
    longitude: -80.315,
    zoom: 8,
    height: "100vh",
    width: "100vw",
  });

  const [selectedStore, setSelectedStore] = useState(null);
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
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedStore(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
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
          return (
            <div>
              <Marker
                key={store.id}
                latitude={store.coordinates[1]}
                longitude={store.coordinates[0]}
              >
                <button
                  className="store__marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedStore(store);
                  }}
                >
                  <img src={Shoe} alt="shoe store icon" />
                </button>
              </Marker>
              <div>
                {selectedStore ? (
                  <Popup
                    latitude={store.coordinates[1]}
                    longitude={store.coordinates[0]}
                    key={store.id}
                    onClose={() => {
                      setSelectedStore(null);
                    }}
                  >
                    <div>
                      <h2>{store.store}</h2>
                      <h4>{store.location}</h4>
                    </div>
                  </Popup>
                ) : null}
              </div>
            </div>
          );
        })}
      </ReactMapGL>
    </div>
  );
}

export default Stores;
