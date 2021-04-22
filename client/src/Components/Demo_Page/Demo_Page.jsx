import React from "react";
import Demo_Vid from "../../Assets/nuridavid.mp4";
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
          margin: "5rem 0 0 0",
          objectFit: "fill",
        }}
      >
        <source src={Arrow} type="video/mp4" />
      </video>

      <h4 className="demo__h4">more information about the shoes over here</h4>
    </div>
  );
}

export default Demo_Page;
