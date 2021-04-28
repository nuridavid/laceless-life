import React from "react";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import ShoePic from "../../Assets/toms shoes.jpeg";

import "./Shoe.scss";
import { useParams } from "react-router-dom";
import { Link } from "react";
import { useState, useEffect } from "react";
const url = "http://localhost:8080/api/shoes";
function Shoe({ props, match, history }) {
  const { id } = useParams();
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [shoe, setShoe] = useState(null);
  const [shoeId, setShoeId] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 26.146,
    longitude: -80.315,
    zoom: 7,
    height: "40vh",
    width: "100%",
  });
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
  }, [id, shoe]);
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedShoe(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return (
    shoe && (
      <div className="shoe__container">
        <img className="shoe__container-img" src={shoe.img}></img>
        <h3>{shoe.shoe}</h3>

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
          <Marker
            latitude={shoe.coordinates[1]}
            longitude={shoe.coordinates[0]}
          >
            <button
              className="store__marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedShoe(Shoe);
              }}
            >
              <img src={ShoePic} alt="shoe" />
            </button>
          </Marker>
          <div>
            {selectedShoe ? (
              <Popup
                latitude={shoe.coordinates[1]}
                longitude={shoe.coordinates[0]}
                onClose={() => {
                  setSelectedShoe(null);
                }}
              >
                <div>
                  <h2>{shoe.shoe}</h2>
                  <h4>{shoe.location}</h4>
                </div>
              </Popup>
            ) : null}
          </div>
        </ReactMapGL>
      </div>
    )
  );
}

export default Shoe;
