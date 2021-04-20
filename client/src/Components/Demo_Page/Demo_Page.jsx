import React from "react";
import Demo_Vid from "../../Assets/nuridavid.mp4";
import "./Demo_Page.scss";
import ReactPlayer from "react-player";
function Demo_Page() {
  return (
    <div className="demo">
      <ReactPlayer
        className="video"
        controls
        url={Demo_Vid}
        playing={true}
        width="500px"
        height="500px"
      />
    </div>
  );
}

export default Demo_Page;
