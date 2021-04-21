import React from "react";
import Demo_Vid from "../../Assets/nuridavid.mp4";
import "./Demo_Page.scss";
import ReactPlayer from "react-player";
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
        width="500px"
        height="500px"
      />
      <h4>
        If that demo wasn't enough help, check out our awesome laceless shoes!
      </h4>
    </div>
  );
}

export default Demo_Page;
