import React from "react";
import Demo_Vid from "../../Assets/nuridavid.mp4";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Demo_Page.scss";
import ReactPlayer from "react-player";
import Arrow from "../../Assets/Untitled design.mp4";
function Demo_Page() {
  return (
    <div className="demo">
      <div>
        <h3>DEMO</h3>
      </div>
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
