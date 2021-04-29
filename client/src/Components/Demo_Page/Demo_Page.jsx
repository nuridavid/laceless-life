import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import a from "../../Assets/Vans.png";
import b from "../../Assets/Toms-parker-slip-on.png";
import c from "../../Assets/Ecco-shoe.png";
import Demo_Vid from "../../Assets/nuridavid.mp4";

import "./Demo_Page.scss";
import ReactPlayer from "react-player";
import Arrow from "../../Assets/Untitled design.mp4";
function Demo_Page() {
  return (
    <div className="demo">
      <ReactPlayer
        className="video"
        controls
        url={Demo_Vid}
        playing={true}
        width="100%"
        height="400px"
      />
      <h4 className="demo__h4">
        If that demo wasn't enough help, check out our awesome laceless shoes!
      </h4>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "300px",
          width: "300px",
          margin: "5rem 0 0 0",
          objectFit: "fill",
        }}
      >
        <source src={Arrow} type="video/mp4" />
      </video>

      <div className="demo__img-container">
        <Link to="/shoes/1">
          <img src={a} alt="Vans-picture" className="demo__img" />
        </Link>
        <Link to="/shoes/3">
          <img src={b} alt="Toms-picture" className="demo__img" />
        </Link>
        <Link to="/shoes/9">
          <img src={c} alt="Ecco-picture" className="demo__img" />
        </Link>
      </div>
      <Link to="/shoes">
        <button type="button" className="demo__button">
          See All Shoes
        </button>
      </Link>

      <Jumbotron className="demo__jumbo">
        <h1>Stores Near You</h1>

        <p>Find stores Near you that have laceless shoes</p>

        <Link to="/stores">
          <button type="button" className="demo__button">
            Find Stores
          </button>
        </Link>
      </Jumbotron>
    </div>
  );
}

export default Demo_Page;
