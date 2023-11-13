import React from "react";
import "./Footprints.styles.css";

import footprints from "../../assets/img/footprints-gif.gif";
import { useInView } from "react-intersection-observer";

function Footprints() {
  const { ref: footprintTitleRef, inView: footprintTitleInView } = useInView();

  return (
    <section className="footprints">
      <div className="footprints-container">
        <div
          ref={footprintTitleRef}
          className={`footprints-title ${
            footprintTitleInView ? "visible" : ""
          }`}
        >
          <h2>Our</h2>
          <h3>Footprint</h3>
        </div>
        <div className="footprints-gif">
          <img src={footprints} alt="Footprints" />
        </div>
      </div>
    </section>
  );
}

export default Footprints;
