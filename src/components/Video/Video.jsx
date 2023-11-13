import { useEffect, useRef } from "react";
import simpleParallax from "simple-parallax-js";
import "./Video.styles.css";

import Vid from "../../assets/video/FB Celebrations.mp4";

function Video() {
  const videoRef = useRef();
  const videoContainerRef = useRef();

  new simpleParallax(videoRef.current, {
    delay: 1,
    transition: "ease-in",
    orientation: "up",
    scale: 1.2,
    overflow: true,
  });

  return (
    <>
      <div className="container">
        <div ref={videoContainerRef.current} className="video-container">
          <video
            src={Vid}
            autoPlay
            loop
            width="100%"
            typeof="video/mp4"
            muted
            className="thumbnail"
            ref={videoRef}
          ></video>
        </div>
      </div>
    </>
  );
}

export default Video;
