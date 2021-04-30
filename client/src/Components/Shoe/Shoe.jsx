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
  const [viewport, setViewport] = useState({
    latitude: 26.146,
    longitude: -80.315,
    zoom: 7,
    height: "400px",
    width: "100%",
  });
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const [open, setOpen] = useState(false);

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
  }, [id, shoe]);
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
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
        <div className="shoe__container-top">
          <img
            className="shoe__container-img"
            src={shoe.img}
            id={shoe.class}
          ></img>
          <h3>{shoe.company}</h3>
          <h4>{shoe.shoe}</h4>
        </div>
        <div className="info-box">
          <div className="info-box1">
            <h3>Price</h3>
            <h5> {shoe.price}</h5>
          </div>
          <div className="info-box3">
            <h3>Description</h3>
            <h5> {shoe.description}</h5>
          </div>
          <div className="store-info">
            <h1>Store Info</h1>
            <h4 className="store__header">{shoe.stores}</h4>
            <div className="info-box2">
              <h3>Location</h3>
              <h5> {shoe.location}</h5>
            </div>
            <a href={shoe.link}>
              <div className="info-box2">
                <h3>Website</h3>

                <h5> Take me to {shoe.shoe}'s Website</h5>
              </div>
            </a>
            <div className="info-box2">
              <h3>Phone Number</h3>

              <h5> {shoe.phone}</h5>
            </div>
          </div>
        </div>
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
            <button className="store__marker-btn" onClick={() => setOpen(true)}>
              <img src={shoe.img} alt="shoe" />
            </button>
          </Marker>
          <div>
            {open && (
              <Popup
                latitude={shoe.coordinates[1]}
                longitude={shoe.coordinates[0]}
                onClose={() => {
                  setOpen(false);
                }}
              >
                <div className="popup">
                  <h6>
                    {shoe.stores}, {shoe.location}
                  </h6>
                </div>
              </Popup>
            )}
          </div>
        </ReactMapGL>
      </div>
    )
  );
}

export default Shoe;
